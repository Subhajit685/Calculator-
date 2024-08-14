// console.log("hi")

let str = ""
Array.from(document.querySelectorAll(".btn")).forEach((e) => {
    e.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            str = eval(str)
            document.querySelector("#input").value = str
        }
        else if (e.target.innerHTML === "C") {
            str = ""
            document.querySelector("#input").value = str
        }
        else {
            str = str + e.target.innerHTML
            document.querySelector("#input").value = str
        }
    })
})

window.onkeydown = (e) => {
    let key = e.key;
    if (key === "1" || key === "2" || key === "3" || key === "4" || key === "5" || key === "6" || key === "7" || key === "8" || key === "9" || key === "0" || key === "+" || key === "-" || key === "*" || key === "/") {
        str = str + key
        document.querySelector("#input").value = str
    }
    else if (key === "Enter") {
        str = eval(str)
        document.querySelector("#input").value = str
    }
}