// UTILITY FUNCTIONS

function textArea() {
    return document.getElementById("message").value.trim();
}

function textAreaToLowercase(text) {
    return text.toLowerCase()
}
function textAreaToArray2(text) {
    return text.split(/\s+/)
}
function textAreaToArray(text) {
    return text.split(" ")
}
function inputWord() {
    return document.getElementById("input").value.trim();
}
function badWordsArray() {
    let bad = ["mad", "crazy", "stupid", "fool", "fuck", "fucking", "idiot", "bitch", "foolish", "stupidity", "stupider", "idiotic", "foolishness", "stupidness", "madness", "mumu", "ode", "mugu"];
    return bad;
}
function noInputtedWord() {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i].trim().length === 0) {
            return true;
        }
    }
    return false;
}

// BUSINESS LOGIC

function countWords() {
    let array = textAreaToArray(textAreaToLowercase(textArea()))
    let counter = 0

    array.forEach(function (text) {
        if (textArea() !== "" && text !== "" && !Number(text)) {
            counter++
        }
    })
    return counter
}
function countOffenciveWords() {
    let array = textAreaToArray(textAreaToLowercase(textArea()))
    let badWords = badWordsArray()
    let counter = 0

    badWords.forEach(function (badtext) {
        array.forEach(function (text) {
            if (textArea() !== "" && text !== "" && !Number(text) && text === badtext) {
                counter++
            }
        });
    });
    return counter
};
function OffenciveWords() {
    let words = textAreaToArray(textAreaToLowercase(textArea()));
    let badWords = badWordsArray()


    for (let i = 0; i < words.length; i++) {
        if (badWords.includes(words[i].toLowerCase())) {
            let maskedWord = words[i][0] + '-'.repeat(words[i].length - 2) + words[i][words[i].length - 1];
            words[i] = maskedWord;
        };
    };
    return words.join(' ');
};
function topThreeWords() {
    if (noInputtedWord(textArea())) {
        return "No WORDs yet"
    }
    let array = textAreaToArray(textAreaToLowercase(textArea()));
    let topUniqueWords = [...new Set(array)];
    let topWords = [];


    topUniqueWords.forEach(function (Uword) {
        let count = 0
        array.forEach(function (words) {
            if (Uword === words)
                count++

        });
        if (Uword !== "" && !Number(Uword)) {
            topWords.push([Uword, count])
        }
    });
    topWords.sort((a, b) => b[1] - a[1]);
    let top3Words = topWords.slice(0, 3)
    let new2 = "<ul>";

    top3Words.forEach(function (Twords) {

        new2 += "<li>" + Twords[0] + " : " + "<b style='color:rgb(44, 1, 1);'>" + Twords[1] + "</b>" + "</li>";

    });
    new2 += "</ul>"

    return new2


};
function findLongestWord() {
    let words = textAreaToArray(textAreaToLowercase(textArea()))

    if (words.length === 0) {
        let longest = null
        return longest;
    }

    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length && !Number(words[i])) {
            longestWord = words[i];
        }

    }
    if (textArea() !== "") {
        let change = "<p style='font-size:18px; color:blue;'>"
        change += "Lenght of longest word : " + "<b style='font-size:20px; color: rgb(6, 51, 82);'>" + longestWord.length; + "</b>"
        change += "</p>"
        let result = longestWord + "<br>" + change

        return result
    } else if (textArea() === "") {
        longestWord = "No word yet"
        return longestWord
    }

}
function findShortestWord() {
    let words = textAreaToArray(textAreaToLowercase(textArea()))

    if (words.length === 0) {
        let shortest = null
        return shortest;
    }

    let shortestWord = words[0];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length < shortestWord.length && !Number(words[i])) {
            shortestWord = words[i];
        }
    }

    if (textArea() !== "") {
        let change = "<p style='font-size:18px; color:blue;'>"
        change += "Lenght of Shortest word : " + "<b style='font-size:20px; color: rgb(6, 51, 82);'>" + shortestWord.length; + "</b>"
        change += "</p>"
        let result = shortestWord + "<br>" + change

        return result
    } else if (textArea() === "") {
        shortestWord = "No word yet"
        return shortestWord
    }

}
function countWordsOccurence() {
    let words = textAreaToLowercase(inputWord())
    let array = textAreaToArray(textAreaToLowercase(textArea()))
    let counter = 0

    array.forEach(function (text) {
        if (textArea() !== "" && text !== "" && !Number(text) && words === text) {
            counter++
        }
    })
    return counter
}

