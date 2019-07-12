const correct_ans = ['D', 'A', 'A', 'B'];
const form = document.querySelector('form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const user_answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers
    user_answers.forEach((answer, index) => {
        if (answer === correct_ans[index]) {
            score += 25;
        }
    });
    scrollTo(0, 0);
    let i = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${i}%`;
        if (i === score) {
            clearInterval(timer);
        }
        else{
            i++;
        }
    }, 10)
    result.classList.remove('d-none');
});