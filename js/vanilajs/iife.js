

var ans = (function abcd(){
    var a = 12;

    return {
        set:function (val) {
            a = val;
        },
        get:function () {
            console.log(a);
        }
    };
})();

// ans.set('32');
// ans.get();