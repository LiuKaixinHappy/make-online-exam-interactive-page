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
 * 解析多选题答案.
 *
 * @returns {*[]}
 */
function get_multi_choices_answer() {
    return [[A, B, D], [A, B, C]];
}

/**
 * 获得用户选项.
 *
 * @param choices 用户的checkbox list.
 * @returns {*}
 */
function get_user_choices(choices) {
    let user_choices = [];
    for (let j = 0; j < choices.length; j++) {
        if (choices[j].checked) {
            user_choices.push(j);
        }
    }
    return user_choices.length === 0 ? [USER_DID_NOT_CHOOSE] : user_choices;
}

/**
 * 获得多选题的得分.
 *
 * @param each_score 每到题的分数.
 * @returns {number}
 */
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
            if (user_choices[j] !== multi_choices_answer[i][j]) {
                right = false;
            }
        }
        if (right) {
            score += each_score;
        }
    }
    return score;
}

