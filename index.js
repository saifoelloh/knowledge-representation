const data = document.getElementById("data")
const result = document.getElementById("result")
const btnSubmit = document.getElementById("btn-submit")

btnSubmit.addEventListener("click", () => {
  const argumen = data.value.split(/[(.*).*]/).filter((n) => {
    return n !== "" ? n.trim() : null
  })
  const check = data.value.search(",")
  let hasil = ""
  if (check >= 0) {
    hasil = argumen.join(" ").replace("_", " ").replace(",", " adalah ")
    console.log(hasil)
  } else {
    hasil = argumen.join(" adalah ")
  }
  result.value = hasil
})
