import React from 'react';
import ProductList from '../Product/ProductList';
var _ = require('lodash');


class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: []
    }
  var db = firebase.database();
  var firebaseRef = db.ref("/products");
  firebaseRef.on('value', (snapshot) => {
      var products = _.values(snapshot.val());
      this.setState({
        productList: products
      })
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
