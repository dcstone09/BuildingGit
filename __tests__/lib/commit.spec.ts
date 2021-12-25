import Commit from '../../src/lib/commit';

describe('Commit', () => {
    it('creates instance', () => {
        const commit = new Commit()

        expect(commit).toBeInstanceOf(Commit)
    })
})
