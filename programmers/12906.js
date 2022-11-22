// 0 ~ 9 사이의 정수를 갖는 배열(arr.length < 1,000,000)를 전달인자로 받아
// 배열 arr에서 연속적으로 나타나는 정수를 하나만 남기고 제거한 배열을 반환하시오.

function solution(arr)
{
    const answer = [arr[0]];
    
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] !== arr[i+1]) {
            answer.push(arr[i+1]);
        }
    }
    
    return answer;
// return arr.filter((el, idx) => el !== arr[idx + 1]);
}

// 이때 filter를 활용한 해법과 for문을 돌린 해법의 시간복잡도는 O(n)으로 동일하다.

// 이는 배열 메소드인 filter는 배열 전체를 순회하여 익명함수의 결과가 true인 원소만을 남긴 새로운 배열을 반환하므로,
// for문을 통해 arr을 탐색하는 것과 동일한 실행 횟수를 가지게 된다.