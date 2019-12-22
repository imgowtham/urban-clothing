import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router-dom';
import {Scrollbars} from 'react-custom-scrollbars';
import CustomButton from '../custom-buttom/custom-button.component'
import {selectCartItems} from '../../redux/cart/cart.selectors';
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
            <div className="cart-items">
                {cartItems.length
                    ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                    : <span className="empty-message">Your Cart is Empty</span>
}
            </div>
        </Scrollbars>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());;
        }} >GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps = createStructuredSelector({cartItems: selectCartItems})
export default withRouter(connect(mapStateToProps)(CartDropdown))