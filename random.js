function random (len, bits) {
    bits = bits || 36;
    var outStr = "", newStr;
    while (outStr.length < len){
        newStr = Math.random().toString(bits).slice(2);
        outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
    }
    return outStr.toUpperCase();
}
