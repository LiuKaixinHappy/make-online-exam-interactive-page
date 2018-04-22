const USER_DID_NOT_CHOOSE = -1;

document.getElementById('btn_calculate_score').addEventListener('click', function () {
    let score = 0;
    score += get_blank_score(5);
    score += get_single_choice_score(10);
    score += get_multi_choices_score(10);
    document.getElementById('score').innerHTML = '得分：' + score;
});

/**
 * 解析填空题.
 * @returns {*[]}
 */
function get_blank_questions() {
    return [['UML的中文全称是：', '()'],
        ['对象最突出的特征是：', '()', '()', '()']];
}

/**
 * 解析选择题.
 * @returns {*[]}
 */
function get_single_choice_questions() {
    return [['UML与软件工程的关系是：',
        '(A)UML就是软件工程', '(B)UML参与到软件工程中软件开发过程的几个阶段',
        '(C)UML与软件工程无关', '(D)UML是软件工程的一部分'],
        ['Java语言支持：',
            '(A)单继承', '(B)多继承',
            '(C)单继承和多继承都支持', '(D)单继承和多继承都不支持']];
}

/**
 * 解析多选题.
 *
 * @returns {*[]}
 */
function get_multi_choices_questions() {
    return [['用例的粒度分为以下哪三种：',
        '(A)概述级', '(B)需求级',
        '(C)用户目标级', '(D)子功能级'],
        ['类图由以下哪三部分组成：',
            '(A)名称（Name）', '(B)属性（Attribute）',
            '(C)操作（Operation）', '(D)方法（Function）']];
}

/**
 * 解析填空题答案.
 * @returns {*[]}
 */
function get_blank_answer() {
    return [['统一建模语言'], ['封装性', '继承性', '多态性']];
}

/**
 * 解析单选题答案.
 * @returns {*[]}
 */
function get_single_choice_answer() {
    return [2, 1];
}

/**
 * 解析多选题答案.
 * @returns {*[]}
 */
function get_multi_choices_answer() {
    return [[1, 2, 4], [1, 2, 3]];
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

function get_user_choices(choices) {
    let user_choices = [];
    for (let j = 0; j < choices.length; j++) {
        if (choices[j].checked) {
            user_choices.push(j);
        }
    }
    return user_choices.length === 0 ? [USER_DID_NOT_CHOOSE] : user_choices;
}

function get_single_choice_score(each_score) {
    let score = 0;
    let single_choice_answer = get_single_choice_answer();
    for (let i = 0; i < single_choice_answer.length; i++) {
        let choices = document.getElementsByName(i + '_radio');
        let user_choice = get_user_choices(choices)[0];
        if (user_choice === USER_DID_NOT_CHOOSE) {
            score += 0;
        }
        if (user_choice === single_choice_answer[i] - 1) {
            score += each_score;
        }
    }
    return score;
}

function get_multi_choices_score(each_score) {
    let score = 0;
    let multi_choices_answer = get_multi_choices_answer();
    for (let i = 0; i < multi_choices_answer.length; i++) {
        let choices = document.getElementsByName(i + '_checkbox');
        let user_choices = get_user_choices(choices);
        let right = true;
        if (user_choices[0] === USER_DID_NOT_CHOOSE) {
            score += 0;
            continue;
        }
        for (let j = 0; j < multi_choices_answer[i].length; j++) {
            if (user_choices[j] !== multi_choices_answer[i][j] - 1) {
                right = false;
            }
        }
        if (right) {
            score += each_score;
        }
    }
    return score;
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

document.getElementById('content').appendChild(add_blank_div());
document.getElementById('content').appendChild(add_single_choice_div());
document.getElementById('content').appendChild(add_multi_choices_div());
