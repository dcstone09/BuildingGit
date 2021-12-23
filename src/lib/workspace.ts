import { readdir, readFile } from 'fs/promises';
import path from 'path';

export default class Workspace {
    public pathName: string;

    private IGNORE = ['.git'];

    constructor(pathName: string) {
        this.pathName = pathName
    }

    async listFiles() {
        const files = await readdir(this.pathName);
        const ignore = new Set(this.IGNORE)
        return files.filter(file => !ignore.has(file));
    }

    async readFile(filePath: string) {
        const data = await readFile(path.resolve(this.pathName, filePath), 'utf8')
        return data
    }
}
