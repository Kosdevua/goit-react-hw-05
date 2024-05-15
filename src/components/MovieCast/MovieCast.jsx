import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchCastById from "../service/castAPI";

const MovieCast = () => {
  const { movieId } = useParams();
  const [castDetails, setCastDetails] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getCastDetails = async () => {
      try {
        const data = await fetchCastById(movieId);
        setCastDetails(data);
        console.log(data);
        // console.log(data);
      } catch (error) {
        setError(error.message);
      }
      getCastDetails;
    };
    getCastDetails();
  }, [movieId]);
  console.log("castDetails: ", castDetails);
  console.log("typrOf:", typeof castDetails.cast);
  //   console.log("{ castDetails }", { castDetails });

  return (
    <div>qwertyu</div>
    // <ul>
    //   <li>
    //     {castDetails &&
    //       castDetails.map((detail) => (
    //         <>
    //           <div key={detail.id}>
    //             <p>{detail.original_name}</p>
    //             <img src={detail.profile_path} alt="" />
    //           </div>
    //         </>
    //       ))}
    //     {/* <p>{castDetails.original_name}</p> */}
    //   </li>
    //   {/* <li>{castDetails && castDetails.vote_average}</li> */}
    // </ul>
  );
};

export default MovieCast;
