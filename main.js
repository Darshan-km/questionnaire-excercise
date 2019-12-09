let sliderImages = document.querySelectorAll('.slide'),
    arrowRight = document.querySelector('#arrow-right'),
    arrowLeft = document.querySelector('#arrow-left'),
    current = 0;

function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
}

function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

function slideRight(option) {

    switch (q1) {
        case 'OptionA':
            slide(1);
            break;
        case 'OptionB':
            slide(2);
            break;
        case 'Option1':
            slide(5);
            break;
        case 'Option2':
            slide(3);
            break;
        case 'OptionX':
            slide(5);
            break;
        case 'OptionY':
            slide(4);
            break;
        case 'q4':
        case 'q5':
            slide(5);
            break;
    }

}

function slide(option) {
    reset();
    sliderImages[current + option].style.display = 'block';
    current + option;
}

arrowLeft.addEventListener('click', function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

arrowRight.addEventListener('click', function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

startSlide();

//window.onload=function(){
    let optionOneChecked = document.querySelector('#qOneOptionOne'),
    optionTwoChecked = document.querySelector('#qOneOptionTwo'),

    qTwoOptionOneChecked = document.querySelector('#qTwoOptionOne'),
    qTwoOptionTwoChecked = document.querySelector('#qTwoOptionTwo'),

    qThreeOptionOneChecked = document.querySelector('#qThreeOptionOne'),
    qThreeOptionTwoChecked = document.querySelector('#qThreeOptionTwo'),

    qFourOptionOneChecked = document.querySelector('#qFourOptionOne'),
    qFourOptionTwoChecked = document.querySelector('#qFourOptionTwo'),


    qFiveOptionOneChecked = document.querySelector('#qFiveOptionOne'),
    qFiveOptionTwoChecked = document.querySelector('#qFiveOptionTwo'),

    goToNextBtn = document.querySelector('#q1'),

    resultContainer = document.querySelector('.result');
    ischecked = document.querySelectorAll('.radio input');

    var qFourTextBox = document.getElementById('qFourTextBoxInput').value;

var q1 = undefined;
var qFiveTextBox = document.getElementById('qFiveTextBoxInput').value;
var optionsSelected = [];
var qSelected = [];
//hiding button on load
goToNextBtn.style.display = 'none';
//}



function getOptionValue() {
    qSelected.push('Question 1');
    if (optionOneChecked.checked) {
        q1 = 'OptionA';
        optionsSelected.push('OptionA');
        goToNextBtn.style.display = "block";
    }
    else {
        q1 = 'OptionB';
        optionsSelected.push('OptionB');
        goToNextBtn.style.display = "block";
    }
}

function getOptionValueTwo() {
    qSelected.push('Question 2');
    if (qTwoOptionOneChecked.checked) {
        q1 = 'Option1';
        optionsSelected.push('Option 1');
        goToNextBtn.style.display = "block";
    }
    else {
        q1 = 'Option2';
        optionsSelected.push('Option 2');
        goToNextBtn.style.display = "block";
    }
}

function getOptionValueThree() {
    qSelected.push('Question 3');
    if (qThreeOptionOne.checked) {
        q1 = 'OptionX';
        optionsSelected.push('Option X');
        goToNextBtn.style.display = "block";
    }
    else {
        q1 = 'OptionY';
        optionsSelected.push('Option Y');
        goToNextBtn.style.display = "block";
    }
}

function getOptionValueFour() {
    qFourTextBox = document.getElementById('qFourTextBoxInput').value;

    if (qFourTextBox.length !== undefined && qFourTextBox !== '') {
        q1 = 'q4';
        optionsSelected.push(qFourTextBox);
        goToNextBtn.style.display = "block";
        slide(5);
    }
}

function getOptionValueFive() {
    qFiveTextBox = document.getElementById('qFiveTextBoxInput').value;
    if (qFiveTextBox.length !== undefined && qFiveTextBox !== '') {
        q1 = 'q5';
        optionsSelected.push(qFiveTextBox);
        goToNextBtn.style.display = "block";
        slide(5);
    }
}

resultContainer.style.display = 'none';
function showResult() {
    resultContainer.style.display = 'block';
    document.getElementById("heading").innerHTML = qSelected;
    document.getElementById("content").innerHTML = optionsSelected;
}
