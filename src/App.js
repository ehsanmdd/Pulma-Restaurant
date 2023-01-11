import React, {useState} from 'react';

import './App.css';
import data from "./data"
import Menu from './Menu/Menu';
import Categories from "./Menu/Categories"

const allCategories =  ["all" ,...new Set(data.map(data => data.category))]

function App() {
  const [menuData , setMenuData] = useState(data)
  const [categories , setCategories] = useState(allCategories)
  
  console.log(allCategories)

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories}/>
        <Menu menuData={menuData}/>
      </section>
    </main>
  );
}

export default App;
