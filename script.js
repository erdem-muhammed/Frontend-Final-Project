const slider = document.getElementById("slider");
let current = 0; //current worth
const max = document.querySelectorAll("#slider>.slide").length;


function next()
{
    //CHECK
    if(current == max-1)
    {
        return;
    }
    current++;
    //UPDATE
    translateUpdate();
}

function prev()
{
    if(current == 0)
    {
        return;
    }
    current--;
    translateUpdate();
}

function translateUpdate()
{
    slider.style.transform = "translateX(-" + (current*100) + "vw)";
}



//////  Contact Form
const submitButton = document.getElementById("submit");
const inputAll = document.querySelector(".form").querySelectorAll("input");

submitButton.onclick = function submit()
{
    for(var i = 0; i < inputAll.length; i++)
    {
        if(inputAll[i].value == "")
        {
        alert("Please fill all the fields!");
        return;
        }
    }
}
