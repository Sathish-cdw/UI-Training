// const form =document.querySelector(".form");
// // const submitButton = document.querySelector("#submit");
// // const input = document.querySelector('#input');
// // let error = document.querySelector('.error');
// let inputpage=document.createElement("input");
// inputpage.setAttribute("class","input");
// form.append(inputpage);
// let error=document.createElement("p");
// error.setAttribute("class","error");
// error.append("input is empty");
// form.append(error);

// let submitButton=document.querySelector("#submit");
// submitButton.addEventListener("click",(e)=>
// {
//     e.preventDefault();
//     if(!inputpage.value)
//     {
//         error.style.opacity=1;
//         // error.style.display="block";
//     }e
// })


const missmMatchField ={
    fName:{
        'show':'First Name is not valid',
        'regex':/^[a-zA-Z]{1,30}$/
    },
    lName:{
        'show':'Last Name is not valid',
        'regex':/^[a-zA-Z]{1,30}$/
    },
    email:{
        'show':'Email Address is not valid',
        'regex':/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]{1,50}$/
    },
    contact:{
        'show':'Contact Number is not valid',
        'regex':/^[6-9]{1}[0-9]{9}$/
    },
    zip:{
        'show':'PIN Code is not valid',
        'regex':/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/
    },
    cardNum:{
        'show':'Card Number is not valid',
        'regex':/^\d{16}$/
    },
    expYear:{
        'show':'Card Expiry is not valid',
        'regex':/(?:0[1-9]|1[0-2])\/[0-9]{2}$/

    },
    cvv:{
        'show':'CVV is not valid',
        'regex':/^[0-9]{3}$/
    },
}

let submitButton=document.querySelector("#submit");
// let firstName=document.querySelector(".f-Name");
// let secondName=document.querySelector(".s-Name");
// let firstNameError=document.querySelector(".f-error");
// let secondNameError=document.querySelector(".s-error");

let input= document.querySelectorAll("input");
let pElement = document.querySelectorAll("nav");
// let holder=document.querySelectorAll(".holder");
// console.log(holder.length);
let error=document.querySelectorAll(".s-error");
// console.log(holder[0]);


submitButton.addEventListener("click",(e)=>{

    e.preventDefault();
    // if(!holder.value)
    // {
    //     error.style.opacity=1;
    //     holder.style.border="1px solid #b62d2c";
    // }

    let i = -1;

    for(let element of input)
    {
        i++;
        let idName=element.getAttribute('id');
        let pattern=missmMatchField[idName].regex;
        if(!element.value)
        {
            // error.style.opacity=1;
            // console.log((error[i].value)?error.style.opacity=1:0);
            // console.log(holder.value);
            // error[i].style.paddingTop = 10;
            error[i].style.opacity = 1;
            element.style.border="1px solid #b62d2c";
        }
        // else if()
        else if(!(pattern.test(element.value)))
        {
           
           
            error[i].textContent="";
            pElement[i].textContent=missmMatchField[idName].show;
        }
        else{
            element.style.border="1px solid #cccccc";
            error[i].style.opacity=0;
        }
    }
    e

})



