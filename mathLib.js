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

module.exports = {
    add: add,
    subtract: sub,
    dion: dion
};
//module.exports.add = add;
//module.exports.sub = sub;