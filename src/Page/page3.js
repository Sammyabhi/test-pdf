import React from "react";
import Header from "../Components/Header/Header";
import Thankyou from "../Components/ThankYou/Thankyou";

const Page3 = () => {
  // home page of the app
  return (
    <div>
      <div className="heade-area">
        <Header />
      </div>
      <div >
        <Thankyou />
      </div>
    </div>
  );
};
export default Page3;