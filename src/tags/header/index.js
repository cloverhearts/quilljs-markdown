import meta from './meta'

class Header {
  constructor (quillJS, options = {}) {
    this.quillJS = quillJS
    this.name = 'header'
    this.pattern = options.pattern || /^(#){1,6}\s/g // todo(cloverhearts): need to replace about structure
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
        if (!match) {
          resolve(false)
          return
        }
        const size = match[0].length
        const [line] = this.quillJS.getLine(selection.index)
        const index = this.quillJS.getIndex(line)

        if (!this.activeTags.includes(`h${size - 1}`)) {
          return resolve(false)
        }

        setTimeout(() => {
          this.quillJS.formatLine(index, 0, 'header', size - 1)
          this.quillJS.deleteText(index, size)
          resolve(true)
        }, 0)
      })
    }
  }
}

export default Header
