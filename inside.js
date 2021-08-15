function skillcheck(skill){
    switch(skill){
        case "kantuu":
            return "貫通強化";
        case "shahou":
            return "射法"
        case "tuugeki":
            return "痛撃"
        case "ennnetu":
            return "炎熱適応"
        case "noutou":
            return "納刀"
        case "gyakujou":
            return "逆上"
        case "handou":
            return "反動"
        case "tatujin":
            return "達人"
        case "kaisin":
            return "会心強化"
        case "kougeki":
            return "攻撃"
    }
}

function numcheck(number){
switch (number){
    case "zero":
        return 0
    case "one":
        return 1
    case "two":
        return 2
    case "three":
        return 3
    case "four":
        return 4
    case "five":
        return 5
    case "six":
        return 6
    case "seven":
        return 7
    case "eight":
        return 8
    case "nine":
        return 9
    case "ten":
        return 10
    case "eleven":
        return 11
    case "twelve":
        return 12
    case "thirteen":
        return 13
}
}

function mikiri1tokusha(skillone,skillnumone,skilltwo,skillnumtwo,slot){

    let a = skillone
    let b = skillnumone
    let c = skilltwo
    let d = skillnumtwo
    let e = slot
    
    if(a == "貫通強化"){
        if (c == "達人"){
            if (e >= 2 & b >= 3 & d >= 10){
                return true
            }else if (e >= 3 & b >= 2 & d >= 10){
                return true
            }else if (e >= 3 & b >= 3 & d >= 9){
                return true
            }else{
                return false
            }
        }else if (c == "会心強化"){
            if (e >= 3 & b >= 3 & d >= 5){
                return true
            }else{
                return false
            }
        }
    }else if(a == "射法"){
        if (c == "達人"){
            if (e >= 2 & b >= 4 & d >= 10){
                return true
            }else if (e >= 3 & b >= 3 & d >= 10){
                return true
            }else if (e >= 3 & b >= 4 & d >= 9){
                return true
            }else{
                return false
            }
        }else if (c == "会心強化"){
            if (e >= 4 & b >= 5 & d >= 3){
                return true
            }else{
                return false
            }
        }
    }else if (a == "痛撃"){
        if (c == "貫通強化"){
            if (e >= 3 & b >= 6 & d >= 3){
                return true
            }else{
                return false
            }
        }else if(c == "射法"){
            if (e >= 6 & b >= 4 & d >= 3){
                return true
            }else{
                return false
            }
        }else if(c == "達人"){
            if (e >= 1 & b >= 6 & d >= 10){
                return true
            }else if (e >= 2 & b >= 5 & d >= 10){
                return true
            }else if (e >= 2 & b >= 6 & d >= 9){
                return true
            }else if (e >= 3 & b >= 2 & d >= 10){
                return true
            }else if (e >= 3 & b >= 5 & d >= 9){
                return true
            }else if (e >= 3 & b >= 6 & d >= 7){
                return true
            }else{
                return false
            }
        }else if(c == "会心強化"){
            if (e >= 3 & b >= 6 & d >= 5){
                return true
            }else{
                return false
            }
        }
    }
}

function check(){
    let skill1 = skillcheck(document.getElementById("dai1").value)
    let skillnum1 = numcheck(document.getElementById("num1").value)
    let skill2 = skillcheck(document.getElementById("dai2").value)
    let skillnum2 = numcheck(document.getElementById("num2").value)
    let slot = numcheck(document.getElementById("slot").value)
    document.getElementById("omamori").innerHTML = (skill1+skillnum1+","+skill2+skillnum2+",s"+slot)
    if (mikiri1tokusha(skill1,skillnum1,skill2,skillnum2,slot)){
        document.getElementById("mikiri1tokusha").style.color = "red"
    }
}
