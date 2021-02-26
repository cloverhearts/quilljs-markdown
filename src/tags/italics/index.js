import AbstractTag from '../AbstractTag'
import meta from './meta'

class Bold extends AbstractTag {
  constructor (quillJS, options = {}) {
    super()
    this.quillJS = quillJS
    this.name = 'italic'
    this.pattern = this._getCustomPatternOrDefault(options, this.name, /(\*|_){1}(.+?)(?:\1){1}/g)
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

        if (!match || !this.activeTags.length) {
          resolve(false)
          return
        }

        const [annotatedText, matchedToken, matchedText] = match
        const firstToken = (this.quillJS.getText())[lineStart + match.index]
        const secondToken = (this.quillJS.getText())[lineStart + match.index + 1]

        if (matchedToken === firstToken && firstToken === secondToken) {
          resolve(false)
          // duplicated match string tag. ** or __
          return
        }

        const startIndex = lineStart + match.index

        setTimeout(() => {
          this.quillJS.deleteText(startIndex, annotatedText.length)
          this.quillJS.insertText(startIndex, matchedText, { italic: true })
          this.quillJS.format('italic', false)
          resolve(true)
        }, 0)
      })
    }
  }
}

export default Bold
