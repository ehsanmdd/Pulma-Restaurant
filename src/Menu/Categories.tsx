import React, { useState } from "react";


interface Props {
  setMenu : (category: any) => void;
  categories : string[]
 }

function Categories ({ categories, setMenu } : Props)  {

  const [mainCategory , setMainCategory] = useState("all")

  return (
    <div className="btn-container">
      {categories.map((item: any, index : number) => (
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
