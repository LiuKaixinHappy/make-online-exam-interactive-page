/**
 * 解析填空题.
 *
 * @returns {*[]}
 */
function get_blank_questions() {
    return [['UML的中文全称是：', '()'],
        ['对象最突出的特征是：', '()', '()', '()']];
}

/**
 * 解析填空题答案.
 *
 * @returns {*[]}
 */
function get_blank_answer() {
    return [['统一建模语言'], ['封装性', '继承性', '多态性']];
}

/**
 * 计算填空题得分.
 *
 * @param each_score 每道题的得分.
 * @returns {number}
 */
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

