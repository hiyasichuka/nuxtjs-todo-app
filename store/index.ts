export const state = () => ({ task: [] });

export const mutations = {
  ADD_TASK(state: any, task: any) {
    state.tasks = [{ content: task, done: false }, ...state.tasks];
  },

  REMOVE_TASK(state: any, task: any) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },

  TOGGLE_TASK(state: any, task: any) {
    task.done = !task.done;
  },
};
