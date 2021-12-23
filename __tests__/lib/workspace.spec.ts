import mock from 'mock-fs';
import Workspace from '../../src/lib/workspace';

describe('Workspace', () => {
    beforeEach(() => {
        mock({
            '.git': {},
            'README.md': 'readme'
        })
    })

    afterEach(() => {
        mock.restore()
    })

    it('creates instance', () => {
        const cwd = process.cwd()

        const workspace = new Workspace(cwd)

        expect(workspace).toBeInstanceOf(Workspace)
        expect(workspace.pathName).toEqual(cwd)
    })

    it('listFiles', async () => {
        const cwd = process.cwd()
        const workspace = new Workspace(cwd)

        const files = await workspace.listFiles()

        expect(files).not.toContain('.git')
        expect(files).toContain('README.md')
    })

    it('readFile', async () => {
        const cwd = process.cwd()
        const workspace = new Workspace(cwd)
        const data = await workspace.readFile('README.md')

        expect(data).toEqual('readme')
    })
})
