export function taskManager() {
  // Tu código aquí 👈
  let map = new Map();
  // console.log(map);
  function addTask(task, tags){
    task = task.toLowerCase();
    if (map.has(task)) {
      const existingTags = map.get(task);
      console.log(existingTags);
      tags.forEach((tag) => existingTags.add(tag));
    } else {
      const newTags = new Set(tags);
      map.set(task, newTags);
    }
  };

  function printTasks() {
    return map
  };



  return { addTask, printTasks };
  
};

export function taskManager() {
  const tasks = new Map();

  return {
    addTask(task, tags) {
      task = task.toLowerCase();
      if (tasks.has(task)) {
        const existingTags = tasks.get(task);
        tags.forEach((tag) => existingTags.add(tag));
      } else {
        const newTags = new Set(tags);
        tasks.set(task, newTags);
      }
    },

    printTasks() {
      return tasks;
    },
  };
}