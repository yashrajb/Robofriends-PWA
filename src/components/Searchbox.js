import React from "react";

const Searchbox = (props) => {
return (
    <div>
      <input type="text" className="pa2 ma3" placeholder="Search..." onInput={props.onTextChange}/>
    </div>
);
}

export default Searchbox;