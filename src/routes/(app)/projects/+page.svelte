<style>
  h1, h2, p {
    margin: 0px;
  }

  .spacing {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: var(--padding-1);
  }
</style>

<div class="spacing">
  <h1>Projects</h1>
  
  <section id="jailsolidaritynetwork">
    <h2>
      <a href="https://www.jailsolidaritynetwork.com">
        jailsolidaritynetwork.com
      </a>
    </h2>

    <p>
      I'm working actively with organizers to create a web archive to house and index collected writings and testimonies to the conditions inside Cook County Jail in Chicago.
    </p>

    <p>
      I'm collaborating closely with organizers to create a custom platform to support secure document upload, tagging, and annotating, and full-text search and filtering our growing database of testimonies.
    </p>

    <p>
      To support this effort I've architected and implemented a full stack JavaScript web app. The frontend is developed with <b>Svelte</b> and <b>Vite</b>, uses <b>SvelteKit</b> for SSR and client-side routing, and adheres to <b>WCAG</b>, <b>SEO</b> and <b>UI design</b> best practices. The backend API is parameterized with an <b>OpenAPI</b> specification, implemented using an asynchronous, event-driven programming style with <b>Node.js</b> and <b>Express</b> (which is unit tested with <b>Jest</b>), containerized with <b>Docker</b> and deployed with <b>Docker compose</b> on an <b>Azure VM</b> using an <b>Nginx</b> reverse-proxy for HTTPS, and backed by a <b>Postgres</b> database.
    </p>

  </section>

  <section id="findrandommusic">
    <h2>
      <a href="https://www.findrandommusic.com">
        findrandommusic.com
      </a>
    </h2>

    <p>
      findrandommusic.com is a music discovery tool that leverages the <b>Spotify Web API</b> to create an infinite feed of randomly selected songs. It also supports a filtering feature that allows users to narrow the songs they see by year of release, popularity, and genre.
    </p>

    <p>
      It's implemented using <b>React</b>, <b>Webpack</b>, <b>Docker</b>, <b>Nginx</b>, <b>Node.js</b> and <b>Express</b>, uses a <b>Redis</b> cache to improve performance, and is self-hosted on a <b>Linux</b> desktop. Check out the <a href="https://github.com/samzofkie/findrandommusic.com"> open source code</a>!
    </p>
  </section>

  <section id="automated-linux-from-scratch">
    <h2>
      <a href="https://github.com/samzofkie/ALFS">
        Automated Linux from Scratch
      </a>
    </h2>

    <p>
      Automated Linux from Scratch is a small project I did to automated the compilation of a custom, fully-featured, bootable Linux-from-Scratch-style Linux distribution using <b>Python</b>, <b>Bash scripting</b> and <b>Docker</b>.
    </p>

  </section>
</div>