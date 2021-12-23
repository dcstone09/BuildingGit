import Tree from '../../src/lib/tree';

describe('Tree', () => {
    it('creates instance', () => {
        const tree = new Tree()

        expect(tree).toBeInstanceOf(Tree)
    })
})