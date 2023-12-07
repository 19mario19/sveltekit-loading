<script lang="ts">
  import type { Address } from "$lib/interfaces/interfaces"
  import type { PageData } from "./$types"
  export let data: PageData

  let postcodes: Address[] = data.postcodes || []
</script>

<div class="postcodes">
  {#each postcodes as postcode (postcode.id)}
    <a href={`/postcodes/${postcode.id}`}>
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
    </a>
  {/each}
</div>

<style>
  .postcodes {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .postcode {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 8px;
  }
</style>
