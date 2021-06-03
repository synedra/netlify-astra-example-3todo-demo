
const getDocTodos = async () => {
  console.log('%cGetting Doc Todos', 'color: blue; font-family: arial; font-weight: bold; font-size: large');
  console.log('%c    DOC: GET /api/rest/v2/namespaces/todos/collections/doc', 'color: blue; font-family: arial');
  
  const response = await fetch(`/.netlify/functions/getDocTodos`);
  let todos = await response.json()
  console.log('%cResponse from Getting Doc Todos', 'color: blue; font-family: arial')
  console.table(todos)
  return todos.length ? todos : [];
};

const createDocTodo = async (todo) => {
  console.clear();
  
  console.log('%cCreating a new Doc Todo', 'color: blue; font-size: large; font-weight: bold');
  console.log(todo)
  const response = await fetch("/.netlify/functions/createDocTodo", {
    body: JSON.stringify(todo),
    method: "POST",
  });
  console.log("Response from 'Creating a new Doc Todo'")
  console.table(response)
  return response.json();
};

const updateDocTodo = async (todo) => {
  console.clear();
  
  console.log('%cUpdating an existing Doc Todo', 'color: blue; font-size: large; font-weight: bold');
  console.log(todo)

  let response = await fetch("/.netlify/functions/updateDocTodo", {
    body: JSON.stringify(todo),
    method: "PUT",
  });
  response = response.json();
  console.log('%cResponse from updating an existing Doc Todo:', 'color: blue; font-size: large');
  console.table (response);
  
  return response.json();
};

const deleteDocTodo = async (id) => {
  console.clear();
  
  console.log('%cDeleting a Doc Todo', 'color: blue; font-size: large; font-weight: bold')
  console.log('%c    REST DELETE /api/rest/v2/namespaces/todos/rest/{id}', 'color: blue; font-family: arial')

  const response = await fetch("/.netlify/functions/deleteDocTodo", {
    body: JSON.stringify({ id }),
    method: "POST",
  });
  console.log('%cResponse from deleting an existing Doc Todo:', 'color: blue; font-size: large');
  console.table (response.json());
  
  return response.json();
};

const getGQTodos = async () => {
  let body = `
  GQ POST Body: data: {
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
  console.log('%cGetting GQ Todos', 'color: red; font-family: arial; font-weight: bold; font-size: large');
  console.log('%c    GQ: POST /api/graphql/todos', 'color: red; font-family: arial')
  console.log('%c    ' + body, 'color: red; font-family: arial')
  const response = await fetch(`/.netlify/functions/getGQTodos`);
  let todos = await response.json()
  console.log('%cResponse from Getting GQ todos:', 'color: red; font-family: arial')
  console.table(todos)
  return todos.length ? todos : [];
};

const deleteGQTodo = async (id) => {
  console.clear();
  console.log('%cDeleting a GQ Todo', 'color: red; font-size: large; font-weight: bold')
  console.log('%c    GQ POST /api/graphql/todos', 'color: red; font-family: arial')
  let body = `
  GQ POST Body: data: {
    query: 'mutation deletegraphql {
          graphql: deletegraphql(value: {
             id: "${id}"
          }) {value { text } }}`
  console.log('%c    ' + body, 'color: red; font-family: arial')
  
  const response = await fetch("/.netlify/functions/deleteGQTodo", {
    body: JSON.stringify({ id }),
    method: "POST",
  });
  console.log('%cResponse from deleting an existing GQ Todo:', 'color: red; font-size: large');
  let responsejson = await response.json();
  console.table (responsejson);
  
  return responsejson;
};

const updateGQTodo = async (todo) => {
  console.clear();
  
  console.log('%cUpdating an existing GQ Todo', 'color: red; font-size: large; font-weight: bold');
  console.log(todo)

  let response = await fetch("/.netlify/functions/updateGQTodo", {
    body: JSON.stringify(todo),
    method: "PUT",
  });
  console.log('%cResponse from updating an existing GQ Todo:', 'color: red; font-size: large');
  let responsejson = await response.json()
  console.table (responsejson);
  
  return responsejson;
};

const getRestTodos = async () => {
  console.log('%cGetting Rest Todos', 'color: green; font-family: arial; font-weight: bold; font-size: large');
  console.log('%c    REST: GET /api/rest/v2/keyspaces/todos/rest?where={"key":{"$eq":"rest"}', 'color: green; font-family: arial');
  const response = await fetch(`/.netlify/functions/getRestTodos`);
  let todos = await response.json();
  console.log('%cResponse from Getting Rest Todos', 'color: green; font-family: arial');
  
  console.table(todos)
  return todos.length ? todos : [];
};

const addGQTodo = async (todo) => {
  console.clear();
  
  console.log('%cAdding GQ Todo', 'color: red; font-family: arial; font-weight: bold; font-size: large');
  console.log('%c    GQ: POST /api/graphql/todos', 'color: red; font-family: arial')
  let body = `mutation insertgraphql {
    graphql: insertgraphql(value: {
      id: "${todo.id}",
        completed: false,
        text: "${todo.text}",
        key: "graphql"
  }) {value { text } }}`;
  console.log('%c ' + body, 'color: red; font-family: arial')

  const response = await fetch("/.netlify/functions/createGQTodo", {
    body: JSON.stringify(todo),
    method: "POST",
  });
  console.log('%cResponse from Adding GQ Todo', 'color: green; font-family: arial');
  
  let responsejson = response.json()
  console.table(responsejson)
 
  return responsejson;
};

const addRestTodo = async (todo) => {
  console.clear();
  
  console.log('%cAdding Rest Todo', 'color: green; font-family: arial; font-weight: bold; font-size: large');
  console.log('%c    REST POST /api/rest/v2/keyspaces/todos/rest/', 'color: green; font-family: arial')

  const response = await fetch("/.netlify/functions/createRestTodo", {
    body: JSON.stringify(todo),
    method: "POST",
  });
  console.log('%cResponse from Adding REST Todo', 'color: green; font-family: arial');
  
  console.table(response.json())

  return response.json();
};

const updateRestTodo = async (todo) => {
  console.clear();
  
  console.log('%cUpdating Rest Todo', 'color: green; font-family: arial; font-weight: bold; font-size: large');
  console.log('%c    REST PUT /api/rest/v2/keyspaces/todos/rest/{todo.id}', 'color: green; font-family: arial')

  const response = await fetch("/.netlify/functions/updateRestTodo", {
    body: JSON.stringify(todo),
    method: "PUT",
  });
  console.log('%cResponse from Updating REST Todo', 'color: green; font-family: arial');
  
  console.table(response.json())

  return response.json();
};

const deleteRestTodo = async (id) => {
  console.clear();
  
  console.log('%Deleting Rest Todo', 'color: green; font-family: arial; font-weight: bold; font-size: bold');
  console.log('%c    REST DELETE /api/rest/v2/keyspaces/todos/rest/{todo.id}', 'color: green; font-family: arial')

  const response = await fetch("/.netlify/functions/deleteRestTodo", {
    body: JSON.stringify({ id }),
    method: "POST",
  });
  console.log('%cResponse from Deleting REST Todo', 'color: green; font-family: arial');
  
  console.table(response.json())

  return response.json();
};


const default_export = {
  getDocTodos,
  getGQTodos,
  addGQTodo,
  updateGQTodo,
  deleteGQTodo,
  createDocTodo,
  deleteDocTodo,
  updateDocTodo,
  getRestTodos,
  addRestTodo,
  deleteRestTodo,
  updateRestTodo
};
export default default_export;
