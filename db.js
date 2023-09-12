export let taskList = ["Помыть кота", "Побрить собаку"];

export function addTask(text) {
    taskList.push(text);
}

export function getMyTasks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(taskList);
        }, 500);
    });
}

export function deleteTask(id) {
    taskList.splice(id, 1);
}
