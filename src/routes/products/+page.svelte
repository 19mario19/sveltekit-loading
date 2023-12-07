<script lang="ts">
  import type { Product } from "$lib/interfaces/interfaces.js"
  // this object contains data from load function found in page.js/ts
  export let data

  let products: Product[] = data.products

  $: console.log(products)
</script>

<h2>{data.title}</h2>

{#if products.length > 0}
  {#each products as product (product.id)}
    <a href={`/products/${product.id}`}>
      <div class="product">
        <p><strong>ID:</strong> {product.id}</p>
        <p><strong>Title:</strong> {product.title}</p>
        <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      </div>
    </a>
  {/each}
{:else}
  <p>No products available.</p>
{/if}

<style>
  h2 {
    color: #333;
  }

  .product {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
  }
</style>
