/**
 * 解析简答题.
 *
 * @returns {*[]}
 */
function get_short_answer_questions() {
    return ['简述什么是模型以及模型的表现形式？'];
}

/**
 * 解析简答题答案.
 *
 * @returns {*[]}
 */
function get_short_answer_answer() {
    return ['模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。'];
}

/**
 * 获得简答题得分.
 *
 * @param each_score 每道题的分数.
 * @returns {number}
 */
function get_short_answer_score(each_score) {
    let score = 0;
    let judge_answer = get_short_answer_answer();
    for (let i = 0; i < judge_answer.length; i++) {
        let user_answer = document.getElementById(i + '_textarea');
        if (user_answer === judge_answer[i]) {
            score += each_score;
        }
    }
    return score;
}

