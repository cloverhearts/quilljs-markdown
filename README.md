# Markdown for Quill Editor
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

QuillJS Markdown shortcut Extension.

[NPM](https://www.npmjs.com/package/quilljs-markdown)

[DEMO](https://cloverhearts.github.io/quilljs-markdown/)

Wrote Library with ES6 and Standard Javascript Codestyle.

## How to install
### NPM 
```
npm i quilljs-markdown
```

or 

### CDN
```
<script src="https://cdn.jsdelivr.net/npm/quilljs-markdown@latest/dist/quilljs-markdown.js"><script>
```


## How to use
```javascript
import Quill from 'quill'
import QuillMarkdown from 'quilljs-markdown'

const editor = new Quill('#editor', options)
new QuillMarkdown(editor)

```

or 

```html

<script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
<script src="https://cdn.jsdelivr.net/npm/quilljs-markdown@latest/dist/quilljs-markdown.js"><script>
<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">

<script>
    document.addEventListener('DOMContentLoaded', () => {
      var quill = new Quill('#editor', {
        theme: 'snow'
      });
      new QuillMarkdown(quill)
    })
<script>

```
### Paste support for Markdown format.
Pasting the Markdown form,

Shows the corresponding Markdown result.

### Heading
```markdown
# MyTitle
## MyTitle
### MyTitle
#### MyTitle
##### MyTitle
```

### Blockquote
```markdown
> blockquote text
```

### bold
```markdown
**Bold Text**
__Bold Text__
```

### Italic
```markdown
*Italics Text*
_Italics Text_
```

### Link
```markdown
[link text](https://link_url)
```

### inline code
```markdown
`inline code block`
```


### Code block

&#96;&#96;&#96;<br>
code block<br>
&#96;&#96;&#96;<br>

### List

```markdown
1. one
2. two
3. three

* one
* two
* three
```

### Strikethrough

```markdown
~~Strikethrough~~
```

### Checkbox

```markdown
[ ] checkbox
[x] checked
```
