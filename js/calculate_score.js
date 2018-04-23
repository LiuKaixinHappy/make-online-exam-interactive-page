document.getElementById('btn_calculate_score').addEventListener('click', function () {
    let score = 0;
    score += get_blank_score(5);
    score += get_single_choice_score(10);
    score += get_multi_choices_score(10);
    score += get_judge_score(10);
    score += get_short_answer_score(20);
    document.getElementById('score').innerHTML = '得分：' + score;
});

document.getElementById('content').appendChild(add_blank_div());
document.getElementById('content').appendChild(add_single_choice_div());
document.getElementById('content').appendChild(add_multi_choices_div());
document.getElementById('content').appendChild(add_judge_div());
document.getElementById('content').appendChild(add_short_answer_div());
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

/**
 * 单题块.
 * @returns {HTMLDivElement}
 */
function add_single_choice_div() {
    let single_choice_div = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerHTML = '二、选择题（每题10分，共20分）';
    single_choice_div.appendChild(h2);
    let questions = get_single_choice_questions();
    for (let i = 0; i < questions.length; i++) {
        let p = document.createElement('p');
        p.id = 'single_choice_' + i;
        let question = questions[i];
        p.innerHTML = (i + 1) + '、' + question[0] + '<br>';
        single_choice_div.appendChild(p);
        for (let j = 1; j < question.length; j++) {
            let label = document.createElement('label');
            label.innerHTML = '<input type="radio" name=' + i + '_radio' + ' value=' + j + '>'
                + question[j] + '<br>';
            single_choice_div.appendChild(label);
        }
    }
    return single_choice_div
}

/**
 * 多选题块
 * @returns {HTMLDivElement}
 */
function add_multi_choices_div() {
    let multi_choices_div = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerHTML = '三、多选题（每题10分，共20分）';
    multi_choices_div.appendChild(h2);
    let questions = get_multi_choices_questions();
    for (let i = 0; i < questions.length; i++) {
        let p = document.createElement('p');
        p.id = 'multi_choices_' + i;
        let question = questions[i];
        p.innerHTML = (i + 1) + '、' + question[0] + '<br>';
        multi_choices_div.appendChild(p);
        for (let j = 1; j < question.length; j++) {
            let label = document.createElement('label');
            label.innerHTML = '<input type="checkbox" name=' + i + '_checkbox' + ' value=' + j + '>'
                + question[j] + '<br>';
            multi_choices_div.appendChild(label);
        }
    }
    return multi_choices_div
}

/**
 * 判断块
 * @returns {HTMLDivElement}
 */
function add_judge_div() {
    let judge_div = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerHTML = '四、判断题（每题10分，共20分）';
    judge_div.appendChild(h2);
    let questions = get_judge_questions();
    for (let i = 0; i < questions.length; i++) {
        let p = document.createElement('p');
        p.id = 'judge_' + i;
        let question = questions[i];
        p.innerHTML = (i + 1) + '、' + question
            + '<label><input type="radio" name=' + i + '_judge value=' + i + '>√</label>'
            + '<label><input type="radio" name=' + i + '_judge value=' + i + '>×</label>';
        judge_div.appendChild(p);
    }
    return judge_div
}

/**
 * 简答块
 * @returns {HTMLDivElement}
 */
function add_short_answer_div() {
    let simple_answer_div = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerHTML = '五、简答题（每题20分，共20分）';
    simple_answer_div.appendChild(h2);
    let questions = get_short_answer_questions();
    for (let i = 0; i < questions.length; i++) {
        let p = document.createElement('p');
        p.id = 'simple_answer_' + i;
        let question = questions[i];
        p.innerHTML = (i + 1) + '、' + question;
        simple_answer_div.appendChild(p);
        let textarea = document.createElement('textarea');
        textarea.id = i + '_textarea';
        textarea.rows = 10;
        textarea.cols = 100;
        simple_answer_div.appendChild(textarea);
    }
    return simple_answer_div
}


