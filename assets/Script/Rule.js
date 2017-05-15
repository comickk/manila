
var GoodsID = cc.Enum({
    GINSENG:1,
    NETMEG:2,
    SILK:3,
    JADE:4,
});
module.exports.GT = GoodsID;

var GoodsValue=[0,5,10,20,30];
module.exports.GV = GoodsValue;

var BoatStatus =cc.Enum({
    WAIT:0,
    FORWARD:1,
    ARRIVAL:2,
    REPAIR:3,
});
module.exports.BS = BoatStatus;
