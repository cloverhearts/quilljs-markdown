class Codeblock {
  constructor (quillJS) {
    this.quillJS = quillJS
    this.name = 'pre'
    this.pattern = /^(```)\s/g
    this.getAction.bind(this)
  }

  getAction () {
    return {
      name: this.name,
      pattern: this.pattern,
      action: (text, selection, pattern) => {
        const match = pattern.exec(text)
        console.log('code block')
        if (!match) { return }
        const originalText = match[0] || ''
        setTimeout(() => {
          // this.quillJS.insertText(selection.index, 'jjjj \n', { codeBlock: true })
          this.quillJS.formatText(selection.index, selection.index + 1, 'code-block', true)
          // this.quillJS.insertText(selection.index, 'jjjj \n')
          // this.quillJS.formatText(selection.index, 1, 'code-block', true)
          // this.quillJS.deleteText(selection.index - originalText.length, originalText.length)
        }, 0)
      },
      release: () => {
        setTimeout(() => {
          this.quillJS.format('code-block', false)
          const contentIndex = this.quillJS.getSelection().index
          const beforeLine = this.quillJS.getLine(contentIndex - 1)[0]
          if (beforeLine.domNode.textContent === '') {
            beforeLine.format('code-block', false)
          }
        }, 0)
      }
    }
  }
}

export default Codeblock
