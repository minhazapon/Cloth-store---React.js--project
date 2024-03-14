

import { useState } from 'react'
import './App.css'
import Cloths from './Cloths'
import Title from './Title'
import Titletwo from './Titletwo'


function App() {



    const [titleOne, setTitle] = useState([])


    const handleCloth = kapor => {

        const newTtile = [...titleOne, kapor ]

        setTitle(newTtile)

    }

 

  return (
    <>
      
      

      <h1 className=' text-center font-bold text-5xl mt-10 text-blue-500'>React clothing store</h1>

       <hr className=' mt-10'></hr>


       <div className=' flex gap-96 justify-center ml-10 mr-10 flex-col md: flex-row lg:flex-row  '>

       <Cloths handleCloth={handleCloth}  ></Cloths>
       <Title  titleOne={titleOne}  ></Title>

       </div>


      
     
    </>
  )
}

export default App
