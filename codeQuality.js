// level {1/2/3}
async function GET_DATA() {
  let todos = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await todos.json();
  return data;
}
