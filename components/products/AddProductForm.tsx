"use client";

import { ProductSchema } from "@/src/schema";
import { toast } from "react-toastify";

export const AddProductForm = ({ children }: { children: React.ReactNode }) => {

    const handleSubmit = async (formData: FormData) => {
        const data = {
            name: formData.get('name'),
            price: formData.get('price'),
            categoryId: formData.get('categoryId')
        }

        const result = ProductSchema.safeParse(data);
        if (!result.success) {
            result.error.errors.forEach((error) => {
                toast.error(error.message);
            });
            return;
        }
    }

    return (
        <div className='bg-white mt-10 p-50 radius-30 shadow'>
            <form action={handleSubmit} className='flex column '>
                {children}
                <input type="submit" className='white-text bg-blue ph-20 p-10 mt-10 bold no-border' style={{ cursor: 'pointer' }} value='Registrar producto' />
            </form>
        </div>
    )
}
