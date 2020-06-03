## 选择器语法

#### 简单选择器

* *
* div svg|a(namespace)
* .cls
* #id
* [attr=value]
* :hover
* ::before

#### 复合选择器

* <简单选择器><简单选择器><简单选择器>
* *或者div必须写在最前面

#### 复杂选择器

*  <复合选择器><sp> <复合选择器>
*  <复合选择器>">" <复合选择器>
*  <复合选择器>"~" <复合选择器>
* <复合选择器>"+" <复合选择器>
*  <复合选择器>"||" <复合选择器>

####  优先级

1. important声明 1,0,0,0

2. ID选择器 0,1,0,0

3. 类选择器 0,0,1,0

4. 伪类选择器 0,0,1,0

5. 属性选择器 0,0,1,0

6. 标签选择器 0,0,0,1

7. 伪元素选择器 0,0,0,1

8. 通配符选择器 0,0,0,0

   **:not()权重取决于括号内选择器**

#### 伪类

**链接/行为**

* :any-link 所有链接
* :link 未访问:visited已访问
* :hover
* :active
* focus
* :target

**树结构**

* :empty
* :nth-child()
* :nth-last-child()
* :first-child  :last-child :only-child

**逻辑型**

* :not伪类
* ：where :has

#### 伪元素

* ::before
* ::afters
* ::firstLine
  * fonts
  * color
  * background
  * word-spacing
  * letter-spacing
  * text-transform
  * line-height
* ::firstletter
  * firstline系列
  * float
  * vertival-align
  * 盒模型系列

## CSS排版

#### 盒模型

margin + border + padding + content

box-sizing

* content-box
* border-box

#### IFC

#### BFC

所有能容纳正常流的 overflow不是visible的盒子都是 BFC

