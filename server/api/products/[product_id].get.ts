import { products } from '../../data/products'

export default defineEventHandler((event) => {
  const id = parseInt(event.context.params!.product_id)
  const product = products.find(p => p.id === id)
  if (!product) {
    setResponseStatus(event, 404)
    return { message: 'Product not found' }
  }
  return product
})
