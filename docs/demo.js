import Quill from 'quill'
import QuillMarkdown from '../src/app'

const options = {
  theme: 'snow'
}

document.addEventListener('DOMContentLoaded', () => {
  const editor = new Quill('#editor', options)
  const markdownOptions = {
    ignoreTags: [ 'strikethrough'],
    tags: {
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
