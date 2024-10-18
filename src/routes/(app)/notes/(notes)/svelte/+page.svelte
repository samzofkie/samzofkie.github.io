<style>
  pre {
    border: 1px solid var(--gray-7);
    border-radius: var(--radius-1);
    padding: var(--padding-0);
    text-wrap: wrap;
  }
</style>

<h1>Svelte</h1>

<p>
  In Svelte you build <b>apps</b> declaratively out of <b>components</b> that combine combine markup, styles and behaviors. Components are then compiled into small efficient JavaScript modules.
</p>

<p>
  The basic syntax features of a Svelte component are:
</p>

<ul>
  <li>
    You can insert JavaScript variables into HTML with curly braces.
  </li>

  <li>
    You can set HTML attributes with these curly braces, and if your JavaScript variable happens to have the same name as the attribute you're setting, there's a nice shorthand syntax where you can just write: <code>{`<img {alt} />`}</code> instead of <code>{`<img alt={alt} />`}</code>.
  </li>

  <li>
    <b>Styles</b> (set in <code>{`<style>`}</code> tags) are <u>scoped to components</u>.
  </li>

  <li>
    Components can be imported (in a <code>&lt;script&gt;</code> tag) like <code>{'import Comp from \'./path/to/Comp.svelte\';'}</code>.
  </li>

  <li>
    You can (dangerously) render HTML directly into a component from JavaScript with the special <code>{'{@html \'...\'}'}</code> tag.
  </li>
</ul>

<p>
  Here's an that example uses all of these features:
</p>

<pre><code>{`// Nested.svelte

<p>This is a another paragraph.</p>
`}</code></pre>

<pre><code>{`// App.svelte

<script>
  import Nested from './Nested.svelte';

  let name = 'Sam';
  let src = '/image.png';
  let greenParagraph = '<p style="color: green;">Set my paragraph.</p>'
</script>

<style>
  p {
    color: red;
  }
</ style>

<h1>Hi {name.toUpperCase()}</h1>

<img {src} alt="{name} dances." />

<p>This is a paragraph.</p> // This will have red font
<Nested /> // This will have black font
{@html greenParagraph} // This will have green font`}</code></pre>

<h2>Reactivity</h2>

