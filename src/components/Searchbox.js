import React from "react";

const Searchbox = (props) => {
return (
    <div>
      <input type="text" aria-label="search box" name="searchbox" id="searchbox" className="pa2 ma3" placeholder="Search..." onInput={props.onTextChange}/>
    </div>
);
}

export default Searchbox;