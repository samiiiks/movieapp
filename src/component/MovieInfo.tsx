import React from 'react'

// type info = {
//   homepage: string;
//   id: number;
//   imdb_id: string;
//   original_language: string;
//   original_title: string;
//   overview: string;
//   popularity: number;
//   poster_path: string | null;
// }

// const MovieInfo = () => {
//   return (
//    <div>
//      <div className="App">
//       <div>
//           <div className="card" style={{ marginLeft: "100px" ,display:'flex'}}>
//             <span
//               className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//               style={{ left: "80%" }}
            
//             ></span>
//             {/* <img src={`http://www.foxmovies.com/movies/fight-club`} /> */}
//             <img
//               src={"https://image.tmdb.org/t/p/w500/" +
//                 logo_path
//               }
//               className="card-img-top"
//               alt="error"
//             />
//             <div className="card-body">
//               <h5 className="card-title">{name}...</h5>
//               <h2>{id}</h2>
//             </div>
//           </div>
//           </div>
//         </div>
//    </div>
//   )
// }

// export default MovieInfo
type MovieInfoProps = {
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
}
function MovieInfo({
  homepage,
  id,
  imdb_id,
  original_language,
  original_title,
  overview,
  popularity,
  poster_path,
}: MovieInfoProps) {
  console.log(poster_path);
  return (
    <div className="App">
      <div>
          <div className="card" style={{ marginLeft: "100px" ,display:'flex'}}>
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ left: "80%" }}
            
            ></span>
            {/* <img src={`http://www.foxmovies.com/movies/fight-club`} /> */}
            <img
              src={"http://www.foxmovies.com/movies/fight-club" +
              poster_path
              }
              className="card-img-top"
              alt="error"
            />
            <div className="card-body">
              <h5 className="card-title">{overview}...</h5>
              <h5 className="card-title">{imdb_id}...</h5>
              <h5 className="card-title">{original_language}...</h5>
              <h5 className="card-title">{popularity}...</h5>
              <h5 className="card-title">{original_title}...</h5>
              <h2>{id}</h2>
            </div>
          </div>
          </div>
        </div>
  )}
  export default MovieInfo







