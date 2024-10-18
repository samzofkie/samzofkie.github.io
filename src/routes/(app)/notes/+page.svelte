<script>
  import '../app.css';
  import { titleToPath } from '$lib/utils.js';

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
          <a href="/notes/{titleToPath(title)}">{title}</a>
        </li>
      {/each}
      </ul>
    </section>
  {/each}
</div>