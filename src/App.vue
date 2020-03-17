<template>
  <div class="" id="app">
    <dir class="container grid-xs py-2">
      <img class="img-responsive img-logo" src="@/assets/logo.png" alt="Logomarca da aplicação">
      <br>
      <form>
        <div class="input-group">
          <input type="text" class="form-input" placeholder="Novo todo">
          <button class="btn btn-primary">Adicionar</button>
        </div>
      </form>
    </dir>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style scoped>
  .img-logo{
    max-width: 200px;
    margin: 0 auto;
  }
</style>