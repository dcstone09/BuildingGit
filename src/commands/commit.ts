import path from 'path';
import type { Arguments, CommandBuilder } from 'yargs';
import Database from '../lib/database';
import Workspace from '../lib/workspace';
import Blob from '../lib/blob';
import Entry from '../lib/entry';
import Tree from '../lib/tree';

export type Options = { };

export const command = 'commit';
export const desc = 'Make a commit to the repository';

export const builder: CommandBuilder<Options, Options> = yargs => yargs

export const handler = async (argv: Arguments<Options>): Promise<void> => {
  const { } = argv;

  const cwd = process.cwd();
  const dbPath = path.resolve(cwd, '.git', 'objects')

  const workspace = new Workspace(cwd)
  const database = new Database(dbPath)

  const files = await workspace.listFiles()

  const entries = [];
  for (const path of files) {
    const data = await workspace.readFile(path)
    const blob = new Blob(data)

    await database.store(blob)

    const entry = new Entry(path, blob.oid);

    entries.push(entry)
  }

  const tree = new Tree(entries);

  await database.store(tree)

  process.exit(0);
};
