import React from "react";

const Searchbox = (props) => {
return (
    <div>
      <label for="searchbox"><input type="text" name="searchbox" id="searchbox" className="pa2 ma3" placeholder="Search..." onInput={props.onTextChange}/></label>
      
    </div>
);
}

export default Searchbox;