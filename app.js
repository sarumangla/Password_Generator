var finalans;

function docopy(answer) {
    navigator.clipboard.writeText(answer);
}

function init() {
    const choose = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "?/><.,;:@#$%^&*()!~`", "0123456789"];
    var chars = "";

    function generateString(length) {
        let result = '';
        const charactersLength = chars.length;
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    var elements = document.querySelectorAll(".item input");
    console.log(elements);
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            chars = chars + choose[i];
        }
    }

    var len = document.getElementById("points").value;
    var ans = generateString(len);
    console.log(chars);
    document.getElementsByClassName("display")[0].value = ans;
    var answer = document.querySelector(".display");
    answer.value = ans;
    console.log(answer);

    finalans = ans;
}

const button = document.querySelector('.final');
button.addEventListener("click", init);

var tocopy = document.querySelector(".copy");
tocopy.addEventListener("click", function () {
    docopy(finalans);
});