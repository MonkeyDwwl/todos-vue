<template>
  <section class="todoapp">
    <Addtodo></Addtodo>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </section>
</template>

<script>
import Addtodo from './components/Addtodo'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
  name: 'app',
  components: {
    Addtodo,
    TodoList,
    TodoFooter
  },
}
</script>

<style>
@import "./assets/todo-mvc.css"
</style>
