// 콜라를 받기 위해 마트에 주어야 하는 병 수 a, 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 b, 상빈이가 가지고 있는 빈 병의 개수 n이 매개변수로 주어집니다.
// 상빈이가 받을 수 있는 콜라의 병 수를 return 하도록 solution 함수를 작성해주세요.

// 콜라를 받는 공식은 parseInt(n / a) * b를 n이 a개를 넘지 못해 더 이상 콜라를 받을 수 없을 때까지 반복한다.

function solution(a, b, n) {
    let answer = 0;
    
    while(n >= a) {
        const count = parseInt(n / a) * b;
        answer += count;
        n = count + n % a;
    }
    
    return answer;  
}
