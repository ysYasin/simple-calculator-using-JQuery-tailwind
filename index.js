const calc = $('#clac');

function insertNumber(number) {
    const previNum = calc.val();
    calc.val(previNum + number)
}
// clear function
function clearInpt() {
    calc.val('');  //clear the value of input field after clicking on it
}

// delet function
function deleteinp() {
    const exist = calc.val();
    if (exist != '') {
        calc.val(exist.slice(0, -1))
    }
}

// final calculation Eval
function calculate() {
    let result;
    if (calc.val().includes('%')) {
        const inpField = calc.val().split('%');
        if (!isNaN(parseInt(inpField[0])) && !isNaN(parseFloat(inpField[1]))) {
            result = (parseFloat(inpField[0]) / 100) * parseFloat(inpField[1]);
            calc.val(result)
        }
    } else {
        result = eval(calc.val());
        calc.val(result)
    }
}
//parsentage calculation
function parsentage() {
    const input = calc.val();
    console.log(input)
}