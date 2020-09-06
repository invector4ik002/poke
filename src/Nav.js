import React from 'react';
import './App.css';

function Nav() {
  return (
    <div className="App">
       <header clasName="header">
            <nav className="menu">
                <ul className="menu__list menu__list_style">
                    <a href="#" className="menu__list__link"><li className="menu__list__items menu__list__items_style menu__logo__svg_hover ">Home</li></a> 
                     <div className="wrapper">
                        <form action="">
                            <input type="search" className="menu__list__search"/>
                        </form>
                    </div>                             
                </ul>               
            </nav>
        </header>
    </div>
  );
}

export default Nav;
