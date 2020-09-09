import { writable, derived } from "svelte/store";

interface Task {
  id: number;
  label: string;
  done: boolean;
}

interface ListStore {
  [listName: string]: Task[];
}

export const lists = writable<ListStore>({});

export const newList = () => {
  const list = writable<Task[]>([]);
  const { subscribe, set, update } = list;
  const count = derived(list, ($list) => $list.length);

  return {
    count,
    subscribe,
    // Should this be set? Or can it stay update
    add: (task: Task) => update((tasks) => [task, ...tasks]),
    remove: (id: number) => update((tasks) => tasks.filter((t) => t.id !== id)),
    empty: set([])
  };
};
