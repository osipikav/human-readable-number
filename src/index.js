module.exports = function toReadable(number) {
    const ones = new Array(
        "",
        " one",
        " two",
        " three",
        " four",
        " five",
        " six",
        " seven",
        " eight",
        " nine",
        " ten",
        " eleven",
        " twelve",
        " thirteen",
        " fourteen",
        " fifteen",
        " sixteen",
        " seventeen",
        " eighteen",
        " nineteen"
    );
    const tens = new Array(
        "",
        "",
        " twenty",
        " thirty",
        " forty",
        " fifty",
        " sixty",
        " seventy",
        " eighty",
        " ninety"
    );
    const hundred = " hundred";
    let output = "";
    let num = number;
    let numString = num.toString();
    let numArr = numString.split("");

    if (num == 0) {
        output += "zero";
    } else if (numArr.length == 1) {
        funOnes(num);
    } else if (numArr.length == 2) {
        funTens(num);
    } else if (numArr.length == 3) {
        funHundred(num);
    }
    let finOut =
        "Should return '" + output.trim() + "' when " + number + " given";
    return finOut;
    // console.log("finOut :>> ", finOut);

    function funOnes(num) {
        output += ones[num];
    }

    function funTens(num) {
        if (num < 20) {
            output += ones[num];
        } else {
            output += tens[numArr[0]] + ones[numArr[1]];
        }
    }

    function funHundred(num) {
        output += ones[numArr[0]] + hundred;
        if (num < 20) {
            output += ones[num];
        } else {
            output += tens[numArr[1]] + ones[numArr[2]];
        }
    }
};
