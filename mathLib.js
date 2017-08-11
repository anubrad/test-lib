var add = function(x, y) {
    if(!x ) {
        return null;
    }
    return x + y;
}
var sub = function(x, y) {
    return x - y;
}
var dion = function(x, y) {
    return x * y;
}

var div = function(x, y) {
    if(y && y !== 0) {
        return x/y;
    }
    return 0;
}

module.exports = {
    add: add,
    subtract: sub,
    dion: dion,
    div: div
};
//module.exports.add = add;
//module.exports.sub = sub;