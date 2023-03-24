import React from 'react'
import styled from "styled-components";
// import '../component/common/SignupForm/SignupForm.css'


type MovieCardProps = {
  name?: string;
  logo_path?: string;
  genres?: string;
  id?: string
  poster_path?: string
}
function MovieCard({
  name,
  logo_path,
  id,
}: MovieCardProps) {
  console.log(logo_path);
  return (
    <div className="App">
           <br></br><br />
      <div>
          <div className="card" style={{ marginLeft: "200px" ,display:'flex'}}>
            <h2>Production companies</h2>
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ left: "80%" }}
            
            ></span>
            {/* <img src={`http://www.foxmovies.com/movies/fight-club`} /> */}
            <img
              src={"https://image.tmdb.org/t/p/w500/" +
                logo_path
              }
              className="card-img-top"
              alt="error"
            />
            <div className="card-body">
              <h5 className="card-title">{name}...</h5>
              <h2>{id}</h2>
            </div>
          </div>
          </div>
        </div>
  
      )
}

      export default MovieCard
