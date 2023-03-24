import { useAppDispatch, useAppSelector } from "../store/Store";
import { GetPosts } from "../store/slice/PostSlice";
import { useEffect } from "react";
import MovieCard from "../MovieCard";

type MovieCardProps = {
  name?: string;
  logo_path?: string;
  id?: string
};
const HomePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const postData = useAppSelector((state: any) => state.post.post);
  return (
    <div>
      {postData.data.production_companies && postData.data.production_companies.map((element: MovieCardProps, index: any) => {
        return (  
          <div key={index}>
            <MovieCard   
                  name={element.name ? element.name.slice(0, 40) : ""}
                  logo_path={element.logo_path}
                  id ={element.id}
                  />
          </div>
        )
      })}
    </div>
    
  )
}

export default HomePage
