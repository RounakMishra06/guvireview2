import React from "react";
import { Menu } from "semantic-ui-react";
import Link from "next/link";

const Header = () => {
  //use https://react.semantic-ui.com/collections/menu/#types-secondary
  return (
    //for style use double curly braces
    <Menu style={{ marginTop: "10px" }}>
      <Link href="/">
        <a className="item">CrowdCoin</a>
      </Link>
      <Menu.Menu position="right">
        <Link href="/">
          <a className="item">Campaigns</a>
        </Link>

        <Link href="/campaigns/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;