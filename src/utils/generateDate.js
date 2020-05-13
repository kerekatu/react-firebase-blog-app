function generateDate() {
  const now = new Date()
  const options = { month: 'long', day: 'numeric', year: 'numeric' }

  const year = now.getFullYear()
  let month = now.getMonth() + 1
  if (month < 10) {
    month = `0${month}`
  }

  let day = now.getDate()
  if (day < 10) {
    day = `0${day}`
  }

  return {
    formatted: `${year}-${month}-${day}`,
    pretty: now.toLocaleDateString('en-US', options)
  }
}

export default generateDate
