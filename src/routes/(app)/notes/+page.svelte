<script>
  import '../app.css';
  import { titleToPath } from '$lib/utils.js';
  import { base } from '$app/paths';

  const notes = {
    'Data structures': [
      'Arrays',
      'Stacks',
      'Queues',
      'Linked lists',
      'Trees',
      'Binary search trees',
      'Tries',
      'Graphs',
      'Dynamic arrays',
      'Heaps',
      'Priority queues',
    ],
    'Frontend': [
      'Refactoring UI',
      'Svelte',
    ],
    'Backend': [
      'Designing Data-Intensive Applications',
    ]
  };
</script>

<div class="main-content">
  <h1>Notes</h1>

  {#each Object.keys(notes) as noteCategory}
    <section id={titleToPath(noteCategory)}>
      <h2>{noteCategory}</h2>
      <ul>
      {#each notes[noteCategory] as title}
        <li>
          <a href="{base}/notes/{titleToPath(title)}">{title}</a>
        </li>
      {/each}
      </ul>
    </section>
  {/each}
</div>