<script lang="ts">
  import type { Address } from "$lib/interfaces/interfaces"
  import type { PageData } from "./$types"
  export let data: PageData

  let postcode: Address
  if (data.postcode) {
    postcode = data.postcode
    console.log(postcode)
  }
</script>

<div class="postcode">
  <p>ID: {postcode.id}</p>
  <p>Building Name: {postcode.buildingName}</p>
  <p>Line 1: {postcode.line1}</p>
  <p>Line 2: {postcode.line2}</p>
  <p>Line 3: {postcode.line3}</p>
  <p>Town: {postcode.town}</p>
  <p>Country: {postcode.country}</p>
  <p>Postcode: {postcode.postcode}</p>
</div>

<style>
  .postcode {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 8px;
  }
</style>
