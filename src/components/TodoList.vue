<template>
  <section class="main" style="">
    <input type="checkbox" class="toggle-all" :checked='allDone' @click="checkAll($event.target.checked)">
      <ul class="todo-list">
        <Todo v-for="(todo ,index) in filterTodos" :key="index" :todo="todo"></Todo>
      </ul>
  </section>
</template>
<script>
import Todo from './Todo'
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'

export default {
  components:{
    Todo,
  },
  computed:{
    ...mapGetters([
      'filterTodos',
      'allDone'
    ])
  },
  methods:{
    ...mapMutations([
      'checkAll'
    ])
  }
}
</script>
<style lang="css" scoped>
</style>
