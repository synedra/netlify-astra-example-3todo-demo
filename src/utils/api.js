const getDocTodos = async () => {
  console.log('%cGetting Doc Todos', 'color: blue; font-family: arial');
  console.log('%c    DOC: GET /api/rest/v2/namespaces/todos/collections/doc', 'color: blue; font-family: arial');
  
  const response = await fetch(`/.netlify/functions/getDocTodos`);
  let todos = await response.json()
  console.log('%cResponse from DOC: GET /api/rest/v2/namespaces/todos/collections/doc', 'color: blue; font-family: arial')
  console.table(todos)
  return todos.length ? todos : [];
};

const createDocTodo = async (todo) => {
  console.log('%cCreating a new Doc Todo', 'color: blue; font-size: large');
  console.log(todo)
  const response = await fetch("/.netlify/functions/createDocTodo", {
    body: JSON.stringify(todo),
    method: "POST",
  });
  console.table(response)
  return response.json();
};

const updateDocTodo = async (todo) => {
  const response = await fetch("/.netlify/functions/updateDocTodo", {
    body: JSON.stringify(todo),
    method: "PUT",
  });
  return response.json();
};

const deleteDocTodo = async (id) => {
  const response = await fetch("/.netlify/functions/deleteDocTodo", {
    body: JSON.stringify({ id }),
    method: "POST",
  });
  return response.json();
};

const getGQTodos = async () => {
  let body = `
  BODY: data: {
    query: 'query GQTodos {
         graphql (value: {key:"graphql"}) {
         values {
         id
         text
         completed
         key
    }
  }
}`
  console.log('%cGetting GQ Todos', 'color: red; font-family: arial');
  console.log('%c    GQ: POST /api/graphql/todos', 'color: red; font-family: arial')
  console.dir(body)
  const response = await fetch(`/.netlify/functions/getGQTodos`);
  let todos = await response.json()
  console.log('%cResponse from JQ: POST /api/graphql/todo', 'color: red; font-family: arial')
  console.table(todos)
  return todos.length ? todos : [];
};

const getRestTodos = async () => {
  console.log('%cGetting Rest Todos', 'color: green; font-family: arial');
  console.log('%c    GQ: GET /api/graphql/todos?where={"key":{"$eq":"rest"}}', 'color: green; font-family: arial');
  const response = await fetch(`/.netlify/functions/getRestTodos`);
  let todos = await response.json();

  console.table(todos)
  return todos.length ? todos : [];
};

const addGQTodo = async (todo) => {
  const response = await fetch("/.netlify/functions/createGQTodo", {
    body: JSON.stringify(todo),
    method: "POST",
  });
  return response.json();
};

const addRestTodo = async (todo) => {
  const response = await fetch("/.netlify/functions/createRestTodo", {
    body: JSON.stringify(todo),
    method: "POST",
  });
  return response.json();
};

const updateRestTodo = async (todo) => {
  const response = await fetch("/.netlify/functions/updateRestTodo", {
    body: JSON.stringify(todo),
    method: "PUT",
  });
  return response.json();
};

const deleteRestTodo = async (id) => {
  const response = await fetch("/.netlify/functions/deleteRestTodo", {
    body: JSON.stringify({ id }),
    method: "POST",
  });
  return response.json();
};


const default_export = {
  getDocTodos,
  getGQTodos,
  addGQTodo,
  createDocTodo,
  deleteDocTodo,
  updateDocTodo,
  getRestTodos,
  addRestTodo,
  deleteRestTodo,
  updateRestTodo
};
export default default_export;
