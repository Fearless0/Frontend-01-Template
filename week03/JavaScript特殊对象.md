# JavaScript特殊对象

 

### Bound Function

* **绑定函数：**通过bind()函数创建的一个函数。它包装了原函数对象。
* **内部属性：**
  * **[[BoundTargetFunction]]** - 包装的函数对象
  * **[[BoundThis]]** - 在调用包装函数时始终作为 **this** 值传递的值。
  * **[[BoundArguments]]** - 列表，在对包装函数做任何调用都会优先用列表元素填充参数列表。
  * **[[Call]]** - 执行与此对象关联的代码。通过函数调用表达式调用。内部方法的参数是一个**this**值和一个包含通过调用表达式传递给函数的参数的列表。

### Array

* **数组**是一种类列表对象，它的原型中提供了遍历和修改元素的相关操作。
* **内部属性：**
  * **length**-数组长度
    * 小于232的非负整数
    * 其值比数组索引大1
    * 其值改变时，每一个名称为数组索引且其值不小于新长度的属性都会被删除。
  * **[[DefineOwnProperty]]** -属性设置

### String

* **字符串**
* **内部属性**
  * **length**字符串长度-不可写
  * **[[GetOwnProperty]]** -属性获取
  * **[[DefineOwnProperty]]**-属性定义
  * **[[OwnPropertyKeys]]**-获取属性名列表

### Arguments

* 函数的参数的类数组对象
* 内部属性
  * **callee：**代表当前函数的引用(名字)
  * **caller：**用在函数执行的时候调用自身
  * **length:**长度
  * **[[GetOwnProperty]]**
  * **[[DefineOwnProperty]]** 
  * **[[Get]]** 
  * **[[Set]]**
  * **[[Delete]]** 

### Integer-Indexed

* **整数索引**
* **内部属性**
  * **[[GetOwnProperty]]**
  * **[[HasProperty]]**
  * **[[DefineOwnProperty]]**
  * **[[Get]]**
  * **[[Set]]** 
  * **[[OwnPropertyKeys]]**

## Module Namespace 

* **模块命名空间**
* **内部属性**
  * **[[GetOwnProperty]]**
  * **[[SetPrototypeOf]]**
  * **[[IsExtensible]]**
  * **[[PreventExtensions]]**
  * **[[HasProperty]]**
  * **[[DefineOwnProperty]]**
  * **[[Get]]**
  * **[[Set]]** 
  * **[[Delete]]** 
  * **[[OwnPropertyKeys]]**
  * **[[Module]]**
  * **[[Exports]]**
  * **[[Prototype]]** 

# Immutable Prototype 

* 不可变原型
* 内部属性
  * [[SetPrototypeOf]]