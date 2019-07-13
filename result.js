const answers = ['D', 'A', 'A', 'B'];
const form = document.querySelector('form');
const result=document.querySelector('span');
const content1=document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();
    var score = 0;
    var content="Please fill all the entries";
    const user_answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    let ctr = 0;
    for (let i = 0; i < user_answers.length; i++) {
        if (user_answers[i] == '') {
            ctr++;
        }
    }
    let ans = user_answers.length - ctr;
    scrollTo(0, 0);
    console.log(ans);
    if (ans === 4) {
        user_answers.forEach((answer, index) => {
            if (answer === answers[index]) {
                score += 25;
            }
        })
        result.setAttribute('class','text-primary display-4 p-3');
        let i = 0;
        const timer = setInterval(() => {
            result.textContent = `${i}%`;
            if (i === score) {
                clearInterval(timer);
            } else {
                i++;
            }
        }, 10);
    } else {
        result.setAttribute('class','text-danger display-4 p-2')
        result.textContent=`${content}`;
    }
});