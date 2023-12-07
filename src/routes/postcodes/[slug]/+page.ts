import type { Address } from "$lib/interfaces/interfaces"

export async function load({ params, fetch }) {
 const url = `http://localhost:5173/api/postcodes/${params.slug}`

  
  const res = await fetch(url)

  const postcode: Address = await res.json()
  console.log(postcode)
  if (postcode) {
    return {
      postcode,
    }
  }
}

