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
* [`todo add`](#todo-add)
* [`todo delete`](#todo-delete)
* [`todo help [COMMAND]`](#todo-help-command)
* [`todo list`](#todo-list)

## `todo add`

Display or add a new todo.

```
USAGE
  $ todo add

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ todo "Task1" "Task2"
  2 new todos created.
```

_See code: [src/commands/add.ts](https://github.com/kellyjandrews/todo-cli/blob/v1.0.0/src/commands/add.ts)_

## `todo delete`

Delete a todo.

```
USAGE
  $ todo delete

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ todo delete
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

## `todo list`

Display or add a new todo.

```
USAGE
  $ todo list

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ todo list
  Todo Item 1
  Todo Item 2
```

_See code: [src/commands/list.ts](https://github.com/kellyjandrews/todo-cli/blob/v1.0.0/src/commands/list.ts)_
<!-- commandsstop -->
