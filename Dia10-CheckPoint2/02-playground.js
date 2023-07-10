export function createTaskPlanner() {
  // Empezamos con un array vacío
  // aquí almacenaremos las tareas
  let tasks = [];

  // retornamos las funciones 
  // que servirán para manipular el array
  return {
    // La función de agregar tareas debe recibir una tarea
    addTask(task) {
      // Por lógica al añadir una nueva tarea inicia sin estar completada
      task.completed = false;
      // Una vez modificada la enviamos al array
      tasks.push(task);
    },

    //  Ahora la función para remover tareas
    removeTask(value) {
       // Dependiendo si el valor es un número o un string
      if (typeof value === "number") {
        // Si es un número, filtramos todas las tareas que no tengan el mismo valor
        //  y luego lo reasignamos al array de tareas
        tasks = tasks.filter((task) => task.id !== value);
      } else {
        // En caso de ser un string, hacemos lo mismo pero con la propiedad de .name
        tasks = tasks.filter((task) => task.name !== value);
      }
    },

    // Para obtener las tareas simplemente las retornamos
    getTasks() {
      return tasks;
    },

     // Para obtener las tareas pendientes o completadas simplemente las filtramos
    // y retornamos el resultado
    getPendingTasks() {
      return tasks.filter((task) => !task.completed);
    },

    getCompletedTasks() {
      return tasks.filter((task) => task.completed);
    },

    // Para marcar una tarea dependiendo el valor recibido
    markTaskAsCompleted(value) {
      // primero declaramos la variable de index
      // la cual tendrá el indice de la posición del elemento
      let index;

     // buscamos el indice dependiendo el valor
      if (typeof value === "number") {
        // buscamos por index dependiendo si es por id
        index = tasks.findIndex((task) => task.id === value);
      } else {
        // O por name
        index = tasks.findIndex((task) => task.name === value);
      }

      // Al final con ese indice modificamos la propiedad de completed a true
      tasks[index].completed = true;
    },

    getSortedTasksByPriority() {
      // Para ordenar las tareas sin modificar el array original
     // solamente hacemos una copia del array y ejecutamos sort sobre este
      const sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority);
      // Al final lo retornamos
      return sortedTasks;
    },

    filterTasksByTag(tag) {
      // Filtramos las tareas que incluyan cierto tag
      return tasks.filter((task) => task.tags.includes(tag));
    },

    updateTask(taskId, updates) {
     
      // obtenemos el id como lo hicimos previamente
      const index = tasks.findIndex((task) => task.id === taskId);
      // agregamos las propiedades extras destructurando ambos objetos
      tasks[index] = { ...tasks[index], ...updates };
    },
  };
}