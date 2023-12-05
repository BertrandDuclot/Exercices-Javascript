// Who is going to pay for the wall?, link https://www.codewars.com/kata/58bf9bd943fadb2a980000a7

/*function whoIsPaying(name) {
  // Pour chaque mot parcourir la longueur du mot et ne retenir que ça première lettre

  let truncatedName = [];
  const separatedWords = name.split(" ");
  console.log("full name : ", name);

  if (name.length <= 2) {
    console.log("premiere cond");
    truncatedName = name;
    return truncatedName;
  } else {
    console.log("deuxième cond");
    for (let j = 0; j < 1; j++) {
      for (let i = 0; i < separatedWords.length; i++) {
        truncatedName[i] = separatedWords[i][j];
      }
    }
  }

  return truncatedName;
}

console.log(whoIsPaying("test exercice"));*/

/* Other exercice */

/*function whoIsPaying(name) {
  // Pour chaque mot parcourir la longueur du mot et ne retenir que ça première lettre

  let result = [];
  //result.push(name);

  if (name === "") {
    result.push("");
  } else if (name.length <= 2) {
    result.push(name[0] + [name[1]]);
  } else {
    result.push(name);

    for (let i = 1; i <= 1; i++) {
      result[i] = name[0] + name[1];
    }
  }
  return result;
}

console.log(whoIsPaying("Mexico"));

/* Shorter solution */

function whoIsPaying(name) {
  return name.length > 2 ? [name, name.substr(0, 2)] : [name];
}
