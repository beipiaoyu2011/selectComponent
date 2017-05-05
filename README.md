## selectComponent ##
鉴于特殊的需求，所以模拟用div模拟select, 拥有和原生select一样的功能！

**CONTACT ME:** master2011zhao@gmail.com

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
	    optionClick: function(ｅ){
		console.log(e);//通过ｅ参数传递你需要的数据
	    },
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

	MIT License
	
	Copyright (c) 2017 master
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
