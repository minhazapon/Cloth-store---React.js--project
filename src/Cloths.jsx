import { useEffect } from "react";
import { useState } from "react";
import Prodducts from "./Prodducts";




const Cloths = ({handleCloth}) => {
   

       const [kapor, setKapor] = useState([])

       useEffect(() => {

        fetch('cloth.json')
        .then(res => res.json())
        .then(data => setKapor(data))


       }  , [])

     


    return (
        <div>
            

            
               <h1 className=" text-4xl font-bold mt-10 text-violet-600"> allCloths: {kapor.length} </h1>

                                       
               {
                 
                 kapor.map(kapor => <Prodducts  key={kapor.id} kapor={kapor}
                    
                    handleCloth={handleCloth}
                    
                    ></Prodducts>  )



               }
                 





        </div>
    );
};

export default Cloths;