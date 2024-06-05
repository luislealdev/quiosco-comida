import { AddProductForm } from "@/components/products/AddProductForm"
import ProductForm from "@/components/products/ProductForm"
import { Heading } from "@/components/ui/Heading"

const AdminNewProduct = () => {
    return (
        <section className="flex column" style={{ width: '100%', height: '100%' }}>
            <Heading>Nuevo producto</Heading>
            <div className="flex align-center justify-content">
                <AddProductForm>
                    <ProductForm />
                </AddProductForm>
            </div>
        </section>
    )
}

export default AdminNewProduct