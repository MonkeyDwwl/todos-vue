//定义方法
//添加todo
export function addTodo(state,text){
  state.todos.push({
    text,
    flag:false,
  })
}
//删除指定 的todo
export function removeTodo(state,todo){
  let index = state.todos.findIndex(tt=>tt===todo);
  state.todos.splice(index,1);
}
//切换指定的todo的状态
export function toggleTodo(state,todo){
  let index = state.todos.findIndex(tt=>tt===todo);
  state.todos[index].flag = !state.todos[index].flag;
}
//切换所有todo状态
export function checkAll(state,checked){
  state.todos.forEach(todo =>todo.flag = checked);
}
//清除已完成的todos
export function clearCompleted(state){
  state.todos = state.todos.filter(todo=>!todo.flag);
}

export function setFilter(state,filter){
    state.filter = filter;
}
export function doneEdit(state,{todo,txt}){
    let index = state.todos.findIndex(tt=>tt===todo);
    state.todos[index].text = txt;
}
