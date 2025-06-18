// document.getElementById("count").innerText = 5
let saveEL = document.getElementById("save-el")
let Count = document.getElementById("count")

console.log(Count)

let count = 0

function increment(){
    count += 1
    Count.innerText = count
    // console.log(count)
} 

function decrement(){
    count -= 1
    Count.innerText = count
}

function save(){
    let a = count + " / "

    saveEL.textContent += a 

    Count.textContent = 0
    count = 0

}


// save()

