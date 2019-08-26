import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({

    el: "#app",
    data: {
      todos: [{name: "Clean dishes", priority: "High"}, {name: "Make lunch", priority: "High"}, {name: "Tidy room", priority: "Low"}],
      newTodo: "",
    },
    methods: {
      saveItem: function(){
        this.todos.push(this.newTodo);
        this.newTodo = "";

      }
    }

  });


})
