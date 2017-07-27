//计算属性
export function filterTodos(state) {
    switch(state.filter){
      case 'all':
        return state.todos;
      case "active":
        return state.todos.filter(todo=>!todo.flag);
      case "completed":
        return state.todos.filter(todo=>todo.flag);
    }
}
export function allDone(state){
  return state.todos.every(todo=>todo.flag);
}
export function itemLeft(state){
  return state.todos.filter(todo=>!todo.flag).length;
}
export function completed(state){
  return state.todos.filter(todo=>todo.flag).length;
}
