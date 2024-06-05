import { z } from 'zod';

export const orderSchema = z.object({
    name: z.string().min(3, "Tu nombre es obligatorio").max(255),
    total: z.number().min(1, "Hay errores en la órden"),
    order: z.array(z.object({ id: z.number(), quantity: z.number(), name: z.string(), price: z.number(), subtotal: z.number() }))
});

export const OrderIdSchema = z.object({
    orderId: z.string().transform((val) => parseInt(val)).refine((val) => val > 0, { message: "Hay erroes" })
})

export const SearchSchema = z.object({
    search: z.string().trim().min(1, "La búsqueda no puede ir vacía")
});

export const ProductSchema = z.object({
    name: z.string()
        .trim()
        .min(1, { message: 'El Nombre del Producto no puede ir vacio' }),
    price: z.string()
        .trim()
        .transform((value) => parseFloat(value))
        .refine((value) => value > 0, { message: 'Precio no válido' })
        .or(z.number().min(1, { message: 'La Categoría es Obligatoria' })),
    categoryId: z.string()
        .trim()
        .transform((value) => parseInt(value))
        .refine((value) => value > 0, { message: 'La Categoría es Obligatoria' })
        .or(z.number().min(1, { message: 'La Categoría es Obligatoria' })),
    image: z.string().min(1, { message: 'La Imagen es obligatoria' })
})