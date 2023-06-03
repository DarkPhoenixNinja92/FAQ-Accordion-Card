const question = document.querySelectorAll('.question-txt');
const arrow = document.querySelectorAll('.question-txt img');
const answer = document.querySelectorAll('.answer-txt');

question[0].addEventListener('click', () => {
            arrow[0].classList.toggle('arrow-active');
            answer[0].classList.toggle('show');
    });

question[1].addEventListener('click', () => {
            arrow[1].classList.toggle('arrow-active');
            answer[1].classList.toggle('show');
    });

question[2].addEventListener('click', () => {
            arrow[2].classList.toggle('arrow-active');
            answer[2].classList.toggle('show');
    });

question[3].addEventListener('click', () => {
            arrow[3].classList.toggle('arrow-active');
            answer[3].classList.toggle('show');
    });

question[4].addEventListener('click', () => {
            arrow[4].classList.toggle('arrow-active');
            answer[4].classList.toggle('show');
    });

question[5].addEventListener('click', () => {
            arrow[5].classList.toggle('arrow-active');
            answer[5].classList.toggle('show');
    });