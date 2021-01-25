class Blockquote {
  constructor (quillJS) {
    this.quillJS = quillJS
    this.name = 'blockquote'
    this.pattern = /^(>)\s/g
    this.getAction.bind(this)
  }

  getAction () {
    return {
      name: this.name,
      pattern: this.pattern,
      action: (text, selection, pattern) => {
        const match = pattern.exec(text)
        if (!match) {
          return false
        }
        const originalText = match[0] || ''
        setTimeout(() => {
          const startOffset = selection.index - 1
          this.quillJS.deleteText(startOffset, 2)
          setTimeout(() => {
            this.quillJS.formatLine(startOffset, originalText.length - 3, 'blockquote', true)
          }, 0)
        }, 0)
        return true
      }
    }
  }
}

export default Blockquote
