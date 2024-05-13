import Dexie, { type Table } from "dexie";
import type { DbTask } from "./task";


export class MySubClassedDexie extends Dexie {
  tasks!: Table<DbTask>;

  constructor() {
    super("todo");
    this.version(1).stores({
      tasks: "++id", 
    });
  }
}

export const db = new MySubClassedDexie();