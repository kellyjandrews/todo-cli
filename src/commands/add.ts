import { Command, flags } from '@oclif/command'
import * as fs from 'fs-extra'
import * as path from 'path'

async function isExists(path: any) {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
};


export default class Add extends Command {
  static description = 'Display or add a new todo.'

  static examples = [
    `$ todo "Task1" "Task2"
2 new todos created.
`,
  ]

  static strict = false

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  async run() {
    const { argv } = this.parse(Add)
    let todoFilePath = path.join(this.config.dataDir, 'todos.txt')
    let exist = await isExists(this.config.dataDir);

    if (!exist) {
      await fs.mkdir(this.config.dataDir)
      await fs.writeFile(todoFilePath, null);
    }

    let rawdata = await fs.readFile(todoFilePath, "utf-8")
    let todos = rawdata.split(",")
    let argCount = argv.length

    if (argCount != 0) {

      for (let i = 0; i < argCount; i++) {
        todos.push(argv[i])
      }

      await fs.writeFile(todoFilePath, todos);
      let plural = argCount > 1 ? 's' : '';

      this.log(`${argCount} new todo${plural} created.`)

    } else {

      for (let i = 0; i < todos.length; i++) {
        this.log(todos[i])
      }

    }
  }
}