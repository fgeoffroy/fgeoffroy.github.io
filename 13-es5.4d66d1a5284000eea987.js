!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"7rRb":function(o,e,i){"use strict";i.r(e),i.d(e,"ScorePageModule",(function(){return y}));var r=i("ofXK"),c=i("3Pt+"),b=i("TEn/"),s=i("tyNb"),a=i("fXoL"),u=i("suC+"),l=i("K1R0");function f(n,t){if(1&n&&(a.Ob(0,"strong"),a.kc(1),a.Nb()),2&n){var o=a.Zb();a.yb(1),a.nc("",o.nbRightAnswer," bonne r\xe9ponse sur ",o.nbQuestionQuiz," !")}}function g(n,t){if(1&n&&(a.Ob(0,"strong"),a.kc(1),a.Nb()),2&n){var o=a.Zb();a.yb(1),a.nc("",o.nbRightAnswer," bonnes r\xe9ponses sur ",o.nbQuestionQuiz," !")}}var h,p,O,w=function(){return["/home"]},N=[{path:"",component:(h=function(){function o(t){n(this,o),this.localDb=t,this.score=0,this.nbRightAnswer=0,this.nbQuestionQuiz=0}var e,i,r;return e=o,(i=[{key:"ngOnInit",value:function(){this.score=this.localDb.score,this.nbRightAnswer=this.localDb.nbRightAnswer,this.nbQuestionQuiz=this.localDb.nbQuestionQuiz}},{key:"get_relative_score",value:function(){return 100*this.score/100}}])&&t(e.prototype,i),r&&t(e,r),o}(),h.\u0275fac=function(n){return new(n||h)(a.Jb(u.a))},h.\u0275cmp=a.Db({type:h,selectors:[["app-score"]],decls:28,vars:12,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["id","container"],["text-wrap","",1,"ion-align-items-center"],[3,"radius","percent","title","animationDuration","titleFontSize","unitsFontSize"],[4,"ngIf"],[3,"routerLink"]],template:function(n,t){1&n&&(a.Ob(0,"ion-header",0),a.Ob(1,"ion-toolbar"),a.Ob(2,"ion-title"),a.kc(3,"Traductions foireuses"),a.Nb(),a.Nb(),a.Nb(),a.Ob(4,"ion-content",1),a.Ob(5,"ion-header",2),a.Ob(6,"ion-toolbar"),a.Ob(7,"ion-title",3),a.kc(8,"Traductions foireuses"),a.Nb(),a.Nb(),a.Nb(),a.Ob(9,"div",4),a.Ob(10,"ion-grid",5),a.Ob(11,"ion-row"),a.Ob(12,"ion-col"),a.Kb(13,"circle-progress",6),a.Nb(),a.Nb(),a.Ob(14,"ion-row"),a.Kb(15,"ion-col"),a.Nb(),a.Ob(16,"ion-row"),a.Ob(17,"ion-col"),a.jc(18,f,2,2,"strong",7),a.jc(19,g,2,2,"strong",7),a.Nb(),a.Nb(),a.Ob(20,"ion-row"),a.Kb(21,"ion-col"),a.Nb(),a.Ob(22,"ion-row"),a.Kb(23,"ion-col"),a.Nb(),a.Ob(24,"ion-row"),a.Ob(25,"ion-col"),a.Ob(26,"ion-button",8),a.kc(27,"Rejouer"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&n&&(a.cc("translucent",!0),a.yb(4),a.cc("fullscreen",!0),a.yb(9),a.cc("radius",100)("percent",t.get_relative_score())("title",t.score)("animationDuration",500)("titleFontSize",30)("unitsFontSize",20),a.yb(5),a.cc("ngIf",t.nbRightAnswer<=1),a.yb(1),a.cc("ngIf",t.nbRightAnswer>1),a.yb(7),a.cc("routerLink",a.ec(11,w)))},directives:[b.h,b.q,b.p,b.f,b.g,b.m,b.e,l.a,r.i,b.b,b.v,s.h],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),h)}],d=((O=function t(){n(this,t)}).\u0275mod=a.Hb({type:O}),O.\u0275inj=a.Gb({factory:function(n){return new(n||O)},imports:[[s.i.forChild(N)],s.i]}),O),y=((p=function t(){n(this,t)}).\u0275mod=a.Hb({type:p}),p.\u0275inj=a.Gb({factory:function(n){return new(n||p)},imports:[[r.b,c.a,b.r,d,l.b]]}),p)}}])}();