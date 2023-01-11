import React, { useState } from "react";

const Categories = ({ categories, setMenu }) => {

  const [mainCategory , setMainCategory] = useState("all")

  return (
    <div className="btn-container">
      {categories.map((item, index) => (
        <button
          key={index}
          type="button"
          // highlight class  for highlight main category
          className={item === mainCategory ? "filter-btn highlight" : "filter-btn"}
          onClick={() => 
            {setMainCategory(item)
            setMenu(item)
          }}
        >{item}</button>
      ))};
    </div>
  );
};

export default Categories;
