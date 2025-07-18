import { products } from '../../data/products'

export default defineEventHandler((event) => {
  const id = parseInt(event.context.params!.product_id)
  const index = products.findIndex(p => p.id === id)
  if (index === -1) {
    setResponseStatus(event, 404)
    return { message: 'Product not found' }
  }
  const deleted = products.splice(index, 1)
  return deleted[0]
})
