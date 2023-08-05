import { useContext, useState } from "react";
import { BooksContext } from "./context/BooksProvider";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import {Autoplay} from 'swiper/modules'

// Import Swiper styles
import "swiper/css";
import 'swiper/css/controller'

import Book from "./Book";
import RatedBooks from "./RatedBooks";

function ListBooks({ myRef }) {
  const { books, setLen,filtro,rate} = useContext(BooksContext);

  



  return (
    <main className="w-full flex  flex-col   bg-white mt-10">
      <a ref={myRef}></a>
      <h2 className="text-center  mt-2 mb-24 text-3xl font-bold  text-blue-950   ">
        Títulos Populares
      </h2>

      <div className="flex w-full mb-28">
        <RatedBooks rate={rate} init={0} end={2} />
        <RatedBooks rate={rate} init={3} end={5} />
        <RatedBooks rate={rate} init={5} end={8} />
      </div>

      {/* Lista total de libros  */}

      <div className=" w-full flex flex-wrap gap-5 justify-start  ">
        <div className="flex flex-col gap-2 justify-center items-center p-3">
          <h3 className="text-3xl font-bold mt-2 mb-2 px-5 py-1 rounded-md border-b-2 border-blue-950 bg-blue-950 text-white shadow-lg ">
            Fantasía
          </h3>

          <p className="text-gray-500">
      
            Mostrando <b>{filtro("Fantasía", books)[1]} </b> resultados
          </p>
        </div>
        <div className="w-full flex ">
          <Swiper className="w-full px-2" spaceBetween={10} slidesPerView={5}   autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} modules={[Autoplay]} >
            {filtro("Fantasía", books)}
          </Swiper>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center p-3">
          <h3 className="text-3xl font-bold mt-2 mb-2 px-5 py-1 rounded-md border-b-2 border-blue-950 bg-blue-950 text-white shadow-lg ">
            Ciencia ficción
          </h3>

          <p className="text-gray-500">
            Mostrando <b>{filtro("Ciencia ficción", books)[1]} </b> resultados
          </p>
        </div>
        <div className="w-full flex gap-3">
          <Swiper className="w-full px-2" spaceBetween={10} slidesPerView={5}   autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} modules={[Autoplay]}>
            {filtro("Ciencia ficción", books)}
          </Swiper>
        </div>

       
        <div className="w-full flex gap-3">
          <Swiper className="w-full px-2" spaceBetween={10} slidesPerView={5}   autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} modules={[Autoplay]}>
            {filtro("Zombies", books)}
          </Swiper>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center p-3">
          <h3 className="text-3xl font-bold mt-2 mb-2  px-5 py-1 rounded-md border-b-2 border-blue-950 bg-blue-950 text-white shadow-lg ">
            Terror
          </h3>

          <p className="text-gray-500">
            Mostrando <b>{filtro("Terror", books)[1]} </b> resultados
          </p>
        </div>
        <div className="w-full flex gap-3">
          <Swiper className="w-full px-2" spaceBetween={10} slidesPerView={5}   autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} modules={[Autoplay]}>
            {filtro("Terror", books)}
          </Swiper>
        </div>
      </div>
    </main>
  );
}

export default ListBooks;
