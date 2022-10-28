var a = 456;
function isPair(nombre, callback) {
    return (nombre % 2 === 0);
}
function printUser(user) {
    if (typeof user.id !== 'number') {
        user.id = parseInt(user.id, 10);
    }
    // the compiler know user.id is a number
    user.id = 4 * user.id;
    console.log(user);
}
function salut(t) {
    var out = [];
    for (var _i = 0, t_1 = t; _i < t_1.length; _i++) {
        var item = t_1[_i];
        out.push('Salut' + item);
    }
    return (out);
}
isPair(a, function (reste) {
    console.log(reste);
});
salut(['aze', 'izi', '45']);
