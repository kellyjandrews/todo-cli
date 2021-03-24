import { Command, flags } from '@oclif/command'
import { getTodos, saveTodos } from '../helpers';




export default class List extends Command {
    static description = 'Display or add a new todo.'

    static examples = [
        `$ todo list
Todo Item 1
Todo Item 2
`,
    ]

    static strict = false

    static flags = {
        help: flags.help({ char: 'h' }),
    }

    async run() {
        const { argv } = this.parse(List)
        let todos = await getTodos(this.config.dataDir)
        todos.forEach((todo: any) => {
            this.log(todo)
        });

    }
}