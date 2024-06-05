import OrderCard from '@/components/order/OrderCard';
import { Heading } from '@/components/ui/Heading'
import { prisma } from '@/src/lib/prisma';

async function getPendingOrders() {
    const orders = await prisma.order.findMany({
        where: {
            status: false
        },
        include: {
            OrderProducts: {
                include: {
                    product: true
                }
            }
        }
    });

    return orders;
}

const Orders = async () => {

    const orders = await getPendingOrders();

    return (
        <section>
            <div className='mb-50'>
                <Heading>Administrar Órdenes</Heading>
            </div>
            {
                orders.length ? (
                    <section className='grid-c-4 gap-25'>
                        {orders.map((order) => (<OrderCard key={order.id} order={order} />))}
                    </section>)
                    : <p className="center-text">No hay órdenes Pendientes</p>
            }
        </section>
    )
}

export default Orders;