import { products } from '../../data/products'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const now = new Date().toISOString()

  const newProduct = {
    id: products.length + 1,
    name: body.name,
    price: body.price,
    quantity: body.quantity,
    total_amount: body.price * body.quantity,
    created_at: now,
    updated_at: now
  }

  products.push(newProduct)
  return newProduct
})
