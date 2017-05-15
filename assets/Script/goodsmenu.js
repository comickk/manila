var Rule = require("Rule");
cc.Class({
    extends: cc.Component,

    properties: {
       price:[cc.Label],

       _price:[],
    },

    // use this for initialization
    onLoad: function () {
        this._price = [0,0,0,0];
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    //SetPrice:function(event, customEventData){    
    SetPrice:function(ID){    
        var id= parseInt(ID);         
       // var id= parseInt(customEventData);         
        if(id<0 || id >4) return;
        if(++this._price[id] > 4 ) this._price[id]=4;

      //  console.log('----'+goodsvalue[this._price[id]]);
       this.price[id].string = Rule.GV[this._price[id]];
    }
});
