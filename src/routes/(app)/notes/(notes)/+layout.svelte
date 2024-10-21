<script>
  import '../../app.css';
  import './note.css';
  import { page } from '$app/stores'
  import { base } from '$app/paths';

  const articleTopic = $page.url.pathname.split('/').slice(-1)[0];

  import { onMount } from 'svelte';

  import hljs from 'highlight.js/lib/core';
  import c from 'highlight.js/lib/languages/c';
  hljs.registerLanguage('c', c);
  
  onMount(() => {
    for (let code of document.getElementsByTagName('code')) {
      code.innerHTML = hljs.highlight(
        code.innerText,
        { language: 'c' }
      ).value;
    }
  });
</script>

<style>
  a {
    display: flex;
    align-items: center;
  }
</style>

<div class="main-content">
  <a href="{base}/notes"><i class='bx bx-left-arrow-alt'></i> Notes</a>

  <article id={articleTopic}>
    <slot />
  </article>
</div>