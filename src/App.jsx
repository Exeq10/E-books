
import { createBrowserRouter,RouterProvider } from "react-router-dom";

import BooksProvider from "./components/context/BooksProvider";
import Container from "./Container";
import ListFavorites from "./components/ListFavorites";
import Categoria from "./components/Categoria";
import Layout from "./components/Base/Layout";
import { ToastContainer } from "react-toastify";

/* css de toastify */
import 'react-toastify/dist/ReactToastify.css'
import AddBook from "./components/Base/AddBook";





function App() {

 
  const router = createBrowserRouter([


    {
      path : '/',
      element : <Layout/>,
      children:[

        {
          path:'/',
          element: <Container/>,
          index:true
        
        },

        {
          path :'/favoritos',
          element:<ListFavorites/>
        },
    
        {path:'/:categoria',
        element:<Categoria/>
    
        },
    
        {path:'/agregar',
        element:<AddBook/>
    
        }
      ]
    },

    

  ])


 



  return (
    <BooksProvider>


      <ToastContainer/>

   
      <RouterProvider   router={router} />
    
    </BooksProvider>
     
  );
}

export default App;
