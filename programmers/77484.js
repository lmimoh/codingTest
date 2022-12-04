//로또를 구매한 민우는 당첨 번호 발표일을 학수고대하고 있었습니다.
//하지만, 민우의 동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없게 되었습니다.
//당첨 번호 발표 후, 민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.

function solution(lottos, win_nums) {
    let min = lottos.filter(x => win_nums.includes(x)).length
    let max = lottos.filter(x => x === 0).length + min
    
    let answer = [];
    
    max > 1 ? answer.push(7 - max) : answer.push(6);
    min > 1 ? answer.push(7 - min) : answer.push(6);
    
    return answer;
}