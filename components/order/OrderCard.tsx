import { completeOrder } from "@/actions/complete-order-action";
import { OrderWithProducts } from "@/src/types";
import { formatCurrency } from "@/src/utils";

type OrderCardProps = {
    order: OrderWithProducts;
}

export default function OrderCard({ order }: OrderCardProps) {

    return (
        <section
            aria-labelledby="summary-heading"
            className="mt-10 radius-30 p-20 bg-white"
        >
            <p className='f-size-24'>Cliente: {order.name} </p>
            <p className='f-size-18 bold'>Productos Ordenados: </p>
            <dl className="mt-5">
                {order.OrderProducts.map((orderProduct) => (
                    <div key={orderProduct.id} className="flex align-center space-between">
                        <dt className="f-size-16">{orderProduct.product.name}</dt>
                        <dd className="f-size-16">{orderProduct.quantity}</dd>
                    </div>
                ))}
                <div className="flex align-center space-between pt-5 mt-10">
                    <dt className="bold">Total a Pagar: </dt>
                    <dd className="bold">{formatCurrency(order.total)}</dd>
                </div>
            </dl>

            <form className="" action={completeOrder}>
                <input type="hidden" value={order.id} name="orderId" />
                <input
                    style={{ cursor: 'pointer' }}
                    type="submit"
                    className="white-text no-border bg-blue mt-10 p-5 bold"
                    value='MARCAR ORDEN COMPLETADA'
                />
            </form>
        </section>
    )
}