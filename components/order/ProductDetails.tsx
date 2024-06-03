import { OrderItem } from '@/src/types';
import { formatCurrency } from '../../src/utils/index';
import { useStore } from '@/src/store';
import { useMemo } from 'react';

type ProductDetailsProps = {
    item: OrderItem
}

const MAX_QUANTITY = 10;

export const ProductDetails = ({ item }: ProductDetailsProps) => {

    const increaseQuantity = useStore(state => state.increaseQuantity);
    const decreaseQuantity = useStore(state => state.decreaseQuantity);
    const removeItem = useStore(state => state.removeItem);
    const disableDecrease = useMemo(() => item.quantity === 1, [item]);
    const disableIncrease = useMemo(() => item.quantity === MAX_QUANTITY, [item]);

    return (
        <div className="shadow p-5 bg-white">
            <div>
                <div className="flex justify-between align-center gap-5">
                    <p className="f-size-18 bold">{item.name} </p>
                    <button
                        className='no-border bg-white f-size-22'
                        type="button"
                        onClick={() => removeItem(item.id)}
                    >
                        <i className="fa-regular fa-circle-xmark p-5"></i>
                    </button>
                </div>
                <div className='p-10 flex space-between align-center'>
                    <p className="bold f-size-24 sky-text">
                        {formatCurrency(item.price)}
                    </p>
                    <div className="flex gap-5 p-5 radius-100 align-center">
                        <button
                            className='no-border bg-white f-size-22'
                            type="button"
                            disabled={disableDecrease}
                            onClick={() => decreaseQuantity(item.id)}
                        >
                            <i className="fa-solid fa-minus p-5"></i>
                        </button>

                        <p className="f-size-24">
                            {item.quantity}
                        </p>

                        <button
                            className='no-border bg-white f-size-22'
                            type="button"
                            disabled={disableIncrease}
                            onClick={() => increaseQuantity(item.id)}
                        >
                            <i className="fa-solid fa-plus p-5"></i>
                        </button>
                    </div>

                </div>
                <p className="f-size-18">
                    Subtotal: {formatCurrency(item.quantity * item.price)}
                </p>
            </div>
        </div>
    )
}
