import React,{useState,useEffect} from "react";
import api from './services/api'


import Header from './components/Header/Header'
import "./styles.css";
import headerBG from './assets/header_bg.jpg'

function App() {
  
  const [repositories,setRepositories] = useState([])
  
  useEffect( ()=> {
    api.get('repositories').then(response => {
      setRepositories(response.data)
      console.log(response)
    })
  }
  ,[])

  async function handleAddRepository() {
    const response =  await api.post('repositories',{
                      title: `Repositório ${repositories.length}`,
                      url: "https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-conceitos-nodeJs",
                      techs: "js, nodeJs, git",
                      })
    const newRepository = response.data
    setRepositories([...repositories, newRepository])
    console.log(repositories)
  }
    

  async function handleRemoveRepository(id) {
    await api.delete(`repositories/${id}`)
    const indexRepository = repositories.findIndex(repository => repository.id === id)
    setRepositories(repositories.filter( repository => repository.id !== id))
  }

  return (
    
    <div className='container'>
      <Header />
      <div id="img" style={{backgroundImage:`url(${headerBG})`}}></div>
      <ul data-testid="repository-list">

      {repositories.map(repository => (
        <li className='item' key={repository.id}>
          <p>{repository.title}</p>
          <button onClick={() => handleRemoveRepository(repository.id)}>Remover</button>
        </li>
      ))}
        

      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
