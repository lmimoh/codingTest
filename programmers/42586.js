function solution(progresses, speeds) {
    const answer = [];
    let localTime = 0;
    let counter = 1;
    for(let i = 0; i < progresses.length; i++) {
        const time = (100 - progresses[i]) / speeds[i];
        
        if(localTime === 0) {
            localTime = time;
            if(!Number.isInteger(localTime)) localTime = parseInt(localTime) + 1;
        } else {
            if(localTime >= time) {
                counter++;
            } else {
                answer.push(counter);
                counter = 1;
                localTime = time;
            }
        }
        
        if(i === progresses.length - 1) answer.push(counter);
    }
    return answer;
}