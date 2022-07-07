import Quill from 'quill'
import QuillMarkdown from '../src/app'

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  [ 'link', 'image'],          // add's image support
];

const options = {
  theme: 'snow',
  modules: {
    toolbar: toolbarOptions,
    QuillMarkdown: {
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
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('HOHO')

  Quill.register('modules/QuillMarkdown', QuillMarkdown, true)

  new Quill('#editor', options)
})
