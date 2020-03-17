<template>
    <div class="tile flex-centered">
        <div class="tile-icon">
            <div>
              <i class="icon icon-time"></i>
            </div>              
          </div>
          <div class="tile-content">
            <div class="tile s-subtitle">{{ todo.description }}</div>
          </div>
          <div class="tile-action">
            <button class="btn btn-link">Concluido</button>
            <button class="btn btn-link">
              <span class="text-error">Remover</span>
            </button>
        </div>          
    </div>
</template>

<script>
export default {
    props: { 
        todo: { type: Object, required: true } 
    }
}
</script>