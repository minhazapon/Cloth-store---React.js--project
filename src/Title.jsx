import Titletwo from "./Titletwo";


const Title = ({titleOne}) => {
    return (
        <div>
            

             <h1 className=" text-2xl mt-10 text-violet-600 font-bold"> cloth info:  </h1>


             {

                titleOne.map( titleOne => <Titletwo  key={titleOne.id} titleOne={titleOne} ></Titletwo>  )


             }


        </div>
    );
};

export default Title;