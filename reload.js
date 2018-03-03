var path = window.location.href
if(!/\?reload=true/.test(path)) {
  window.location.href = path + '?reload=true'
}