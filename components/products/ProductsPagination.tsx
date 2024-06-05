import Link from "next/link"


type ProductPaginationProps = {
    page: number,
    totalPages: number
}
export const ProductsPagination = ({ page, totalPages }: ProductPaginationProps) => {
    return (
        <nav className="p-10 justify-content p-10 flex align-center gap-25">
            {
                page > 1 && (
                    <Link href={`/admin/products?page=${page - 1}`} className="bg-white f-size-14 p-10">&laquo;</Link>)
            }
            <p>{page}</p>
            {
                page < totalPages && (
                    <Link href={`/admin/products?page=${page + 1}`} className="bg-white f-size-14 p-10">&raquo;</Link>)
            }
        </nav>
    )
}
