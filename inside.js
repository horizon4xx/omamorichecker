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
                case "mukizu":
            return "無傷"
                    case "rengeki":
            return "連撃"
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

function exist2(skilltwo,skillnumtwo,slot){
    let c = skilltwo
    let d = skillnumtwo
if (c == "反動" & d <= 7){
    return true
}else if(c == "納刀" & d <= 7){
    return true
}else if(c == "貫通強化" & d<=5){
    return true
}else if(c == "射法" & d<=5){
    return true
}else if(c == "達人" & d<= 10){
    return true
}else if(c == "痛撃" & d<= 5){
    return true
}else if(c == "会心強化" & d<=5){
    return true
}else if(c == "逆上" & d<=5){
    return true
}else if(c == "無傷" & d<=3){
    return true
}else if(c == "連撃" & d<=3){
    return true
}else if(c == "攻撃" & d<=10){
    return true
}else{
    return false
}
}


function exist1(skillone,skillnumone){
let a = skillone
let b = skillnumone



if (a == "納刀" & b <= 10){
    return true
}else if (a == "反動" & b <= 6){
    return true
}else if (a == "貫通強化" & b <= 6){
    return true
}else if(a == "射法" & b <= 5){
    return true
}else if(a == "痛撃" & b <= 6){
    return true
}else if(a == "炎熱適応" & b <= 7){
    return true
}else if(a == "逆上" & b <= 6){
    return true
}else if(a == "無傷" & b<=5){
    return true
}else if(a == "連撃" & b<=5){
    return true
}else{
    return false
}





}

function noutoudandou(skillone,skillnumone,skilltwo,skillnumtwo,slot){

    let a = skillone
    let b = skillnumone
    let c = skilltwo
    let d = skillnumtwo
    let e = slot

    if (a == "納刀"){
        if (c == "射法"){
            if(e >= 2 & b >= 10 & d >= 4){
                return true
            }else if(e >= 3 & b >= 9 & d >= 4){
                return true
            }else if(e >= 3 & b >= 10 & d >= 3){
                return true
            }else{
                return false
            }
        }else if(c == "達人"){
            if(e >= 3 & b >= 5 & d >= 10){
                return true
            }else if(e >= 3 & b >= 9 & d >= 9){
                return true
            }else if(e >= 3 & b >= 10 & d >= 6){
                return true
            }else{
                return false
            }
        }else if(c == "痛撃"){
            if(e >= 1 & b >= 10 & d >= 5){
                return true
            }else if(e >= 2 & b >= 9 & d >= 5){
                return true
            }else if(e >= 2 & b >= 10 & d >= 4){
                return true
            }else if(e >= 3 & b >= 7 & d >= 5){
                return true
            }else if(e >= 3 & b >= 9 & d >= 4){
                return true
            }else if(e >= 3 & b >= 10 & d >= 2){
                return true
            }else{
                return false
            }
        }else if(c == "会心強化"){
            if(e >= 2 & b >= 10 & d >= 5){
                return true
            }else if(e >= 3 & b >= 5 & d >= 5){
                return true
            }else if(e >= 3 & b >= 9 & d >= 4){
                return true
            }else if(e >= 3 & b >= 10 & d >= 2){
                return true
            }else{
                return false
            }
        }
    }else if(a == "射法"){
        if (c == "達人"){
            if(e >= 3 & b >=4 & d >= 10){
                return true
            }else{
                return false
            }
        }else if(c == "会心強化"){
            if(e >= 3 & b >= 4 & d >= 5){
                return true
            }else{
                return false
            }
        }
    }else if(a == "痛撃"){
        if(c == "納刀"){
            if(e >= 3 & b >= 6 & d >= 5){
                return true
            }else{
                return false
            }
        }else if(c == "射法"){
            if(e >= 3 & b >= 6 & d >= 4){
                return true
            }else{
                return false
            }
        }else if(c == "達人"){
            if(e >= 3 & b >= 6 & d >= 9){
                return true
            }else{
                return false
            }
        }else if(c == "会心強化"){
            if(e >= 3 & b >= 6 & d >= 5){
                return true
            }else{
                return false
            }
        }
    }else{
        return false
    }
}

