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

/* */

function each_cons(list, n) {
  const result = [];

  for (let i = 0; i <= list.length - n; i++) {
    const subset = [];
    for (let j = 0; j < n; j++) {
      subset.push(list[i + j]);
    }
    result.push(subset);
  }

  return result;
}

// Test cases
console.log(each_cons([1, 2, 3, 4], 2));
console.log(each_cons([1, 2, 3, 4], 3));
