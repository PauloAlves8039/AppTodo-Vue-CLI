<template>
  <div class="" id="app">
    <div class="container grid-lg">
      <header class="navbar">
        <section class="navbar-section">
          <router-link to="/" class="btn btn-link">Home</router-link>
          <router-link to="/Kanban" class="btn btn-link">Kanban</router-link>
        </section>
        <section class="navbar-center">
          <img class="img-responsive img-logo" src="@/assets/logo.png" alt="Logomarca da aplicação">
        </section>
        <section class="navbar-section">
          <a href="https://www.linkedin.com/in/paulo-alves3486" target="blank" class="btn btn-link">Linkedin</a>
          <a href="https://github.com/PauloAlves8039" target="blank" class="btn btn-link">GitHub</a>
        </section>
      </header>
      <router-view class="pt-2" />
    </div>
  </div>
</template>

<style scoped>
  .img-logo{
    max-width: 120px;
  }
</style>