
import { TextField } from '@mui/material';
import { useState } from 'react';
import './App.css';

function App() {

  function handleSubmit ( e ) {
    e.preventDefault();
  }

  function handleChange(e){
    e.preventDefault();
    const {value, id} = e.target
    setCard(prevCard => {
      return({
        ...prevCard,
        [id]: value
      })
    })
  }

  const [card, setCard] = useState({
    name:"",
    description:"",
    url: ""
  })


  return (
    <div className="App">
     <div id="inputs">
       <h1>inputs</h1>
       <form action="" onSubmit={handleSubmit}>
         <TextField
           onChange={handleChange}
           name="name"
           id="name"
           label="name"
           value={card.name}
           variant="standard"
         />
         <TextField
           onChange={handleChange}
           name="description"
           id="description"
           label="description"
           fullWidth
           value={card.description}
           variant="standard"
           multiline={5}
         />
        <TextField
           onChange={handleChange}
           name="name"
           id="name"
           label="name"
           value={card.name}
           variant="standard"
         />
         <TextField
           onChange={handleChange}
           name="type"
           id="type"
           label="type"
           value={card.type}
           variant="standard"
         />
       </form>
     </div>
     <div id="display">
       <h1>display</h1>
       <div id="card-container">
         <h3>{card.name}</h3>
        
         <img id="card-img" src="./images/draw2.jpg" alt="" />
         <h4>[{card.type}]</h4>
         <h4>{card.description}</h4>
       </div>
     </div>
    </div>
  );
}

export default App;