function shoutoku(skillone,skillnumone,skilltwo,skillnumtwo,slot){

    let a = skillone
    let b = skillnumone
    let c = skilltwo
    let d = skillnumtwo
    let e = slot

    if (a == "貫通強化"){
        if (c == "攻撃"){
            if(e>=2 & b>=3 & d >=10){
                return true
            }else if(e>=3 & b>=1 & d >=10){
                return true
            }else if(e>=3 & b>=2 & d >=7){
                return true
            }else if(e>=3 & b>=3 & d >=6){
                return true
            }else if(e>=3 & b>=6 & d >=4){
                return true
            }else{
                return false
            }
        }else if(c == "達人"){
            if(e>=3 & b>=3 & d >=9){
                return true
            }else if(e>=3 & b>=6 & d >=8){
                return true
            }else{
                return false
            }
        }else if(c == "痛撃"){
            if(e>=3 & b>=3& d >=5){
                return true
            }else if(e>=3 & b>=6 & d >=3){
                return true
            }else{
                return false
            }
        }else if(c == "会心強化"){
            if(e>=3 & b>=3 & d >=5){
                return true
            }else if(e>=3 & b>=6 & d >=2){
                return true
            }else{
                return false
            }
        }
    }else if (a == "痛撃"){
        if (c == "攻撃"){
            if(e>=1 & b>=4 & d >=10){
                return true
            }else if(e>=1 & b>=6 & d >=6){
                return true
            }else if(e>=2 & b>=3 & d >=10){
                return true
            }else if(e>=2 & b>=4 & d >=7){
                return true
            }else if(e>=2 & b>=5 & d >=6){
                return true
            }else if(e>=2 & b>=6 & d >=5){
                return true
            }else if(e>=3 & b>=2 & d >=10){
                return true
            }else if(e>=3 & b>=3 & d >=7){
                return true
            }else if(e>=3 & b>=4 & d >=6){
                return true
            }else if(e>=3 & b>=5 & d >=5){
                return true
            }else if(e>=3 & b>=6 & d >=3){
                return true
            }else{
                return false
            }
        }else if(c == "貫通強化"){
            if(e>=2 & b>=6 & d >=3){
                return true
            }else if(e>=3 & b>=6 & d >=2){
                return true
            }else{
                return false
            }
        }else if(c == "達人"){
            if(e>=1 & b>=6 & d >=9){
                return true
            }else if(e>=2 & b>=5 & d >=9){
                return true
            }else if(e>=2 & b>=6 & d >=8){
                return true
            }else if(e>=3 & b>=3 & d >=10){
                return true
            }else if(e>=3 & b>=4 & d >=9){
                return true
            }else if(e>=3 & b>=5 & d >=8){
                return true
            }else if(e>=3 & b>=6 & d >=5){
                return true
            }else{
                return false
            }
        }else if(c == "会心強化"){
            if(e>=2 & b>=6 & d >=2){
                return true
            }else if(e>=3 & b>=5 & d >=2){
                return true
            }else{
                return false
            }
        }
    }else{
        return false
    }
}

function nousaka(skillone,skillnumone,skilltwo,skillnumtwo,slot){

    let a = skillone
    let b = skillnumone
    let c = skilltwo
    let d = skillnumtwo
    let e = slot

    if (a == "納刀"){
        if (c == "貫通強化"){
            if (e >= 3 & b >= 10 & d >= 3){
                return true
            }
        }else if(c == "達人"){
            if (e >= 3 & b >= 10 & d >=9){
                return true
            }
        }else if(c == "痛撃"){
            if (e >= 2 & b >= 10 & d >=5){
                return true
            }else if (e >= 3 & b >= 9 & d >=5){
                return true
            }else if (e >= 3 & b >= 10 & d >=4){
                return true
            }else{
                return false
            }
        }else if(c == "会心強化"){
            if (e >= 3 & b >= 10 & d >=5){
                return true
            }else{
                return false
            }
        }else if(c == "逆上"){
            if (e >= 3 & b >= 10 & d >=4){
                return true
            }else{
                return false
            }
        }
    }else{
                return false
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
    }else{
                return false
            }
}

