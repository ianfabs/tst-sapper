import { writable, derived, Writable } from "svelte/store";

interface Task {
  id: number;
  label: string;
  done: boolean;
}

interface ListStore {
  label: string;
  tasks: Writable<Task[]>;
}

export const lists = () => {
  const __lists = writable<ListStore[]>([]);
  const { subscribe, set, update } = __lists;

  return {
    subscribe,
    get: (name: string) => __lists[name],
    add: (name: string, list: any) => {
      update((l) => ({
        ...l,
        ...{ [name]: list }
      }));
    },
    remove: (name: string) => {
      update((l) => {
        delete l[name];
        return l;
      });
    },
    empty: () => set([])
  };
};

export const listsStore = lists();

export const list = (name: string) => {
  const __list = writable<Task[]>([]);
  const { subscribe, set, update } = __list;

  const count = derived(__list, ($list) => $list.length);

  const l = {
    count,
    subscribe,
    // Should this be set? Or can it stay update
    add: (task: Task) => update((tasks) => [task, ...tasks]),
    remove: (id: number) => update((tasks) => tasks.filter((t) => t.id !== id)),
    empty: set([])
  };

  listsStore.add(name, l);

  return l;
};
