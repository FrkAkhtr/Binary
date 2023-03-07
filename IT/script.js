function add() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var result = parseInt(input1, 2) + parseInt(input2, 2);
    document.getElementById("result").value = result.toString(2);
  }
  
  function subtract() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var result = parseInt(input1, 2) - parseInt(input2, 2);
    document.getElementById("result").value = result.toString(2);
  }
  
  function multiply() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var result = parseInt(input1, 2) * parseInt(input2, 2);
    document.getElementById("result").value = result.toString(2);
  }
  
  function divide() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var result = parseInt(input1, 2) / parseInt(input2, 2);
    document.getElementById("result").value = result.toString(2);
  }
  