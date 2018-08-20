(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{167:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"concat-сложение"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#concat-сложение","aria-hidden":"true"}},[t._v("#")]),t._v(" CONCAT + СЛОЖЕНИЕ")]),t._v(" "),s("h3",{attrs:{id:"upper-все-значение-будут-в-высоком-регистре"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upper-все-значение-будут-в-высоком-регистре","aria-hidden":"true"}},[t._v("#")]),t._v(" UPPER Все значение будут в Высоком регистре")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" UPPER"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Cust_NAME"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" NAMEUP "),s("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Customers\n")])])]),s("h3",{attrs:{id:"datepart-вывод-записей-где-год-2011"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datepart-вывод-записей-где-год-2011","aria-hidden":"true"}},[t._v("#")]),t._v(" DATEPART - Вывод записей где год = 2011")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" ORDER_NUM"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ID "),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CUST_ID "),s("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Orders\n"),s("span",{attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" DATEPART"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yy"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" order_date"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2011")]),t._v("\n")])])]),s("h3",{attrs:{id:"soundex-вывод-похожих-по-звучанию-значений"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#soundex-вывод-похожих-по-звучанию-значений","aria-hidden":"true"}},[t._v("#")]),t._v(" SOUNDEX - Вывод похожих по звучанию значений")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" CUST_NAME"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CUST_CONTACT "),s("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" CUSTOMERS\n"),s("span",{attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" SOUNDEX"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CUST_CONTACT"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SOUNDEX"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'MICHAEL GREEN'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"другие-функции"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#другие-функции","aria-hidden":"true"}},[t._v("#")]),t._v(" Другие функции")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("ABS"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" Модуль числа\nCOS"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" Косинус угла\nEXP"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" Экспонента числа\nPI"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" число пи\nSIN"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" синус угла\nSQRT"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" корень числа\nTAN"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" тангенс угла\n")])])])])}],!1,null,null,null);r.options.__file="upper.md";a.default=r.exports}}]);