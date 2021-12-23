import Blob from '../../src/lib/blob';

describe('Blob', () => {
    it('creates instance', () => {
        const data = 'data';

        const blob = new Blob(data)

        expect(blob).toBeInstanceOf(Blob)

        expect(blob.data).toEqual('data')
    })
})
