import React from "react";
import Sneakers1 from "../assets/images/image-product-1.jpg";

const Home = () => {
  return (
    <>
      <section>
        <div className="mt-[100px]">
          <img
            src={Sneakers1}
            alt="sneakers-1"
            className="w-[400px] h-[400px] rounded-md"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
