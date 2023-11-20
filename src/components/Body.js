import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";
import React from "react";

const Body = () => {
  //Local State Variable
  const [listofRestaurants, setListofRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredList);
            setListofRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-containers">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
