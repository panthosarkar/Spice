import React from "react";

const Products = ({ data }) => {
  return (
    <div>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-md-4" key={index}> 
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={item.recipe.image} alt="card_image" /> 
              <div className="card-body">
                <center>
                  <h5 className="card-title">{item.recipe.label}</h5> 
                  <p className="card-text">
                    Total amount of calories:{Math.round(item.recipe.calories)} 
                  </p>
                  <a href="/" className="btn btn-primary">
                    Buy
                  </a>
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products; // Removed the parentheses here
