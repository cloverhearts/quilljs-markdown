class Codeblock {
  constructor (quillJS) {
    this.quillJS = quillJS
    this.name = 'pre'
    this.pattern = /^(```)/g
    this.getAction.bind(this)
  }

  getAction () {
    return {
      name: this.name,
      pattern: this.pattern,
      action: (text, selection, pattern) => {
        const match = pattern.exec(text)
        if (!match) { return false }
        const originalText = match[0] || ''
        const [line] = this.quillJS.getLine(selection.index)
        setTimeout(() => {
          const startIndex = this.quillJS.getIndex(line)
          // const startIndex = selection.index - originalText.length - 1
          this.quillJS.deleteText(startIndex, originalText.length + 1)
          setTimeout(() => {
            // const newLinePosition = startIndex + 1 + '\n'.length + 1
            let line = this.quillJS.getLine(startIndex)[0]
            while (line) {
              const lineOffset = this.quillJS.getIndex(line)
              const _text = line.domNode.textContent
              const offsetText = line.domNode.textContent.length
              const isBreak = this.pattern.test(_text)
              if (isBreak) {
                this.quillJS.deleteText(lineOffset, _text.length)
                return
              }
              this.quillJS.formatLine(lineOffset, 0, 'code-block', true)
              line = this.quillJS.getLine(lineOffset + offsetText + 1)[0]
            }
          }, 0)
        }, 0)
        return true
      },
      release: () => {
        setTimeout(() => {
          const cursorIndex = this.quillJS.getSelection().index
          const block = this.quillJS.getLine(cursorIndex)[0]
          const blockText = block.domNode.textContent
          if (block && blockText && blockText.replace('\n', '').length <= 0) {
            this.quillJS.format('code-block', false)
          }
        }, 0)
      }
    }
  }
}

export default Codeblock
