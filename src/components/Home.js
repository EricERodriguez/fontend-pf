import React, { Component } from 'react'
import HomeNotLogin from './Home/HomeNotLogin';

import Cards from './HomeLogin/Cards';
import Carrousel from './HomeLogin/Carrousel';

class Home extends Component {
  render() {
    const { isAuth } = this.props;

    return (
      <div>
        {
          isAuth ? (
            <div>
              <Carrousel/>
              <hr/>
              <Cards/>
            </div>
          ) :
          <div>
            <div className="row">
              <HomeNotLogin/>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Home;