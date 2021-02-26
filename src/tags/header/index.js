import meta from './meta'
import AbstractTag from '../AbstractTag'

class Header extends AbstractTag {
  constructor (quillJS, options = {}) {
    super()
    this.quillJS = quillJS
    this.name = 'header'
    this.pattern = this._getCustomPatternOrDefault(options, this.name, /^(#){1,6}\s/g)
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
        if (!match || !this.activeTags.length || !this.activeTags.find(tag => tag === 'header')) {
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
