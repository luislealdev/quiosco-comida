import { formatCurrency } from '../../src/utils/index';
import Link from 'next/link';
import { ProductsWithCategory } from '@/app/admin/products/page';

type ProductTableProps = {
    products: ProductsWithCategory
}

export default function ProductTable({products}: ProductTableProps) {

    return (
        <div className="mt-20 shadow">
            <div className="mt-10">
                <div className="m-5" style={{ overflow: 'scroll' }}>
                    <div className="bg-white p-5 ">
                        <table className="p-20">
                            <thead>
                                <tr>
                                    <th scope="col" className="bold p-5 f-size-18">
                                        Producto
                                    </th>
                                    <th scope="col" className="bold p-5 f-size-18">
                                        Precio
                                    </th>
                                    <th scope="col" className="bold p-5 f-size-18">
                                        Categoría
                                    </th>
                                    <th scope="col" className="bold p-5 f-size-18">
                                        <span className="sr-only">Acciones</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {
                                    products.map((product) => (
                                        <tr key={product.id}>
                                            <td className="p-5">
                                                {product.name}
                                            </td>
                                            <td className="p-5">
                                                {formatCurrency(product.price)}
                                            </td>
                                            <td className="p-5">
                                                {product.category.name}
                                            </td>
                                            <td className="p-5">
                                                <Link href={`/admin/products/${product.id}`}>
                                                    <span className="text-sky p-5">Editar</span>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}