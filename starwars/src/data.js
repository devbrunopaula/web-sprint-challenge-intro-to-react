import axios from 'axios'


const filterData = (data) => {

   const characters = axios.get('https://rickandmortyapi.com/api/character')
   const todos = axios.get('https://jsonplaceholder.typicode.com/todos')
   const users = axios.get('https://jsonplaceholder.typicode.com/users')
  
   return Promise.all([characters, todos, users]).then((values) => {
      console.log(values);
    });


}

   export default filterData