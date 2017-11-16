export const $htmlString = (strings, ...values) => {
    let str = '';
    values.forEach((val, i) => {
        let string = strings[i];
        if (Array.isArray(val))
            val = val.join('');
        //str += string + (val || '');
        str += string;
        str += val;
    });
    return str += strings[strings.length - 1];
};