import AbstractTag from '../AbstractTag'
import meta from './meta'

class Blockquote extends AbstractTag {
  constructor (quillJS, options = {}) {
    super()
    this.quillJS = quillJS
    this.name = 'blockquote'
    this.pattern = this._getCustomPatternOrDefault(options, this.name, /^\s{0,99}(>)\s/g)
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
          const startOffset = selection.index - 1
          this.quillJS.deleteText(startOffset, 2)
          setTimeout(() => {
            this.quillJS.formatLine(startOffset, originalText.length - 3, 'blockquote', true)
            resolve(true)
          }, 0)
        }, 0)
      })
    }
  }
}

export default Blockquote
