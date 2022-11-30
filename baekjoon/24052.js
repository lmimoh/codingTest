// // 오늘도 서준이는 삽입 정렬 수업 조교를 하고 있다. 아빠가 수업한 내용을 학생들이 잘 이해했는지 문제를 통해서 확인해보자.
// // N개의 서로 다른 양의 정수가 저장된 배열 A가 있다. 삽입 정렬로 배열 A를 오름차순 정렬할 경우 배열 A의 원소가 K 번 변경된 직후의 배열 A를 출력해 보자.
// // 크기가 N인 배열에 대한 삽입 정렬 의사 코드는 다음과 같다.

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

const K = Number(input[0].split(' ')[1]);
const arr = input[1].split(' ').map(el => Number(el));

function insertion_sort(arr, K) {
    let counter = 0;

    for (let i = 1; i < arr.length; i++) {
        loc = i - 1;
        newItem = arr[i];

        while (0 <= loc && newItem < arr[loc]) {
            arr[loc + 1] = arr[loc];
            loc--;
            counter++;
            if(counter === K) return arr;
        }

        if (loc + 1 != i) {
            arr[loc + 1] = newItem;
            counter++;
            if(counter === K) return arr;
        }
    }

    return -1
}

console.log(`${insertion_sort(arr, K)}`.replaceAll(',', ' '));
