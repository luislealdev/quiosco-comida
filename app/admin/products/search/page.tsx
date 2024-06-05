import { ProductSearchForm } from "@/components/products/ProductSearchForm";
import ProductTable from "@/components/products/ProductsTable";
import { Heading } from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";

async function searchProducts(searchTerm: string) {

    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive'
            }
        },
        include: {
            category: true
        }
    });

    return products;
}

const SearchPage = async ({ searchParams }: { searchParams: { search: string } }) => {

    const products = await searchProducts(searchParams.search);

    return (
        <section className="flex column" style={{ width: '100%' }}>
            <div className="flex space-between align-center">
                <Heading>Administrar Productos</Heading>
                <div className="flex gap-25">
                    <Link className="flex align-center bg-blue white-text ph-20 p-5" href='/admin/products/new'>Crear producto</Link>
                    <ProductSearchForm />
                </div>
            </div>
            {
                products.length === 0 ? <p className="m-100 center-text flex align-center justify-content">No se encontraron productos</p> : <ProductTable products={products} />
            }

        </section>
    )
}

export default SearchPage