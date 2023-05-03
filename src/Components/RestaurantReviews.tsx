import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../Context/RestaurantsContext";
import StarRating from "./StarRating";
import RestaurantFinder from "../Apis/baseUrl";
import { IReviews } from "../Interfaces/restaurantInterface";

interface IRestaurantReviewsProps {
  reviews: IReviews;
}
const RestaurantReviews = ({ reviews }: IRestaurantReviewsProps) => {
  const { id } = useParams();
  const {
    reviews: savedReview,
    setReviews,
    addReview,
  } = useContext(RestaurantsContext);

  useEffect(() => {
    const allRestaurantData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        addReview(id, response.data.data.reviews);
        setReviews(response.data.data.reviews);
      } catch (err) {
        console.log(err);
      }
    };
    allRestaurantData();
  }, [id, setReviews, addReview]);

  const handleDelete = async (id: string | undefined) => {
    try {
      const response = await RestaurantFinder.delete(`/deleteReview/${id}`);
      console.log(response);
      setReviews(
        savedReview.filter((review: IReviews) => {
          return review.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='row row-cols-3 mb-2'>
      {/* ií use savedReview to render the reciew in the ui */}
      {/* {reviews.map((review) => {} */}
      {savedReview.map((review) => {
        return (
          <div
            key={review?.id}
            className='card text-white bg-primary my-3 me-4'
            style={{ maxWidth: "30%" }}
          >
            <div className='card-header d-flex justify-content-between'>
              <span>{review?.name}</span>
              <span>
                <StarRating rating={parseInt(review?.rating)} />
              </span>
            </div>
            <div className='card-body'>
              <p className='card-text'>{review?.review}</p>
            </div>
            <button
              onClick={() => handleDelete(review?.id)}
              className='btn btn-danger'
            >
              Delete
            </button>
            {/* <i className='far fa-trash-alt'></i>

            </button> */}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantReviews;
