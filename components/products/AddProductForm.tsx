import React from 'react'
import ProductForm from './ProductForm'

export const AddProductForm = () => {
    return (
        <div className='bg-white mt-10 p-50 radius-30 shadow'>
            <form action="" className='flex column '>
                <ProductForm />
                <input type="submit" className='white-text bg-blue ph-20 p-10 mt-10 bold no-border' style={{cursor:'pointer'}} value='Registrar producto' />
            </form>
        </div>
    )
}
