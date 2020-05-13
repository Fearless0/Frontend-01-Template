# 结构化程序设计

## Realm

可以理解为**上下文**，内含有一套完整的js对象

作用：

* 在JS中，函数表达式和对象直接量会创建对象
* 使用 .做隐式转换也会创建对象
* 这些对象也是有原型的，如果我们没有Realm，接不知道它们的原型是什么

包括：

* JS Context => Realm
* JS执行粒度
  * 宏任务
  * 微任务
  * 函数调用
  * 语句/声明
  * 表达式
  * 直接量/变量/this。。。

### 宏任务和微任务

#### 宏任务：

​	由js引擎产生的任务称为宏任务

* 整体代码script
* setTimeout
* setInterval
* 等等

#### 微任务：

​	由js产生的任务称为微任务

* 所有同步代码都是微任务
* javascript中 Promise能产生微任务
* 浏览器api MutationObserver也能产生一个微任务

#### 宏任务和微任务执行机制

* 每一个宏任务触发时都会push到消息队列中依次执行

* 每个宏任务执行结束前都会把微任务队列执行完成

### 函数调用

#### 执行上下文栈 Execution Context Stack

函数调用  Execution Context push 

函数返回  Execution Context pop

#### Execution Context 

* code evaluation state 代码执行位置

  * Generator函数使用

* Function函数执行

* Script or Module

* Generator

* Realm

* LexicalEnvironment词法环境

  * this
  * new.target
  * super
  * 变量
  * 本质：链表结构
    *  Environment Records
       * Declarative  Environment Records
         * Function  Environment Records
         * module  Environment Records
       * Global  Environment Records
       * Object  Environment Records(一般由with产生)
  * 机制 Function-Closure

* VariableEnvironment变量环境（用于处理var声明）

  ```
  //处理x声明位置
  {
    let y = 2;
    eval('var x = 1');
  }
  console.log(x)
  //---------------
  width({a:1}){
  	eval('var x;');
  }
  console.log(x)
  ```


# 浏览器工作原理

## 浏览器

URL HTTP => HTML parse => DOM css computing => DOM with CSS layout => DOM with position render => Bitmap

### ISO-OSI七层网络模型

HTTP

* 应用
* 表示
* 会话

TCP

* 传输

Internet

* 网络

4G/5G/WIFI

* 数据链路
* 物理层

### TCP与IP的一些基础知识

* 流/包
* 端口/IP地址
* require（‘net’）/libnet/libpcap

### HTTP

在tcp基础上规定了一个Request/Response模型

特点：一问一答