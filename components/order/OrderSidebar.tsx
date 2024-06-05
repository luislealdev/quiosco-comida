import { prisma } from '@/src/lib/prisma';
import { CategoryIcon } from '../ui/CategoryIcon';
import { Logo } from '../ui/Logo';

async function getCategories() {
    return await prisma.category.findMany();
}

export const OrderSidebar = async () => {

    const categories = await getCategories();

    return (
        <aside className="bg-white p-10" style={{ width: '20%' }}>
            <Logo/>
            <nav className='mt-10'>
                {
                    categories.map((category) => (
                        <CategoryIcon key={category.id} category={category} />
                    ))
                }
            </nav>
        </aside>
    )
}
