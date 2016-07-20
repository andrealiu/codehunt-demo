import React from 'react';
import ProductList from '../Product/ProductList';
var firebase = require("firebase/app");
  require("firebase/auth");
  require("firebase/database");


class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: []
    }
    console.log(typeof productList);


    var config = {
    apiKey: "AIzaSyBjH7E9HBKbGIc5X5g-8530AHgTLwUwx-A",
    authDomain: "codehunt-31461.firebaseapp.com",
    databaseURL: "https://codehunt-31461.firebaseio.com",
    storageBucket: "codehunt-31461.appspot.com",
  };
  firebase.initializeApp(config);

  var db = firebase.database();
  var firebaseRef = db.ref("/products");
  console.log(db);
  console.log(firebaseRef);
  console.log("hi");

  firebaseRef.on('value', (snapshot) => {
      console.log("starting snapshot");
      var products = snapshot.val();
      console.log(typeof products);
      console.log(products);
      console.log("got here");
      this.setState({
        productList: products
      })
      console.log("type of productList");
      console.log(typeof productList);
    });
  }

  render() {
    return (
      <section>
        <header>
          <img src="/img/banner.jpeg" width="100%" />
        </header>

        <section>
          <section className="container">
            {
              this.state.productList
              ?
              <ProductList productList={this.state.productList}/>
              :
              null
            }
          </section>
        </section>
      </section>
    );
  }
}

export default HomePage;
