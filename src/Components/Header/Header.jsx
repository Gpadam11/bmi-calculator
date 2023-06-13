import React, { Fragment } from "react";
import bmiImage from './bmi image.png';

const Header = () => {
  return (
    <Fragment>
      <img src={bmiImage} alt="BMI" className="mx-auto" />
      <header className="font-serif text-emerald-800 md:text-4xl sm:text-3xl lg:text-3xl text-center ">
        BMI Calculator
      </header>

    </Fragment>
  );
};

export default Header;
