import Quill from 'quill'
import QuillMarkdown from '../src/app'

const options = {
  theme: 'snow'
}

document.addEventListener('DOMContentLoaded', () => {
  const editor = new Quill('#editor', options)
  new QuillMarkdown(editor)
})
