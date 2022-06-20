# Miso Health

An integrated, holistic health companion for women to age gracefully and happily together.

## Usage

To run the project, install jekyll & then `bundle install` to install all the dependency:
```bash
gem install bundler jekyll
bundle install
```

Run the project:
```bash
bundle exec jekyll serve
```

Draft blog:
```bash
bundle exec jekyll serve --draft
```

Run tailwind for styling:
```bash
npx tailwindcss -i ./assets/main.css -o ./assets/dist/main.css --watch
```

### How to create a new page:
1. Copy and paste ./dr-mahesh-jude-perera.html
2. Rename the file with the clinician's name
3. Update the Add YAML front matter. YAML(Yet Another Markup Language) lies at the top of the page inside three dashes.
```html
---
layout: default
permalink: /new-clinician-url/
---
```
For more in depth info, check out [Jekyll official documentation](https://jekyllrb.com/docs/pages/)

## Tasks
✅ Clinician's detail page
✅ Clinician's widget
- Booking appointment