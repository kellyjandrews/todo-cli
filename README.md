todo-cli
========

A simple todo cli tool.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todo-cli.svg)](https://npmjs.org/package/todo-cli)
[![Downloads/week](https://img.shields.io/npm/dw/todo-cli.svg)](https://npmjs.org/package/todo-cli)
[![License](https://img.shields.io/npm/l/todo-cli.svg)](https://github.com/kellyjandrews/todo-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todo-cli
$ todo COMMAND
running command...
$ todo (-v|--version|version)
todo-cli/1.0.0 linux-x64 node-v12.18.2
$ todo --help [COMMAND]
USAGE
  $ todo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todo `](#todo-)
* [`todo delete [FILE]`](#todo-delete-file)
* [`todo help [COMMAND]`](#todo-help-command)
* [`todo update [FILE]`](#todo-update-file)

## `todo `

describe the command here

```
USAGE
  $ todo

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ todo-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/index.ts](https://github.com/kellyjandrews/todo-cli/blob/v1.0.0/src/commands/index.ts)_

## `todo delete [FILE]`

describe the command here

```
USAGE
  $ todo delete [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/delete.ts](https://github.com/kellyjandrews/todo-cli/blob/v1.0.0/src/commands/delete.ts)_

## `todo help [COMMAND]`

display help for todo

```
USAGE
  $ todo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `todo update [FILE]`

describe the command here

```
USAGE
  $ todo update [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/update.ts](https://github.com/kellyjandrews/todo-cli/blob/v1.0.0/src/commands/update.ts)_
<!-- commandsstop -->
