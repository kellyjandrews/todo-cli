import * as fs from 'fs-extra'
import * as path from 'path'

const fileName = "todos.json"

async function isExists(path: any) {
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
}

function getPath(dir: string) {
    return path.join(dir, fileName);
}

export async function checkForTodosFile(filePath: string) {
    let todoFilePath = getPath(filePath);

    let exist = await isExists(filePath);
    if (!exist) {
        await fs.mkdir(filePath)
    }

    exist = await isExists(todoFilePath)
    if (!exist) {
        await fs.writeFile(todoFilePath, JSON.stringify({ todos: [] }));
    }
}

export async function getTodos(filePath: string) {
    let todoFilePath = getPath(filePath);
    let data = await fs.readFile(todoFilePath, "utf8")
    return JSON.parse(data).todos
}

export async function saveTodos(filePath: string, data: string[]) {
    let todoFilePath = getPath(filePath)
    let oldTodos = await getTodos(filePath)
    let newTodos = oldTodos.concat(data);
    await fs.writeFile(todoFilePath, JSON.stringify({ todos: newTodos }));
}


