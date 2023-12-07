import { json } from "@sveltejs/kit"
import type { Address } from "$lib/interfaces/interfaces"

export async function GET() {
  const res = await fetch("http://localhost:4000/postcodes")
  const postcodes = await res.json()
  const appPostCodes = postcodes.map((postcode) => {
    const address: Address = {
      id: postcode.id,
      buildingName: postcode.building_name,
      line1: postcode.line_1,
      line2: postcode.line_2,
      line3: postcode.line_3,
      town: postcode.post_town,
      country: postcode.country,
      postcode: postcode.postcode,
    }
    return address
  })
  return json(appPostCodes, { status: 201 })
}
