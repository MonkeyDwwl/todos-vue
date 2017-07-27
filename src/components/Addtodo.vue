<template>
  <header class="header">
    <h1>todos</h1>
    <input type="text" placeholder="what need to be done?" class="new-todo"
      @keyup.enter = "add"
    >
  </header>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  methods:{
    ...mapMutations([
      'addTodo'
    ]),
    add(e){
      let text = e.target.value.trim();
      if(text){
        this.addTodo(text);
        e.target.value = '';
      }

    }
  }
}
</script>
<style lang="css" scoped>
</style>
