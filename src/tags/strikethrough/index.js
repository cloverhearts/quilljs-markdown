import AbstractTag from '../AbstractTag'
import meta from './meta'

class Bold extends AbstractTag {
  constructor (quillJS, options = {}) {
    super()
    this.quillJS = quillJS
    this.name = 'strikethrough'
    this.pattern = this._getCustomPatternOrDefault(options, this.name, /(?:~|_){2}(.+?)(?:~|_){2}/g)
    this.getAction.bind(this)
    this._meta = meta()
    this.activeTags = this._getActiveTagsWithoutIgnore(this._meta.applyHtmlTags, options.ignoreTags)
  }

  getAction () {
    return {
      name: this.name,
      pattern: this.pattern,
      action: (text, selection, pattern, lineStart) => new Promise((resolve) => {
        let match = pattern.exec(text)

        if (!this.activeTags.length) {
          resolve(false)
          return
        }

        const annotatedText = match[0]
        const matchedText = match[1]
        const startIndex = lineStart + match.index

        if (text.match(/^([~_ \n]+)$/g)) {
          resolve(false)
          return
        }

        setTimeout(() => {
          this.quillJS.deleteText(startIndex, annotatedText.length)
          this.quillJS.insertText(startIndex, matchedText, { strike: true })
          this.quillJS.format('strike', false)
          resolve(true)
        }, 0)
      })
    }
  }
}

export default Bold
