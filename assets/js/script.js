

// =========================== ODD VS EVEN

document.getElementById('btnAssess').onclick = () => {
    
    // declare variables
    let num = document.getElementById('numberInput').value;

    // if input is not a number
    if (isNaN(num)) {
        alert('invalid input'); 
        break;
    }

    num = parseInt(num % 2);    

    if (num == 0) {
        alert('even');
    }

    else {
        alert('odd');
    }

}

document.getElementById('btnClear1').onclick = () => {
    document.getElementById('numberInput').value = "";
}


// =========================== AVERAGE AND STATUS

// declare the existence of this variable so you can reuse it
let average;

document.getElementById('btnAverage').onclick = () => {

    let projectGrade = parseInt(document.getElementById('projectInput').value);
    let midtermGrade = parseInt(document.getElementById('midtermInput').value);
    let finalGrade = parseInt(document.getElementById('finalInput').value);

    average = (projectGrade + midtermGrade + finalGrade) / 3;

    document.getElementById('averageInput').value = average;

}

document.getElementById('btnStatus').onclick = () => {

    if (average >= 90 && average <= 100 ) {
        alert('Excellent!');
    }

    else if (average >= 80 && average <= 89) {
        alert('Good!');
    }

    else if (average >= 70 && average <= 79) {
        alert('Satisfactory');
    }

    else if (average < 70) {
        alert('Fail');
    }

    else {
        alert('Invalid Input');
    }
}

document.getElementById('btnClear2').onclick = () => {
    document.getElementById('projectInput').value = "";
    document.getElementById('midtermInput').value = "";
    document.getElementById('finalInput').value = "";
    document.getElementById('averageInput').value = "";
}