function colorWordsOccurence() {
    if (noInputtedWord(textArea())) {
        return "";
    }
    let words = textAreaToLowercase(inputWord())
    let array = textAreaToArray(textAreaToLowercase(OffenciveWords()))
    let returnWords = "<p class='textal'>"

    array.forEach(function (text, index) {
        if (text !== "" && !Number(text) && words === text) {
            returnWords += "<b style='background-color:transparent ; border:3px solid red; padding: 2px;'>" +
                text +
                "</b>"
        } else if (text !== "" && words !== "" && !Number(text) && text.includes(words)) {
            returnWords += "<b style='background-color:transparent ; border:1px solid blue; padding: 2px;'>" +
                text +
                "</b>"
        } else {
            returnWords += text
        }
        if (index !== array.length - 1) {
            returnWords += " "
        }

        // return returnWords
    })

    returnWords += "</p>"
    return returnWords
    // returnWords += "</p>"
    // return returnWords
}

function numberToBinary() {
    if (noInputtedWord(textArea())) {
        return "No Numbers yet"
    }
    let array = textAreaToArray(textAreaToLowercase(textArea()));
    let topUniqueWords = [...new Set(array)];
    let binaryNumber = [];


    topUniqueWords.forEach(function (Uword) {
        let binary = null
        let number = null;

        array.forEach(function (words) {
            if (Uword === words) {
                number = Number(words)
                binary = number.toString(2);
            }



        });
        if (Uword !== "" && Number(Uword) && Uword.length <= 2) {
            binaryNumber.push([Uword, binary])
        }

    });
    binaryNumber.sort((a, b) => a[1] - b[1]);
    let NewbinaryNumber = binaryNumber.slice(0, 4)
    let new2 = "<ul>";

    NewbinaryNumber.forEach(function (Twords) {

        new2 += "<li>" + Twords[0] + " : " + "<b style='color:rgb(44, 1, 1); font-size:18px;'>" + Twords[1] + "</b>" + "</li>";

    });
    new2 += "</ul>"

    return new2


};
function occur() {
    if (noInputtedWord(textArea())) {
        $("#occur").hide()
    } else {
        $("#occur").show()
    }
}
function changeStyle2() {
    $(".text").addClass("text2")
    $(".result").addClass("text2")
    $(".top2").addClass("text2")
    $(".return").addClass("text3")
    $(".topwrd").addClass("border1")
    $(".mncont").addClass("mncont2")
    $(".list").addClass("hover")
}
function changeStyle1() {
    $(".text").removeClass("text2")
    $(".result").removeClass("text2")
    $(".top2").removeClass("text2")
    $(".return").removeClass("text3")
    $(".topwrd").removeClass("border1")
    $(".mncont").removeClass("mncont2")
    $(".list").removeClass("hover")
}
function fontStyle1() {
    $(".mncont").removeClass("font2")
    $(".mncont").removeClass("font3")

}
function fontStyle2() {
    $(".mncont").addClass("font2")
    $(".mncont").removeClass("font3")

}
function fontStyle3() {
    $(".mncont").removeClass("font2")
    $(".mncont").addClass("font3")

}


// UI

window.onload = function () {
    $("#message").on("input", function () {
        let textarea = colorWordsOccurence();
        let countOfMassage = countWords();
        let countOfBadWords = countOffenciveWords();
        let topThreeWord = topThreeWords()
        let longest = findLongestWord()
        let shortest = findShortestWord()
        let countWordsOccurences = countWordsOccurence();
        let numberToBinarys = numberToBinary()
        $(".tcount").text(countOfMassage);
        $(".fcount").text(countOfBadWords);
        $("#occur").html(textarea);
        $(".top").html(topThreeWord);
        $(".long").html(longest);
        $(".short").html(shortest);
        $(".acount").text(countWordsOccurences);
        $(".num2").html(numberToBinarys);
        occur()


    });
    $("#input").on("input", function () {
        let textarea = colorWordsOccurence();
        let countWordsOccurences = countWordsOccurence();
        $(".acount").text(countWordsOccurences);
        $("#occur").html(textarea);

    })
    $("#style1").click(function () {
        changeStyle1()
    })
    $("#style2").click(function () {
        changeStyle2()
    })
    $("#font1").click(function () {
        fontStyle1()
    })
    $("#font2").click(function () {
        fontStyle2()
    })
    $("#font3").click(function () {
        fontStyle3()
    })
    // console.log(textArea())
    // console.log(textAreaToArray())
    // console.log(inputWord())








}