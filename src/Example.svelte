<script>
  let textHello = "This is in Example.svelte";
</script>

<h1 class="greeting">Hello {textHello}</h1>
<h2>Hello this is heading 2</h2>
<p>
  It is a long established fact that a reader will be distracted by the readable
  content of a page when looking at its layout. The point of using Lorem Ipsum
  is that it has a more-or-less normal distribution of letters, as opposed to
  using 'Content here, content here', making it look like readable English. Many
  desktop publishing packages and web page editors now use Lorem Ipsum as their
  default model text, and a search for 'lorem ipsum' will uncover many web sites
  still in their infancy. Various versions have evolved over the years,
  sometimes by accident, sometimes on purpose (injected humour and the like).
</p>
<button
  on:click={() => {
    console.log("Hello");
  }}>This is my button</button
>
<button id="hydrate">Hydrate</button>

<style>
  .greeting {
    color: red;
  }
</style>
