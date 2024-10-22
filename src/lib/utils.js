import { onMount } from 'svelte';

import hljs from 'highlight.js/lib/core';
import c from 'highlight.js/lib/languages/c';

hljs.registerLanguage('c', c);

export function titleToPath(title) {
  return title.toLowerCase().replaceAll(' ', '-');
}

export function pathToTitle(path) {
  return path.slice(0,1).toUpperCase() + path.slice(1).replaceAll('-', ' ');
}

export function highlightCCode() {  
  onMount(() => {
    for (let code of document.getElementsByTagName('code')) {
      code.innerHTML = hljs.highlight(
        code.innerText,
        { language: 'c' }
      ).value;
    }
  })
}