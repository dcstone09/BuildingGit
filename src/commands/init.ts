import type { Arguments, CommandBuilder } from 'yargs';

type Options = {
  dir?: string;
};

export const command = 'init <dir>';
export const desc = 'Initialize the repository';

export const builder: CommandBuilder<Options, Options> = yargs =>
  yargs
    .positional('dir', { type: 'string' });

export const handler = (argv: Arguments<Options>): void => {
  const { dir } = argv;
  const directory = `${dir}`;
  process.stdout.write(directory);
  process.exit(0);
};
