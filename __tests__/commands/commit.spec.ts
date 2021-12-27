import mock from 'mock-fs';
import { existsSync } from 'fs'
import { Arguments } from 'yargs';
import { Options, handler } from '../../src/commands/commit';

describe('commit command', () => {
    beforeEach(() => {
        mock({
            'README.md': 'readme'
        })
    })

    afterEach(mock.restore)

    it('handler', async () => {
        // Setup process.exit mock
        const realProcess = process;
        const exitMock = jest.fn<ReturnType<typeof process.exit>, Parameters<typeof process.exit>>();
        global.process = { ...realProcess, exit: exitMock };

        //@ts-ignore
        const argv: Arguments<Options> = {

        };
        await handler(argv);

        expect(existsSync(`${process.cwd()}/.git/objects/fd/71afe161529fa7027546d226be15b474362937`)).toBeTruthy()
        // successful exit
        expect(exitMock).toHaveBeenCalledWith(0);
        global.process = realProcess;
    })
})
