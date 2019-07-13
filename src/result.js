const answers = ['D', 'A', 'A', 'B'];
const form = document.querySelector('form');
const result=document.querySelector('span');


//form event handler
form.addEventListener('submit', e => {
    e.preventDefault();
    var score = 0;
    let content="Please Fill All The Entries";
    const user_answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    let ctr = 0;
    for (let i = 0; i < user_answers.length; i++) {
        if (user_answers[i] == '') {
            ctr++;
        }
    }
    let ans = user_answers.length - ctr;
    scrollTo(0, 0);
    if (ans === 4) {
        const content1=document.querySelector('#result');
        const content2=document.querySelector('#result1');
        content1.textContent='You are ';
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
        content2.textContent="Correct";
    } else {
        result.setAttribute('class','text-danger display-5')
        result.textContent=`${content}`;
    }
});