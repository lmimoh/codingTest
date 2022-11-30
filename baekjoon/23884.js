// 오늘도 서준이는 선택 정렬 수업 조교를 하고 있다. 아빠가 수업한 내용을 학생들이 잘 이해했는지 문제를 통해서 확인해보자.
// N개의 서로 다른 양의 정수가 저장된 배열 A가 있다. 선택 정렬로 배열 A를 오름차순 정렬할 경우 K 번 교환이 발생한 직후의 배열 A를 출력해 보자.
// N이 매우 커서 시간 초과를 고민하고 있는 우리 서준이를 도와주자.

//input (/dev/stdin)

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

const K = Number(input[0].split(' ')[1]);
const arr = input[1].split(' ').map(el => Number(el));

function selection_sort(arr, K) {
    let counter = 0;
    for(let i = arr.length - 1; i > 0; i--) {
        let max = i;

        for(let j = i - 1; j >= 0; j--) {
            if(arr[max] < arr[j]) max = j;
        }

        if(max !== i) {
            [arr[i], arr[max]] = [arr[max], arr[i]];
            counter++;
            if(counter === K) return `${[...arr]}`.replaceAll(',', ' ');
        }
    }

    return -1;
}

console.log(selection_sort(arr, K));