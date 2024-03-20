console.log('hello index.js');
let display = document.getElementById('display');
console.log('display');
console.log(display);
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map( button => {
    button.addEventListener('click',(e) => {
        console.log('clicked called '+e.target.innerText);
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if(display.innerText){
                    var input_before_slice = display.innerText;
                    // Only the last character:
                    // let result = text.slice(-1);
                    var input_after_slice = input_before_slice.slice(0,-1);
                    console.log(input_before_slice)
                    console.log(input_after_slice)
                    display.innerText = input_after_slice

                }
                break
            case '=':
                try{
                    var input_before_eval = display.innerText
                    var input_after_eval = eval(display.innerText)
                    display.innerText = input_after_eval
                }catch{
                    display.innerText = 'Error!';
                }
                
                break

                
            default:
                display.innerText += e.target.innerText;

                
        }
    });
});