
var Rule = require("Rule");
cc.Class({
    extends: cc.Component,

    properties: {
        image:[cc.SpriteFrame],

        _goodsID:Rule.GT.NETMEG,
        _owner:0,
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
