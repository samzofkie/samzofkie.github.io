<script>
  import { afterNavigate } from '$app/navigation';
  afterNavigate(() => document.title = 'SEO')
</script>

<h1>SEO</h1>

<p>
  A <b>sitemap</b> can help, but promoting your site is more important.
</p>

<p>
  Google offers a <a href="https://search.google.com/search-console/welcome">URL inspection tool</a> to show how their crawlers digest your page.
</p>

<p>
  Parts of the URLs in your site can be displayed in search results as "breadcrumbs", so it's helpful to organize your site using descriptive URL components. For example,
</p>

<blockquote>
  <code>https://www.mysite.com/circus/clowns.html</code>
</blockquote>

<p>
  is preferable to
</p>

<blockquote>
  <code>https://www.mysite.com/8/n8asj37fj</code>
</blockquote>

<p>
  By grouping similar pages together in directories, the crawler can (over time) learn which directories are likely to change more often, and will crawl them more frequently in response.
</p>

<p>
  Showing the same content under different URLs is called <b>duplicate content</b>, and is good to avoid. Search engines choose a single URL, the <b>canonical URL</b> to show users for each piece of content. You can even specify a canonical version for your pages explicitly with redirects, setting the <code>rel</code> attribute to <code>"canonical"</code> on <code>{`<link>`}</code> tags, or a sitemap. Generally, just try to make sure each piece of information on your site is only accessible through one URL.
</p>

<p>
  Making your site's content compelling and useful is paramount.
</p>

<ul>
  <li>
    Make sure writing is well-written and free of spelling and grammatical errors. Break long content into paragraphs and sections with headings to help users navigate.
  </li>
  <li>
    Make unique content, that isn't just a re-hash of other's content (lol).
  </li>
  <li>
    Keep content up to date, deleting and revising as necessary.
  </li>
</ul>

<p>
  Writing content keeping users' search terms in mind is also a good idea.
</p>

<p>
  Don't include too many distracting ads.
</p>

<p>
  Link to relevant resources. Make sure the text in your anchor tags is well-written and makes sense, so uses clicking on your link understand what they are navigating to before they click. When linking to untrusted content add a <code>rel="nofollow"</code> attribute so Google doesn't associate your site with the untrusted one (always do this for user-uploaded links).
</p>

<h2>Influence presentation in Google Search results</h2>

<p>
  The <b>title link</b> is the big, bold link text at the top of a Google Search result. The text of the title link usually comes from the <code>{`<title>`}</code> tag and / or other headings in the page. A good title is unique to your site, concise, and accurately describes the content of your site. Name of website or company, location or other small tidbits of helpful information.
</p>

<p>
  Below the title link is a text description of the target page called the <b>snippet</b>, which is taken from actual content on the page, or a <code>{`<meta>`}</code> tag that succinctly describes the page and includes it's most relevant points.
</p>

<h2>Images</h2>

<p>
  Place images next to relevant text. Writing good <code>alt</code> text is very important.
</p>

<p>
  If you embed your videos in standalone pages with relevant text nearby, your video may show up in Google Search video results.
</p>

<p>
  Promote your site! Word of mouth is best.
</p>
