function solution(str) {

    let original = str;
    let reversed = original.split('').reverse().join('');
    console.log(reversed);

    return reversed;

}

solution("test");