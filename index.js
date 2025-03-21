// function c(div1){

// if(div1 == "tiger")  alert("corect") || window.location.replace("file:///C:/Users/gadi1/OneDrive/%D7%A9%D7%95%D7%9C%D7%97%D7%9F%20%D7%94%D7%A2%D7%91%D7%95%D7%93%D7%94/%D7%91%D7%99%D7%AA%20%D7%A1%D7%A4%D7%A8/lets%20go.html")
// else alert("not corect") || alert("yo the oger is here! he will kill you!") || window.location.replace("file:///C:/Users/gadi1/OneDrive/%D7%A9%D7%95%D7%9C%D7%97%D7%9F%20%D7%94%D7%A2%D7%91%D7%95%D7%93%D7%94/%D7%91%D7%99%D7%AA%20%D7%A1%D7%A4%D7%A8/ogi.html")


// }

// function tryluck(){
// let mass = document.getElementById("tryluck")
// let mass1=mass.value
// c(mass1)
 

// }

// function ogi1(){
// alert("hajdhkasjhdsfisb😂😂😈😈") || window.location.replace("file:///C:/Users/gadi1/OneDrive/%D7%A9%D7%95%D7%9C%D7%97%D7%9F%20%D7%94%D7%A2%D7%91%D7%95%D7%93%D7%94/%D7%91%D7%99%D7%AA%20%D7%A1%D7%A4%D7%A8/lol.html")
// }


// function tryagain(){
// window.location.replace("file:///C:/Users/gadi1/OneDrive/%D7%A9%D7%95%D7%9C%D7%97%D7%9F%20%D7%94%D7%A2%D7%91%D7%95%D7%93%D7%94/%D7%91%D7%99%D7%AA%20%D7%A1%D7%A4%D7%A8/m.html")

// }



let word = 'ohio'
let mispar= 0
let skibidi = 6
function guess(){


    let inputElement = document.getElementById('tryluck')
    let div1 = document.getElementById('div')
    


    
    let firstLetter=inputElement.value.charAt(0)
    let secondLetter=inputElement.value.charAt(1)
    let thirdLetter=inputElement.value.charAt(2)
    let forthLetter=inputElement.value.charAt(3)
    mispar=mispar+1
 div1.innerHTML+=`



<div class="letter"style="background-color:${check(firstLetter,0)};" >${firstLetter}</div>
<div class="letter"style="background-color:${check(secondLetter,1)};" >${ secondLetter}</div>
<div class="letter"style="background-color:${check(thirdLetter,2)};" >${thirdLetter}</div>
<div class="letter"style="background-color:${check(forthLetter,3)};" >${forthLetter}</div>
 `
if(word==inputElement.value){alert('you win');
    mispar=0
}

 if(mispar==skibidi){alert("you lose you are a big loser lol")&&window.location.replace(https://gojo581.github.io/wordle-/)}

}

function check(letter, index){
if(word.charAt(index)==letter){
    return 'green'
}
if(word.includes(letter)){
    return 'yellow'
}
return 'red'
}







function yoo(){
alert("you are a normal and you are good!👍") || window.location.replace('https://gojo581.github.io/wordle-/')

}


 
