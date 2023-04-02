import React, {useState} from 'react';

import data from "./data"
import MenuItem from './MenuItem';
import Categories from "./Categories"

const allCategories =  ["all" ,...new Set<any[]>(data.map((data:any) => data.category))]

function Menu() {
  const [menuData , setMenuData] = useState(data)
  const [categories] = useState(allCategories)

  const setMenu = (category: string) => {
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
            <h1>Pulma Restuarant</h1>
          <h3>our menu</h3>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} setMenu={setMenu}/>
        <MenuItem menuData={menuData}/>
      </section>
    </main>
  );
}

export default Menu