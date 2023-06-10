import React from "react";
import Thanks_Image from '../../assets/Images/check circleTick.png'
import {Image,Menu} from "semantic-ui-react";
const Thankyou = () => {

  return (
    <>
      <Menu.Item >
      <Image className="image-item" src={Thanks_Image}  circular />
      </Menu.Item>
      <Menu.Item>
     
        Thank you!
        </Menu.Item>
       <Menu.Item >Your response has been submitted.</Menu.Item>
      
    </>
  );
};

export default Thankyou;
