import { onMount } from 'svelte';

import hljs from 'highlight.js/lib/core';
import c from 'highlight.js/lib/languages/c';
import java from 'highlight.js/lib/languages/java';

hljs.registerLanguage('c', c);
hljs.registerLanguage('java', java);

export function titleToPath(title) {
  return title.toLowerCase().replaceAll(' ', '-');
}

export function pathToTitle(path) {
  return path.slice(0,1).toUpperCase() + path.slice(1).replaceAll('-', ' ');
}

export function highlightCode(language) {
onMount(() => {
    for (let code of document.getElementsByTagName('code')) {
      code.innerHTML = hljs.highlight(
        code.innerText,
        { language: language }
      ).value;
    }
  });
}

export function highlightCCode() {  
  highlightCode('c');
}