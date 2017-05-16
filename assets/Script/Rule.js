
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

var SeatID =cc.Enum({
    WHARFA:0,
    WHARFB:-1,
    WHARFC:-1,
    DOCKA:-1,
    DOCKB:-1,
    DOCKC:-1,
    INSURER:-1,
    PIRATEA:-1,
    PIRATEB:-1,
    NAVIGATORA:-1,
    NAVIGATORB:-1,    
});
module.exports.SID = SeatID;

// var SeatProfit =cc.Enum({
//     WHARFA:6,
//     WHARFB:8,
//     WHARFC:15,
//     DOCKA:6,
//     DOCKB:8,
//     DOCKC:15, 
//     INSURER:10,   
// });
//SeatProfit
module.exports.SP = [6,8,15,6,8,15,10];

// var SeatCost =cc.Enum({
//     WHARFA:4,
//     WHARFB:3,
//     WHARFC:2,
//     DOCKA:4,
//     DOCKB:3,
//     DOCKC:2,
//     INSURER:0,
//     PIRATEA:5,
//     PIRATEB:5,
//     NAVIGATORA:2,
//     NAVIGATORB:5,    
// });
module.exports.SC = [4,3,2,4,3,2,0,5,5,2,5];

var GoodsProfit = cc.Enum({
    GINSENG:12,
    NETMEG:24,
    SILK:30,
    JADE:36,
});
module.exports.GP = GoodsProfit;

module.exports.GINSENGSC = [1,2,3];
module.exports.NETMEGSC = [2,3,4];
module.exports.SILKSC = [3,4,5];
module.exports.JADESC = [3,4,5,5];

