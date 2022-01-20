"use strict";

const td = document.querySelectorAll(".td");
const big = document.getElementById('big')
const small = document.getElementById('small')
let bool = true;

let fequation = "";
let equation = "";
for(const i of td)
{
    i.onclick = function()
    {
        if(equation == "Invalid")
        {
            equation = ""
            big.style.visibility = 'visible';

        }
        if(fequation == "Invalid")
        {
            fequation = ""
            small.style.visibility = 'visible';
        }



        if(i.innerText == "*" || i.innerText == "-" || i.innerText == "/" || i.innerText == "+")
        {
            if(!bool)
            {
                fequation += " " + i.innerText + " ";
                bool = true;
            }

        }

        else if (i.innerText != "="){
            fequation += i.innerText;
            equation += i.innerText;
            bool = false;
            
        }


        if(i.innerText == "=")
        {
            equation = eval(fequation);
            fequation = equation

        }
        else if (i.innerText == "C")
        {
            fequation = "Invalid" 
            small.style.visibility = "hidden"
            equation = "Invalid"
            big.style.visibility = 'hidden'
        }
          if(isNaN(equation) && equation != "Invalid")
        {
            equation = 'Syntax Error'
        }
        
        small.innerText = fequation;
        big.innerText = equation;
        

        if(i.innerText.includes("*") || i.innerText.includes("-") || i.innerText.includes("/") || i.innerText.includes("+"))
        {
            equation = "Invalid"
            big.style.visibility = 'hidden'
            big.innerText = equation
        }

      
    }
}