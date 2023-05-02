export interface IRestaurants {
  id: string;
  name: string;
  location: string;
  price_range: number;
  restaurant_id: string;
  count: number;
  average_rating: number;
}

export interface IReviews {
  id: string;
  restaurant_id: string;
  name: string;
  review: string;
  rating: number;
}

export interface IRestaurantsContext {
  setRestaurants: (restaurants: IRestaurants[]) => void; 
  addRestaurant: (restaurant: IRestaurants) => void;
  setReviews: (reviews: IReviews[]) => void;
  addReview: (review: IReviews) => void;
  restaurants: IRestaurants[];
  reviews: IReviews[];
  selectedRestaurant: any;
  setSelectedRestaurant: any;
}