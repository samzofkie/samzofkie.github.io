<script>
  import '../app.css';
  import { base } from '$app/paths';
</script>

<style>
  .table-image {
    width: 300px;
  }

  .table-gallery {
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
  }

  h2 {
    margin-bottom: var(--padding-0);
  }

  #quotes p {
    margin: var(--padding-1) 0px;
  }
</style>

<div class="main-content">
  <section id="tables">
    <h2>Tables I've made</h2>
    <div class="table-gallery">
      <img class="table-image" src="{base}/table1.jpg" alt="A badass table I made." />
      <img class="table-image" src="{base}/table2.jpg" alt="Another very nice table." />
    </div>
  </section>

  <section id="quotes">
    <h2>Some quotes I like</h2>

    <p>Not everything that is faced can be changed, but nothing can be changed until it is faced.</p>

    <p>And one of the things I've always found is that, you gotta start with the customer experience and work backwards to the technology. You can't start with the technology and try to figure out where you're gonna try to sell it. And I've made this mistake probably more than anybody else in this room, and I've got the scar tissue to prove it.</p>

    <p>Slow is smooth and smooth is fast.</p>

    <p>Give me six hours to chop down a tree and I will spend the first four sharpening the axe.</p>

    <p>There's no such thing as bad weather, only bad clothing.</p>
  </section>
</div>