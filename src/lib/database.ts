import Blob from "./blob";

export default class Database {
    public pathName: string;

    constructor(pathName: string) {
        this.pathName = pathName;
    }

    public store(object: Blob) {
        const encoded = ''
        const content = ''
        const oid = ''

        this.writeObject(oid)
    }

    private writeObject(oid: string, content: string) {

    }
}