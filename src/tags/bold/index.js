class Bold {
  constructor (quillJS, options = {}) {
    this.quillJS = quillJS
    this.name = 'bold'
    this.pattern = options.pattern || /(\*|_){2}(.+?)(?:\1){2}/g
    this.getAction.bind(this)
  }

  getAction () {
    return {
      name: this.name,
      pattern: this.pattern,
      action: (text, selection, pattern, lineStart) => new Promise((resolve) => {
        let match = pattern.exec(text)

        const [annotatedText, , matchedText] = match
        const startIndex = lineStart + match.index
        if (text.match(/^([*_ \n]+)$/g)) {
          resolve(false)
          return
        }

        setTimeout(() => {
          this.quillJS.deleteText(startIndex, annotatedText.length)
          setTimeout(() => {
            this.quillJS.insertText(startIndex, matchedText, { bold: true })
            this.quillJS.format('bold', false)
            resolve(true)
          })
        }, 0)
      })
    }
  }
}

export default Bold
