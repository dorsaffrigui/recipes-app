"use strict";(self.webpackChunkrecipes_app=self.webpackChunkrecipes_app||[]).push([[296],{2296:(I,s,r)=>{r.d(s,{lW:()=>M,ot:()=>A});var p=r(2831),n=r(5879),u=r(9655),b=r(2495),c=r(3680);const f=["mat-button",""],x=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],g=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],h=[{selector:"mat-button",mdcClasses:["mdc-button","mat-mdc-button"]},{selector:"mat-flat-button",mdcClasses:["mdc-button","mdc-button--unelevated","mat-mdc-unelevated-button"]},{selector:"mat-raised-button",mdcClasses:["mdc-button","mdc-button--raised","mat-mdc-raised-button"]},{selector:"mat-stroked-button",mdcClasses:["mdc-button","mdc-button--outlined","mat-mdc-outlined-button"]},{selector:"mat-fab",mdcClasses:["mdc-fab","mat-mdc-fab"]},{selector:"mat-mini-fab",mdcClasses:["mdc-fab","mdc-fab--mini","mat-mdc-mini-fab"]},{selector:"mat-icon-button",mdcClasses:["mdc-icon-button","mat-mdc-icon-button"]}],_=(0,c.pj)((0,c.Id)((0,c.Kr)(class{constructor(a){this._elementRef=a}})));let v=(()=>{class a extends _{get ripple(){return this._rippleLoader?.getRipple(this._elementRef.nativeElement)}set ripple(t){this._rippleLoader?.attachRipple(this._elementRef.nativeElement,t)}get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=(0,b.Ig)(t),this._updateRippleDisabled()}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,b.Ig)(t),this._updateRippleDisabled()}constructor(t,e,o,i){super(t),this._platform=e,this._ngZone=o,this._animationMode=i,this._focusMonitor=(0,n.f3M)(u.tE),this._rippleLoader=(0,n.f3M)(c.Fq),this._isFab=!1,this._disableRipple=!1,this._disabled=!1,this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-button-ripple"});const m=t.nativeElement.classList;for(const l of h)this._hasHostAttributes(l.selector)&&l.mdcClasses.forEach(k=>{m.add(k)})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_hasHostAttributes(...t){return t.some(e=>this._elementRef.nativeElement.hasAttribute(e))}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}static#t=this.\u0275fac=function(e){n.$Z()};static#e=this.\u0275dir=n.lG2({type:a,features:[n.qOj]})}return a})(),M=(()=>{class a extends v{constructor(t,e,o,i){super(t,e,o,i)}static#t=this.\u0275fac=function(e){return new(e||a)(n.Y36(n.SBq),n.Y36(p.t4),n.Y36(n.R0b),n.Y36(n.QbO,8))};static#e=this.\u0275cmp=n.Xpm({type:a,selectors:[["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""]],hostVars:7,hostBindings:function(e,o){2&e&&(n.uIk("disabled",o.disabled||null),n.ekj("_mat-animation-noopable","NoopAnimations"===o._animationMode)("mat-unthemed",!o.color)("mat-mdc-button-base",!0))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color"},exportAs:["matButton"],features:[n.qOj],attrs:f,ngContentSelectors:g,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,o){1&e&&(n.F$t(x),n._UZ(0,"span",0),n.Hsn(1),n.TgZ(2,"span",1),n.Hsn(3,1),n.qZA(),n.Hsn(4,2),n._UZ(5,"span",2)(6,"span",3)),2&e&&n.ekj("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:['.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0)}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__progress-indicator{font-size:0;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;line-height:initial}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(\n      100% + 4px\n    );width:calc(\n      100% + 4px\n    );display:none}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring{border-color:CanvasText}}.mdc-button .mdc-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring::after{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{display:block}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button{height:var(--mdc-text-button-container-height, 36px);border-radius:var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color, inherit)}.mat-mdc-button:disabled{color:var(--mdc-text-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-unelevated-button{height:var(--mdc-filled-button-container-height, 36px);border-radius:var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-unelevated-button:not(:disabled){background-color:var(--mdc-filled-button-container-color, transparent)}.mat-mdc-unelevated-button:disabled{background-color:var(--mdc-filled-button-disabled-container-color, rgba(0, 0, 0, 0.12))}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color, inherit)}.mat-mdc-unelevated-button:disabled{color:var(--mdc-filled-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-raised-button{height:var(--mdc-protected-button-container-height, 36px);border-radius:var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px));box-shadow:var(--mdc-protected-button-container-elevation, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:not(:disabled){background-color:var(--mdc-protected-button-container-color, transparent)}.mat-mdc-raised-button:disabled{background-color:var(--mdc-protected-button-disabled-container-color, rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color, inherit)}.mat-mdc-raised-button:disabled{color:var(--mdc-protected-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-raised-button.mdc-ripple-upgraded--background-focused,.mat-mdc-raised-button:not(.mdc-ripple-upgraded):focus{box-shadow:var(--mdc-protected-button-focus-container-elevation, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:not(:disabled):active{box-shadow:var(--mdc-protected-button-pressed-container-elevation, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-outlined-button{height:var(--mdc-outlined-button-container-height, 36px);border-radius:var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px));padding:0 15px 0 15px;border-width:var(--mdc-outlined-button-outline-width, 1px)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color, inherit)}.mat-mdc-outlined-button:disabled{color:var(--mdc-outlined-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mat-mdc-outlined-button .mdc-button__ripple{border-radius:var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-outlined-button:not(:disabled){border-color:var(--mdc-outlined-button-outline-color, rgba(0, 0, 0, 0.12))}.mat-mdc-outlined-button:disabled{border-color:var(--mdc-outlined-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}.mat-mdc-outlined-button.mdc-button--icon-trailing{padding:0 11px 0 15px}.mat-mdc-outlined-button.mdc-button--icon-leading{padding:0 15px 0 11px}.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:var(--mdc-outlined-button-outline-width, 1px)}.mat-mdc-outlined-button .mdc-button__touch{left:calc(-1 * var(--mdc-outlined-button-outline-width, 1px));width:calc(100% + 2 * var(--mdc-outlined-button-outline-width, 1px))}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0;background-color:var(--mat-mdc-button-persistent-ripple-color)}.mat-mdc-button .mat-ripple-element,.mat-mdc-unelevated-button .mat-ripple-element,.mat-mdc-raised-button .mat-ripple-element,.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-mdc-button-ripple-color)}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button[disabled],.mat-mdc-unelevated-button[disabled],.mat-mdc-raised-button[disabled],.mat-mdc-outlined-button[disabled]{cursor:default;pointer-events:none}.mat-mdc-button .mat-mdc-button-touch-target,.mat-mdc-unelevated-button .mat-mdc-button-touch-target,.mat-mdc-raised-button .mat-mdc-button-touch-target,.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .mat-mdc-button>.mat-icon,.mat-mdc-button>.mat-icon[dir=rtl]{margin-left:8px;margin-right:0}.mat-mdc-button .mdc-button__label+.mat-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon,.mat-mdc-button .mdc-button__label+.mat-icon[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem;margin-left:-4px;margin-right:8px}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon,[dir=rtl] .mat-mdc-raised-button>.mat-icon,[dir=rtl] .mat-mdc-outlined-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon[dir=rtl],.mat-mdc-raised-button>.mat-icon[dir=rtl],.mat-mdc-outlined-button>.mat-icon[dir=rtl]{margin-left:8px;margin-right:0}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon,[dir=rtl] .mat-mdc-raised-button>.mat-icon,[dir=rtl] .mat-mdc-outlined-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon[dir=rtl],.mat-mdc-raised-button>.mat-icon[dir=rtl],.mat-mdc-outlined-button>.mat-icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon,.mat-mdc-raised-button .mdc-button__label+.mat-icon,.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon,.mat-mdc-unelevated-button .mdc-button__label+.mat-icon[dir=rtl],.mat-mdc-raised-button .mdc-button__label+.mat-icon[dir=rtl],.mat-mdc-outlined-button .mdc-button__label+.mat-icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px) * -1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px) * -1)}',".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}"],encapsulation:2,changeDetection:0})}return a})(),A=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#e=this.\u0275mod=n.oAB({type:a});static#o=this.\u0275inj=n.cJS({imports:[c.BQ,c.si,c.BQ]})}return a})()}}]);