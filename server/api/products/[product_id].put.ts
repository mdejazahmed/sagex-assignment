import { products } from '../../data/products'

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params!.product_id)
  const index = products.findIndex(p => p.id === id)
  if (index === -1) {
    setResponseStatus(event, 404)
    return { message: 'Product not found' }
  }

  const body = await readBody(event)
  const now = new Date().toISOString()

  const updatedProduct = {
    ...products[index],
    ...body,
    total_amount: body.price * body.quantity,
    updated_at: now
  }

  products[index] = updatedProduct
  return updatedProduct
})
