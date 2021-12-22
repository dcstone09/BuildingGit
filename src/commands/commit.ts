import type { Arguments, CommandBuilder } from 'yargs';

export type Options = { };

export const command = 'init <directory>';
export const desc = 'Initialize the repository';

export const builder: CommandBuilder<Options, Options> = yargs => yargs

export const handler = async (argv: Arguments<Options>): Promise<void> => {
  const { } = argv;

  process.exit(0);
};
