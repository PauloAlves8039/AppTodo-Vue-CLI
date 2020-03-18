<template>
    <dir class="container grid-xs py-2">
      <form @submit.prevent="addTodo(todo)">
        <div class="input-group">
          <input type="text" v-model="todo.description" class="form-input" placeholder="Novo todo">
          <button class="btn btn-primary input-group-btn" :class="{loading}">Adicionar</button>
        </div>
      </form>
      <div class="todo-list">
        <todo v-for="t in todos" :key="t.id" @toggle="toggleTodo" @remove="removeTodo" :todo="t" />
      </div>     
    </dir>
</template>

<script>
import Todo from "@/components/Todo"

export default {
  name: 'App',
  components: { Todo },
  data(){
    return { todo: { checked: false }}
  },
  computed: {
    todos(){
      return this.$store.state.todos
    },
    loading(){
      return this.$store.state.loading
    }
  },
  methods: {
    async addTodo(todo){
      await this.$store.dispatch('addTodo', todo)
      this.todo = { checked: false }
    },
    toggleTodo(todo){
      this.$store.dispatch('toggleTodo', todo)
    },
    removeTodo(todo){
      this.$store.dispatch('removeTodo', todo)
    }
  },
}
</script>

<style scoped>
  
  .todo-list{
    padding-top: 2rem;
  }
</style>