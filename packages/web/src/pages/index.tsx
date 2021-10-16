import React from "react";
import { Button } from "shared";
import Router from "next/router";
const Index = () => {
  const handleClick = () => {
    Router.push("/next-page");
  };
  return (
    <div className="titleWrapper">
      <div className="textStyle">Welcome to Versett</div>
      <Button onClick={handleClick} buttonType="next">
        Next page
      </Button>
    </div>
  );
};
export default Index;
