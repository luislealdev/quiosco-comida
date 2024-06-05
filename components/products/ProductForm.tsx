import { prisma } from "@/src/lib/prisma"
import { ImageUpload } from "./ImageUpload";

async function getCategories() {
    return await prisma.category.findMany();
}

export default async function ProductForm() {

    const categories = await getCategories();

    return (
        <div className="flex column gap-15 align-center justify-content">
            <div className="flex align-center space-between">
                <label
                    className="text-slate-800"
                    htmlFor="name"
                >Nombre: </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className="p-10"
                    placeholder="Nombre Producto"
                />
            </div>

            <div className="flex align-center space-between">
                <label
                    className="text-slate-800"
                    htmlFor="price"
                >Precio: </label>
                <input
                    id="price"
                    name="price"
                    className="p-10"
                    placeholder="Precio Producto"
                />
            </div>

            <div className="flex align-center space-between">
                <label
                    className="text-slate-800"
                    htmlFor="categoryId"
                >Categoría: </label>
                <select
                    className="p-10"
                    id="categoryId"
                    name="categoryId"
                >
                    <option value="">-- Seleccione --</option>
                    {
                        categories.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))
                    }
                </select>
            </div>
            <ImageUpload />
        </div>

    )
}