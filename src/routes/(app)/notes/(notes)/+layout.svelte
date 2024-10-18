<script>
  import '../../app.css';
  import './note.css';
  import { page } from '$app/stores'
  const articleTopic = $page.url.pathname.split('/').slice(-1)[0];
</script>

<style>
  a {
    display: flex;
    align-items: center;
  }
</style>

<div class="main-content">
  <a href="/notes"><i class='bx bx-left-arrow-alt'></i> Notes</a>

  <article id={articleTopic}>
    <slot />
  </article>
</div>