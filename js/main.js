const app = new Vue({
  el: "#app",
  data: {
    newTodo: {
      text: "",
      tag: "",
    },
    todos: [],
    tags: ["Urgente", "Posticipabile", "Non urgente"],
  },

  methods: {
    addTodo() {
      if (this.newTodo.text.trim() !== "") {
        this.todos.push({
          done: false,
          text: this.newTodo.text,
          tag: this.newTodo.tag,
        });
      }
      this.newTodo.text = "";
      this.newTodo.tag = "";
    },

    removeTodo(index) {
      if (this.todos[index] !== undefined) this.todos.splice(index, 1);
    },

    getClass(index) {
      let my_class = "";

      if (index % 2 !== 0) my_class += "bg-light ";

      if (index === 0) my_class += "rounded-top ";
      else my_class += "border-top-0 ";

      if (index === this.todos.length - 1) my_class += "rounded-bottom ";

      return my_class;
    },

    getTagColor(tag) {
      switch (tag) {
        case "Urgente": {
          return "bg-danger";
        }
        case "Posticipabile": {
          return "bg-warning";
        }
        case "Non urgente": {
          return "bg-primary";
        }

        default: {
          return "bg-ligth";
        }
      }
    },
  },
});
