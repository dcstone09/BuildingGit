import Author from '../../src/lib/author';

describe('Author', () => {
    it('creates instance', () => {
        const author = new Author()

        expect(author).toBeInstanceOf(Author)
    })
})
