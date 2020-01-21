---
layout: page
title: Markdown Styling Guide 
image: '/assets/images/green-trees-by-the-lake-2949717.jpg'
toc: true
permalink: /style-guide/
---

This is the first paragraph of the post. Paragraphs are separated by blank lines.

This is the second paragraph. Text can be *italic*, **bold**, ~~strikethrough~~, and `monospace`. [Links](/) are underlined. Footnotes appear like so [^1] and so [^2].

[^1]: Footnote 1 description
[^2]: Footnote 2 description

You can create blockquotes like this:

> Give a man fire and he'll be warm for a day, set a man on fire and he'll be warm the rest of his life.

# h1 heading

First paragraph following a h1 heading. Headings will appear in the table of contents on the left of the post if `toc: true` is specified in the post [front matter](https://jekyllrb.com/docs/front-matter/).

## h2 heading

First paragraph following a h2 heading.

### h3 heading

First paragraph following a h3 heading.

#### h4 heading

First paragraph following a h4 heading.

##### h5 heading

First paragraph following a h5 heading.

###### h6 heading

An ordered list:

1. Frankly my dear
2. I don't give
3. a damn

An unordered list:

- I'm gonna make him
- an offer
- he can't refuse

A nested list:

- Surely
  - you can't
  - be serious
- I am serious
  - and don't call me
  - Shirley

Another nested list:

1. I've had it with these
   1. monkey-fighting
   2. snakes
2. On this
  - monday to friday
  - plane

Definition lists:

Bond
: James Bond

Royale with cheese
: How they call a cheeseburger in France

Markdown tables look like this:

| Film                 | Director     | Year |
| -------------------- | ------------ | ---- |
| In the mood for love | Wong Kar Wai | 2000 |
| His Girl Friday      | Howard Hawks | 1940 |
| Tokyo Story          | Yasujiro Ozu | 1953 |

A horizontal rule:

---

Code blocks look like this:

```
This is what happens when you find a stranger in the alps.
```

Syntax highlighting is also supported.

```java
// java

String quote = "may the force be with you";
for (String s : quote.split(" ")) {
  System.out.println(s);
}
```

Long single-line code blocks scroll horizontally instead of wrapping.

```
Let me tell you something pendejo. You pull any of your crazy shit with us. You flash your piece out on the lanes. I'll take it away from you, stick up your ass and pull the fucking trigger 'til it goes click.
```

Last but not least, images:

![small](/assets/images/flower-in-glass-jar.jpg)
![large](/assets/images/flower-in-glass-jar-large.jpg)

fin.