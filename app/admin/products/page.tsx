import { ProductSearchForm } from "@/components/products/ProductSearchForm";
import { ProductsPagination } from "@/components/products/ProductsPagination";
import ProductTable from "@/components/products/ProductsTable";
import { Heading } from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

async function productCount() {
    return await prisma.product.count();
}

async function getProducts(page: number, pageSize: number) {
    const skip = (page - 1) * pageSize;

    const products = await prisma.product.findMany({
        take: pageSize,
        skip: skip,
        include: {
            category: true
        }
    });

    return products;
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>;

const AdminProductsPage = async ({ searchParams }: { searchParams: { page: string } }) => {

    const page = +searchParams.page || 1;
    if (page < 0) redirect('/admin/products?page=1')
    const pageSize = 10;

    const productsData = getProducts(page, pageSize);
    const totalProductsData = productCount();

    const [products, totalProducts] = await Promise.all([productsData, totalProductsData]);
    const totalPages = Math.ceil(totalProducts / pageSize);

    if (page > totalPages) redirect('/admin/products?page=1')

    return (
        <section className="flex column" style={{ width: '100%' }}>
            <div className="flex space-between align-center">
                <Heading>Administrar Productos</Heading>
                <div className="flex gap-25">
                    <Link className="flex align-center bg-blue white-text ph-20 p-5" href='/admin/products/new'>Crear producto</Link>
                    <ProductSearchForm />
                </div>
            </div>
            <ProductTable products={products} />
            <ProductsPagination page={page} totalPages={totalPages} />
        </section>
    )
}

export default AdminProductsPage