import React from "react";
import Card from "./Card";

const CardList = (props) => {
  return (
         <div>
            {props.robots.map((user,index) => {
              return <Card key={index} {...props.robots[index]} />
            })}
         </div>
  );
}

export default CardList;