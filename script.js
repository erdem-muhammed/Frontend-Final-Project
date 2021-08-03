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


/////Card flip
front = document.getElementsByClassName("card")[0];
back = document.getElementsByClassName("card")[1];
function flip(event){
	var element = event.currentTarget;
    if (element.className === "card") 
  {
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};



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
        else
        {
            inputAll.values = "";
            return;
        }
        
    }
}
//////
const signupButton = document.querySelector(".signUp").querySelector("button");
const inputSignup = document.querySelector(".signUp").querySelector("input");

signupButton.onclick = function subscribe()
{
    if(inputSignup.value == "")
    {
        alert("please keep in touch with us!")
        return;
    }
}