import fs from 'fs/promises';
import { Arguments } from 'yargs';
import { Options, handler } from '../../src/commands/init';

jest.mock('fs/promises')

describe('init command', () => {
    it('handler', async () => {
        // Setup process mock
        const realProcess = process;
        const exitMock = jest.fn<ReturnType<typeof process.exit>, Parameters<typeof process.exit>>();
        const cwdMock = jest.fn<ReturnType<typeof process.cwd>, Parameters<typeof process.cwd>>();
        cwdMock.mockReturnValueOnce('/hello')
        global.process = { ...realProcess, exit: exitMock, cwd: cwdMock };

        //@ts-ignore
        const argv: Arguments<Options> = {

        };
        await handler(argv);

        // create directories
        expect(fs.mkdir).toHaveBeenCalledTimes(2);
        expect(fs.mkdir).toHaveBeenCalledWith(`/hello/.git/objects`, { "recursive": true });
        expect(fs.mkdir).toHaveBeenCalledWith(`/hello/.git/refs`, { "recursive": true });

        // successful exit
        expect(exitMock).toHaveBeenCalledWith(0);
        global.process = realProcess;
    })
})
