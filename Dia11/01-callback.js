function getUserData(userId, callback) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error))
}

function displayUserData(data) {
  console.log(data.name);
}

getUserData(1, displayUserData);

// callback hell
operation1(function(result1) {
  operation2(result1, function(result2) {
    operation3(result2, function(result3) {
      operation4(result3, function(result4) {
        // ...continuar con más operaciones
      });
    });
  });
});

//promises
operation1()
  .then(result1 => {
    return operation2(result1);
  })
  .then(result2 => {
    return operation3(result2);
  })
  .then(result3 => {
    return operation4(result3);
  })
  .then(result4 => {
    // ...continuar con más operaciones
  })
  .catch(error => {
    // Manejar errores
  });