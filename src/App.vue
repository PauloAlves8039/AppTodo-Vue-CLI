<template>
  <div class="" id="app">
    <dir class="container grid-xs py-2">
      <img class="img-responsive img-logo" src="@/assets/logo.png" alt="Logomarca da aplicação">
      <br>
      <form @submit.prevent="addTodo(todo)">
        <div class="input-group">
          <input type="text" v-model="todo.description" class="form-input" placeholder="Novo todo">
          <button class="btn btn-primary">Adicionar</button>
        </div>
        {{ todos }}
      </form>      
    </dir>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return { todos: [], todo: { checked: false } }
  },
  methods: {
    addTodo(todo){
      todo.id = Date.now()
      this.todos.push(todo)
    }
  },
}
</script>

<style scoped>
  .img-logo{
    max-width: 200px;
    margin: 0 auto;
  }
</style>