/**
 * 解析判断题.
 *
 * @returns {*[]}
 */
function get_judge_questions() {
    return ['用例图只是用于和客户交流和沟通的，用于确定需求。',
        '在状态图中，终止状态在一个状态图中允许有任意多个。'];
}

/**
 * 解析判断题答案.
 *
 * @returns {*[]}
 */
function get_judge_answer() {
    return [FALSE, TRUE];
}

/**
 * 获得判断题得分.
 *
 * @param each_score 每道题的分数.
 * @returns {number}
 */
function get_judge_score(each_score) {
    let score = 0;
    let judge_answer = get_judge_answer();
    for (let i = 0; i < judge_answer.length; i++) {
        let choices = document.getElementsByName(i + '_judge');
        let user_choice = get_user_choice(choices)[0];
        if (user_choice === USER_DID_NOT_CHOOSE) {
            score += 0;
        }
        if (user_choice === judge_answer[i]) {
            score += each_score;
        }
    }
    return score;
}

