import { z } from 'zod';

export const orderSchema = z.object({
    name: z.string().min(3, "Tu nombre es obligatorio").max(255),
    total: z.number().min(1, "Hay errores en la órden"),
    order: z.array(z.object({ id: z.number(), quantity: z.number(), name: z.string(), price: z.number(), subtotal: z.number() }))
});
export const OrderIdSchema = z.object({
    orderId: z.string().transform((val) => parseInt(val)).refine((val) => val > 0, { message: "Hay erroes" })
})