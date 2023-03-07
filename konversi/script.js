function binaryToDecimal() {
    var binary = document.getElementById("input").value;
    var decimal = parseInt(binary, 2);
    document.getElementById("output").innerHTML = "Decimal: " + decimal;
  }
  
  function binaryToHex() {
    var binary = document.getElementById("input").value;
    var hex = parseInt(binary, 2).toString(16).toUpperCase();
    document.getElementById("output").innerHTML = "Hexadecimal: " + hex;
  }
  
  function binaryToOct() {
    var binary = document.getElementById("input").value;
    var oct = parseInt(binary, 2).toString(8);
    document.getElementById("output").innerHTML = "Octal: " + oct;
  }
  