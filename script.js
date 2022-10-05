const buttons = document.querySelectorAll('button');
const areaInp = document.querySelector('.input');
const areaAns = document.querySelector('.ans');

const rm = document.getElementById('remove')

for (const btn of buttons) {
    btn.addEventListener('click', (e)=> {
        const txt = e.target.innerHTML;



        areaAns.innerHTML = 'Press = to see result';

        // for evaluation
        if (txt == '=') {
            rm.innerHTML = 'AC';
            try {
                evaluate();
            } catch (error) {
                console.log('Error :', error);
                alert('invalid input');
            }
        }
        else if (txt == '÷') {
            areaInp.innerHTML = areaInp.innerHTML + '/';
        }
        else if (txt == '×') {
            areaInp.innerHTML = areaInp.innerHTML + '*';
        }
        
        // clear input field
        else if (txt == 'AC') {
            areaInp.innerHTML = '';
        }
        // clear one digit
        else if (txt == 'C') {
            areaInp.innerHTML = areaInp.innerHTML.slice(0, -1);
        }
        // others
        else {
            checkCut();
            areaInp.innerHTML = areaInp.innerHTML + e.target.innerHTML;
        }
    });
}



function evaluate() {
    const inp = areaInp.innerHTML;
    const ans = eval(inp);
    if (ans != undefined) 
        areaAns.innerHTML = ans;
}

function checkCut() {
    if (areaInp.innerHTML != '') {
        rm.innerHTML = 'C'
    } else {
        rm.innerHTML = 'AC';
    }
}