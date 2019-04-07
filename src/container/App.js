import React from "react";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import {connect} from "react-redux";
import {changeSearchField,requestRobots} from "../actions";

class App extends React.Component {

 constructor(props){
   super();
 }

 componentWillMount(){
   this.props.onRequest();
 }

render(){
const filteredRobots = this.props.robots.filter((user) => {
return user.name.toLowerCase().includes(this.props.searchField.toLowerCase());
})
return (
<div className="tc">
<h1>Robofriends</h1>
<Searchbox onTextChange={this.props.onTextChange}/>
<Scroll>
   <CardList robots={filteredRobots}/>
</Scroll>

</div>
)
                                                
  }

}

const mapStateToProps = (state) => {
  return {
   searchField:state.search.searchfield,
   error:state.request.error,
   robots:state.request.robots,
   pending:state.request.pending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTextChange:(event) => dispatch(changeSearchField(event.target.value)),
    onRequest:(event) => dispatch(requestRobots(dispatch))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);