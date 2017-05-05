## selectComponent ##
鉴于特殊的需求，所以模拟用div模拟select, 拥有和原生select一样的功能！

**CONTACT　ＭＥ**：[https://github.com/huainanhai](https://github.com/huainanhai)

## 先让我们来扒一扒原生select框的功能： ##
- 点击select框之外的部分，下拉菜单会收起；
- 按下ESC，菜单收起；UP & DOWN 可以上下选择；ENTER键可以确认选择；
- 多个select时，如果打开了第一个select，再点击展开第二个时，其余的select会收起菜单。

## 原生select不足之处： ##
- 不可以按照产品UI自定义样式；
- 添加属性、读取属性比较麻烦。

## 模拟select，实现了原生的原有的功能： ##

用法 & 参数

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

	1. 调用方法 $(dom).selectModel(paramObj);
	2. 需要引入jquery，虽然大部门都是用原生js写的，但是用了jquery的封装方法($.fn.selectModel)；
	3. optionClick 点击菜单每个option时候的回调，可以自定义事件；
	4. optionData 为一个数组，用来存放菜单的数据，两个key分别为name,value；
	5. 很多地方都可以自定义，包括css lesss，可以根据自己的需求自己添加重置；


![](http://i.imgur.com/4bJMsnw.png)

![](http://i.imgur.com/K1tM4xs.png)

## 版权 ##

如需使用，必须标明来源地址，谢谢配合！
