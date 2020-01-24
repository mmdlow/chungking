# chungking

Chungking is a modern, elegant Jekyll theme with a focus on clear yet stylish content delivery. If you're looking to do some heavy blogging or article writing, Chungking is for you.

## Features

#### Featured post carousel

Show off the best posts on your site via an image carousel on the main page. Any post with the `featured: true` property set in the front matter will automatically be added to the carousel.

#### Table of contents

For long posts with multiple sections, generate a table of contents corresponding to the markdown headers in your text. It's as simple as setting `toc: true` in your front matter.

#### Mobile-ready

Chungking's responsive design ensures smooth scaling across devices with different screen sizes.

## Configuration

#### Posts

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

#### Pages

New pages added in the `_pages` directory are automatically added to the header nav menu.

Page front matter configuration is similar to Post front matter, excluding the `blurb` and `featured` properties.

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "chungking"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: chungking
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install chungking

## Contributing

Bug reports and pull requests are welcome on [GitHub](https://github.com/mmdlow/chungking). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `chungking.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
