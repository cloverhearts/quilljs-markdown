class Link {
  constructor (quillJS) {
    this.quillJS = quillJS
    this.name = 'list'
    this.pattern = /^(-|\*)+\s/g
    this.getAction.bind(this)
  }

  getAction () {
    return {
      name: this.name,
      pattern: this.pattern,
      action: (text, selection, pattern) => {
        const match = pattern.exec(text)
        if (!match) return false

        if (!(text.split('- ')[1]) && !(text.split('* ')[1])) {
          return
        }

        const [line] = this.quillJS.getLine(selection.index)
        const index = this.quillJS.getIndex(line)
        setTimeout(() => {
          let replaceText = text.split('- ').length > 1 ? text.split('- ').splice(1, 1).join('') : text
          replaceText = replaceText.split('* ').length > 1 ? replaceText.split('* ').splice(1, 1).join('') : replaceText
          this.quillJS.insertText(index, replaceText)
          this.quillJS.deleteText(index + replaceText.length - 1, text.length)
          setTimeout(() => {
            this.quillJS.formatLine(index, 0, 'list', 'bullet')
          })
        }, 0)
      }
    }
  }
}

export default Link
