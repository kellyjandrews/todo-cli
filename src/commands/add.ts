import { Command, flags } from '@oclif/command'
import { getTodos, saveTodos } from '../helpers';




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
    let argCount = argv.length

    if (argCount === 0) {
      this.error("Please provide todos.")
    } else {
      saveTodos(this.config.dataDir, argv)
      let plural = argCount > 1 ? 's' : '';
      this.log(`${argCount} new todo${plural} created.`)
    }
  }
}