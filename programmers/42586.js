function solution(progresses, speeds) {
    const answer = [];
    
    while(progresses.length > 0) {
        const front = progresses.shift();
        console.log(front);
        const day = (100 - front) / speeds.shift();
        const leftDay = Number.isInteger(day) ? day : day + 1;
        let count = 1;
        
        for(let i = 0; i < progresses.length; i++) {
            if(progresses[i] + (speeds[i] * leftDay) >= 100) {
                count++;
            }
            else {
                progresses = progresses.slice(count - 1);
                break;
            }
        }
        
        answer.push(count);
    } 
    return answer;
}