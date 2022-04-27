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
<script src="https://cdn.jsdelivr.net/npm/quilljs-markdown@latest/dist/quilljs-markdown.js"></script>
```


## How to use
```javascript
import Quill from 'quill'
import QuillMarkdown from 'quilljs-markdown'
import 'quilljs-markdown/dist/quilljs-markdown-common-style.css' // recommend import css, @option improve common style

const options = {
  theme: 'snow'
}

document.addEventListener('DOMContentLoaded', () => {
  const editor = new Quill('#editor', options)
  const markdownOptions = {
    /**
     ignoreTags: [ 'pre', 'strikethrough'], // @option - if you need to ignore some tags.
     
     tags: { // @option if you need to change for trigger pattern for some tags. 
      blockquote: {
        pattern: /^(\|){1,6}\s/g,
      },
      bold: {
        pattern:  /^(\|){1,6}\s/g,
      },
      italic: {
        pattern: /(\_){1}(.+?)(?:\1){1}/g,
      },
    },
    */
  };
  
  // markdown is enabled
  const quillMarkdown = new QuillMarkdown(editor, markdownOptions)
  
  // markdown is now disabled  
  // quillMarkdown.destroy()
  
})


```

or 

```html

<script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
<script src="https://cdn.jsdelivr.net/npm/quilljs-markdown@latest/dist/quilljs-markdown.js"><script>
<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/quilljs-markdown@latest/dist/quilljs-markdown-common-style.css" rel="stylesheet" >

<script>
    document.addEventListener('DOMContentLoaded', () => {
      var quill = new Quill('#editor', {
        theme: 'snow'
      });
      var markdownOptions = {
        ignoreTags: [ 'strikethrough'], // @option - if you need to ignore some tags.
    
        tags: { // @option if you need to change for trigger pattern for some tags. 
        blockquote: {
          pattern: /^(\|){1,6}\s/g,
        },
        bold: {
          pattern:  /^(\|){1,6}\s/g,
        },
        italic: {
          pattern: /(\_){1}(.+?)(?:\1){1}/g,
        },
      },
    };
      new QuillMarkdown(editor, markdownOptions)
    })
<script>

```

## destroy
Call `destroy()` to remove the event listener and disable markdown support:

```
const quillMarkdown = new QuillMarkdown(editor, markdownOptions)
// markdown is enabled

quillMarkdown.destroy()
// markdown is now disabled

```

To re-enable support, create a new instance.


### Paste support for Markdown format.
Pasting the Markdown form,

Shows the corresponding Markdown result.

### Heading (tagname : h1, h2, h3 ,h4, h5, h6, header(all))
```markdown
# MyTitle
## MyTitle
### MyTitle
#### MyTitle
##### MyTitle
```

### Blockquote (tagname : blockquote)
```markdown
> blockquote text
```

### bold (tagname : bold)
```markdown
**Bold Text**
__Bold Text__
```

### Italic (tagname : italic)
```markdown
*Italics Text*
_Italics Text_
```

### Link (tagname : link)
```markdown
[link text](https://link_url)
```

### inline code  (tagname : code)
```markdown
`inline code block`
```


### Code block  (tagname : pre)

&#96;&#96;&#96;<br>
code block<br>
&#96;&#96;&#96;<br>

### List  (tagname : ol, ul)

```markdown
1. one
2. two
3. three

* one
* two
* three
```

### Strikethrough  (tagname : strikethrough)

```markdown
~~Strikethrough~~
```

### Checkbox  (tagname : checkbox)

```markdown
[ ] checkbox
[x] checked
```
