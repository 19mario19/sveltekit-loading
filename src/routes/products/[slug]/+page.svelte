<script lang="ts">
  import type { PageData } from "./$types"
  import type { Product } from "../../../lib/interfaces/interfaces"
  export let data: PageData
  let product: Product = data.product
</script>

<div class="product">
  <p><strong>ID:</strong> {product.id}</p>
  <p><strong>Title:</strong> {product.title}</p>
  <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
  <p><strong>Description:</strong> {product.description}</p>
</div>
