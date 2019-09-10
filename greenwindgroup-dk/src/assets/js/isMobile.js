const isMobile = () => {
  const useragent = navigator.userAgent

  if (useragent.match(/Android/i)) {
    return true
  } else if (useragent.match(/webOS/i)) {
    return true
  } else if (useragent.match(/iPhone/i)) {
    return true
  } else if (useragent.match(/iPod/i)) {
    return true
  } else if (useragent.match(/iPad/i)) {
    return true
  } else if (useragent.match(/Windows Phone/i)) {
    return true
  } else if (useragent.match(/SymbianOS/i)) {
    return true
  } else if (useragent.match(/RIM/i) || useragent.match(/BB/i)) {
    return true
  } else {
    return false
  }
}

export default isMobile
