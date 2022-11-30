const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const K = Number(input[0].split(' ')[1]);
const arr = input[1].split(' ').map(el => Number(el));

const map = {};
for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
}

const sorted = [...arr].sort((a, b) => a - b);

function selection_sort(arr, K) {
    let counter = 0;
    
    for(let i = arr.length - 1; i > 0; i--) {
        if(arr[i] !== sorted[i]) { 
            const temp = arr[i]; 
            const temp2 = map[sorted[i]]; 

            [arr[i], arr[temp2]] = [arr[temp2], arr[i]];

            counter++;
            if(counter === K) return arr;
            
            map[arr[i]] = i;
            map[temp] = temp2;
        }
    }

    return -1;
}

console.log(`${selection_sort(arr, K)}`.replaceAll(',', ' '));