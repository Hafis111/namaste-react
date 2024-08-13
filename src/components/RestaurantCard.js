const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    // cloudinaryImageId,
    name,
    avgRating,
    costForTwo,
    cuisines,
    deliverTime,
    sla,
  } = resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} stars</h5>
      <h4>{costForTwo} </h4>
      <h4>{sla?.slaString} </h4>
    </div>
  );
};

export default RestaurantCard;
