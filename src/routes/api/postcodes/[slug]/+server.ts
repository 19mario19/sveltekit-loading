import { json } from "@sveltejs/kit"
import type { Address } from "$lib/interfaces/interfaces"

export async function GET({ params }) {
  const { slug } = params

  const res = await fetch("http://localhost:4000/postcodes")
  const postcodes: Address[] = await res.json()

  const postcode: any = postcodes.find(
    (postcode) => postcode.id === slug,
  )

  if (postcode) {
    // Create a new Address object with the desired properties
    const mappedPostcode: Address = {
      id: postcode.id,
      buildingName: postcode.building_name,
      line1: postcode.line_1,
      line2: postcode.line_2,
      line3: postcode.line_3,
      town: postcode.post_town,
      country: postcode.country,
      postcode: postcode.postcode,
    }

    return json(mappedPostcode, { status: 200 })
  } else {
    return json({ error: "Postcode not found" }, { status: 404 })
  }
}