function shousaka(skillone,skillnumone,skilltwo,skillnumtwo,slot){

    let a = skillone
    let b = skillnumone
    let c = skilltwo
    let d = skillnumtwo
    let e = slot

    if (a == "貫通強化"){
        if (c == "攻撃"){
            if (e >=3&b>=3&d>=10){
                return true
            }else{
                return false
            }
        }
    }else if(a == "痛撃"){
            if(c == "攻撃"){
                if (e >=3&b>=4&d>=10){
                    return true
                }else if (e >=3&b>=6&d>=6){
                    return true
                }else{
                    return false
                }
            }else if (c == "達人"){
                if (e >=3&b>=6&d>=9){
                    return true
                }else{
                    return false
                }
            }
    }else if (a == "逆上"){
        if (c == "攻撃"){
            if (e >=3&b>=4&d>=10){
                return true
            }else if (e >=3&b>=6&d>=7){
                return true
            }else{
                return false
            }
        }
    }else{
                return false
            }
}

function nanpuutokusha(skillone,skillnumone,skilltwo,skillnumtwo,slot){

    let a = skillone
    let b = skillnumone
    let c = skilltwo
    let d = skillnumtwo
    let e = slot

    if (a == "炎熱適応"){
        if (c == "貫通強化"){
            if (e >= 3 & b >= 7 & d >= 5){
                return true
            }else{
                return false
            }
        }else if(c == "達人"){
            if (e >= 3 & b >= 7 & d >= 9){
                return true
            }else{
                return false
            }
        }else if(c == "痛撃"){
            if (e >= 2 & b >= 7 & d >= 5){
                return true
            }else if (e >= 3 & b >= 6 & d >= 4){
                return true
            }else{
                return false
            }
        }else if(c == "会心強化"){
            if (e >= 2 & b >= 7 & d >= 5){
                return true
            }else if (e >= 3 & b >= 5 & d >= 5){
                return true
            }else if (e >= 3 & b >= 6 & d >= 4){
                return true
            }else if (e >= 3 & b >= 7 & d >= 3){
                return true
            }else{
                return false
            }
        }
    }else if (a == "貫通強化"){
        if (c == "達人"){
            if (e >= 3 & b >= 6 & d >= 10){
                return true
            }else{
                return false
            }
        }else if (c == "会心強化"){
            if (e >= 3 & b >= 6 & d >= 5){
                return true
            }else{
                return false
            }
        }
    }else if (a=="痛撃"){
        if (c == "達人"){
            if (e >= 3 & b >= 5 & d >= 9){
                return true
            }else if (e >= 3 & b >= 6 & d >= 8){
                return true
            }else{
                return false
            }
        }
    }else{
        return false
    }

}



function nouten(skillone,skillnumone,skilltwo,skillnumtwo,slot){

    let a = skillone
    let b = skillnumone
    let c = skilltwo
    let d = skillnumtwo
    let e = slot

    if (a == "納刀"){
        if (c == "貫通強化"){
            if (e >= 3 & b >= 10 & d >=3){
                return true
            }else{
                return false
            }
        }else if (c == "射法"){
            if (e >= 3 & b >= 10 & d >=4){
                return true
            }else{
                return false
            }
        }else if (c == "達人"){
            if (e >= 3 & b >= 10 & d >=9){
                return true
            }else{
                return false
            }
        }else if(c == "痛撃"){
            if (e >= 2 & b >= 10 & d >=5){
                return true
            }else if (e >= 3 & b >= 9 & d >=3){
                return true
            }else if (e >= 3 & b >= 10 & d >=4){
                return true
            }else{
                return false
            }
        }else if (c == "会心強化"){
            if (e >= 3 & b >= 10 & d >=5){
                return true
            }else{
                return false
            }
        }
    }else{
                return false
            }
}



