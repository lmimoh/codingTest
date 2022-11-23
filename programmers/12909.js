// solution 함수는 전달인자로 '()' 괄호로 이루어진 문자열 s가 주어진다.
// 이때, 괄호가 올바르게 짝 지어진 것은 '(' 문자로 열렸으면 ')' 문자로 반드시 닫혀야 함을 의미한다.
// 전달인자 s의 문자열이 올바른 괄호인지 boolean 타입으로 반환하시오.

// 문자열 s(length <= 100,000) / 문자열 s는 '(' 와 ')'로만 이루어져 있다.

function solution(s){
//     const stack = [];
    
//     for(let i = 0; i < s.length; i++) {
//         if(s[i] === '(') stack.push('(');
//         else if(stack.length !== 0) stack.pop();
//         else return false;
//     }
    
//     return stack.length === 0;
    
    let count = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') count++;
        else if(count !== 0) count--;
        else return false;
    }
    
    return count === 0;
} 

// 해당 문제에서 괄호가 올바르게 짝지어지지 않은 경우는
// 1) 열린 괄호가 먼저 나오지 않고 닫힌 괄호가 나오는 경우
// 2) 열린 괄호가 닫힌 괄호로 마무리 되지 않은 경우

// s 문자열의 한가지 요소를 순회할 때 count가 음수가 되는 경우와 나머지 경우 false
// 모든 요소를 순회한 경우 count가 0으로 맞아 떨어지는 경우만 true