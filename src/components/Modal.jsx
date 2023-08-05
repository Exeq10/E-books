

import Rating from "./Base/Rating"
import { useEffect,useContext } from "react";
import { BooksContext } from "./context/BooksProvider";


function Modal({result,setResult}) {


  const {selectFavorite} = useContext(BooksContext)


const { cover,title,rate,ISBN,synopsis} = result[0].book
  
  


  
  return (
    <div className='w-3/12  fixed z-20 right-0  top-0 flex justify-center items-center'>


    <i className="fa-solid fa-bookmark " onClick={()=>setResult('')} ></i>


    <div className="  flex flex-col w-52  gap-2 rounded-md  bg-white shadow-md  group hover:bg-gray-100  hover:overflow-hidden ">
      <div className="relative">
        <picture>
          <img
             src={cover} 
            
            className=" h-72 drop-shadow-lg w-full rounded-md mx-auto  group-hover:scale-105 duration-300 "
          />
        </picture>
      </div>
   
      <div>
        <p className="text-center font-medium mt-2 text-black ">{title} </p>
      </div>

         <Rating rate={Math.floor(rate)}/> 



         <p className="text-gray-500 truncate px-2">{synopsis}</p>

      <div className="flex mb-3">
      <button
        className="mt-4 w-5/12 mx-auto  rounded-md bg-white border border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white duration-150 ease-in px-3 py-1"
        
      >
        Ver{" "}
      </button>

        {/* seleccionar favorito */}
      <button
      title="Cerrar Modal"
        className="mt-4 w-5/12 mx-auto  rounded-md bg-white  text-red-700 border border-red-700 hover:bg-red-700 hover:text-white duration-300 ease-in px-3 py-1"
         onClick={() => setResult('')} 
      >
        <i className="fa-solid fa-xmark"></i>{" "}
      </button>
      </div>
    </div>




    {/* crear la carta en base al resultado adquirido   que se le pasa por props  
    
        - darle un icono al modal para cerrar 
        - darle un efecto fixed y un parallax al body si esta presente el modal 
    
    
    */}




    </div>
  )
}

export default Modal