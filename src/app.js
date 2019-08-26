import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({

    el: "#app",
    data: {
      todos: [{name: "Clean dishes", priority: "High"}, {name: "Make lunch", priority: "High"}, {name: "Tidy room", priority: "Low"}],
      newTodo: "",
      newPriority: ""
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
