// const correct_ans = ['D', 'A', 'A', 'B'];
// const form = document.querySelector('form');
// const result = document.querySelector('.result');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     let score = 0;
//     const user_answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

//     //check answers
//     user_answers.forEach((answer,index) => {
//         if (answer === correct_ans[index]) {
//             score += 25;
//         }
//     });

//     //scroller
//     scrollTo(0, 0);

//     //animation
    // let i = 0;
    // const timer = setInterval(() => {
    //     result.querySelector('span').textContent = `${i}%`;
    //     if (i === score) {
    //         clearInterval(timer);
    //     } else {
    //         i++;
    //     }
    // }, 10)
    // result.classList.remove('d-none');
// });

const answers = ['D', 'A', 'A', 'B'];
const form = document.querySelector('form');
const result = document.querySelector('span');
const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close=document.querySelector('.popup-close');


form.addEventListener('submit', e => {
    e.preventDefault();
    var score = 0;
    const user_answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    user_answers.forEach((answer, index) => {
        if (answer === answers[index]) {
            score += 25;
        }
    })
    scrollTo(0,0);

    let i = 0;
    const timer = setInterval(() => {
        result.textContent = `${i}%`;
        if (i === score) {
            clearInterval(timer);
        } else {
            i++;
        }
    }, 10)
    //result.classList.remove('d-none');
});


button.addEventListener('click', () => {
    popup.style.display = 'block';
})
button.addEventListener('click', () => {
    popup.style.display = 'block';
})
button.addEventListener('mouseover', () => {
    button.style.background = '#23ff9d';
})
button.addEventListener('mouseout', () => {
    button.style.background = 'crimson';
})
close.addEventListener('click', () => {
    popup.style.display = 'none';
})

popup.addEventListener('click', () => {
    popup.style.display = 'none';
})