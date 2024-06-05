import { OrderSidebar, OrderSummary } from "@/components"
import { ProductCard } from "@/components/products/ProductCard";
import { Heading } from "@/components/ui/Heading";
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
    <>
      <Heading>Elige y personaliza tu pedido a continuación</Heading>
      <div className="grid-c-3 gap-15 mt-20">
        {
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </>
  );
}
