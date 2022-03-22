(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[4],{253:function(e,s,c){},580:function(e,s,c){"use strict";c.r(s);var a=c(0),n=c(92),t=c(582),i=c(155),l=c(156),o=c(581),r=c(583),j=c(584),b=c(585),d=c(586),h=c(151),x=c(93),m=c(230),_=c(88),O=(c(104),c(105),c(253),c(254)),g=c(8),p=t.a.TextArea,u=Object(n.a)((function(e){var s=Object(x.a)().BookingStore;return Object(g.jsxs)("div",{className:"container-xxl booking",children:[Object(g.jsx)(_.a,{mainTitle:"\u0417\u0410\u042f\u0412\u041a\u0410 \u041d\u0410 \u0410\u0420\u0415\u041d\u0414\u0423"}),Object(g.jsxs)(i.a,{className:"row bookingMain contentMain",children:[Object(g.jsx)(l.a,{span:6,children:Object(g.jsxs)("div",{className:"bookingSelect",children:[Object(g.jsx)("div",{className:"bookingSelect__title",children:"\u0412\u0430\u0448\u0430 \u0437\u0430\u044f\u0432\u043a\u0430"}),Object(g.jsx)("hr",{className:"bookingSelect__divide"}),s.stage<3&&Object(g.jsxs)(i.a,{style:{width:"90%",marginLeft:"auto",marginRight:"auto",marginTop:"20px"},gutter:[16,16],children:[Object(g.jsxs)(l.a,{span:14,children:[Object(g.jsx)("p",{className:"bookingSelectors__selectorTitle",children:"\u0414\u0430\u0442\u0430 \u0437\u0430\u0435\u0437\u0434\u0430"}),Object(g.jsx)(o.a,{allowClear:!1,className:"bookingSelectors__selector",value:s.startDate,onChange:function(e){return s.changeStartDate(e)}})]}),Object(g.jsxs)(l.a,{span:8,children:[Object(g.jsx)("p",{className:"bookingSelectors__selectorTitle",children:"\u041d\u043e\u0447\u044c"}),Object(g.jsx)(r.a,{className:"bookingSelectors__selector",min:1,step:1,value:s.nights,onChange:s.changeNights})]}),Object(g.jsxs)(l.a,{span:14,children:[Object(g.jsx)("p",{className:"bookingSelectors__selectorTitle",children:"\u0414\u0430\u0442\u0430 \u0432\u044b\u0435\u0437\u0434\u0430"}),Object(g.jsx)(o.a,{allowClear:!1,value:s.endDate,onChange:function(e){return s.changeEndDate(e)},className:"bookingSelectors__selector"})]}),Object(g.jsx)(l.a,{span:10}),Object(g.jsxs)(l.a,{span:8,children:[Object(g.jsx)("p",{className:"bookingSelectors__selectorTitle",children:"\u041f\u0440\u043e\u0436\u0438\u0432\u0430\u044e\u0449\u0438\u0435"}),Object(g.jsx)(j.a,{value:s.adults,className:"bookingSelectors__selector",onChange:s.changeAdults,children:s.adultsOptions.filter((function(e){return 0!==e})).map((function(e){return Object(g.jsx)(j.a.Option,{value:e,children:"".concat(e)},"adlt-".concat(e))}))})]}),Object(g.jsx)(l.a,{span:16}),Object(g.jsx)(l.a,{span:24,children:Object(g.jsxs)(b.a,{children:["\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \xa0",Object(g.jsx)(d.a,{content:Object(g.jsxs)("div",{children:["\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e ",Object(g.jsx)("br",{})," \u0434\u043b\u044f 3\u0433\u043e \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u0433\u043e!"]}),children:Object(g.jsx)("div",{style:{display:"inline-block"},children:Object(g.jsx)("i",{class:"fa fa-exclamation-circle","aria-hidden":"true"})})})]})}),Object(g.jsx)(l.a,{span:8,children:Object(g.jsx)(h.a,{disabled:!s.enableButton,className:"bookingSelectors__findButton",onClick:s.findRooms,children:"\u041d\u0430\u0439\u0442\u0438"})})]}),s.stage>=3&&Object(g.jsxs)(i.a,{children:[Object(g.jsx)(l.a,{span:21,children:Object(g.jsxs)("div",{className:"bookingSelect__description",children:[Object(g.jsx)("p",{className:"bookingSelect__room",children:s.room.name}),Object(g.jsxs)("p",{className:"bookingSelect__details",children:[Object(g.jsxs)("span",{children:["\u0412\u0437\u0440\u043e\u0441\u043b\u044b\u0435: ",s.adults," \u2002 \u0414\u0435\u0442\u0438: ",s.children]}),Object(g.jsx)("span",{className:"bookingSelect__price",children:(+s.room.price*+s.nights).toLocaleString("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2})})]}),Object(g.jsxs)("p",{className:"bookingSelect__details",children:[Object(g.jsx)("span",{children:"\u0414\u0430\u0442\u0430 \u0437\u0430\u0435\u0437\u0434\u0430:"}),Object(g.jsx)("span",{className:"bookingSelect__price",children:s.startDate.format("DD.MM.YYYY")})]}),Object(g.jsxs)("p",{className:"bookingSelect__details",children:[Object(g.jsx)("span",{children:"\u0414\u0430\u0442\u0430 \u0432\u044b\u0435\u0437\u0434\u0430:"}),Object(g.jsx)("span",{className:"bookingSelect__price",children:s.endDate.format("DD.MM.YYYY")})]})]})}),s.transfer&&Object(g.jsx)(l.a,{span:21,children:Object(g.jsxs)("div",{className:"bookingSelect__description",children:[Object(g.jsx)("p",{className:"bookingSelect__room",children:"\u0414\u043e\u043f. \u0443\u0441\u043b\u0443\u0433\u0438:"}),Object(g.jsxs)("p",{className:"bookingSelect__details",children:[Object(g.jsx)("span",{children:"\u0422\u0440\u0430\u043d\u0441\u0444\u0435\u0440 \u0438\u0437 \u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442\u0430"}),Object(g.jsx)("span",{className:"bookingSelect__price",children:"3000,00"})]})]})}),Object(g.jsxs)(l.a,{span:24,children:[Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{className:"bookingSelect__total",children:[Object(g.jsx)("span",{className:"bookingSelect__total__left",children:" \u041e\u0431\u0449\u0438\u0439 \u0438\u0442\u043e\u0433:"}),Object(g.jsx)("span",{className:"bookingSelect__total__right",children:(+s.room.price*+s.nights+(s.transfer?3e3:0)).toLocaleString("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2})})]})]})]})]})}),Object(g.jsxs)(l.a,{span:18,children:[Object(g.jsx)("div",{className:"bookingStages",children:Object(g.jsxs)("div",{className:"bookingContainer",children:[Object(g.jsxs)("div",{onClick:function(e){return s.goToStage(1)},className:"bookingStages__stage",children:[Object(g.jsx)("span",{className:1===s.stage?"bookingStages__stage__currentStage":"",children:"1. \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0432 \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u0435"}),Object(g.jsx)("i",{})]}),Object(g.jsx)("div",{onClick:function(e){return s.goToStage(2)},className:"bookingStages__stage",children:Object(g.jsx)("span",{className:2===s.stage?"bookingStages__stage__currentStage":"",children:"2. \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0441\u0442\u0435\u0432\u043e\u0439 \u0434\u043e\u043c"})}),Object(g.jsx)("div",{onClick:function(e){return s.goToStage(3)},className:"bookingStages__stage",children:Object(g.jsx)("span",{className:3===s.stage?"bookingStages__stage__currentStage":"",children:"3. \u0421\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0437\u0430\u043a\u0430\u0437"})}),Object(g.jsx)("div",{className:"bookingStages__stage",children:Object(g.jsx)("span",{className:4===s.stage?"bookingStages__stage__currentStage":"",children:"4. \u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435"})})]})}),Object(g.jsxs)("div",{children:[1===s.stage&&Object(g.jsx)(m.DateRange,{minDate:s.minDate,className:"bookingCalendar",months:2,direction:"horizontal",onChange:function(e){return s.changeRange(e.selection)},locale:O.ru,ranges:s.range}),2===s.stage&&s.rooms.map((function(e){return Object(g.jsx)(a.Fragment,{children:Object(g.jsxs)(i.a,{className:"roomBlock",children:[Object(g.jsx)(l.a,{span:8,children:Object(g.jsx)("img",{style:{width:"240px"},src:e.image})}),Object(g.jsxs)(l.a,{span:16,children:[Object(g.jsx)("a",{className:"roomBlock__text",children:e.name.toUpperCase()}),Object(g.jsx)("div",{className:"roomBlock__info",children:Object(g.jsxs)("p",{children:["\u041c\u0430\u043a\u0441. \u043a\u043e\u043b-\u0432\u043e \u0447\u0435\u043b\u043e\u0432\u0435\u043a: \xa0 ",Object(g.jsxs)("span",{className:"roomBlock__info__values",children:[e.places_qty," "]}),"/ \xa0 \u0412\u0438\u0434: \xa0 ",Object(g.jsx)("span",{className:"roomBlock__info__values",children:e.view})]})}),Object(g.jsxs)("p",{className:"roomBlock__description",children:["\u041e\u041f\u0418\u0421\u0410\u041d\u0418\u0415: ",e.description.substr(0,228),"..."]}),Object(g.jsxs)(i.a,{className:"roomBlock__footer",children:[Object(g.jsx)(l.a,{span:12,children:Object(g.jsx)(h.a,{className:"roomBlock__button",onClick:function(c){return s.chooseRoom(e)},children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u043d\u043e\u043c\u0435\u0440"})}),Object(g.jsx)(l.a,{span:12,children:Object(g.jsxs)("div",{className:"roomBlock__priceWrap",children:[Object(g.jsxs)("p",{className:"roomBlock__priceElement",children:[Object(g.jsx)("span",{className:"roomBlock__price",children:"\u0426\u0435\u043d\u0430 \u043e\u0442"}),Object(g.jsxs)("span",{className:"roomBlock__price__highlighted",children:[e.price.toLocaleString("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2})," / \u041d\u043e\u0447\u044c"]})]}),Object(g.jsx)("p",{className:"roomBlock__showPrice",children:"* \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0438\u0442\u043e\u0433\u043e\u0432\u043e\u0439 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438"})]})})]})]})]})},e.id)})),3===s.stage&&Object(g.jsxs)(i.a,{className:"personInfo",children:[Object(g.jsxs)(l.a,{span:8,children:[Object(g.jsx)("div",{className:"personInfo__title",children:"\u0418\u043c\u044f *"}),Object(g.jsx)("div",{className:"personInfo__input",children:Object(g.jsx)(t.a,{value:s.personInfo.name,onChange:function(e){return s.changeValue(e.target.value,"name")}})})]}),Object(g.jsxs)(l.a,{offset:1,span:8,children:[Object(g.jsx)("div",{className:"personInfo__title",children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f *"}),Object(g.jsx)("div",{className:"personInfo__input",children:Object(g.jsx)(t.a,{value:s.personInfo.surname,onChange:function(e){return s.changeValue(e.target.value,"surname")}})})]}),Object(g.jsx)(l.a,{span:7}),Object(g.jsxs)(l.a,{span:8,children:[Object(g.jsx)("div",{className:"personInfo__title",children:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(g.jsx)("div",{className:"personInfo__input",children:Object(g.jsx)(t.a,{value:s.personInfo.fathersName,onChange:function(e){return s.changeValue(e.target.value,"fathersName")}})})]}),Object(g.jsx)(l.a,{span:16}),Object(g.jsxs)(l.a,{span:8,children:[Object(g.jsx)("div",{className:"personInfo__title",children:"Email *"}),Object(g.jsx)("div",{className:"personInfo__input",children:Object(g.jsx)(t.a,{value:s.personInfo.email,onChange:function(e){return s.changeValue(e.target.value,"email")}})})]}),Object(g.jsxs)(l.a,{offset:1,span:8,children:[Object(g.jsx)("div",{className:"personInfo__title",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d *"}),Object(g.jsx)("div",{className:"personInfo__input",children:Object(g.jsx)(t.a,{value:s.personInfo.phone,onChange:function(e){return s.changeValue(e.target.value,"phone")}})})]}),Object(g.jsx)(l.a,{span:"17",children:Object(g.jsx)(b.a,{className:"personInfo__transfer",value:s.transfer,onChange:s.setTransfer,children:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c \u0442\u0440\u0430\u043d\u0441\u0444\u0435\u0440 \u0438\u0437 \u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442\u0430 \u0413\u043e\u0440\u043d\u043e\u0430\u043b\u0442\u0430\u0439\u0441\u043a\u0430"})}),Object(g.jsxs)(l.a,{span:17,children:[Object(g.jsx)("div",{className:"personInfo__title",children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}),Object(g.jsx)("div",{className:"personInfo__input",children:Object(g.jsx)(p,{onChange:function(e){return s.changeValue(e.target.value,"comment")},rows:5,value:s.personInfo.comment})})]}),Object(g.jsxs)(l.a,{span:17,children:[Object(g.jsx)("div",{className:"personInfo__alert",hidden:s.hideAlert,children:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043b\u044f \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b, \u0438\u043b\u0438 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u043d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e!"}),Object(g.jsx)(h.a,{onClick:s.sendBookingRequest,className:"personInfo__button",children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443 \u043d\u0430 \u0431\u0440\u043e\u043d\u044c \u043f\u043e E-mail"})]})]}),4===s.stage&&Object(g.jsx)(i.a,{className:"success",children:Object(g.jsx)(l.a,{xl:17,lg:24,children:Object(g.jsxs)("div",{className:"successBox",children:[Object(g.jsx)("h3",{className:"successBox__title",children:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e\u0435 \u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435!"}),Object(g.jsxs)("p",{className:"successBox__text",children:["\u0414\u0435\u0442\u0430\u043b\u0438 \u0432\u0430\u0448\u0435\u0439 \u0437\u0430\u044f\u0432\u043a\u0438 \u043d\u0430 \u0430\u0440\u0435\u043d\u0434\u0443 \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e \u0431\u044b\u043b\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 E-Mail.",Object(g.jsx)("br",{}),"(\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435! \u0417\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u0430\u0440\u0435\u043d\u0434\u0443 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0430\u0440\u0435\u043d\u0434\u043e\u0439).",Object(g.jsx)("br",{}),"\u0415\u0441\u043b\u0438 \u0443 \u0412\u0430\u0441 \u0435\u0441\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u044b, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043d\u0435 \u0441\u0442\u0435\u0441\u043d\u044f\u0439\u0442\u0435\u0441\u044c \u043e\u0431\u0440\u0430\u0449\u0430\u0442\u044c\u0441\u044f \u043a \u043d\u0430\u043c. \u0421\u043f\u0430\u0441\u0438\u0431\u043e!"]}),Object(g.jsxs)(i.a,{className:"successBox__contacts",children:[Object(g.jsx)(l.a,{span:8,children:Object(g.jsxs)("p",{children:[Object(g.jsx)("i",{className:"fa fa-phone","aria-hidden":"true"})," ",Object(g.jsx)("a",{href:"tel:+7-932-665-8994",children:"+7-932-665-8994"})]})}),Object(g.jsx)(l.a,{span:10,children:Object(g.jsxs)("p",{children:[Object(g.jsx)("i",{className:"fa fa-envelope","aria-hidden":"true"})," ",Object(g.jsx)("a",{href:"mailto:info@aytau.ru",children:"info@aytau.ru"})]})})]})]})})})]})]})]})]})}));s.default=u}}]);
//# sourceMappingURL=4.34f4c80c.chunk.js.map