class Bold {
  constructor (quillJS) {
    this.quillJS = quillJS
    this.name = 'bold'
    this.pattern = /(\*|_){2}(.+?)(?:\1){2}/g
    this.getAction.bind(this)
  }

  getAction () {
    return {
      name: this.name,
      pattern: this.pattern,
      action: (text, selection, pattern, lineStart) => {
        let match = pattern.exec(text)

        const [annotatedText, , matchedText] = match
        const startIndex = lineStart + match.index
        if (text.match(/^([*_ \n]+)$/g)) return false

        setTimeout(() => {
          this.quillJS.deleteText(startIndex, annotatedText.length)
          this.quillJS.insertText(startIndex, matchedText, { bold: true })
          this.quillJS.format('bold', false)
        }, 0)
        return true
      }
    }
  }
}

export default Bold
