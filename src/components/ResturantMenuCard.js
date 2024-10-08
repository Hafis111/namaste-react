import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenuCard";

const RestaurantMenuCard = () => {
  const { resId } = useParams();

  //   const params = useParams();
  //   console.log(params.resId);
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return console.log("null card");

  const { name, cuisines, costForTwoMessage, areaName } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h4>{areaName}</h4>

      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>

      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {"Rs.  "}
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}
            /-
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenuCard;
