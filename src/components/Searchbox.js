import React from "react";

const Searchbox = (props) => {
return (
    <div>
      <label for="searchbox"></label>
      <input type="text" name="searchbox" id="searchbox" className="pa2 ma3" placeholder="Search..." onInput={props.onTextChange}/>
      
    </div>
);
}

export default Searchbox;