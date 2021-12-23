export default class Blob {
    public type = 'blob'
    public data;

    /**
     * Blob of data
     */
    constructor(data: string) {
        this.data = data;
    }

    get size() {
        return Buffer.byteLength(this.data, 'utf8');
    }
}