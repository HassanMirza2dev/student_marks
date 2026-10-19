let names = [];
let marks = [];
function studentMarksCal() {
    let count = 1;
    let name = document.getElementById("user_name");
    let mark = document.getElementById("user_mark");
    let errorName = document.getElementById("name-errer");
    let errorMark = document.getElementById("mark-errer");
    errorName.classList.add("hide")
    errorMark.classList.add("hide")
    if (name.value == "") {
        errorName.classList.remove("hide")
        return
    }
    if (mark.value == "") {
        errorMark.classList.remove("hide")
        return
    }
    if (name.value == "") {
        errorName.classList.remove("hide")
        return
    }
    if (mark.value == "") {
        errorMark.classList.remove("hide")
        return
    }
    else if (Number(mark.value) < 0||Number(mark.value) > 100) {
        errorMark.classList.remove("hide")
        return
    }

    let paragraph = document.getElementById("show_result");
    let countStudent = 0;
    let countPass = 0;
    let countFail = 0;
    paragraph.textContent = "";
    names.push(name.value);
    marks.push(Number(mark.value));
    let highestmark = marks[0];
    let lowestmark = marks[0];
    for (let i = 0; i < names.length; i++) {
        let status = "fail";
        if (marks[i] > 50) {
            status = "pass";
            countPass++;
        }
        else {
            countFail++;
        }
        if (highestmark < marks[i]) {
            highestmark = marks[i]
        }
        if (lowestmark > marks[i]) {
            lowestmark = marks[i]
        }
        countStudent++;
        paragraph.textContent += count++ + ". " + names[i] + " - " + marks[i] + " - " + status + "\n";

    }
    paragraph.textContent += " total  :" + countStudent + "  pass std :" + countPass + "  fail std  :" + countFail;
    name.value = "";
    mark.value = "";
    document.querySelector("#highestmark").textContent = "total heighest student:  " + highestmark
    document.querySelector("#lowestmark").textContent = "total lowest student:  " + lowestmark
}
function removeEnd() {
    let count = 1;
    let name = document.getElementById("user_name");
    let mark = document.getElementById("user_mark");
    let paragraph = document.getElementById("show_result");
    let highestmark = marks[0];
    let lowestmark = marks[0];
    let countStudent = 0;
    let countPass = 0;
    let countFail = 0;
    paragraph.textContent = "";
    names.pop(name.value);
    marks.pop(Number(mark.value));
    for (let i = 0; i < names.length; i++) {
        let status = "fail";
        if (marks[i] > 50) {
            status = "pass";
            countPass++;
        }
        else {
            countFail++;
        }
        if (highestmark < marks[i]) {
            highestmark = marks[i]
        }
        if (lowestmark > marks[i]) {
            lowestmark = marks[i]
        }
        countStudent++;
        paragraph.textContent += count++ + ". " + names[i] + " - " + marks[i] + " - " + status + "\n";

    }
    paragraph.textContent += " total  :" + countStudent + "  pass std :" + countPass + "  fail std  :" + countFail;
    name.value = "";
    mark.value = "";
    document.querySelector("#highestmark").textContent = "total heighest student:  " + highestmark
    document.querySelector("#lowestmark").textContent = "total lowest student:  " + lowestmark
}
function removeAll() {
    names = [];
    marks = [];
    document.querySelector("#show_result").textContent = "";
    document.querySelector("#highestmark").textContent = "";
    document.querySelector("#lowestmark").textContent = "";
}