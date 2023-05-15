const wSchermo = document.querySelector(".w-screen")
const wTastiera = document.querySelector(".w-keyboard")
wTastiera.addEventListener("click", function(event)
    { 
        if (event.target.tagName==="BUTTON" && event.target.innerText !== "spazio" && event.target.innerText !== "cancella")
        {
            wSchermo.innerText = `${wSchermo.innerText}${event.target.innerText}`
        }
        if (event.target.tagName==="BUTTON" && event.target.innerText === "spazio")
        {
            wSchermo.innerText = `${wSchermo.innerText}_`
        }
        if (event.target.tagName==="BUTTON" && event.target.innerText === "cancella" &&wSchermo.innerText!=="#")
        {
            wSchermo.innerText = `#${wSchermo.innerText.substring(1,wSchermo.innerText.length-1)}`
        }
    }
)
console.log("hello, is it working?")

/* for  some reason it's not working if I try to source the script in the html. It's only working when I manually input the script in the browser console*/

console.log("yes it's working now")

/* I solved the problem! see comments in the html file */