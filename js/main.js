
function runcode (argument) {
// console.log('executed')

//APPEAR CONSOLE
var div = document.getElementById("terminal");  
         if (div.style.display == "none") 
         {  
             div.style.display = "block";  
         }  
         else
         {  
             div.style.display = "block";  
         }  



//





document.querySelectorAll('._console_print').forEach(e => e.remove());


   let element = document.getElementById('_code');
   let inner_code = element.innerText || element.textContent;
   
   // console.log(inner_code)
try {
interpreter(inner_code);
}
catch(err) {
    error();
  console.log(err);
}
}


//Redefining console calls
let console_calls = [];
// define a new console
var console = (function(oldCons){
    return {
        log: function(text){
            // oldCons.log(text);
log_to_terminal(text);
        },
        info: function (text) {
            // oldCons.info(text);
log_to_terminal(text);
        },
        warn: function (text) {
            // oldCons.warn(text);
log_to_terminal(text);
        },
        error: function (text) {
            // oldCons.error(text);
log_to_terminal(text);
        }
    };
}(window.console));

//Then redefine the old console
window.console = console;

function log_to_terminal (log) {
    // body... 

   var tag = document.createElement("div");
   tag.classList.add("_console_print");

   var text = document.createTextNode("> "+log);
   tag.appendChild(text);
   var element = document.getElementById("_console");
   element.appendChild(tag);
}



function success () {
    // body... 
document.querySelectorAll('._console_print').forEach(e => e.remove());

   var tag = document.createElement("div");
   tag.classList.add("_console_print");

   var text = document.createTextNode("Shandaar bhai 🎉");
   tag.appendChild(text);
   var element = document.getElementById("_console");
   element.appendChild(tag);
}

function error () {
document.querySelectorAll('._console_print').forEach(e => e.remove());

   var tag = document.createElement("div");
   tag.classList.add("_console_print");

   var text = document.createTextNode("❌ Bhai kya kar raha hai tu");
   tag.appendChild(text);
   var element = document.getElementById("_console");
   element.appendChild(tag);
}


https://carbon.now.sh/?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=1x&wm=false&code=

function code_photo (argument) {
   let element = document.getElementById('_code');
   let inner_code = element.innerText || element.textContent;
   let carbon='https://carbon.now.sh/?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=1x&wm=false&code=';
   let url= carbon + encodeURI(inner_code);
   window.open(url, '_blank').focus();


}