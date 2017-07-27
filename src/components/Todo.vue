<template>
  <li class="todo" :class="{editing:edit}">
    <div class="view">
      <input type="checkbox" class="toggle"
        :checked="todo.flag" @click="toggleTodo(todo)"
      >
      <label @dblclick="edit=true">{{todo.text}}</label>
      <button class="destroy" @click="removeTodo(todo)"></button>
    </div>
    <input type="text" class="edit" :value="todo.text" v-show="edit"
      @keyup.enter="editTodo(todo,$event)"
      @blur = "editTodo(todo,$event)"
    >
  </li>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  props:{
    todo:{
      type:Object,
      required : true
    }
  },
  methods:{
    ...mapMutations([
      'removeTodo',
      'toggleTodo',
      'doneEdit'
    ]),
    editTodo(todo,e){
      this.doneEdit({todo,txt:e.target.value});
      this.edit = false;
    }
  },
  data(){
    return {
      edit:false,
    }
  },

}
</script>
<style lang="css" scoped>
</style>
