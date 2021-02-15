import meta from './meta'

class Bold {
  constructor (quillJS, options = {}) {
    this.quillJS = quillJS
    this.name = 'bold'
    this.pattern = options.tags && options.tags.bold && options.tags.bold.pattern ? options.tags.bold.pattern : /(\*|_){2}(.+?)(?:\1){2}/g
    this.getAction.bind(this)
    this._meta = meta()
    this.activeTags = this._getActiveTagsWithoutIgnore(this._meta.applyHtmlTags, options.ignoreTags)
  }

  _getActiveTagsWithoutIgnore (tags, ignoreTags) {
    if (Array.isArray(ignoreTags)) {
      return tags.reduce((allowTags, tag) => {
        if (!ignoreTags.includes(tag)) {
          allowTags.push(tag.toLowerCase())
        }
        return allowTags
      }, [])
    }
    return tags
  }

  getAction () {
    return {
      name: this.name,
      pattern: this.pattern,
      action: (text, selection, pattern, lineStart) => new Promise((resolve) => {
        let match = pattern.exec(text)

        const [annotatedText, , matchedText] = match
        const startIndex = lineStart + match.index
        if (text.match(/^([*_ \n]+)$/g) || !this.activeTags.length) {
          resolve(false)
          return
        }

        setTimeout(() => {
          this.quillJS.deleteText(startIndex, annotatedText.length)
          setTimeout(() => {
            this.quillJS.insertText(startIndex, matchedText, { bold: true })
            this.quillJS.format('bold', false)
            resolve(true)
          })
        }, 0)
      })
    }
  }
}

export default Bold
