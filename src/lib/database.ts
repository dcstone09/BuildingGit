import crypto from 'crypto'
import path from 'path'
import { mkdir, rename, writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import { deflate } from 'zlib'
import Blob from "./blob"

export default class Database {
    public pathName: string;

    /**
     * Database for objects
     */
    constructor(pathName: string) {
        this.pathName = pathName;
    }

    /**
     * Store a blob to the repository database
     */
    public async store(object: Blob) {
        const shasum = crypto.createHash('sha1')

        const content = `${object.type} ${object.data}\0${object.data}`
        shasum.update(content)
        const oid = shasum.digest('hex')

        await this.writeObject(oid, content)
    }

    private async writeObject(oid: string, content: string) {
        const objectPath = path.resolve(this.pathName, oid.slice(0, 2), oid.slice(2, oid.length))
        const dirName = path.dirname(objectPath)
        const tempPath = path.resolve(dirName, this.generateTempName())

        if (!existsSync(dirName)) {
            await mkdir(dirName, { recursive: true });
        }

        deflate(content, async (err, data) => {
            await writeFile(tempPath, data, { flag: "w" })
            await rename(tempPath, objectPath)
        })   
    }

    private generateTempName() {
        const name = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        return `temp_obj_${name}`;
    }
}
