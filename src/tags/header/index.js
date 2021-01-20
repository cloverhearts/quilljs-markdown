class Header {
  constructor (quillJS) {
    this.quillJS = quillJS
    this.name = 'header'
    this.pattern = /^(#){1,6}\s/g
    this.getAction.bind(this)
  }

  getAction () {
    return {
      name: this.name,
      pattern: this.pattern,
      action: (text, selection, pattern) => {
        const match = pattern.exec(text)
        if (!match) return false
        const size = match[0].length
        const [line] = this.quillJS.getLine(selection.index)
        const index = this.quillJS.getIndex(line)
        setTimeout(() => {
          this.quillJS.formatLine(index, 0, 'header', size - 1)
          this.quillJS.deleteText(index, size)
        }, 0)
        return true
      }
    }
  }
}

export default Header
