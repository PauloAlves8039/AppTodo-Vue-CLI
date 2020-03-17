<template>
  <div class="" id="app">
    <dir class="container grid-xs py-2">
      <img class="img-responsive img-logo" src="@/assets/logo.png" alt="Logomarca da aplicação">
      <br>
      <form @submit.prevent="addTodo(todo)">
        <div class="input-group">
          <input type="text" v-model="todo.description" class="form-input" placeholder="Novo todo">
          <button class="btn btn-primary input-group-btn">Adicionar</button>
        </div>
      </form>
      <div class="todo-list">
        <todo v-for="t in todos" :key="t.id" :todo="t" />
      </div>     
    </dir>
  </div>
</template>

<script>
import Todo from "./components/Todo"

export default {
  name: 'App',
  components: { Todo },
  data(){
    return { todos: [], todo: { checked: false } }
  },
  methods: {
    addTodo(todo){
      todo.id = Date.now()
      this.todos.push(todo)
      this.todo = { checked: false }
    }
  },
}
</script>

<style scoped>
  .img-logo{
    max-width: 200px;
    margin: 0 auto;
  }
  .todo-list{
    padding-top: 2rem;
  }
</style>