document.getElementById('btn_calculate_score').addEventListener('click', function () {
    let score = 0;
    score += get_blank_score(5);
    document.getElementById('score').innerHTML = '得分：' + score;
});

function get_blank_answer() {
    return [['统一建模语言'], ['封装性', '继承性', '多态性']];
}

function get_blank_score(each_score) {
    let score = 0;
    let blank_answer = get_blank_answer();
    for (let i = 0; i < blank_answer.length; i++) {
        for (let j = 0; j < blank_answer[i].length; j++) {
            let user_answer = document.getElementById('blank_' + i + '_' + j).value;
            if (user_answer.trim() === blank_answer[i][j]) {
                score += each_score;
            }
        }
    }
    return score;
}


/**
 * 解析填空题.
 * @returns {*[]}
 */
function get_blank_questions() {
    return [['UML的中文全称是：', '()'],
        ['对象最突出的特征是：', '()', '()', '()']];
}

/**
 * 填空题块.
 * @returns {HTMLElement}
 */
function add_blank_div() {
    let blank_div = document.createElement('div');
    let h1 = document.createElement('h2');
    h1.innerHTML = '一、填空题（每空5分，共20分）';
    blank_div.appendChild(h1);
    let questions = get_blank_questions();
    for (let i = 0; i < questions.length; i++) {
        let p = document.createElement('p');
        p.id = 'blank_' + i;
        let question = questions[i];
        p.innerHTML = (i + 1) + '、';
        let count = 0;
        for (let j = 0; j < question.length; j++) {
            if (question[j] === '()') {
                let input = document.createElement('input');
                input.id = 'blank_' + i + '_' + count;
                input.type = 'text';
                input.name = 'text';
                p.appendChild(input);
                p.innerHTML += ' ';
                count++;
            } else {
                p.innerHTML += question[j];
            }
        }
        blank_div.appendChild(p);
    }
    return blank_div
}

document.getElementById('content').appendChild(add_blank_div());