<p>
  Svelte has another special syntax for a feature called <b>reactive declarations</b>, that allows you to tell the Svelte compiler to re-run declarations or statements whenever any variable referenced in the reactive declaration changes. The syntax for it prefaces your delclaration or statement with a <code>$:</code> symbol, which is actually valid JavaScript (<code>$</code> is a valid identifier and the colon is part of a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label">labeled statement</a>).
</p>  

<p>
  Reactivity is triggered by assignment though, so for reactive declarations that depend on arrays or objects, to trigger the reactivity, you need to reassign the variable completely instead of using a method that modifies it in-place (like <code>slice</code> or <code>push</code>):
</p>

<pre><code>{`<script>
  let count = 0;
  $: doubled = count * 2;
  $: console.log('count is ' + count);
  $: if (count >= 10) {
    console.error('count is crazy, crazy high');
    count = 0;
  }
  const increment = () => count += 1;

  let numbers = [1, 2, 3, 4];
  $: sum = numbers.reduce((total, curr) => total + curr, 0);

  const addNumber = () => numbers = [...numbers, numbers.length + 1];
</script>

<button on:click={increment}>
  Clicked {count} 
  {count === 1 ? 'time' : 'times'}
</button>

<p>
  {count} doubled is {doubled}.
</p>

<button on:click={addNumber}>
  Add a number man
</button>

<p>
  The sum {numbers.join(' + ')} is {sum}.
</p>`}</code></pre>

<h2>Props</h2>

<p>
  <b>Props</b> are for passing data from parent to child. You declare props in the receiving (child) component using the (confusing) syntax: <code>export let prop;</code>. Like function parameters you can have default values, and there's a special spread syntax for spreading an object of props if the properties are the same as the prop names:
</p>

<pre><code>{`// DataCard.svelte

<script>
  export let name = 'Defaulto';
  export let version;

  $: href = 'https://npmjs.com/package/' + name + '/' + version;
</script>

<div>
  The name is {name}. Here's a link to it: {link}.
</div>`}</code></pre>

<pre><code>{`// App.svelte
<script>
  import DataCard from './DataCard.svelte';

  const props = {
    name: 'Crapoid',
    version: 13,
  };
</script>

// All valid:
<DataCard name="Crapoid2" version="24" />
<DataCard />
<DataCard {...props} />`}</code></pre>

<h2>Logic</h2>

<p>
  Svelte has lots of syntax for expressing logic in HTML, mainly special <code>{'{#if}'}</code>, <code>{'{:else}'}</code>, <code>{'{#each}'}</code> and <code>{'{#await}'}</code> tags.
</p>

<pre><code>{`<script>
  let count = 0;
  let colors = ['red', 'green', 'blue'];
  let promise = fetch('/json');
</script>

{#if count < 10}
  <p>Count is defo less than ten.</p>
{/if}

{#if count < 5}
  <p>Actually, it's like in the zero to five range.</p>
{:else} 
  <p>Actually, it's like in the six to ten range.</p>
{/if}

{#if count > 8}
  <p>It's so much greater than eight.</p>
{:else if count < 8 and count > 5}
  <p>It's giving five to eight</p>
{:else}
  <p>Yeah, it's less than five alright.</p>
{/if}

{#each colors as color}
  <div style="background-color: {color}">{color}</div>
{/each}

{#each colors as color, i}
  <div style="background-color: {color}">{i}</div>
{/each}

{#await promise}
  <p>Waiting...</p>
{:then fetchedJson}
  <p>Cool. The JSON is {JSON.stringify(fetchedJson)}</p>
{:catch}
  <p>Dang man, it messed up. Idk man...</p>
{/await}`}</code></pre>

<p>
  There is a thing where you will need to pass a key to an <code>{'{#each}'}</code> block like <code>{'{#each colors as color {color.id}}'}</code> for Svelte to update the children of the <code>{'{#each}'}</code> block properly.
</p>

<h2>Events</h2>

<p>
  Svelte also has some special syntax for declaring event handlers:
</p>

<ul>
  <li>
    Instead of setting an <code>onclick="..."</code> attribute, you pass a function to an <code>on</code> attribute: <code>{'on:click={handler}'}</code>.
  </li>

  <li>
    Setting event handlers inline isn't frowned upon.
  </li>

  <li>
    Event handlers can have <b>modifiers</b>, which can be strung together, and are shorthand ways of indicating things like:
    <ul>
      <li><code>once</code>: call this handler once and then remove it.
      <li><code>preventDefault</code>: call <code>event.preventDefault()</code> before running the handler.
    </ul>
  </li>
</ul>

<pre><code>{`<script>
  const sayHowdy = () => console.log('Howdy.');
</script>

<button on:click={() => console.log('Hey.')}>
  Say hey
</button>

<button on:click|once={sayHowdy}>
  Say howdy once
</button>
`}</code></pre>

<p>
  Components can fire special <b>component events</b> using a <b>event dispatcher</b>, which can be caught by a handler set in a parent. The object passed in the call to <code>dispatch</code> is stored at the <code>.detail</code> property of the event. Component events don't automatically bubble, so to catch one a few layers of components deep, the intermediate components must <b>forward</b> the event (although there is shorthand syntax for forwarding events of a certain type). This syntax also works for plain old DOM events.
</p>

<pre><code>{`// Inner.svelte

<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const sayHello = () => dispatch(
    'message',
    {
      text: 'Hello!'
    }
  );
</script>

<button on:click={sayHello}>Say hello</button>`}</code></pre>

<pre><code>{`// Outer.svelte

<script>
  import Inner from './Inner.svelte';
</script>

// This 'on:message' attribute is the shorthand for forwarding 'message' events
<Inner on:message />

// This DOM event gets forwarded up to App
<button on:click>Handle this click in App</button>`}</code></pre>

<pre><code>{`// App.svelte

<script>
  import Outer from './Outer.svelte';
</script>

<Outer 
  on:message={event => console.log(event.detail.text)} 
  on:click={event => console.log('This is a normal DOM event', event)} 
/>`}</code></pre>

<h2>Bindings</h2>

<p>
  Say you set an <code>&lt;input&gt;</code>'s value with <code>{'value={variable}'}</code>. When the user changes the value of the input, your <code>variable</code> doesn't get updated unless you register an <code>{'on:input'}</code> handler to update your <code>variable</code>-- Svelte has a way to avoid this boilerplate. You can keep the <code>value</code> of your <code>&lt;input&gt;</code> bound to your <code>variable</code> with a <b>bind</b>, which you set with
</p>

<pre><code>{`<input bind:value={variable}>`}</code></pre>

<p>
  Changes to your <code>variable</code> will also be automatically reflected in your <code>&lt;input&gt;</code>, too. If you <code>bind</code> to an <code>&lt;input&gt;</code> with <code>type="number"</code>, Svelte will automatically convert the bound variable to a number for you. For checkboxes, remember to bind to <code>checked</code>, not <code>value</code>. Binding works for <code>&lt;select&gt;</code> elements.
</p>

<p>
  For radio buttons, you can <code>{'bind:group={selectedRadioButtonValue}'}</code>, so <code>selectedRadioButtonValue</code> will be synchronized with the value bound to the currenly selected radio button. Similarly for checkboxes, <code>bind:group</code> will update the bound array with the values bound to each currently checked inputs. <code>&lt;select multiple ... &gt;</code> will populate an array. You can omit a <code>value</code> for the <code>&lt;option&gt;</code>s if the elements' contents match what the value would have been otherwise.
</p> 

<p>
  Finally, if the name of your variable matches the attribute you're binding too, there's a shorthand syntax: <code>bind:value</code> (where <code>value</code> is the attribute you're binding to).
</p>

<h2>Lifecycle</h2>

<p>
  Components all have a <b>lifecycle</b> that starts when they're created and ends when they're destroyed. You can register a callback to be called when the component is created with <code>onMount</code>, and your callback can return another callback to to be called when the component is destroyed.
</p>

<p>
  <code>beforeUpdate</code> and <code>afterUpdate</code> register callbacks to be called (respectively) right before and after the DOM gets updated.
</p>

<p>
  The <code>tick</code> function returns a promise that resolves as soon as any pending state changes are applied to the DOM. Updating component state doesn't happen immeadiately, instead Svelte waits for the next <b>microtask</b> to see if there are any other state changes that need to be applied. Foing it this way allows the browser to batch things more effectively and avoid duplicate work.
</p>

<h2>Stores</h2>

