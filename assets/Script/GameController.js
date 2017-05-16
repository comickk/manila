var Rule = require("Rule");
cc.Class({
    extends: cc.Component,

    properties: {
        
        map:cc.Node,

        boats:[cc.Node],
    },

    // use this for initialization
    onLoad: function () {

         this.map.scaleX =   this.map.scaleY = this.map.parent.width/this.map.width;

        //  console.log(this.map.parent.width+'   '+this.map.parent.height);
        //  console.log(this.map.scaleX+'    '+this.map.scaleY);
        //   console.log(this.map.width+'    '+this.map.height);
  
       // this.map.height = this.map.parent.width/this.width * this.map.height;
        //this.map.width = this.map.parent.width;
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
