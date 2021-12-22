import { Arguments } from 'yargs';
import { Options, handler } from '../../src/commands/commit';

jest.mock('fs/promises')

describe('commit command', () => {
    it('handler', async () => {
        // Setup process.exit mock
        const realProcess = process;
        const exitMock = jest.fn<ReturnType<typeof process.exit>, Parameters<typeof process.exit>>();
        global.process = { ...realProcess, exit: exitMock };

        //@ts-ignore
        const argv: Arguments<Options> = {

        };
        await handler(argv);

        // successful exit
        expect(exitMock).toHaveBeenCalledWith(0);
        global.process = realProcess;
    })
})
