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
}

async function saveTodos() { }


