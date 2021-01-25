class Link {
  constructor (quillJS) {
    this.quillJS = quillJS
    this.name = 'list'
    this.pattern = /^(\d)+\.\s/g
    this.getAction.bind(this)
  }

  getAction () {
    return {
      name: this.name,
      pattern: this.pattern,
      action: (text, selection, pattern) => {
        const match = pattern.exec(text)
        if (!match) return false
        const [line] = this.quillJS.getLine(selection.index)
        const index = this.quillJS.getIndex(line)
        setTimeout(() => {
          const replaceText = text.split('. ').splice(1, 1).join('')
          this.quillJS.insertText(index, replaceText)
          this.quillJS.deleteText(index + replaceText.length - 1, text.length)
          setTimeout(() => {
            this.quillJS.formatLine(index, 0, 'list', 'ordered')
          })
        }, 0)
      }
    }
  }
}

export default Link