function nanhuru(skillone,skillnumone,skilltwo,skillnumtwo,slot){

    let a = skillone
    let b = skillnumone
    let c = skilltwo
    let d = skillnumtwo
    let e = slot

    if (a == "炎熱適応"){
        if (c == "達人"){
            if (e >= 2 & b >= 7 & d >=10){
                return true
            }else if (e >= 3 & b >= 6 & d >=10){
                return true
            }else if (e >= 3 & b >= 7 & d >=8){
                return true
            }else{
                return false
            }
        }else if (c == "会心強化"){
            if (e >= 3 & b >= 7 & d >=5){
                return true
            }else{
                return false
            }
        }
    }else if (a == "貫通強化"){
        if (c == "達人"){
            if (e >= 3 & b >= 3 & d >=10){
                return true
            }else{
                return false
            }
        }
    }else if(a == "痛撃"){
        if (c == "貫通強化"){
            if (e >= 3 & b >= 6 & d >=3){
                return true
            }else{
                return false
            }
        }else if (c == "達人"){
            if (e >= 2 & b >= 5 & d >=10){
                return true
            }else if (e >= 3 & b >= 4 & d >=10){
                return true
            }else if (e >= 3 & b >= 5 & d >=9){
                return true
            }else if (e >= 3 & b >= 6 & d >=6){
                return true
            }else{
                return false
            }
        }
    }else if(a == "無傷"){
        if (c == "達人"){
            if (e >= 3 & b >= 4 & d >=10){
                return true
            }else{
                return false
            }
        }
    }else{
                return false
            }
}

function sanren(skillone,skillnumone,skilltwo,skillnumtwo,slot){

    let a = skillone
    let b = skillnumone
    let c = skilltwo
    let d = skillnumtwo
    let e = slot

    if (a == "貫通弾強化"){
        if (c == "会心強化"){
            if (e >= 3 & b >= 6 & d >= 5){
                return true
            }else{
                return false
            }
        }
    }else if(a == "連撃"){
        if (c == "貫通強化"){
            if (e >= 3 & b >= 4 & d >= 3){
                return true
            }else if (e >= 3 & b >= 5 & d >= 2){
                return true
            }else{
                return false
            }
        }else if (c == "射法"){
            if (e >= 3 & b >= 4 & d >=4){
                return true
            }else if (e >= 3 & b >= 5 & d >= 3){
                return true
            }else{
                return false
            }
        }else if (c == "達人"){
            if (e >= 3 & b >=4& d >= 10){
                return true
            }else if (e >= 3 & b >= 5 & d >= 5){
                return true
            }else{
                return false
            }
        }else if (c == "会心強化"){
            if (e >= 3 & b >= 4 & d >= 5){
                return true
            }else if (e >= 3 & b >= 5 & d >= 4){
                return true
            }else{
                return false
            }
        }
    }else{
                return false
            }
}


