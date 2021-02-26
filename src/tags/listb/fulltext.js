import AbstractTag from '../AbstractTag'
import meta from './meta'

class Link extends AbstractTag {
  constructor (quillJS, options = {}) {
    super()
    this.quillJS = quillJS
    this.name = 'ul'
    this.pattern = this._getCustomPatternOrDefault(options, this.name, /^\s{0,9}(-|\*){1}\s/)
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

        if (!(text.split('- ')[1]) && !(text.split('* ')[1])) {
          resolve(false)
          return
        }

        const [line] = this.quillJS.getLine(selection.index)
        const index = this.quillJS.getIndex(line)

        setTimeout(() => {
          let offsetText = /^\s{0,9}(\*){1}\s/.test(text) ? text.replace('*', '-') : text
          const depth = offsetText.split('- ')[0].split('').filter(e => /\s/gi.test(e)).length
          let replaceText = offsetText.split('- ').length > 1 ? offsetText.split('- ').splice(1, 1).join('') : offsetText
          this.quillJS.insertText(index, replaceText)
          this.quillJS.deleteText(index + replaceText.length - 1, text.length)
          setTimeout(() => {
            this.quillJS.formatLine(index, 0, { list: 'bullet', indent: depth })
            resolve(true)
          }, 0)
        }, 0)
      })
    }
  }
}

export default Link
