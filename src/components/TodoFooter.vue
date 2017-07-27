<template>
  <footer class="footer" style="">
    <span class="todo-count"><strong>{{itemLeft}}</strong> items left</span>
    <ul class="filters">
      <li><a href="" @click.prevent="setFilter('all')" :class="{selected : filter=='all'}">all</a></li>
      <li><a href="" @click.prevent="setFilter('active')" :class="{selected : filter=='active'}" >active</a></li>
      <li><a href="" @click.prevent="setFilter('completed')" :class="{selected : filter=='completed'}">completed</a></li>
    </ul>
    <button class="clear-completed" @click="clearCompleted">clear completed</button>
  </footer>
</template>
<script>
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
export default {
  computed:{
    ...mapState(['filter']),
    ...mapGetters([
      'itemLeft','completed'
    ])
  },
  methods: {
    ...mapMutations([
      'clearCompleted',
      'setFilter'
    ])
  }
}
</script>
<style lang="css" scoped>
</style>
