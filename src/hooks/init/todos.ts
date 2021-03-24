import { Hook } from '@oclif/config'
import { checkForTodosFile } from '../../helpers'

const hook: Hook<'init'> = async function (opts) {
  await checkForTodosFile(this.config.dataDir)
}

export default hook
