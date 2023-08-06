import React from "react";
import "./searchItem.css";
const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance"></span>
        <span className="siTaxiOp">500m from center</span>
        <span className="siSubtitle">Free airport taxi</span>
        <span className="siFeatures">
          Entire studio . 1 bathroom . 21m^2 1 full bed
        </span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button className="">8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123 </span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <br></br>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};
export default SearchItem;
