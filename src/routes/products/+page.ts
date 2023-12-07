export async function load({ fetch }) {
  const title = "List of avialable products"
  const res = await fetch("http://localhost:4000/products")
  const products = await res.json()
  if (products) {
    return {
      title,
      products,
    }
  }
}
