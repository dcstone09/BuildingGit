import path from 'path';
import fs from 'fs/promises';

import type { Arguments, CommandBuilder } from 'yargs';

export type Options = {
  directory?: string;
};

export const command = 'init <directory>';
export const desc = 'Initialize the repository';

export const builder: CommandBuilder<Options, Options> = yargs =>
  yargs
    .positional('directory', { type: 'string' });

export const handler = async (argv: Arguments<Options>): Promise<void> => {
  const { directory = '' } = argv;

  const gitPath = path.resolve(process.cwd(), directory, '.git');

  ['objects', 'refs'].forEach(async dir => {
    try {
      await fs.mkdir(path.resolve(gitPath, dir), { recursive: true })
    } catch (err) {
      process.stderr.write(`fatal: ${err.message}`)
      process.exit(1);
    }
  })

  process.stdout.write(`Initialized empty repository in ${gitPath}`);
  process.exit(0);
};
