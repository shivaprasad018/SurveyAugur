(self.webpackChunksurveyaugur_webapp=self.webpackChunksurveyaugur_webapp||[]).push([[324],{768:(t,e,n)=>{"use strict";n.r(e),n.d(e,{SurveysModule:()=>q});var o=n(8583),a=n(1095),i=n(4655),r=n(2789),c=n(6215),s=n(7716),u=n(1841),l=n(2199),d=n(5939);function h(t,e){1&t&&(s.TgZ(0,"th",12),s._uU(1,"SNo. "),s.qZA())}function m(t,e){if(1&t&&(s.TgZ(0,"td",13),s._uU(1),s.qZA()),2&t){const t=e.index;s.xp6(1),s.hij(" ",t+1," ")}}function p(t,e){1&t&&(s.TgZ(0,"th",12),s._uU(1," SurveyTitle "),s.qZA())}function f(t,e){if(1&t&&(s.TgZ(0,"td",13),s._uU(1),s.qZA()),2&t){const t=e.$implicit;s.xp6(1),s.hij(" ",t.surveyTitle," ")}}function w(t,e){1&t&&(s.TgZ(0,"th",12),s._uU(1," Actions "),s.qZA())}function y(t,e){1&t&&(s.TgZ(0,"td",13),s.TgZ(1,"button",14),s._uU(2,"Preview"),s.qZA(),s._uU(3,"\xa0\xa0\xa0 "),s.TgZ(4,"button",15),s._uU(5,"DeActivate"),s.qZA(),s.qZA())}function g(t,e){1&t&&s._UZ(0,"tr",16)}function v(t,e){1&t&&s._UZ(0,"tr",17)}function b(t,e){1&t&&(s.TgZ(0,"th",12),s._uU(1,"SNo. "),s.qZA())}function Z(t,e){if(1&t&&(s.TgZ(0,"td",13),s._uU(1),s.qZA()),2&t){const t=e.index;s.xp6(1),s.hij(" ",t+1," ")}}function _(t,e){1&t&&(s.TgZ(0,"th",12),s._uU(1," SurveyTitle "),s.qZA())}function A(t,e){if(1&t&&(s.TgZ(0,"td",13),s._uU(1),s.qZA()),2&t){const t=e.$implicit;s.xp6(1),s.hij(" ",t.title," ")}}function S(t,e){1&t&&(s.TgZ(0,"th",12),s._uU(1," Actions "),s.qZA())}function C(t,e){1&t&&(s.TgZ(0,"td",13),s.TgZ(1,"button",14),s._uU(2,"Preview"),s.qZA(),s._uU(3,"\xa0\xa0\xa0 "),s.TgZ(4,"button",15),s._uU(5,"Activate"),s.qZA(),s.qZA())}function U(t,e){1&t&&s._UZ(0,"tr",16)}function k(t,e){1&t&&s._UZ(0,"tr",17)}const x=[{path:"",component:(()=>{class t{constructor(t,e){this.http=t,this.user=e,this.displayedColumns=["position","name","Actions"],this.activeById=[],this.inactiveSurvey=[],this.activeSurvey=[],this.id="ca9dac86-f327-4491-9e46-3400a3a996b4",this.subject=new c.X(this.activeSurvey)}ngOnInit(){this.http.get("/surveyauthor/api/v1/surveys/users/ca9dac86-f327-4491-9e46-3400a3a996b4").subscribe(t=>{this.inactiveSurvey=t.result,console.log(t),console.log(this.inactiveSurvey),this.dataSource1=new r.by(this.inactiveSurvey)}),this.http.get("/surveyengine/api/v1/surveys").subscribe(t=>{console.log(t.result),this.activeSurvey=t.result,console.log(this.activeSurvey),this.getById(),console.log(this.activeById),this.subject.next(this.activeById),this.dataSource=new r.by(this.activeById)})}getById(){for(let t=0;t<this.activeSurvey.length;t++)this.activeSurvey[t].createdBy.toString()===this.id.toString()&&this.activeById.push(this.activeSurvey[t])}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(u.eN),s.Y36(l._))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-surveys"]],decls:34,vars:6,consts:[[1,"sub-heading"],[2,"width","100%"],["label","Active Surveys"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","","class","tableHeader",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","Actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["label","InActive Surveys"],["mat-header-cell","",1,"tableHeader"],["mat-cell",""],["mat-raised-button","","color","accent",2,"width","6em"],["mat-raised-button","","color","primary",2,"width","7em"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(s.TgZ(0,"p",0),s._uU(1,"Surveys"),s.qZA(),s._UZ(2,"hr",1),s.TgZ(3,"mat-tab-group"),s.TgZ(4,"mat-tab",2),s._UZ(5,"br"),s._UZ(6,"br"),s.TgZ(7,"table",3),s.ynx(8,4),s.YNc(9,h,2,0,"th",5),s.YNc(10,m,2,1,"td",6),s.BQk(),s.ynx(11,7),s.YNc(12,p,2,0,"th",5),s.YNc(13,f,2,1,"td",6),s.BQk(),s.ynx(14,8),s.YNc(15,w,2,0,"th",5),s.YNc(16,y,6,0,"td",6),s.BQk(),s.YNc(17,g,1,0,"tr",9),s.YNc(18,v,1,0,"tr",10),s.qZA(),s.qZA(),s.TgZ(19,"mat-tab",11),s._UZ(20,"br"),s._UZ(21,"br"),s.TgZ(22,"table",3),s.ynx(23,4),s.YNc(24,b,2,0,"th",5),s.YNc(25,Z,2,1,"td",6),s.BQk(),s.ynx(26,7),s.YNc(27,_,2,0,"th",5),s.YNc(28,A,2,1,"td",6),s.BQk(),s.ynx(29,8),s.YNc(30,S,2,0,"th",5),s.YNc(31,C,6,0,"td",6),s.BQk(),s.YNc(32,U,1,0,"tr",9),s.YNc(33,k,1,0,"tr",10),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(7),s.Q6J("dataSource",e.dataSource),s.xp6(10),s.Q6J("matHeaderRowDef",e.displayedColumns),s.xp6(1),s.Q6J("matRowDefColumns",e.displayedColumns),s.xp6(4),s.Q6J("dataSource",e.dataSource1),s.xp6(10),s.Q6J("matHeaderRowDef",e.displayedColumns),s.xp6(1),s.Q6J("matRowDefColumns",e.displayedColumns))},directives:[d.SP,d.uX,r.BZ,r.w1,r.fO,r.Dz,r.as,r.nj,r.ge,r.ev,a.lW,r.XQ,r.Gk],styles:[".sub-heading[_ngcontent-%COMP%]{font-size:18px;font-weight:700;font-family:Roboto}.mat-tab-lables[_ngcontent-%COMP%]{flex:50%;flex-wrap:wrap;justify-content:space-around;align-content:stretch;align-items:baseline;flex-direction:row}.Active[_ngcontent-%COMP%]   Surveys[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-color:blue}table[_ngcontent-%COMP%]{width:100%}.tableHeader[_ngcontent-%COMP%]{background-color:#1e90ff;font-size:medium;justify-content:center}.mat-column-position[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 0%!important;width:30%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-column-Actions[_ngcontent-%COMP%], .mat-column-name[_ngcontent-%COMP%]{justify-content:center}.mat-column-Actions[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 0%!important;width:20%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}"]}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[i.Bz.forChild(x)],i.Bz]}),t})(),q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.ez,T,d.Nh,u.JF,a.ot,r.p0]]}),t})()}}]);