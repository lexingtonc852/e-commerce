import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import './App.css';
import { HomePage } from './pages/homepage/HomePage';
import { ShopPage }from './pages/shop/ShopPage';
import { LoginPage } from './pages/login/LoginPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import Header from './components/header/Header';
import { setCurrentUser } from './redux/user/actions';
import { selectCurrentUser } from './redux/user/selectors'
import { selectCollectionsForPreview } from './redux/shop/selectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      this.props.setCurrentUser(userAuth);
      addCollectionAndDocuments('collections', this.props.collectionArray)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/login' render={() => 
            this.props.currentUser ? (
              <Redirect to='/' />
              ) : (
              <LoginPage />
              )
            } />
        </Switch>
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionArray: selectCollectionsForPreview
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
