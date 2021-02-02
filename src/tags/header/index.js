class Header {
  constructor (quillJS, options = {}) {
    this.quillJS = quillJS
    this.name = 'header'
    this.pattern = options.pattern || /^(#){1,6}\s/g
    this.getAction.bind(this)
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
