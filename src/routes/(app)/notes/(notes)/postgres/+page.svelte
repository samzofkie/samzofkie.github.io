<style>
  table {
    display: flex;
    flex-direction: column;
    gap: var(--padding-0);
  }

  tr {
    display: grid;
    grid-template-columns: repeat(4, 25%);
  }

  tc, th {
    justify-self: center;
  }

  tc code {
    display: inline-block;
    line-height: 1em;
  }

  .special-values tr {
    grid-template-columns: repeat(3, 33%);
  }
</style>

<h1>Postgres</h1>

<h2>Data types</h2>

<h3> Date / time types</h3>

<table>
  <tr>
    <th>Name</th> 
    <th>Storage size (bytes)</th> 
    <th>Range</th> 
    <th>Resolution</th>
  </tr>
  <tr>
    <tc><code>timestamp</code></tc>
    <tc>8</tc> 
    <tc>4713 BC to 294276 AD</tc> 
    <tc>1 microsecond</tc>
  </tr>
  <tr>
    <tc><code>timestamp with time zone</code></tc>
    <tc>8</tc> 
    <tc>4713 BC to 294276 AD</tc> 
    <tc>1 microsecond</tc>
  </tr>
  <tr>
    <tc><code>date</code></tc>
    <tc>4</tc>
    <tc>4713 BC to 5874897 AD</tc>
    <tc>1 day</tc>
  </tr>
  <tr>
    <tc><code>time</code></tc>
    <tc>8</tc>
    <tc>00:00:00 to 24:00:00 (time of day)</tc>
    <tc>1 microsecond</tc>
  </tr>
  <tr>
    <tc><code>time with time zone</code></tc>
    <tc>12</tc>
    <tc>00:00:00+1559 to 24:00:00-1559</tc>
    <tc>1 microsecond</tc>
  </tr>
  <tr>
    <tc><code>interval</code></tc>
    <tc>16</tc>
    <tc>-178000000 years to 178000000 years</tc>
    <tc>1 microsecond</tc>
  </tr>
</table>

<p>
  <code>time, timestamp</code> and <code>interval</code> accept an optional precision value <code>p</code>.
</p>

<p>
  Date and time input is accepted in a ton of formats. Generally, ISO 8601 (<code>1998-04-07</code>) is recommended.
</p>

<p>
  Valid input for a time-of-day type is a time of day, followed by an optional time zone. <code>04:05</code>, <code>04:05:06</code>, <code>04:05:06.789</code>, or <code>04:05:06.789-8</code> (ISO 8601 with time zone as UTC offset) formats are great for the time component, and abbreviations (like <code>PST</code> for Pacific Standard Time) or full time zone names (<code>America/New_York</code>) are great for time zones.
</p>

<p>
  Valid input for the <code>timestamp</code> types are
</p>

<pre><code>1999-01-08 04:05:06</code></pre>

and

<pre><code>1999-01-08 04:05:06 -8:00</code>,</pre>

<p>
  which both follow ISO 8601.
</p>

<p>
  Postgres will not infer that you want a <code>TIMESTAMP WITH TIME ZONE</code> type from <code>TIMESTAMP 1999-01-08 04:05:06 -8:00</code>, it will automatically assume <code>TIMESTAMP WITHOUT TIME ZONE</code> and ignore the UTC offset.
</p>

<h4>Special values</h4>
<table class="special-values">
  <tr>
    <th>Input string</th>
    <th>Valid types</th>
    <th>Description</th>
  </tr>
  <tr>
    <tc><code>epoch</code></tc>
    <tc><code>date</code>, <code>timestamp</code></tc>
    <tc>1970-01-01 00:00:00+00 (Unix system time zero)</tc>
  </tr>
  <tr>
    <tc><code>infinity</code></tc>
    <tc><code>date</code>, <code>timestamp</code></tc>
    <tc>Later than all other timestamps</tc>
  </tr>
  <tr>
    <tc><code>-infinity</code></tc>
    <tc><code>date</code>, <code>timestamp</code></tc>
    <tc>Earlier than all other timestamps</tc>
  </tr>
  <tr>
    <tc><code>now</code></tc>
    <tc><code>date</code>, <code>time</code>, <code>timestamp</code></tc>
    <tc>Current transaction's start time</tc>
  </tr>
  <tr>
    <tc><code>today</code></tc>
    <tc><code>date</code>, <code>timestamp</code></tc>
    <tc>Midnight (00:00:00) today</tc>
  </tr>
  <tr>
    <tc><code>tomorrow</code></tc>
    <tc><code>date</code>, <code>timestamp</code></tc>
    <tc>Midnight (00:00:00) tomorrow</tc>
  </tr>
  <tr>
    <tc><code>yesterday</code></tc>
    <tc><code>date</code>, <code>timestamp</code></tc>
    <tc>Midnight (00:00:00) yesterday</tc>
  </tr>
</table>

<p>
  Time output format can be specified, but the default is ISO 8601. Time zone format for ISO 6801 is always in the format <code>+/-hh</code>, the signed numeric offset from UTC.
</p>

<p>
  Because of weirdness due to daylights savings, it's best practice to use a type that has both time and date when using timezones, and avoiding the <code>time with time zone</code> type.
</p>

<p>
  When specifying time zone data, the difference between using an abbreviation or the full IANA time zone name is that the full name implies subjectivity to daylight savings rules, whereas an abbreviation is basically the same as a UTC offset. 
</p>

<p>
  Time zone data isn't hard wired into the server, it's derived from timezone configuration files stored on the system.
</p>

<p>
  <code>interval</code> values follow this syntax:
</p>

<pre><code>[@] quantity unit [quantity unit...] [direction]</code></pre>

<p>
  where <code>quantity</code> is a number and <code>unit</code> is one of
</p>

<div style="display: flex; flex-flow: row wrap; gap: 10px; justify-content: center;">
  {#each [
    'microsecond',
    'millisecond',
    'second',
    'minute',
    'hour',
    'day',
    'week',
    'month',
    'year',
    'decade',
    'century',
    'millenium',
  ] as unit}
    <code>{unit}</code>
  {/each}
</div>

<h2>Full text search</h2>

<p>
  <b>Full text search</b> is a feature allowing users to query for natual language <b>documents</b>, the most common type being documents containing <b>query terms</b> sorted by similarity to the query.
</p>

<p>
  Full text indexing allows documents to be <b>preprocessed</b> and an index saved to improve the performance of subsequent searches. Preprocessing includes:
</p>

<ul>
  <li>
    Parsing documents into tokens such as numbers, words, email addresses, ect. for application-specific processing.
  </li>
  <li>
    Converting tokens into lexemes, <b>normalizing</b> them so different forms of the same word are made alike, such as converting upper-case to lower-case and removing suffixes, and eliminating stop-words (words so common they are useless for searching). Postgres uses <b>dictionaries</b> for this step.
  </li>
  <li>
    Storing preprocessed documents in a way optimized for search, for example as a sorted array of normalized lexemes. Sometimes it is useful to store positional information to use <b>proximity ranking</b> so that a document with a more dense region of query words is ranked higher.
  </li>
</ul>

<p>
  A data type called <code>tsvector</code> is provided for storing preprocessed documents along with a type <code>tsquery</code> for representing processed queries.
</p>

<p>
  A <b>document</b> is the unit of search in a full text search system (for example, a magazine article or email). It is usually a textual field in a row of a table or a concatenation of textual fields, and might not be stored anywhere as a whole (when concatenating fields, use <code>coalesce</code> instead of <code>||</code>).
</p>