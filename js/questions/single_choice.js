/**
 * 解析单选题.
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
 * 解析单选题答案.
 * @returns {*[]}
 */
function get_single_choice_answer() {
    return [B, A];
}

function get_user_choice(choices) {
    for (let j = 0; j < choices.length; j++) {
        if (choices[j].checked) {
            return j;
        }
    }
    return USER_DID_NOT_CHOOSE;
}

function get_single_choice_score(each_score) {
    let score = 0;
    let single_choice_answer = get_single_choice_answer();
    for (let i = 0; i < single_choice_answer.length; i++) {
        let choices = document.getElementsByName(i + '_radio');
        let user_choice = get_user_choice(choices);
        if (user_choice === USER_DID_NOT_CHOOSE) {
            score += 0;
        }
        if (user_choice === single_choice_answer[i]) {
            score += each_score;
        }
    }
    return score;
}

