document.getElementById('btn_calculate_score').addEventListener('click', function () {

});

document.getElementById('score').innerHTML = '得分：100';

/**
 * 解析填空题.
 * @returns {*[]}
 */
function get_blank_questions() {
    return [['UML的中文全称是：', '()']];
}

/**
 * 填空题块.
 * @returns {HTMLElement}
 */
function add_blank_div() {
    let blank_div = document.getElementById('blank_div');
    let h1 = document.createElement('h2');
    h1.innerHTML = '一、填空题（每空5分，共20分）';
    blank_div.appendChild(h1);
    let questions = get_blank_questions();
    for (let i = 0; i < questions.length; i++) {
        let p = document.createElement('p');
        p.id = 'blank_' + i;
        let blank_count = 0;
        let question = questions[i];
        p.innerHTML = (i + 1) + '、';
        for (let j = 0; j < question.length; j++) {
            if (question[j] === '()') {
                let input = document.createElement('input');
                input.id = 'blank_' + i + blank_count;
                input.type = 'text';
                input.name = 'text';
                p.appendChild(input);
            } else {
                p.innerHTML += question[j];
            }
        }
        blank_div.appendChild(p);
    }
    return blank_div
}

document.getElementById('content').appendChild(add_blank_div());
