export default (options) => {
  return {
    applyHtmlTags: ['link'].map(tag => tag.toLowerCase())
  }
}
