import type { Address } from "$lib/interfaces/interfaces"

export async function load({ fetch }) {
  const url = `http://localhost:5173/api/postcodes`
  const res = await fetch(url)
  const postcodes: Address[] = await res.json()
  if (postcodes) {
    return {
      postcodes,
    }
  }
}
