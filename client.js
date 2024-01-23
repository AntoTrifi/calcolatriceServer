window.addEventListener("DOMContentLoaded", e => {
    const display = document.querySelector("#display");
    const buttons = document.querySelectorAll(".button");

    buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear") {
        display.innerText = "";
        } else if (item.id == "backspace") {
        let string = display.innerText.toString();
        display.innerText = string.substr(0, string.length - 1);
        } else if (item.id == "allCanc") {
            let string = display.innerText.toString();
            display.innerText = "0";
        // } else if (display.innerText != "" && item.id == "equal") {
        // display.innerText = eval(display.innerText);
        // } else if (display.innerText == "" && item.id == "equal") {
        // display.innerText = "Empty!";
        // setTimeout(() => (display.innerText = ""), 2000);
        } else if(item.id == "equal") {

        } else {
            if(display.innerText == "0")
            {
                display.innerText = "";
                display.innerText += item.id;
            }
            else
            {
                display.innerText += item.id;
            }
            
        }
    };
    });








    // const query1 = "http://localhost:3333/users?id=1234&token=abc";
    // const query2 = "http://localhost:3333/users/5678/asdf";
    // const query3 = "http://localhost:3333/users";
    //let queryCalc = `http://localhost:3333/calc?display=${display.innerText}`;

    buttons.forEach(b => {
        b.addEventListener("click", e => {
            let target = e.target;
            let displayServerStatus = document.querySelector("#displayServerStatus");
            if(target.id == "equal")
            {
                fetch(`http://localhost:3333/calc?display=${encodeURIComponent(display.innerText)}`)
                    .then(response => {
                        displayServerStatus.innerText = `${response.status} ${response.statusText}`;
                        return response.json();
                        
                    })
                    .then(message => {
                        console.log(message);
                        const result = message.result;
                        display.innerText = result;
                    })
                    .catch(e => console.error(e.message));
            } else 
            {
                //console.error(`Unrecognized id ${target.id}`)
            }
        })
    });
});