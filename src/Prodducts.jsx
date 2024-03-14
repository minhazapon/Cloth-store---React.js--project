



const Prodducts = ({kapor, handleCloth}) => {

       const {price, description, category, image} = kapor

    return (
        <div className=" ">
            
            
            <div className="card w-96 bg-base-100 shadow-xl mt-5 ">
            <figure className="px-10 pt-10">
              <img src={image} alt="Shoes" className="rounded-xl h-[300px] w-[500px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-bold text-violet-600">{category}</h2>
              <p className=" text-xl text-slate-500 ">{description}</p>
              <p className=" text-xl font-bold text-slate-500">${price}</p>
              <div className="card-actions">
                <button onClick={ () => handleCloth(kapor) } className="btn btn-primary w-[300px] text-xl font-bold">Title</button>
              </div>
            </div>
            </div>


        </div>
    );
};

export default Prodducts;