//https://www.codewars.com/kata/51b6249c4612257ac0000005

function solution(roman) {
    var data = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
    var numbers = roman.split('');
    var sum = 0, i;

    for (i = 0; i < numbers.length; i++) {
        if (data[numbers[i]] < data[numbers[i + 1]]) {
            sum += data[numbers[i + 1]] - data[numbers[i]];
            i++;
        }
        else {
            sum += data[numbers[i]];
        }
    }

    return sum;
}