import AbstractTag from '../AbstractTag'
import meta from './meta'

class Codeblock extends AbstractTag {
  constructor (quillJS, options = {}) {
    super()
    this.quillJS = quillJS
    this.name = 'pre'
    this.pattern = this._getCustomPatternOrDefault(options, this.name, /^(```).*/g)
    this.getAction.bind(this)
    this._meta = meta()
    this.activeTags = this._getActiveTagsWithoutIgnore(this._meta.applyHtmlTags, options.ignoreTags)
  }

  getAction () {
    return {
      name: this.name,
      pattern: this.pattern,
      action: (text, selection, pattern) => new Promise((resolve) => {
        const match = pattern.exec(text)
        if (!match || !this.activeTags.length) {
          resolve(false)
          return
        }

        const originalText = match[0] || ''
        setTimeout(() => {
          const startIndex = selection.index - originalText.length
          this.quillJS.deleteText(startIndex, originalText.length)
          setTimeout(() => {
            this.quillJS.insertText(startIndex, '\n')
            const newLinePosition = startIndex + 1 + '\n'.length + 1
            this.quillJS.insertText(newLinePosition - 1, '\n')
            this.quillJS.formatLine(newLinePosition - 2, 1, 'code-block', true)
            resolve(true)
          }, 0)
        }, 0)
      }),
      release: () => {
        setTimeout(() => {
          const cursorIndex = this.quillJS.getSelection().index
          const block = this.quillJS.getLine(cursorIndex)[0]
          const blockText = block.domNode.textContent
          if (block && blockText && blockText.replace('\n', '').length <= 0) {
            this.quillJS.format('code-block', false)
          }
        }, 0)
      }
    }
  }
}

export default Codeblock
