import React from 'react';
import {connect} from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars';
import CustomButton from '../custom-buttom/custom-button.component'

import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
        <div className="cart-items">
            {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            }
        </div>
        </Scrollbars>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps = ({cart: {
        cartItems
    }}) => ({cartItems})
export default connect(mapStateToProps, null)(CartDropdown)