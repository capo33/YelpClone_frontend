import { createContext, useState } from "react";
// import {
//   IRestaurants,
//   IRestaurantsContext,
//   IReviews,
// } from "../Interfaces/restaurantInterface";

export interface IRestaurants {
  id: number;
  name: string;
  location: string;
  price_range: number;
  restaurant_id: string;
  count: number;
  average_rating: number;
}

export interface IReviews {
  id?: string;
  name: string;
  review: string;
  rating: string;
}

export interface IRestaurantsContext {
  setRestaurants: (restaurants: IRestaurants[]) => void;
  addRestaurant: (restaurant: IRestaurants) => void;
  setReviews: (reviews: IReviews[]) => void;
  addReview: (id: string | undefined, review: IReviews) => void;
  restaurants: IRestaurants[];
  reviews: IReviews[];
  selectedRestaurant: any;
  setSelectedRestaurant: any;
}

type RestaurantsContextProps = {
  children: React.ReactNode;
};
export const RestaurantsContext = createContext<IRestaurantsContext>({
  restaurants: [],
  setRestaurants: () => {},
  addRestaurant: () => {},
  selectedRestaurant: {},
  setSelectedRestaurant: () => {},
  reviews: [],
  setReviews: () => {},
  addReview: () => {},
});

export const RestaurantsContextProvider = ({
  children,
}: RestaurantsContextProps) => {
  const [restaurants, setRestaurants] = useState<IRestaurants[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState();
  const [reviews, setReviews] = useState<IReviews[]>([]);

  const addRestaurant = (restaurant: IRestaurants) => {
    setRestaurants([...restaurants, restaurant]);
  };

  const addReview = (id: string | undefined, review: IReviews) => {
    setReviews([...reviews, review]);
  };

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        setRestaurants,
        addRestaurant,
        selectedRestaurant,
        setSelectedRestaurant,
        reviews,
        setReviews,
        addReview,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
