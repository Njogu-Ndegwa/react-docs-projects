const ScaleName = {
    "c": "Celcius",
    "f": "Farenheit"
}


let toCelcius = function (farenheit) {
    return ((farenheit - 32) * 5/9)
}

let toFarenheit = function (celcius) {
    return ((celcius * 9/ 5) + 32)
}

let TryConvert = function TryConvert (temparature, convert) {
    const input = parseFloat(temparature);

    if(Number.isNaN(input)) {
        return ''
    }

    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000;

    return rounded;
}

export {
    toCelcius,
    toFarenheit,
    TryConvert,
    ScaleName,
}

