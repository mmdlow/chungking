---
layout: page
title: About
permalink: /about/
toc: false
---

Chungking is a modern, elegant Jekyll theme with a focus on clear yet stylish content delivery. If you're looking to do some heavy blogging or article writing, Chungking is for you.

### Features

##### Featured post carousel

Show off the best posts on your site via an image carousel on the main page. Any post with the `featured: true` property set in the front matter will automatically be added to the carousel.

##### Table of contents

For long posts with multiple sections, generate a table of contents corresponding to the markdown headers in your text. It's as simple as setting `toc: true` in your front matter.

##### Mobile-ready

Chungking's responsive design ensures smooth scaling across devices with different screen sizes.

### Configuration

##### Posts

Possible front matter configuration for posts:

```
---
layout: post
title: My Post
blurb: A short description of the post. Truncates at 25 words.
image: /path/to/post/cover/image.jpg
# images typically go in the assets/images folder

featured: true
# Adds this post to the featured carousel on the home page

toc: true
# Generates a table of contents for the current post, based on the markdown header # tags in the text
---

My text...
```

##### Pages

New pages added in the `_pages` directory are automatically added to the header nav menu.

Page front matter configuration is similar to Post front matter, excluding the `blurb` and `featured` properties.
