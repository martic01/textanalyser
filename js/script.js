// UTILITY FUNCTIONS

function textArea() {
    return document.getElementById("message").value.trim();
}

function textAreaToLowercase(text) {
    return text.toLowerCase()
}

function textAreaToArray(text) {
    return text.split(" ")
}
function inputWord() {
    return document.getElementById("input").value.trim();
}
function badWordsArray() {
    let bad = ["mad", "crazy", "stupid", "fool", "fuck", "fucking", "idiot", "bitch", "foolish", "stupidity", "stupider", "idiotic", "foolishness", "stupidness", "madness", "mumu", "ode", "mugu", 'zoinks', 'loopdaloop', 'biffaroni', 'muppeteer'];
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
function countOffensiveWords() {
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
function OffensiveWords() {
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

    let shortestWord = "No word yet";

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
    }
    return shortestWord
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
    let array = textAreaToArray(textAreaToLowercase(OffensiveWords()))
    let returnWords = "<p class='textal'>"

    array.forEach(function (text, index) {
        if (text !== "" && !Number(text) && words === text) {
            returnWords += "<b style='background-color:transparent ; border:3px solid red; padding: 1px;'>" +
                text +
                "</b>"
        } else if (text !== "" && words !== "" && !Number(text) && text.includes(words)) {
            const regex = new RegExp(words, "gi");
            let matchArray = text.match(regex);
            text = text.replace(matchArray[0], "<b style='background-color:transparent ; border:1px solid blue; padding: 1px;'>" +
                matchArray[0] +
                "</b>")
            returnWords = returnWords.concat(text);
        } else {
            returnWords = returnWords.concat(text);
        }
        if (index !== array.length - 1) {
            returnWords += " "

        }


    })

    returnWords += "</p>"
    return returnWords

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
function writeLetter() {
    let area = textAreaToLowercase(textArea());
    let sent1 = "Write a Resignation mail";
    let sent2 = "Write a Resignation letter";
    let secert = $("#secret").val()

    if (area === textAreaToLowercase(sent1) || area === textAreaToLowercase(sent2)) {
        $("#mail").show();
        $("#clear").hide();
        $("#occur").hide();
        $(".hedd").show();
        $("#done").hide();
        $("#copy2").hide();
    } else if (area !== "" && secert === "1") {
        $("#mail").show();
        $("#occur").hide();
        $(".hedd").show();
        $("#done").show();
        $("#clear").show();
        $("#copy2").hide();
    } else if (area !== "") {
        $("#mail").hide();
        $("#occur").show();
        $(".hedd").hide();
    } else if (area === "") {
        $("#secret").val("")
        $(".hedd").hide();
        $("#done").hide();
        $("#clear").hide();
        $("#mail").hide();
        $("#edit").show();
        $("#cop1").show();
        $("#cop2").hide();
        $("#cop3").show();
        $("#cop4").hide();
        $("#cop5").show();
        $("#cop6").hide();
    }

}
function editLetter() {
    let editingWord = $("#mail").text()
    $("#message").val(editingWord)
    $("#secret").val("1")
    $("#edit").hide()
    $("#done").show();
    $("#clear").show();
    $("#copy2").hide();
}
function clear() {
    $("#message").val("")
    $("#secret").val("")
    $(".hedd").hide();
    $("#done").hide();
    $("#clear").hide();
    $("#mail").hide();
    $("#edit").show();
    $("#cop1").show();
    $("#cop2").hide();
    $("#cop3").show();
    $("#cop4").hide();
    $("#cop5").show();
    $("#cop6").hide();
}
function occur() {
    if (noInputtedWord(textArea())) {
        $("#done").hide();
        $("#copy2").hide();
        $("#occur").hide()
    } else {
        $("#occur").show()
        $("#done").hide();
        $("#copy2").show();
    }
}
function copy1(text) {
    let textToCopy = text;
    let tempTextarea = $("<textarea>");
    tempTextarea.val(textToCopy);
    $("body").append(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    $(tempTextarea).remove();

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
        let countOfMessages = countWords();
        let countOfBadWords = countOffensiveWords();
        let topThreeWordsList = topThreeWords();
        let longestWord = findLongestWord();
        let shortestWord = findShortestWord();
        let countWordsOccurrences = countWordsOccurence();
        let numberToBinaryList = numberToBinary();

        $(".tcount").text(countOfMessages);
        $(".fcount").text(countOfBadWords);
        $(".top").html(topThreeWordsList);
        $(".long").html(longestWord);
        $(".short").html(shortestWord);
        $(".acount").text(countWordsOccurrences);
        $(".num2").html(numberToBinaryList);
        $("#occur").html(textarea);
        occur();
        writeLetter()

    });

    $("#input").on("input", function () {
        let textarea = colorWordsOccurence();
        let countWordsOccurences = countWordsOccurence();
        $(".acount").text(countWordsOccurences);
        $("#occur").html(textarea);
    })

    $("#edit").click(function () {
        editLetter()
    })
    $("#clear").click(function () {
        clear()
    });
    $("#copy1").click(function () {
        let textToCopied = $("#mail").text();
        copy1(textToCopied)
        $("#cop1").hide();
        $("#cop2").show();
    });

    $("#copy2").click(function () {
        let textToCopied = $("#occur").text();
        copy1(textToCopied)
        $("#cop3").hide();
        $("#cop4").show();
    });
    $("#done").click(function () {
        let textToCopied = $("#message").val();
        copy1(textToCopied)
        $("#cop5").hide();
        $("#cop6").show();

    });

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

}