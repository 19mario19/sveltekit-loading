export async function load({ params, fetch }) {
  const url = `http://localhost:4000/products/${params.slug}`
  const res = await fetch(url)
  const product = await res.json()
  if (product) {
    return {
      product,
    }
  }
}
