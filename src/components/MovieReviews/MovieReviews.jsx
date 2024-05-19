import { useEffect, useState } from "react";
import fetchReviewsById from "../service/reviewsAPI";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviewDetails, setReviewDetails] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getReviwsDetails = async () => {
      try {
        const data = await fetchReviewsById(movieId);
        setReviewDetails(() => [...data.results]);
        console.log(data);
        // console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getReviwsDetails();
  }, [movieId]);
  return (
    <ul>
      {reviewDetails &&
        reviewDetails.map((detail) => (
          <li key={detail.id}>
            <h3>{detail.author}</h3>
            <p>{detail.content}</p>
          </li>
        ))}
    </ul>
  );
};

export default MovieReviews;
