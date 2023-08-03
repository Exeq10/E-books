
function Rating({rate}) {

    const starFull = [...Array(5)]





    console.log(starFull);

    

   

  return (
    <div className='flex justify-center items-center gap-1'>{
        
        
        starFull.map((star,index) => {


            
            return   index < rate ? <i className="fa-solid fa-star text-yellow-500"></i> : <i class="fa-regular fa-star text-yellow-500"></i>
                
            
           
        })
        }</div>
  )
}

export default Rating