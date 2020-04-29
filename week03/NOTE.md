# 表达式

## Left Handside

**返回都是Reference类型**

#### Member

* a.b

* a[b]

* foo\`string`

* super.b

* super['b']

* new.target

* new Foo()


#### New

* new Foo

#### Call

* foo()
* super()
* foo()['b']
* foo().b
* foo()\`abc`

## Right Handside

#### Update（更新运算符）

* a++
* a--
* ++a
* --a

#### Unary（单目运算符）

* delete a.b
* void foo()
* typeof a
* +a
* -a
* ~a
* ！a
* ！a
* await a

#### Logical（逻辑运算）

* &&
* ||

#### Conditional(三目运算 )

* ?:

## Completion Record

* [[type]]: normal, break, continue, return, or throw
* [[value]]: Types
* [[target]]: label

#### 简单语句

* ExpressionStatement
* EmptyStatement
* DebuggerStatement
* TrowStatement
* ContinueStatement
  * [[type]]: break continue
  * [[value]]: --
  * [[target]]: label
* BreakStatement
  * [[type]]: break continue
  * [[value]]: --
  * [[target]]: label
* ReturnStatement

#### 符合语句

* BlockStatement
  * [[type]]: normal
  * [[value]]: --
  * [[target]]: --
* IfStatement
* ReturnStatement
* SwitchStatement
  * [[type]]: break continue
  * [[value]]: --
  * [[target]]: label
* IterationStatement
  * [[type]]: break continue
  * [[value]]: --
  * [[target]]: label
* LabelledStatement
  * [[type]]: break continue
  * [[value]]: --
  * [[target]]: label
* WithStatement
* TryStatement
  * [[type]]: return
  * [[value]]: --
  * [[target]]: label

#### 声明

* FunctionDeclaration
* GeneratorDeclaration
* AsyncFunctionDeclaration
* AsyncGeneratorDeclaration
* VariableDeclaration
* ClassDeclaration
* LexicalDeclaration

#### Object

##### 要素：

* 唯一性
* 状态
* 行为

##### 描述

所有对象都是唯一的，这与它本身的状态无关。所以 ，即使状态完全一致的两个对象，也并不相等。

我们用状态类描述对象。

我们状态的改变即是行为。

##### prototype

##### Data Property

* [[value]]
* writable
* enumerable
* configurable

##### Accessor Property

* get
* set
* enumerable
* configurable

##### 原型链

##### Function Object

带[[call]]行为的object