function noutoutokusha(skillone,skillnumone,skilltwo,skillnumtwo,slot){

    let a = skillone
    let b = skillnumone
    let c = skilltwo
    let d = skillnumtwo
    let e = slot

    if (a == "納刀"){
        if (c == "貫通強化"){
            if (e >= 1 & b >= 10& d >= 3){
                return true
            }else if (e >= 2 & b >= 9 & d >= 3){
                return true
            }else if (e >= 2 & b >= 10 & d >= 2){
                return true
            }else if (e >= 3 & b >= 7 & d >= 3){
                return true
            }else if (e >= 3 & b >= 9 & d >= 2){
                return true
            }else if (e >= 3 & b >= 10 & d >= 1){
                return true
            }else{
                return false
            }
        }else if(c == "達人"){
            if (e >= 1 & b >= 10 & d >= 9){
                return true
            }else if (e >= 2 & b >= 9 & d >= 9){
                return true
            }else if (e >= 2 & b >= 10 & d >= 8){
                return true
            }else if (e >= 3 & b >= 7 & d >= 9){
                return true
            }else if (e >= 3 & b >= 9 & d >= 7){
                return true
            }else if (e >= 3 & b >= 10 & d >= 5){
                return true
            }else{
                return false
            }
        }else if(c == "痛撃"){
        if(e >= 0 & b >= 10 & d >=5){
            return true
        }else if (e >= 1 & b >= 9 & d >= 5){
            return true
        }else if (e >= 1 & b >= 10 & d >= 4){
            return true
        }else if (e >= 2 & b >= 7 & d >= 5){
            return true
        }else if (e >= 2 & b >= 9 & d >= 4){
            return true
        }else if (e >= 2 & b >= 10 & d >= 2){
            return true
        }else if (e >= 3 & b >= 5 & d >= 5){
            return true
        }else if (e >= 3 & b >= 7 & d >= 4){
            return true
        }else if (e >= 3 & b >= 9 & d >= 2){
            return true
        }else if (e >= 3 & b >= 10 & d >= 1){
            return true
        }else {
            return false
        }
    }else if(c == "会心強化"){
        if (e >= 1 & b >= 10 & d >= 5){
            return true
        }else if (e >= 2 & b >= 9 & d >= 5){
            return true
        }else if (e >= 2 & b >= 10 & d >= 2){
            return true
        }else if (e >= 3 & b >= 5 & d >= 4){
            return true
        }else if (e >= 3 & b >= 9 & d >= 2){
            return true
        }else if (e >= 3 & b >= 10 & d >= 1){
            return true
        }else{
            return false
        }
    }
    }else if(a == "貫通強化"){
        if (c == "達人"){
        if (e >= 3 & b >= 6 & d >= 10){
            return true
        }else {
            return false
        }
    }else if (c == "痛撃"){
        if (e >= 3 & b >= 3 & d >= 5){
            return true
        }else{
            return false
        }
    }else if(c == "会心強化"){
        if (e >= 3 & b >= 2 & d >= 5){
            return true
        }else if (e >= 3 & b >= 3 & d >= 4){
            return true
        }else {
            return false
        }
    }
    }else if(a == "痛撃"){
        if (c == "納刀"){
            if (e >= 2 & b >= 6 & d >= 5){
                return true
            }else if (e >= 3 & b >= 6 & d >= 4){
                return true
            }else{
                return false
            }
        }else if(c == "貫通強化"){
            if (e >= 3 & b >= 6 & d >= 2){
                return true
            }else{
                return false
            }
        }else if(c == "達人"){
            if (e >= 3 & b >= 5 & d >= 9){
                return true
            }else if (e >= 3 & b >= 6 & d >= 8){
                return true
            }else{
                return false
            }
        }else if(c == "会心強化"){
            if (e >= 3 & b >= 2 & d >= 5){
                return true
            }else if (e >= 3 & b >= 6 & d >= 2){
                return true
            }else{
                return false
            }
        }
    }else{
        return false
    }

}







function check(){
    document.getElementById("mikiri1tokusha").style.color = "black"
    document.getElementById("nanpuutokusha").style.color = "black"
    document.getElementById("noutoku").style.color = "black"
        document.getElementById("nousaka").style.color = "black"
    document.getElementById("nouten").style.color = "black"
    document.getElementById("nanhuru").style.color = "black"
    document.getElementById("sanren").style.color = "black"
    document.getElementById("shousaka").style.color = "black"
    document.getElementById("shoutoku").style.color = "black"
    document.getElementById("noutoudandou").style.color = "black"
    let skill1 = skillcheck(document.getElementById("dai1").value)
    let skillnum1 = numcheck(document.getElementById("num1").value)
    let skill2 = skillcheck(document.getElementById("dai2").value)
    let skillnum2 = numcheck(document.getElementById("num2").value)
    let slot = numcheck(document.getElementById("slot").value)
    if (!exist1(skill1,skillnum1) || !exist2(skill2,skillnum2)){
        alert("存在しないお守りです。")
    }else if (skill1 == skill2){
        alert("存在しないお守りです。")
    }
    document.getElementById("omamori").innerHTML = (skill1+skillnum1+","+skill2+skillnum2+",s"+slot)
    if (mikiri1tokusha(skill1,skillnum1,skill2,skillnum2,slot)){
        document.getElementById("mikiri1tokusha").style.color = "red"
    }
    if (nanpuutokusha(skill1,skillnum1,skill2,skillnum2,slot)){
        document.getElementById("nanpuutokusha").style.color = "red"
    }
    if (noutoutokusha(skill1,skillnum1,skill2,skillnum2,slot)){
        document.getElementById("noutoku").style.color = "red"
    }
    if (nousaka(skill1,skillnum1,skill2,skillnum2,slot)){
        document.getElementById("nousaka").style.color = "red"
    }
        if (nouten(skill1,skillnum1,skill2,skillnum2,slot)){
        document.getElementById("nouten").style.color = "red"
    }
        if (nanhuru(skill1,skillnum1,skill2,skillnum2,slot)){
        document.getElementById("nanhuru").style.color = "red"
    }
        if (sanren(skill1,skillnum1,skill2,skillnum2,slot)){
        document.getElementById("sanren").style.color = "red"
    }
    if (shousaka(skill1,skillnum1,skill2,skillnum2,slot)){
        document.getElementById("shousaka").style.color = "red"
    }
        if (shoutoku(skill1,skillnum1,skill2,skillnum2,slot)){
        document.getElementById("shoutoku").style.color = "red"
    }
        if (noutoudandou(skill1,skillnum1,skill2,skillnum2,slot)){
        document.getElementById("noutoudandou").style.color = "red"
    }
}

