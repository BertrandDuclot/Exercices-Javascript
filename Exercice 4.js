// Enumerable Magic #20 - Cascading Subsets, link : https://www.codewars.com/kata/545af3d185166a3dec001190

/*function each_cons(list, n) {
  result = [];

  for (let j = 0; j < list.length; j++) {
    for (let i = 0; i < n; i++) {
      result[i] = list[i];
    }
    subset.push(result[]);
  }
  console.log(result);
  return result;
}

test = [1, 2, 3, 4];
each_cons(test, 2);*/

/* Best */

function eachCons(array, n) {
  let res = [];

  for (let i = 0; i < array.length; i++) {
    res.push(array.slice(i, i + n));
  }

  return res.filter((e) => e.length === n);
}

console.log(eachCons([1, 2, 3, 4], 2));

/*function each_cons(list, n) {
  const result = [];

  console.log(list.length - n);

  for (let j = 0; j <= list.length - n; j++) {
    const subset = [];
    for (let i = 0; i < n; i++) {
      subset.push(list[j + i]);
    }
    result.push(subset);
  }

  return result;
}

// Test cases
console.log(each_cons([7, 8, 3, 4], 2));
//console.log(each_cons([1, 2, 3, 4], 3));*/
