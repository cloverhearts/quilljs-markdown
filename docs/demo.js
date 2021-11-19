import Quill from 'quill'
import QuillMarkdown from '../src/app'

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  [ 'link', 'image'],          // add's image support
];

const options = {
  theme: 'snow',
  modules: {
    toolbar: toolbarOptions
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const editor = new Quill('#editor', options)
  new QuillMarkdown(editor)
})
