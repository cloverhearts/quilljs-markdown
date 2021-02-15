import meta from './meta'

class Blockquote {
  constructor (quillJS, options = {}) {
    this.quillJS = quillJS
    this.name = 'blockquote'
    this.pattern = options.tags && options.tags.blockquote && options.tags.blockquote.pattern ? options.tags.blockquote.pattern : /^(>)\s/g
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
      action: (text, selection, pattern) => new Promise((resolve) => {
        const match = pattern.exec(text)
        if (!match || !this.activeTags.length) {
          resolve(false)
          return
        }
        const originalText = match[0] || ''
        setTimeout(() => {
          this.quillJS.formatText(selection.index, 1, 'blockquote', true)
          this.quillJS.deleteText(
            selection.index - originalText.length,
            originalText.length
          )
          resolve(true)
        }, 0)
      }),
      release: () => {
        setTimeout(() => {
          const contentIndex = this.quillJS.getSelection().index

          const [, length] = this.quillJS.getLine(contentIndex)
          if (length === 0) this.quillJS.format('blockquote', false)
        }, 0)
      }
    }
  }
}

export default Blockquote