function mikiri1tokushas(){
        document.getElementById("tenpureskill").innerHTML = `
        <br>
        見切り１特射<br><br>
        
        ガオウ＝クオバルデ<br><br>

        貫通弾・貫通矢UP<br>
        弾導強化<br>
        特定射撃強化<br>
        見切り+1<br>
        弱点特効<br>
        超会心<br>
        `
}

function nanpuutokushas(){
    document.getElementById("tenpureskill").innerHTML = `

<br>
南風特射<br><br>

ガオウ＝クオバルデ<br><br>
南風の狩人<br>
貫通弾・貫通矢UP<br>
特定射撃強化<br>
見切り+2<br>
弱点特効<br>
超会心<br>
`
}

function noutokus(){
    document.getElementById("tenpureskill").innerHTML = `
    
    <br>
納刀特射<br><br>

ガオウ＝クオバルデ<br><br>
    
    納刀術<br>
貫通弾・貫通矢UP<br>
特定射撃強化<br>
見切り+2<br>
弱点特効<br>
超会心<br>
`
}

function noutoudandous(){
    document.getElementById("tenpureskill").innerHTML = `
    
    <br>
納刀弾道<br><br>

ガオウ＝クオバルデ<br><br>
    
納刀術<br>
弾導強化<br>
特定射撃強化<br>
見切り+2<br>
弱点特効<br>
超会心<br>
`
}

function nousakas(){
    document.getElementById("tenpureskill").innerHTML = `
    
    <br>
納刀逆恨み<br><br>

ガオウ＝クオバルデ<br><br>
納刀術<br>
貫通弾・貫通矢UP<br>
見切り+2<br>
弱点特効<br>
超会心<br>
逆恨み<br>
`
}

function noutens(){
    document.getElementById("tenpureskill").innerHTML = `
    
    <br>
2弱納刀<br><br>

ガオウ＝クオバルデ<br><br>
納刀術<br>
貫通弾・貫通矢UP<br>
弾導強化<br>
見切り+2<br>
弱点特効<br>
超会心<br>
`
}

function nanhurus(){
    document.getElementById("tenpureskill").innerHTML = `
    
    <br>
    南風フルチャージ<br><br>

ガオウ＝クオバルデ<br><br>
南風の狩人<br>
貫通弾・貫通矢UP<br>
見切り+1<br>
弱点特効<br>
超会心<br>
フルチャージ<br>
`
}

function sanrens(){
    document.getElementById("tenpureskill").innerHTML = `
    
    <br>
    見切り3連撃<br><br>

ガオウ＝クオバルデ<br><br>
貫通弾・貫通矢UP<br>
弾導強化<br>
見切り+3<br>
連撃の心得<br>
超会心<br><br>
`
}

function shousakas(){
    document.getElementById("tenpureskill").innerHTML = `
    
    <br>
    小逆恨み<br><br>

ガオウ＝クオバルデ<br><br>
攻撃力UP【小】<br>
貫通弾・貫通矢UP<br>
見切り+2<br>
弱点特効<br>
超会心<br>
逆恨み<br>
`
}

function shoutokus(){
    document.getElementById("tenpureskill").innerHTML = `
    
    <br>
    攻撃小特射<br><br>

ガオウ＝クオバルデ<br><br>
攻撃力UP【小】<br>
貫通弾・貫通矢UP<br>
特定射撃強化<br>
見切り+2<br>
弱点特効<br>
超会心<br>
`
}
