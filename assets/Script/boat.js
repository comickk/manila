var Rule = require("Rule");
cc.Class({
    extends: cc.Component,

    properties: {
       boatspf:[cc.SpriteFrame],
       goodspf:[cc.SpriteFrame],
       goods:cc.Sprite,      

       _goodsid:0,
       _boatid:0,

       _step:0,
       _status:Rule.BS.WAIT,//-79   22
       _direct:0,
       _crew:[],//4个
    },

    // use this for initialization
    onLoad: function () {
       
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

    ForWard:function(){
     //   this._step++;
        this.node.runAction(cc.moveBy(0.5,7,63));
    },    
   
    SetGoods:function(ID){ 
   // SetGoods:function(event, customEventData) {   
     var id= parseInt(ID);         
  //      var id= parseInt(customEventData);         
        if(id<0 || id>4) return;
        this._goodsid =id;
        if(this._goodsid ==0)
            this.goods.spriteFrame = null;
        else
            this.goods.spriteFrame = this.goodspf[this._goodsid-1];
    },

    SetStatus:function(status){


    },

});
