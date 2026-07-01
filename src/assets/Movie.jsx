import React from 'react'

 function Movie(props) {
  return (

   <div className='Movie-Cards'>
    <img src={props.image} alt={props.title} ></img>
         <div className="details">

   <h3>{props.title}</h3>
    <p>Year : {props.year}</p>
    <p>Rating : {props.rating}</p>
   </div>
   
   </div> 

  );
}
export default Movie