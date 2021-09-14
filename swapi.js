export function getCharacter(number, callback) {
  const url = `https://swapi.dev/api/people/${number}`

  var xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function (event) {
    if (this.readyState == 4 && this.status == 200) {
      var result = JSON.parse(xhr.response)
      callback(result.name)
    }
  }
  xhr.open('GET', url, true)
  xhr.send()
}
