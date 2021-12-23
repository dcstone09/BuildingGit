import { readdir, readFile } from 'fs/promises';
import path from 'path';

/**
 * Workspace of repository
 */
export default class Workspace {
    public pathName: string;

    private IGNORE = ['.git'];

    constructor(pathName: string) {
        this.pathName = pathName
    }

    /**
     * List all the files in the workspace that are not part of the repository
     */
    async listFiles() {
        const files = await readdir(this.pathName);
        const ignore = new Set(this.IGNORE)
        return files.filter(file => !ignore.has(file));
    }

    /**
     * Read the content of the file
     */
    async readFile(filePath: string) {
        const data = await readFile(path.resolve(this.pathName, filePath), 'utf8')
        return data
    }
}
