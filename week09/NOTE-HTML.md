 

# HTML

HTML的定义：

* XML 
  * 使用namespace定义

* SGML
  * 使用DTD定义

## 合法元素

* Element：<tagname>...<tagname>
* Text:text
* Comment:<!--comments-->
* DocumentType:<!Documentype html>
* ProcessingInstruction:<?a 1?>
* CDATA:<![CDATA[]]>

##  字符引用

* &#161;
* &amp;
* &lt;
* &quot;

# DOM

### 导航类操作

* parentNode
* childNodes
* firstChild
* lastChild
* nextSibling
* previousSibling

#### 修改操作

* appendChild
* insertBefore
* removeChild
* replaceChild

### 高级操作

* compareDocumentPosition 适用于比较两个节点中关系的函数。
* contains检查一个节点是否包含另一个节点的函数。
* isEqualNode检查两个节点是否同一个节点，实际上在JavaScript中用 ‘’===“。
* cloneNode复制一个节点，如果传入参数true，则会连同子元素做深拷贝。

### Event

