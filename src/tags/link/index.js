class Link {
  constructor (quillJS) {
    this.quillJS = quillJS
    this.name = 'link'
    this.pattern = /(?:\[(.+?)\])(?:\((.+?)\))/g
    this.getAction.bind(this)
  }

  getAction () {
    return {
      name: this.name,
      pattern: this.pattern,
      action: (text, selection, pattern) => {
        const startIndex = text.search(pattern)
        const matchedText = text.match(pattern)[0]
        const hrefText = text.match(/(?:\[(.*?)\])/g)[0]
        const hrefLink = text.match(/(?:\((.*?)\))/g)[0]
        const start = selection.index - matchedText.length - 1
        if (startIndex !== -1) {
          setTimeout(() => {
            this.quillJS.deleteText(start, matchedText.length)
            this.quillJS.insertText(start, hrefText.slice(1, hrefText.length - 1),
              'link', hrefLink.slice(1, hrefLink.length - 1))
          }, 0)
          return true
        }
        return false
      }
    }
  }
}

export default Link
