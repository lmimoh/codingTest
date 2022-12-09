// 한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때,
// 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

// 이때, 삼총사는 배열 number의 요소 3개를 합쳐서 0이 되는 조합을 의미한다.

function solution(number) {
    let answer = 0;

    const getTrio = (temp, idx) => {
        if (temp.length === 3) {
            answer += temp.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
            return;
        }

        for (let i = idx; i < number.length; i++) {
            getTrio([...temp, number[i]], i + 1);
        }
    }
    
    getTrio([], 0);
    return answer;
}