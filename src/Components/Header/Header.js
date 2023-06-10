import React from "react";
import prodLogo from "../../assets/Images/logo_lexx.png";
import { Menu, Image } from "semantic-ui-react";
/* Component is used as a Header in webapp */
const Header = () => {
  return (
    <>
      <Menu.Item className="lexx-logo">
        <Image src={prodLogo} />
      </Menu.Item>

      <Menu.Item className="text-mid">
        Service Bulletin (SB) to Engineering Instructions (EI)
      </Menu.Item>

      <Menu.Item className="date">
       02 MAY 2023
      </Menu.Item>
    </>
  );
};

export default Header;
