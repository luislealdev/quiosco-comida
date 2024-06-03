import { OrderSidebar, OrderSummary } from "@/components"
import { ProductCard } from "@/components/products/ProductCard";
import { prisma } from "@/src/lib/prisma";

async function getProductsByCategory(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category
      }
    }
  });

  return products;
}

export default async function Home({ params }: { params: { category: string } }) {

  const products = await getProductsByCategory(params.category);

  return (
    <div className="flex gap-15" style={{ width: '100vw', height: '100vh' }}>
      <OrderSidebar />
      <main style={{ width: '55%', overflow: 'scroll' }} className="p-10">
        <h1 className="f-size-18">Elige y personaliza tu pedido a continuación</h1>
        <div className="grid-c-3 gap-15 mt-20">
          {
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </div>
      </main>
      <hr style={{ width: 10 }} className="no-border bg-white" />
      <OrderSummary />
    </div>
  );
}
