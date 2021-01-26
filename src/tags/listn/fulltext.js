class Link {
  constructor (quillJS) {
    this.quillJS = quillJS
    this.name = 'list'
    this.pattern = /^\s{0,9}(\d)+\.\s/g
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
        window.quillJS = this.quillJS
        setTimeout(() => {
          const depth = text.split('. ')[0].split('').filter(e => /\s/gi.test(e)).length
          const replaceText = text.split('. ').splice(1, 1).join('')
          window.t = text
          this.quillJS.insertText(index, replaceText)
          this.quillJS.deleteText(index + replaceText.length - 1, text.length)
          setTimeout(() => {
            this.quillJS.formatLine(index, 0, { list: 'ordered', indent: depth })
          })
        }, 0)
      }
    }
  }
}

export default Link
