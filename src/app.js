import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({

    el: "#app",
    data: {
      todos: ["Clean dishes", "Make lunch", "Tidy room"],
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
