import React from 'react';
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import State from './components/usestate';
import Things from './components/thingsarray'
import InfoCard from './components/toogle/infocard'
import Box from './components/boxchanglles/box'
import Boxes from './components/boxchanglles/boxes'
import Form from './components/FormHandlingReact/form'
import PraticseForm from './components/FormHandlingReact/praticseform'
import WindowTracker from './components/WindowTracker/WindowTracker'

function App() {
  const [box, setBox] = React.useState(Boxes)

  function toggle_bg(id){
    setBox(prevSetBox => {
      return prevSetBox.map((box) => {
        return box.id === id ? {...box, on:!box.on} : box
      })
    })

    /*setBox(prevSetBox => {
          const newBox = []
          for(let i = 0; i < prevSetBox.length; i++){
            const currentBox = prevSetBox[i]
            if (currentBox.id === id) {
              const updateBox = {
                ...currentBox,
                on : !currentBox.on
              }
              newBox.push(updateBox)
            }else{
              newBox.push(currentBox)
            }

          }
          return newBox
        })*/
  }

  const squareElements = box.map(items => (
    <Box 
        key={items.id}
        on={items.on}
        onHandle={() => toggle_bg(items.id)} 
        
      />
  ))
  
  /* window tracker */

  const [show, setShow] = React.useState(true)
    
    function toggle() {
        setShow(prevShow => !prevShow)
    }
  
  return (
    <div className="App">
      <Header />
      <Meme />
      {/*<State />
      <Things />
      <InfoCard />
      // box chanllenge dynamic styling
      <section className='box--challenges'>{squareElements}</section>
      <Form />
      <PraticseForm />

      <div className="container">
            <button onClick={toggle}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </div>*/}
    </div>
  );
}

export default App;
