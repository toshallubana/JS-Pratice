import { CartState } from '../Context/Context';
import { ListGroup, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const Cart = () => {

    const {
        state: { cart }, dispatch
    } = CartState();

    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc,curr) => acc + Number(curr.price)*curr.qty,0))},[cart]);

    return (
        <div className='home'>
            <div className='productContainer'>
                <ListGroup>
                    {
                        cart.map(prod => (
                            <span>{prod.name}</span>
                        ))
                    }
                </ListGroup>
                <div className='filters summery'>
                    <span className='title'>
                        Subtotal ({cart.length}) items
                    </span>
                    <span style={{ fontWeight: 700, fontSize: 20}}> Total $ {total}</span>
                    <Button type="button" disbaled={cart.length === 0}>
                        proceed to checkout
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Cart;