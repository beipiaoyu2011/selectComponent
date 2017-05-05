
var s1=$('.newSelect').selectModel({
    optionClick: function(){},
    defaultIndex: 2,//默认显示第几个
    optionData:[{
        name: '魔兽世界',
        value:'1'
    },{
        name: '热血江湖',
        value:'2'
    },{
        name: '神鬼传奇',
        value:'3'
    },{
        name: '大话西游',
        value:'4'
    },{
        name: 'QQ幻想世界',
        value: '5'
    }]
});
var s2=$('.newSelect2').selectModel({
    optionClick: function(){},
    defaultIndex: 0,//默认显示第几个
    optionData:[{
        name: '魔兽世界2',
        value:'11'
    },{
        name: '热血江湖2',
        value:'22'
    },{
        name: '神鬼传奇2',
        value:'33'
    },{
        name: '大话西游II2',
        value:'44'
    },{
        name: 'QQ幻想世界2',
        value: '55'
    }]
});
console.log(s1);
console.log(s2);
