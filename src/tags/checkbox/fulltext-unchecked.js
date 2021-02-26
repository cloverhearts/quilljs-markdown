import AbstractTag from '../AbstractTag'
import meta from './meta'

class Checkbox extends AbstractTag {
  constructor (quillJS, options = {}) {
    super()
    this.quillJS = quillJS
    this.name = 'checkbox-unchecked'
    this.pattern = this._getCustomPatternOrDefault(options, this.name, /^(\[\s?\])+\s/g)
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
        const [line] = this.quillJS.getLine(selection.index)
        const index = this.quillJS.getIndex(line)
        setTimeout(() => {
          let replaceText = text.split('[ ] ').length > 1 ? text.split('[ ] ').splice(1, 1).join('') : text
          replaceText = replaceText.split('[] ').length > 1 ? replaceText.split('[] ').splice(1, 1).join('') : replaceText
          this.quillJS.insertText(index, replaceText)
          this.quillJS.deleteText(index + replaceText.length - 1, text.length)
          setTimeout(() => {
            this.quillJS.formatLine(index, 0, 'list', 'unchecked')
            resolve(true)
          })
        }, 0)
      })
    }
  }
}

export default Checkbox
