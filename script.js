function firstLast6(arr) {
    var first = arr[0];
    var last = arr[arr.length-1];
    var tr = "";

    if ((first ==6)||(last ==6)){
            tr = true;
    } else {
            tr = false;
    }
    return(tr);
}

function has23(arr){
    var i = "";
    var first = arr[0];
    var last = arr[1];
    if (first == 3 || last ==3){
        i = true;
    } else if ( first ==2 || last ==2){
        i = true;
    } else {
        i = false
    }
     return i;
}

function fix23(arr) {
    var i = "";
    for (i =0; i<arr.length; i++){
        if((arr[i] ==2) && (arr[i+1]==3)){
            arr[i+1] = 0;
        }
    }
    return(arr);
}


function countYZ(arr){
    var i = "";
    var arr = arr + " ";
    var count = 0;
    for ( i =0; i<arr.length; i++) {
        if ((arr[i] == "y" || arr[i] == "z") && (arr[i + 1] == " ")) {
            count += 1;
        }else if((arr[i] == "Y" || arr[i] == "Z") && (arr[i + 1] == " ")){
            count += 1;
        }
    }
    return(count);
}

function endOther(str1, str2){
    var end;
    var newOne = str1.toLowerCase();
    var newTwo = str2.toLowerCase();
    var small = newOne;
    var big = newTwo;
    if (str1 == str2){
        end = true;
    }
    if (str1.length>str2.length) {
        big = newOne
        small = newTwo
    }
    var smolLength = small.length;
    var bigLength = big.indexOf(small);

    if (bigLength == big.length - smolLength) {
        end = true;
    } else {
        end = false;
    }
    return(end);
}

function starOut(str){
    var newWord = "";
    for (i =0; i<str.length; i++){
        if(str[i] !="*" && str[i+1]!= "*" && str[i-1]!= "*"){
            newWord += str[i];
        }
    }
    return(newWord);
}

function getSandwich (str){
    var newWurd;
    var first = str.indexOf("bread");
    var last = str.lastIndexOf("bread");
    if (first==-1 || first == last){
        newWurd = "";
    } else {
        newWurd = str.substring(first+5, last);
    }

    return (newWurd);
}

function canBalance(arr){
    var a=0;
    var b=0;
    for (var i =0; i<arr.length; i++) {
        a += arr[i];
        for (y =i+1; y<arr.length; y++) {
            b+=arr[y];
        }
        if (a==b) {
            return true;
        }
        b = 0;
    }
    return false;
}

function countClumps (arr){
    var count = 0;
    for (var i =0; i<arr.length; i++) {
        if (arr[i] == arr[i-1] && arr[i] != arr[i+1]){
            count+=1
        }
    }
    return (count);
}

function evenlySpaced (a, b, c){
    var big = Math.max (a, b, c);
    var small = Math.min (a, b, c);
    var med = a + b + c - big - small;

    if (big - med == med - small) {
        return true
    }

    return false;
}

function tester() {
    document.getElementById("output").innerHTML += firstLast6(true, false);
    document.getElementById("output").innerHTML += has23(true, false);
    document.getElementById("output").innerHTML += fix23([1,2,3]);
    document.getElementById("output").innerHTML += countYZ(['fez day']);
    document.getElementById("output").innerHTML += endOther(hello. ello);
    document.getElementById("output").innerHTML += starOut("sm*dilly");
    document.getElementById("output").innerHTML += getSandwich("breadjambread");
    document.getElementById("output").innerHTML += canBalance([1, 1, 1, 2, 1]);
    document.getElementById("output").innerHTML += countClumps([1, 1, 1, 2, 2]);
    document.getElementById("output").innerHTML += evenlySpaced([2, 6, 4]);

}
