import { atom } from "recoil";
import { loadStorage } from "./localStorage/localStrage";

export interface IToDoState {
    [key: string]: ITodo[];
}

export interface ITodo {
    id: number;
    text: string;
}

export const defaultToDos: IToDoState = {
    "To Do": [],
    Doing: [],
    Done: [],
};

export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: loadStorage() ?? defaultToDos,
});
