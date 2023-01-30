/*
* Adicionar os ícones: download e button
*/

const fileInput = document.querySelector("input")
const downloadBtn = document.querySelector("button")

downloadBtn.addEventListener("click", (e) => {
    e.preventDefault()

    downloadBtn.innerText = "Downloading..."

    console.log(fileInput.value)

    fetchFile(fileInput.value)
})

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file)
        let aTag = document.createElement('a')

        aTag.href = tempUrl
        aTag.download = url.replace(/^.*[\\\/]/, '')

        document.body.appendChild(aTag)

        aTag.click()
        aTag.remove()

        URL.revokeObjectURL(tempUrl)

        downloadBtn.innerText = "Download File"
    }).catch((error) => {
        downloadBtn.innerText = "Download File"

        alert("Failed to download file!")
        console.log(error)
    })
}

fileInput.addEventListener("input", e => {
    document.querySelector("img").src = e.target.value;
})