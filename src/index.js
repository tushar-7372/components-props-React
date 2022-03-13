import React from "react";
import ReactDOM from "react-dom";

// function Card() {
//   return (
//     <div>
//       <h2>Beyonce</h2>
//       <img
//         src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
//         alt="avatar_img"
//       />
//       <p>+123 456 789</p>
//       <p>b@beyonce.com</p>
//     </div>
//   );
// }

// the problem with this card function is that wehen ever we call it we get specific information contained it the function
// we want that card function to accept some parameters and display based on that parameter

// it can be done in the following way
// <Card name="tushar" img="https....."
// function Card(props) --> this is called react properties
// {
//  props.name ==>tushar
//  props.img ==>https.....
// }
// ReactDOM.render(
//   <div>
//     <h1>My Contacts</h1>
{
  /* here the contacts have same format */
}
{
  /* so we can put each contact in a component and use that custom component  */
}
{
  /* but how to change data in the component dynamically */
}
{
  /* <h2>Beyonce</h2>
    <img
      src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      alt="avatar_img"
    />
    <p>+123 456 789</p>
    <p>b@beyonce.com</p>

    <h2>Jack Bauer</h2>
    <img
      src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      alt="avatar_img"
    />
    <p>+987 654 321</p>
    <p>jack@nowhere.com</p>

    <h2>Chuck Norris</h2>
    <img
      src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      alt="avatar_img"
    />
    <p>+918 372 574</p>
    <p>gmail@chucknorris.com</p> */
}

{
  /* we can use card custom component */
}
//     <Card />
//   </div>,
//   document.getElementById("root")
// );

// starting fresh with the above points in mind
function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="beyonce pic" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}
//everything that stays same remains in this card function protytype

ReactDOM.render(
  <div>
    <h1>My contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="5555555"
      email="ttdgdgd@gmail"
    />
    <Card
      name="iron man "
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPTNwxLOxE3RdK2VttHzBxMY24agqkd6FtAA&usqp=CAU"
      tel="5555555"
      email="ttdgdgd@gmail"
    />
  </div>,
  document.getElementById("root")
);
