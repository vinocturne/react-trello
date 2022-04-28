import { IToDoState } from "../atoms";

export const STORAGE_NAME = "todo-list";

export const loadStorage = () => {
    const localTodos = localStorage.getItem(STORAGE_NAME);
    if (localTodos) {
        return JSON.parse(localTodos);
    }
    return null;
};

export const saveStorage = (todos: IToDoState) => {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(todos));
};

export const clearStorage = () => {
    localStorage.removeItem(STORAGE_NAME);
};
