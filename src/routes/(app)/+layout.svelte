<script>
  import '$lib/palette.css';
  import './app.css';
  import './hl.css';
  import { pathToTitle } from '$lib/utils.js';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { browser } from '$app/environment';

  $: pageEndpoint = $page.url.pathname.split('/').slice(-1)[0];
  $: pageTitle = pageEndpoint === '' ? 'Sam Zofkie' : pathToTitle(pageEndpoint);
  $: if (browser) {
    document.title = pageTitle;
  }
</script>

<!-- Google Fonts Inter -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">

<!-- Boxicons -->
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

<style>
  :global(body) {
    background-color: var(--gray-0);
    color: var(--gray-7);
    margin: var(--padding-0);
    font-family: "Inter", sans-serif;
    font-size: 16px;
  }

  .narrow {
    max-width: 800px;
    margin: auto;
    background-color: var(--gray-1);
    border-radius: var(--radius-1);
    display: flex;
    flex-direction: column;
    gap: 0px;
  }

  header, footer {
    display: flex;
    align-items: center;

    background-color: var(--gray-2);
    border-radius: var(--radius-1);
    padding: var(--padding-0);
  }

  header {
    justify-content: space-between;
  }

  nav {
    display: flex;
    gap: var(--padding-0);
  }

  .flower-logo {
    height: 45px;
    margin-top: 6px;
    margin-left: 10px;
  }

  footer {
    justify-content: space-evenly;
  }

  footer i {
    font-size: 1.75em;
  }

  nav a, footer i {
    text-decoration: none;
    color: var(--gray-7);
    background-color: var(--gray-3);
    padding: var(--padding-0);
    border-radius: var(--radius-1);
    transition: color 0.25s, background-color 0.25s;
  }

  nav a:hover, footer i:hover {
    color: var(--gray-3);
    background-color: var(--gray-7);
  }

  main {
    padding: var(--padding-1);
  }

  @media only screen and (max-width: 800px) {
    .narrow { 
      font-size: 14px;
    }

    header, footer {
      font-size: 12px;
    }

    nav {
      gap: 5px;
    }
  }
</style>

<div class="narrow">
  <header>
    <a href="{base}/" class="nav-root">
      <img class="flower-logo" src="/jessi-flower-logo.png" alt="A line drawing of a flower." />
    </a>
    <nav>
      <a href="{base}/about" class="nav-link">About</a>
      <a href="{base}/notes" class="nav-link">Notes</a>
      <a href="{base}/projects" class="nav-link">Projects</a>
      <a href="{base}/misc" class="nav-link">Misc</a>
    </nav>
  </header>

  <main>
    <slot/>
  </main>

  <footer>
    <a href="https://github.com/samzofkie/">
      <i class='bx bxl-github' ></i>  
    </a>
    <p>samzofkie@gmail.com</p>
    <a href="https://www.linkedin.com/in/samzofkie/">
      <i class='bx bxl-linkedin-square'></i>
    </a>
  </footer>
</div>