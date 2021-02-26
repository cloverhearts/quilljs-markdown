export default (options) => {
  return {
    applyHtmlTags: ['strikethrough'].map(tag => tag.toLowerCase())
  }
}
