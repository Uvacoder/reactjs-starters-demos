//   React Js is an open source view library created and maintained by Facebook.
//  It's a great tool to render the User Interface (UI) of modern web applications.
// React uses a syntax extension of Javascript called JSX that allows you to write HTML directly with Javascript.

const JSX = ( <
  div > {
    " "
  } <
  h1 > Hello JSX < /h1>{" "} < /
  div >
);

// 2 add comments in react js
const JSX = ( <
  div > {
    " "
  } {
    /**Valid comment */
  } <
  h1 > This is a block of Jsx < /h1> <
  p > Here 's a subtitle </p> < /
  div >
);

// const TypesOfFruits = ()=>{
//   return(

//       <div>
//         <h2>Fruits: </h2>
//          <ul>
//            <li>Apples</li>
//            <li>Blueberries</li>
//            <li>Bananas</li>
//          </ul>
//       </div>

//   );
// }

// const Fruits = ()=>{
//   return(
//     <div>
//       {/**render typesoffruit here*/}
//       <TypesOfFruits/>
//     </div>
//   )
// }
// class TypesOfFood extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//       <div>
//         <h1>These are types of food:</h1>
//         <Fruits/>
//         </div>
//     )
//   }
// }

//  Using props
// const CurrentDate = (props)=>{
//   return(
//     <div>
//       <p>The current date is : {props.date}</p>
//     </div>
//   )
// };

// class Calender extends React.Component {
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//       <div>
//         <h1>This is the current Date:</h1>
//         <CurrentDate date= {Date()}/>
//       </div>
//     )
//   }
// }

//****Pass an array as a prop *******
// const ChildComponent = (props) => {
//   return (
//     <div>
//       <p>{props.colors.join(",")}</p>
//     </div>
//   );
// };

// ReactDOM.render(
//   <ChildComponent colors={["red,green,yellow"]} />,
//   document.querySelector("#render-here")
// );

// const List = (props)=>{
//   return(
//     <div>
//       <p>{props.tasks.join(",")}</p>
//     </div>
//   )
// }

// class Tasks extends React.Component {
//   constructor(props){
//     super(props)
//   }
//     render(){
//       return(
//         <div>
//           <h2>Tasks for today</h2>
//           <List tasks={["dog walk, beach"]}/>
//           <h2>Tomorrow:</h2>
//           <List tasks={["Code, Gym"]}/>
//         </div>
//       )
//     }
//   }

// ReactDOM.render(
//   <Tasks/>,
//   document.querySelector("#render-here")
// );

//******* Using default props **************
// const ShoppingCart = (props) => {
//   return (
//     <div>
//       <h1>Shoppinf Cart Component items: {props.item}</h1>
//     </div>
//   );
// };

// ShoppingCart.defaultProps = { item: 0 };

// ReactDOM.render(<ShoppingCart />, document.querySelector("#render-here"));

// const Items = (props)=>{
//   return (
//     <div>
//       <h1>
//         Current items in the cart: {props.quantity}
//       </h1>
//     </div>
//   )
// }

// Items.defaultProps = {quantity: 0}

// class ShoppingCart extends React.Component{
//   constructor(props){
//     super(props);
//   }

//   render(){
//     return(
//       <div>
//         <Items quantity= {10}/>
//       </div>
//     )
//   }
// }

// // ReactDom.render(<ShoppingCart/>, document.querySelector('#render-here'));
// ReactDOM.render(<ShoppingCart />, document.querySelector("#render-here"));

// ***** ProtoTypes to define props *****

//import PropTypes from 'prop-types';

// const Items = (props)=>{
//   return(
//     <div>
//        <h1> Current Items in the cart: {props.quantity} </h1>
//     </div>
//   )
// }

// Items.defaultProps = {quantity: 0}

// Items.propTypes = {
//   quantity: propTypes.number.isRequired;
// }

// class ShoppingCart extends React.Component{
//   constructor(props){
//     super(props);
//   }

//   render(){
//     return (
//       <Items quantity ={10}/>
//     )
//   }
// }

// ReactDOM.render(<ShoppingCart/>, document.querySelector("#render-here"));

//Access props in es6 class components

// class ReturnTempPassword extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <p>Your password is {(this.props.password = "Janetracy")}</p>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<ReturnTempPassword />, document.querySelector("#render-here"));

// this.state in classes

// class Component extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "Name"
//     };
//   }

//   render() {
//     return ( <
//       div >
//       <
//       h1 > {
//         this.state.name
//       } < /h1> <
//       /div>
//     );
//   }
// }

// ReactDOM.render( < Component / > , document.querySelector("#render-here"));