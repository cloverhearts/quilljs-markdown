import Quill from 'quill'
import MarkdownActivity from '../src/app'

const options = {
  theme: 'snow'
}

document.addEventListener('DOMContentLoaded', () => {
  const editor = new Quill('#editor', options)
  new MarkdownActivity(editor)
})
