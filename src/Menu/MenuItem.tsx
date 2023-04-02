import React from "react";
import "./Menu.css"

interface Props {
  menuData: any
}

const MenuItem = ({ menuData }: Props) => {
  return (
    <>
      <div className="section-center">
        {menuData.map((menuItem : any) => {
            return (
              <article key={menuItem.id} className="menu-item">
                <img src={menuItem.img} alt="food-img" className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{menuItem.title}</h4>
                    <h4 className="price">{menuItem.price}</h4>
                  </header>
                  <p className="item-text">{menuItem.desc}</p>
                </div>
              </article>
            )
          })}
      </div>
    </>
  );
};

export default MenuItem;
