// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

function solution(n) {
    if(n === 2) return 2;
    if(n < 2) return 0;
    
    if(n % 2 !== 0) {
        return n - 1 + solution(n - 2);
    }
    
    return n + solution(n - 2);
}