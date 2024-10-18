<script>
  import '../app.css';
  import { base } from '$app/paths';
</script>

<style>
  table {
    display: flex;
    flex-direction: column;
    gap: var(--padding-0);
  }

  tr {
    display: grid;
    grid-template-columns: 100px auto;
    column-gap: var(--padding-1);
  }

  th {
    justify-self: end;
    font-weight: normal;
  }
</style>

<div class="main-content">
  <h1>About</h1>

  <p>
    My name is Sam, I'm a software developer with expertise building full stack JavaScript apps.
  </p>

  <p>
    I was born and raised in Chicago, left to go to Reed College in Portland (OR) for four years, lived in Brooklyn for 3 years after graduating, and then returned home to Chicago in 2023. Since graduating, I've worked as an after school instructor, bartender, shop assistant to a woodworker, and a freelance web developer.
  </p>

  <p>
    In my free time I like working through my <a href="{base}/todo">long list</a> of programming-related things I'm interested in, <a href="{base}/misc#tables">building tables</a> and sewing.
  </p>

  <h2>Skills</h2>

  <table>
    <tr>
      <th>Languages:</th>
      <td>
        JavaScript, Python, C/C++, HTML, CSS & SQL
      </td>
    </tr>

    <tr>
      <th>Frontend:</th>
      <td>
        Svelte, Vite, React, Webpack & UI Design
      </td>
    </tr>

    <tr>
      <th>Backend:</th>
      <td>
        Node.js, Express.js, Docker, Linux, Bash scripting, Redis, Nginx, Postgres, OpenAPI & Azure VM
      </td>
    </tr>
  </table>
</div>