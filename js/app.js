const question = document.querySelectorAll('.question-txt');
const arrow = document.querySelectorAll('.question-txt img');
const answer = document.querySelectorAll('.answer-txt');

question[0].addEventListener('click', () => {
            question[0].classList.toggle('active');
            arrow[0].classList.toggle('arrow-active');
            answer[0].classList.toggle('show');
    });

question[1].addEventListener('click', () => {
            question[1].classList.toggle('active');
            arrow[1].classList.toggle('arrow-active');
            answer[1].classList.toggle('show');
    });

question[2].addEventListener('click', () => {
            question[2].classList.toggle('active');
            arrow[2].classList.toggle('arrow-active');
            answer[2].classList.toggle('show');
    });

question[3].addEventListener('click', () => {
            question[3].classList.toggle('active');
            arrow[3].classList.toggle('arrow-active');
            answer[3].classList.toggle('show');
    });

question[4].addEventListener('click', () => {
            question[4].classList.toggle('active');
            arrow[4].classList.toggle('arrow-active');
            answer[4].classList.toggle('show');
    });

question[5].addEventListener('click', () => {
            question[5].classList.toggle('active');
            arrow[5].classList.toggle('arrow-active');
            answer[5].classList.toggle('show');
    });