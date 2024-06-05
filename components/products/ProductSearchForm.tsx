"use client";
import { SearchSchema } from '@/src/schema';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';

export const ProductSearchForm = () => {
    const router = useRouter();

    const handleSearchForm = (formData: FormData) => {
        const data = {
            search: formData.get('search')
        }

        const result = SearchSchema.safeParse(data);
        if (!result.success) {
            result.error.errors.forEach((error) => {
                toast.error(error.message);
            });
            return;
        }

        router.push(`/admin/products/search?search=${result.data.search}`);
    }

    return (
        <form className='flex align-center' action={handleSearchForm}>
            <input type="text" placeholder='Buscar producto' className='p-10 no-border' name='search' />
            <input type="submit" value='Buscar' className='bg-blue white-text p-10 no-border' />
        </form>
    )
}
