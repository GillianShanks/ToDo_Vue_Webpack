import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({

    el: "#app",
    data: {
      todos: [
        {name: "Clean dishes", priority: "high"},
        {name: "Make lunch", priority: "high"},
        {name: "Tidy room", priority: "low"}],
      newTodo: "",
      newPriority: "",
      flex: 'flex'
    },
    methods: {
      saveItem: function(){
        if (this.newTodo !== "" && this.newPriority !== ""){
          const newItem = {name: this.newTodo, priority: this.newPriority};
          this.todos.push(newItem);
          this.newTodo = "";
        }

      }
    }

  });


})
