(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{169:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions","aria-hidden":"true"}},[t._v("#")]),t._v(" FUNCTIONS")]),t._v(" "),a("ul",[a("li",[t._v("upper")]),t._v(" "),a("li",[t._v("datepart")]),t._v(" "),a("li",[t._v("soundex")]),t._v(" "),a("li",[t._v("other fns")])]),t._v(" "),a("h6",{attrs:{id:"все-значение-будут-в-высоком-регистре"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#все-значение-будут-в-высоком-регистре","aria-hidden":"true"}},[t._v("#")]),t._v(" Все значение будут в Высоком регистре")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" UPPER"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Cust_NAME"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" NAMEUP "),a("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Customers\n")])])]),a("h6",{attrs:{id:"вывод-записей-где-год-2011"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#вывод-записей-где-год-2011","aria-hidden":"true"}},[t._v("#")]),t._v(" Вывод записей где год = 2011")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" ORDER_NUM"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ID "),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CUST_ID "),a("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Orders\n"),a("span",{attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" DATEPART"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yy"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" order_date"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2011")]),t._v("\n")])])]),a("h6",{attrs:{id:"вывод-похожих-по-звучанию-значений"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#вывод-похожих-по-звучанию-значений","aria-hidden":"true"}},[t._v("#")]),t._v(" Вывод похожих по звучанию значений")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" CUST_NAME"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CUST_CONTACT "),a("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" CUSTOMERS\n"),a("span",{attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" SOUNDEX"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CUST_CONTACT"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SOUNDEX"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'MICHAEL GREEN'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="functions.md";s.default=e.exports}}]);