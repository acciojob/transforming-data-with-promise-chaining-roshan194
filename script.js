document.getElementById("btn").addEventListener("click", () => {
  const inputVal = document.getElementById("ip").value;
  const output = document.getElementById("output");

  // Clear previous results
  output.innerText = "";

  // Ensure input is a number
  const num = Number(inputVal);

  if (isNaN(num)) {
    output.innerText = "Please enter a valid number.";
    return;
  }

  // Step 1: Start with the input number (after 2s)
  new Promise((resolve) => {
    setTimeout(() => {
      output.innerText = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })
    // Step 2: Multiply by 2 (after 2s)
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = res * 2;
          output.innerText = `Result: ${result}`;
          resolve(result);
        }, 2000);
      });
    })
    // Step 3: Subtract 3 (after 1s)
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = res - 3;
          output.innerText = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    // Step 4: Divide by 2 (after 1s)
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = res / 2;
          output.innerText = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    // Step 5: Add 10 (after 1s)
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const finalResult = res + 10;
          output.innerText = `Final Result: ${finalResult}`;
          resolve(finalResult);
        }, 1000);
      });
    });
});
