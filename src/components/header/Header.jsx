import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCartHidden} from '../../redux/cart/selectors';
import { selectCurrentUser} from '../../redux/user/selectors';
import { signOutStart } from '../../redux/user/actions';


export function Header({ currentUser, hidden, signOutStart }){
  return(
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={signOutStart}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/login'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden? null : <CartDropdown /> }
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()) 
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);