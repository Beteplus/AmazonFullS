import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { PiShoppingCart } from "react-icons/pi";

import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <section>
      <div className={classes.header_container}>
        <div className={classes.logo_container}>
          {/* {logo} */}
          <a href="/">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
          </a>
          {/* delivory */}
          <div className={classes.delivery}>
            <span>
              <IoLocationOutline />
            </span>
            <div>
              <p>Deliverd to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        {/* search */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" />
          <IoSearchOutline size={25} />
        </div>
        {/* right side */}
        <div className={classes.order_container}>
          <a href="" className={classes.language}>
            <img
              src="https://w7.pngwing.com/pngs/362/84/png-transparent-flag-of-the-united-states-flag-protocol-flag-of-the-united-kingdom-american-flag-clip-angle-flag-text-thumbnail.png"
              alt=""
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </a>
          <a href="">
           
              <p>Sign In</p>
              <p>Account & Lists</p>
           
          </a>
          {/* orders */}
          <a href="">
            <p>Returns</p>
            <span>& orders</span>
          </a>
          {/* cart */}
          <a href="" className={classes.cart}>
            <PiShoppingCart size={35} />
            <span>0</span>
          </a>
        </div>
      </div>
      <LowerHeader/>
    </section>
  );
}

export default Header;
