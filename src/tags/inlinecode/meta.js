export default (options) => {
  return {
    applyHtmlTags: ['code'].map(tag => tag.toLowerCase())
  }
}
