import React, { Component } from 'react';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes'
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" Component={HomePage} />
          <Route exact path="/menu"
            Component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
