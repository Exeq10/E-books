import { useContext, useState, useEffect } from "react";
import { BooksContext } from "./context/BooksProvider";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCards} from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import'swiper/css/effect-cards'

import CardBook from "./CardBook";

function RatedBooks({init,end}) {
  const [recomended, setRecomended] = useState(0);

  const { books } = useContext(BooksContext);

  useEffect(() => {
    /* filtro por lo de mayor rate  */
    let ratest = books?.filter((book) => book.book.rate > 4);

    /* los primeros tres resultados  */
    setRecomended(ratest.slice(init, end));
  }, [books]);



  const renderingRate = () => {


    if(recomended.length > 0) {
      return recomended.map((book, key) => (
        <SwiperSlide   key={key}><CardBook  book={book}   /></SwiperSlide>
       
        
        
      ))
      
    }else{

      return  <p className="text-center">Error de carga </p>
    }

  
  }

  return (
    <div className="w-2/12 mx-auto">


      

<Swiper  
modules={[EffectCards]}
effect="cards"
      spaceBetween={50}
      slidesPerView={1}
      
    >
      
      {renderingRate()}
      
    </Swiper>
      

    </div>
  );
}

export default RatedBooks;
