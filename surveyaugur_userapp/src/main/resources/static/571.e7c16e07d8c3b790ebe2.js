(self.webpackChunksurveyaugur_userapp=self.webpackChunksurveyaugur_userapp||[]).push([[571],{4133:(t,e)=>{"use strict";var i=function(){function t(){}return t.UUID=function(){if("undefined"!=typeof window&&void 0!==window.crypto&&void 0!==window.crypto.getRandomValues){var t=new Uint16Array(8);return window.crypto.getRandomValues(t),this.pad4(t[0])+this.pad4(t[1])+"-"+this.pad4(t[2])+"-"+this.pad4(t[3])+"-"+this.pad4(t[4])+"-"+this.pad4(t[5])+this.pad4(t[6])+this.pad4(t[7])}return this.random4()+this.random4()+"-"+this.random4()+"-"+this.random4()+"-"+this.random4()+"-"+this.random4()+this.random4()+this.random4()},t.pad4=function(t){for(var e=t.toString(16);e.length<4;)e="0"+e;return e},t.random4=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},t}();e.h=i},8571:(t,e,i)=>{"use strict";i.r(e),i.d(e,{ActivesurveyModule:()=>pt});var n=i(8583),a=i(9243),o=i(4655),r=i(2789),s=i(7716),c=i(1841),d=i(1095);function l(t,e){1&t&&(s.TgZ(0,"th",14),s._uU(1," S.No. "),s.qZA())}function u(t,e){if(1&t&&(s.TgZ(0,"td",15),s._uU(1),s.qZA()),2&t){const t=e.index;s.xp6(1),s.hij(" ",t+1," ")}}function h(t,e){1&t&&(s.TgZ(0,"th",14),s._uU(1," Survey Title "),s.qZA())}function p(t,e){if(1&t&&(s.TgZ(0,"td",15),s._uU(1),s.qZA()),2&t){const t=e.$implicit;s.xp6(1),s.hij(" ",t.surveyTitle," ")}}function m(t,e){1&t&&(s.TgZ(0,"th",14),s._uU(1," Target Audience "),s.qZA())}function g(t,e){if(1&t&&(s.TgZ(0,"td",15),s._uU(1),s.qZA()),2&t){const t=e.$implicit;s.xp6(1),s.hij(" ",t.targetAudience," ")}}function f(t,e){1&t&&(s.TgZ(0,"th",14),s._uU(1," ACTION "),s.qZA())}const b=function(t){return["takesurvey",t]};function v(t,e){if(1&t&&(s.TgZ(0,"td",15),s._uU(1),s.TgZ(2,"div",16),s.TgZ(3,"button",17),s._uU(4,"TAKE SURVEY"),s.qZA(),s.qZA(),s.qZA()),2&t){const t=e.$implicit;s.xp6(1),s.hij("",t.action," "),s.xp6(2),s.Q6J("routerLink",s.VKq(2,b,t.surveyId))}}function _(t,e){1&t&&s._UZ(0,"tr",18)}function y(t,e){1&t&&s._UZ(0,"tr",19)}function x(t,e){if(1&t&&(s.TgZ(0,"div"),s.TgZ(1,"div",2),s.TgZ(2,"h1",3),s._uU(3," ACTIVE SURVEYS"),s.qZA(),s.TgZ(4,"div",4),s.TgZ(5,"table",5),s.ynx(6,6),s.YNc(7,l,2,0,"th",7),s.YNc(8,u,2,1,"td",8),s.BQk(),s.ynx(9,9),s.YNc(10,h,2,0,"th",7),s.YNc(11,p,2,1,"td",8),s.BQk(),s.ynx(12,10),s.YNc(13,m,2,0,"th",7),s.YNc(14,g,2,1,"td",8),s.BQk(),s.ynx(15,11),s.YNc(16,f,2,0,"th",7),s.YNc(17,v,5,4,"td",8),s.BQk(),s.YNc(18,_,1,0,"tr",12),s.YNc(19,y,1,0,"tr",13),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t){const t=s.oxw();s.xp6(5),s.Q6J("dataSource",t.dataSource),s.xp6(13),s.Q6J("matHeaderRowDef",t.displayedColumns),s.xp6(1),s.Q6J("matRowDefColumns",t.displayedColumns)}}function Z(t,e){1&t&&(s.TgZ(0,"div",20),s.TgZ(1,"div"),s.TgZ(2,"h1",21),s._uU(3,"No Active Survey"),s.qZA(),s.qZA(),s.TgZ(4,"div",22),s._UZ(5,"img",23),s.qZA(),s.qZA())}let A=(()=>{class t{constructor(t){this.http=t,this.enable=!1,this.activeSurvey=[],this.displayedColumns=["position","name","type","action"],this.dataSource=new r.by}ngOnInit(){this.http.get("/surveyengine/api/v1/surveys").subscribe(t=>{console.log(t.result),this.activeSurvey=t.result,this.dataSource=new r.by(this.activeSurvey),0==this.activeSurvey.length&&(console.log(this.activeSurvey.length),this.enable=!0),console.log("mmm"),console.log(this.activeSurvey.length)})}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(c.eN))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-activesurvey"]],decls:2,vars:2,consts:[[4,"ngIf"],["style","margin-left:30%;margin-top: 12%; ",4,"ngIf"],[1,"display"],[1,"hed"],[1,"mat-elevation-z8"],["mat-table","",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","type"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[1,"btn"],["mat-raised-button","","color","primary",3,"routerLink"],["mat-header-row",""],["mat-row",""],[2,"margin-left","30%","margin-top","12%"],[2,"font-size","xx-large","margin-bottom","1%","margin-left","5%"],[2,"margin-top","2%"],["src","assets/images/sad-emoji.png","alt","","height","400px",2,"position","absolute"]],template:function(t,e){1&t&&(s.YNc(0,x,20,3,"div",0),s.YNc(1,Z,6,0,"div",1)),2&t&&(s.Q6J("ngIf",!e.enable),s.xp6(1),s.Q6J("ngIf",e.enable))},directives:[n.O5,r.BZ,r.w1,r.fO,r.Dz,r.as,r.nj,r.ge,r.ev,d.lW,o.rH,r.XQ,r.Gk],styles:[".display[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;height:100%;margin-right:30%}.display[_ngcontent-%COMP%]{margin-right:12%;margin-left:15%}.mat-column-name[_ngcontent-%COMP%]{font-weight:700;width:30%}.mat-column-type[_ngcontent-%COMP%]{font-style:bold;width:30%}.mat-column-position[_ngcontent-%COMP%]{width:15%}.mat-column-action[_ngcontent-%COMP%]{text-align:center;width:30%}.hed[_ngcontent-%COMP%]{margin-top:2%}th[_ngcontent-%COMP%]{background-color:blue;color:#fff}"]}),t})();var k=i(4133),T=(()=>(function(t){t[t.SECTIONED=0]="SECTIONED",t[t.FLAT=1]="FLAT"}(T||(T={})),T))();class w{constructor(t,e,i,n,a,o,r,s,c,d,l,u,h,p,m){this.surveyId=k.h.UUID,this.createdBy=k.h.UUID,this.surveyTitle="",this.tags=[],this.description="",this.targetAudience="",this.surveyType=T.FLAT,this.questions=[],this.uiSettings={},this.surveyUrl="",this.activatedOn=new Date,this.activatedBy="",this.createdOn=new Date,this.updatedOn=new Date,this.activeTime=0}}var q=i(6215);let I=(()=>{class t{constructor(){this.activeTime=new q.X(0)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var C=i(3738),S=i(5319),D=i(945);let U=(()=>{class t{constructor(t){this.survey=t,this.subscription=new S.w,this.dateNow=new Date,this.dDay=new Date,this.milliSecondsInASecond=1e3,this.hoursInADay=24,this.minutesInAnHour=60,this.SecondsInAMinute=60}getTimeDifference(){this.timeDifference=this.dDay.getTime()-(new Date).getTime(),this.allocateTimeUnits(this.timeDifference)}allocateTimeUnits(t){this.secondsToDday=Math.floor(t/this.milliSecondsInASecond%this.SecondsInAMinute),this.minutesToDday=Math.floor(t/(this.milliSecondsInASecond*this.minutesInAnHour)%this.SecondsInAMinute),this.hoursToDday=Math.floor(t/(this.milliSecondsInASecond*this.minutesInAnHour*this.SecondsInAMinute)%this.hoursInADay),this.daysToDday=Math.floor(t/(this.milliSecondsInASecond*this.minutesInAnHour*this.SecondsInAMinute*this.hoursInADay))}ngOnInit(){this.survey.activeTime.subscribe(t=>{this.dDay.setHours(this.dDay.getHours()+t/3600)}),this.subscription=(0,D.F)(1e3).subscribe(t=>{this.getTimeDifference()})}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(I))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-count-down"]],decls:13,vars:4,consts:[[2,"margin-left","35px"],["id","days"],["id","hours"],["id","minutes"],["id","seconds",2,"margin-right","60px"]],template:function(t,e){1&t&&(s.TgZ(0,"p",0),s._uU(1,"Time left"),s.qZA(),s.TgZ(2,"span",1),s._uU(3),s.qZA(),s._uU(4,"Day(s): "),s.TgZ(5,"span",2),s._uU(6),s.qZA(),s._uU(7,"Hrs: "),s.TgZ(8,"span",3),s._uU(9),s.qZA(),s._uU(10,"Min: "),s.TgZ(11,"span",4),s._uU(12),s.qZA()),2&t&&(s.xp6(3),s.hij(" ",e.daysToDday," "),s.xp6(3),s.hij(" ",e.hoursToDday," "),s.xp6(3),s.hij(" ",e.minutesToDday," "),s.xp6(3),s.hij(" ",e.secondsToDday,"S"))},styles:[".timer[_ngcontent-%COMP%]{font-family:Arial,sans-serif;letter-spacing:-1px}"]}),t})();var M=i(3679),O=i(2458),Y=i(9490),R=i(6237),G=i(9238),F=i(8345);const N=["input"],E=function(t){return{enterDuration:t}},P=["*"],J=new s.OlP("mat-radio-default-options",{providedIn:"root",factory:function(){return{color:"accent"}}});let Q=0;const B={provide:M.JU,useExisting:(0,s.Gpc)(()=>z),multi:!0};class L{constructor(t,e){this.source=t,this.value=e}}const j=new s.OlP("MatRadioGroup");let V=(()=>{class t{constructor(t){this._changeDetector=t,this._value=null,this._name="mat-radio-group-"+Q++,this._selected=null,this._isInitialized=!1,this._labelPosition="after",this._disabled=!1,this._required=!1,this._controlValueAccessorChangeFn=()=>{},this.onTouched=()=>{},this.change=new s.vpe}get name(){return this._name}set name(t){this._name=t,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(t){this._labelPosition="before"===t?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(t){this._selected=t,this.value=t?t.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,Y.Ig)(t),this._markRadiosForCheck()}get required(){return this._required}set required(t){this._required=(0,Y.Ig)(t),this._markRadiosForCheck()}ngAfterContentInit(){this._isInitialized=!0}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(t=>{t.name=this.name,t._markForCheck()})}_updateSelectedRadioFromValue(){this._radios&&(null===this._selected||this._selected.value!==this._value)&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new L(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(t=>t._markForCheck())}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetector.markForCheck()}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(s.sBO))},t.\u0275dir=s.lG2({type:t,inputs:{name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:"disabled",required:"required",color:"color"},outputs:{change:"change"}}),t})(),z=(()=>{class t extends V{}return t.\u0275fac=function(){let e;return function(i){return(e||(e=s.n5z(t)))(i||t)}}(),t.\u0275dir=s.lG2({type:t,selectors:[["mat-radio-group"]],contentQueries:function(t,e,i){if(1&t&&s.Suo(i,K,5),2&t){let t;s.iGM(t=s.CRH())&&(e._radios=t)}},hostAttrs:["role","radiogroup",1,"mat-radio-group"],exportAs:["matRadioGroup"],features:[s._Bn([B,{provide:j,useExisting:t}]),s.qOj]}),t})();class H{constructor(t){this._elementRef=t}}const $=(0,O.Kr)((0,O.sb)(H));let X=(()=>{class t extends ${constructor(t,e,i,n,a,o,r,c){super(e),this._changeDetector=i,this._focusMonitor=n,this._radioDispatcher=a,this._providerOverride=r,this._uniqueId="mat-radio-"+ ++Q,this.id=this._uniqueId,this.change=new s.vpe,this._checked=!1,this._value=null,this._removeUniqueSelectionListener=()=>{},this.radioGroup=t,this._noopAnimations="NoopAnimations"===o,c&&(this.tabIndex=(0,Y.su)(c,0)),this._removeUniqueSelectionListener=a.listen((t,e)=>{t!==this.id&&e===this.name&&(this.checked=!1)})}get checked(){return this._checked}set checked(t){const e=(0,Y.Ig)(t);this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,null!==this.radioGroup&&(this.checked||(this.checked=this.radioGroup.value===t),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(t){this._labelPosition=t}get disabled(){return this._disabled||null!==this.radioGroup&&this.radioGroup.disabled}set disabled(t){this._setDisabled((0,Y.Ig)(t))}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(t){this._required=(0,Y.Ig)(t)}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._providerOverride&&this._providerOverride.color||"accent"}set color(t){this._color=t}get inputId(){return`${this.id||this._uniqueId}-input`}focus(t,e){e?this._focusMonitor.focusVia(this._inputElement,e,t):this._inputElement.nativeElement.focus(t)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{!t&&this.radioGroup&&this.radioGroup._touch()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new L(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputClick(t){t.stopPropagation()}_onInputInteraction(t){if(t.stopPropagation(),!this.checked&&!this.disabled){const t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_setDisabled(t){this._disabled!==t&&(this._disabled=t,this._changeDetector.markForCheck())}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(V),s.Y36(s.SBq),s.Y36(s.sBO),s.Y36(G.tE),s.Y36(F.A8),s.Y36(String),s.Y36(void 0),s.Y36(String))},t.\u0275dir=s.lG2({type:t,viewQuery:function(t,e){if(1&t&&s.Gf(N,5),2&t){let t;s.iGM(t=s.CRH())&&(e._inputElement=t.first)}},inputs:{id:"id",checked:"checked",value:"value",labelPosition:"labelPosition",disabled:"disabled",required:"required",color:"color",name:"name",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"]},outputs:{change:"change"},features:[s.qOj]}),t})(),K=(()=>{class t extends X{constructor(t,e,i,n,a,o,r,s){super(t,e,i,n,a,o,r,s)}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(j,8),s.Y36(s.SBq),s.Y36(s.sBO),s.Y36(G.tE),s.Y36(F.A8),s.Y36(R.Qb,8),s.Y36(J,8),s.$8M("tabindex"))},t.\u0275cmp=s.Xpm({type:t,selectors:[["mat-radio-button"]],hostAttrs:[1,"mat-radio-button"],hostVars:17,hostBindings:function(t,e){1&t&&s.NdJ("focus",function(){return e._inputElement.nativeElement.focus()}),2&t&&(s.uIk("tabindex",null)("id",e.id)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),s.ekj("mat-radio-checked",e.checked)("mat-radio-disabled",e.disabled)("_mat-animation-noopable",e._noopAnimations)("mat-primary","primary"===e.color)("mat-accent","accent"===e.color)("mat-warn","warn"===e.color))},inputs:{disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matRadioButton"],features:[s.qOj],ngContentSelectors:P,decls:13,vars:20,consts:[[1,"mat-radio-label"],["label",""],[1,"mat-radio-container"],[1,"mat-radio-outer-circle"],[1,"mat-radio-inner-circle"],["type","radio",1,"mat-radio-input","cdk-visually-hidden",3,"id","checked","disabled","tabIndex","required","change","click"],["input",""],["mat-ripple","",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mat-radio-label-content"],[2,"display","none"]],template:function(t,e){if(1&t&&(s.F$t(),s.TgZ(0,"label",0,1),s.TgZ(2,"span",2),s._UZ(3,"span",3),s._UZ(4,"span",4),s.TgZ(5,"input",5,6),s.NdJ("change",function(t){return e._onInputInteraction(t)})("click",function(t){return e._onInputClick(t)}),s.qZA(),s.TgZ(7,"span",7),s._UZ(8,"span",8),s.qZA(),s.qZA(),s.TgZ(9,"span",9),s.TgZ(10,"span",10),s._uU(11,"\xa0"),s.qZA(),s.Hsn(12),s.qZA(),s.qZA()),2&t){const t=s.MAs(1);s.uIk("for",e.inputId),s.xp6(5),s.Q6J("id",e.inputId)("checked",e.checked)("disabled",e.disabled)("tabIndex",e.tabIndex)("required",e.required),s.uIk("name",e.name)("value",e.value)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledby)("aria-describedby",e.ariaDescribedby),s.xp6(2),s.Q6J("matRippleTrigger",t)("matRippleDisabled",e._isRippleDisabled())("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",s.VKq(18,E,e._noopAnimations?0:150)),s.xp6(2),s.ekj("mat-radio-label-before","before"==e.labelPosition)}},directives:[O.wG],styles:[".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;opacity:0;transition:transform ease 280ms,background-color ease 280ms,opacity linear 1ms 280ms;width:20px;transform:scale(0.001);-webkit-print-color-adjust:exact;color-adjust:exact}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5);opacity:1;transition:transform ease 280ms,background-color ease 280ms}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none;top:0;left:0}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-ripple,.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-ripple{outline:solid 3px}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"],encapsulation:2,changeDetection:0}),t})(),W=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[O.si,O.BQ],O.BQ]}),t})();function tt(t,e){1&t&&(s.TgZ(0,"div",11),s.TgZ(1,"h1"),s._uU(2,"We Value Your FeedBack"),s.qZA(),s.qZA())}function et(t,e){if(1&t&&(s.TgZ(0,"p",12),s._uU(1),s.qZA()),2&t){const t=s.oxw(),e=t.index,i=t.$implicit;s.xp6(1),s.AsE("",e,"\xa0\xa0",i.questionBody,"")}}function it(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"mat-radio-group",16),s.NdJ("ngModelChange",function(e){return s.CHM(t),s.oxw(4).choice1=e}),s.TgZ(1,"mat-radio-button",17),s._uU(2),s.qZA(),s.qZA()}if(2&t){const t=e.$implicit,i=s.oxw(4);s.Q6J("ngModel",i.choice1),s.xp6(2),s.hij("",t," \xa0")}}function nt(t,e){if(1&t&&(s.TgZ(0,"div"),s.YNc(1,it,3,2,"mat-radio-group",15),s.qZA()),2&t){const t=s.oxw(2).$implicit;s.xp6(1),s.Q6J("ngForOf",t.options)}}function at(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"mat-radio-group",19),s.NdJ("ngModelChange",function(e){return s.CHM(t),s.oxw(4).choice2=e}),s.TgZ(1,"mat-radio-button",17),s._uU(2),s.qZA(),s.qZA()}if(2&t){const t=e.$implicit,i=s.oxw(4);s.Q6J("ngModel",i.choice2),s.xp6(2),s.hij("",t," \xa0")}}function ot(t,e){if(1&t&&(s.TgZ(0,"div"),s.YNc(1,at,3,2,"mat-radio-group",18),s.qZA()),2&t){const t=s.oxw(2).$implicit;s.xp6(1),s.Q6J("ngForOf",t.options)}}function rt(t,e){1&t&&(s.TgZ(0,"div"),s._UZ(1,"input",20),s.qZA())}function st(t,e){if(1&t&&(s.TgZ(0,"div",13),s.YNc(1,nt,2,1,"div",14),s.YNc(2,ot,2,1,"div",14),s.YNc(3,rt,2,0,"div",14),s.qZA()),2&t){const t=s.oxw().$implicit;s.xp6(1),s.Q6J("ngIf","MULTIPLE_SELECT"==t.questionType),s.xp6(1),s.Q6J("ngIf","SINGLE_SELECT"==t.questionType),s.xp6(1),s.Q6J("ngIf","SUBJECTIVE"==t.questionType)}}function ct(t,e){if(1&t&&(s.TgZ(0,"div",6),s.YNc(1,tt,3,0,"div",7),s.YNc(2,et,2,2,"p",8),s.TgZ(3,"form",null,9),s.YNc(5,st,4,3,"div",10),s.qZA(),s.qZA()),2&t){const t=e.index;s.xp6(1),s.Q6J("ngIf",0==t),s.xp6(1),s.Q6J("ngIf",0!=t),s.xp6(3),s.Q6J("ngIf",0!=t)}}const dt=function(){return["/home/activesurvey"]},lt=[{path:"",component:A},{path:"takesurvey/:id",component:(()=>{class t{constructor(t,e,i){this.http=t,this.router=e,this.survey=i,this.active=new w,this.tagComp="",this.choice1="",this.choice2="",this.questionList=[]}ngOnInit(){this.http.get("/surveyengine/api/v1/surveys/"+this.router.snapshot.params.id).subscribe(t=>{console.log(t.result),this.active=t.result;for(let e=0;e<this.active.tags.length;e++)this.tagComp=this.tagComp+" "+this.active.tags[e];this.questionList=this.active.questions,console.log(this.questionList),this.survey.activeTime.next(this.active.activeTime)})}save(t){console.log(t.value)}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(c.eN),s.Y36(o.gz),s.Y36(I))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-preview"]],decls:21,vars:7,consts:[[1,"head"],[1,"scrollable-content",2,"margin-top","20px"],["itemSize","50",1,"example-viewport"],["class","example-item",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"example-button-row"],["mat-raised-button","","color","primary","save(rinfo)","",3,"routerLink"],[1,"example-item"],["style","margin-top: 5%;",4,"ngIf"],["style","margin-left: 10px;",4,"ngIf"],["rinfo","ngForm"],["style","margin:20px;",4,"ngIf"],[2,"margin-top","5%"],[2,"margin-left","10px"],[2,"margin","20px"],[4,"ngIf"],["aria-label","Select an option","name","answer1",3,"ngModel","ngModelChange",4,"ngFor","ngForOf"],["aria-label","Select an option","name","answer1",3,"ngModel","ngModelChange"],["value","op"],["aria-label","Select an option","name","answer2",3,"ngModel","ngModelChange",4,"ngFor","ngForOf"],["aria-label","Select an option","name","answer2",3,"ngModel","ngModelChange"],["type","text","placeholder","Enter your valuable answer","ngModel","","name","answer3",2,"padding","10px","margin-top","3px","margin-bottom","3px"]],template:function(t,e){1&t&&(s.TgZ(0,"section"),s.TgZ(1,"mat-card"),s.TgZ(2,"div"),s.TgZ(3,"h1"),s._uU(4),s.qZA(),s.TgZ(5,"span",0),s._UZ(6,"app-count-down"),s.qZA(),s.qZA(),s.TgZ(7,"p"),s._uU(8),s.qZA(),s.TgZ(9,"p"),s._uU(10),s.qZA(),s.TgZ(11,"p"),s._uU(12),s.qZA(),s.qZA(),s.TgZ(13,"mat-card",1),s.TgZ(14,"mat-card-title"),s._uU(15," Question "),s.qZA(),s.TgZ(16,"cdk-virtual-scroll-viewport",2),s.YNc(17,ct,6,3,"div",3),s.qZA(),s.qZA(),s.TgZ(18,"div",4),s.TgZ(19,"button",5),s._uU(20,"Submit"),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(4),s.hij(" Survey Title: ",e.active.surveyTitle,""),s.xp6(4),s.hij("Description: ",e.active.description,""),s.xp6(2),s.hij("Tags: ",e.tagComp,""),s.xp6(2),s.hij("Target Audience: ",e.active.targetAudience,""),s.xp6(5),s.Q6J("cdkVirtualForOf",e.questionList),s.xp6(2),s.Q6J("routerLink",s.DdM(6,dt)))},directives:[C.a8,U,C.n5,a.N7,a.xd,a.x0,d.lW,o.rH,n.O5,M._Y,M.JL,M.F,n.sg,z,M.JJ,M.On,K,M.Fj],styles:[".heading[_ngcontent-%COMP%]{display:block;flex-direction:column}.head[_ngcontent-%COMP%]{position:absolute;right:0}.example-viewport[_ngcontent-%COMP%]{height:200px;width:100%;margin-top:20px}.mat-card-title[_ngcontent-%COMP%]{margin-top:8px}.example-item[_ngcontent-%COMP%]{height:100px}.example-button-row[_ngcontent-%COMP%]{width:98%;margin-top:1%;margin-bottom:3%;display:flex;justify-content:flex-end}h1[_ngcontent-%COMP%]{font-size:x-large;font-weight:bolder;font-family:Trebuchet MS,Lucida Sans Unicode,Lucida Grande,Lucida Sans,Arial,sans-serif}"]}),t})()}];let ut=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.Bz.forChild(lt)],o.Bz]}),t})();var ht=i(7082);let pt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.ez,ut,ht.TU,c.JF,r.p0,C.QW,a.Cl,d.ot,W,M.u5,M.UX]]}),t})()}}]);