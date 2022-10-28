var a = 456;
function isPair(nombre, callback) {
    return (nombre % 2 === 0);
}
function printUser(user) {
    if (typeof user.id !== 'number') {
        user.id = parseInt(user.id, 10);
    }
    user.id = 4 * user.id;
    console.log(user);
}
function salut(t) {
    let out = [];
    for (let item of t) {
        out.push('Salut' + item);
    }
    return (out);
}
isPair(a, function (reste) {
    console.log(reste);
});
salut(['aze', 'izi', '45']);
//# sourceMappingURL=demo.js.map