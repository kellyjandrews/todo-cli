import { Command, flags } from '@oclif/command'
import { getTodos, deleteTodos } from '../helpers'
import { prompt } from 'prompts'

export default class Delete extends Command {
  static description = 'Delete a todo.'

  static examples = [
    `$ todo delete
`,
  ]

  static strict = false

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [
    { name: "todos", hidden: true }
  ]

  async run() {

    let todos = await getTodos(this.config.dataDir)

    let choices = todos.map((todo: any, index: any) => {
      return { title: todo, value: index };
    })

    const response = await prompt([
      {
        type: 'multiselect',
        name: 'todos',
        message: "Pick todos",
        choices
      }
    ]);

    let deleteIndex = response.todos.reverse();
    for (let i = 0; i < deleteIndex.length; i++) {
      todos.splice(deleteIndex[i], 1);
    }


    deleteTodos(this.config.dataDir, todos)
    let plural = deleteIndex.length > 1 ? 's' : '';
    this.log(`${deleteIndex.length} todo${plural} removed.`)



  }
}