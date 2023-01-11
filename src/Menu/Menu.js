import React, {useState} from 'react';

import data from "./data"
import MenuItem from './MenuItem';
import Categories from "./Categories"

const allCategories =  ["all" ,...new Set(data.map(data => data.category))]

function Menu() {
  const [menuData , setMenuData] = useState(data)
  const [categories , setCategories] = useState(allCategories)

  const setMenu = (category) => {
    if (category === "all") {
      setMenuData(data)
      return 
    }

    let filterMenu = data.filter(menuItem => menuItem.category === category)
    setMenuData(filterMenu) 

  }
  

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} setMenu={setMenu}/>
        <MenuItem menuData={menuData}/>
      </section>
    </main>
  );
}

export default Menu