"use strict";(self.webpackChunkrecipes_app=self.webpackChunkrecipes_app||[]).push([[123],{123:(C,a,o)=>{o.r(a),o.d(a,{RecipeDetailsComponent:()=>O});var p=o(6814),s=o(2557),e=o(5879),_=o(2058),g=o(7260);function l(n,c){if(1&n&&(e.TgZ(0,"mat-chip",11),e._uU(1),e.qZA()),2&n){const t=c.$implicit;e.xp6(1),e.hij(" ",t," ")}}function m(n,c){if(1&n&&(e.TgZ(0,"mat-chip-set"),e.YNc(1,l,2,1,"mat-chip",10),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.recipe.tags)}}function f(n,c){if(1&n&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&n){const t=c.$implicit;e.xp6(1),e.Oqu(t)}}function u(n,c){if(1&n&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&n){const t=c.$implicit;e.xp6(1),e.Oqu(t)}}function d(n,c){if(1&n&&(e.TgZ(0,"div",2)(1,"div"),e._UZ(2,"img",3),e.qZA(),e.TgZ(3,"div",4)(4,"div",5)(5,"h1"),e._uU(6),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.qZA(),e.YNc(9,m,2,1,"mat-chip-set",6),e.qZA(),e.TgZ(10,"div",7)(11,"h2"),e._uU(12,"Ingredients"),e.qZA(),e.TgZ(13,"ul"),e.YNc(14,f,2,1,"li",8),e.qZA()(),e.TgZ(15,"div",9)(16,"h2"),e._uU(17,"Steps"),e.qZA(),e.TgZ(18,"ol"),e.YNc(19,u,2,1,"li",8),e.qZA()()()()),2&n){const t=e.oxw();e.xp6(2),e.s9C("src",t.recipe.image,e.LSH),e.s9C("alt",t.recipe.name),e.xp6(4),e.Oqu(t.recipe.name),e.xp6(2),e.Oqu(t.recipe.description),e.xp6(1),e.Q6J("ngIf",t.recipe.tags),e.xp6(5),e.Q6J("ngForOf",t.recipe.ingredients),e.xp6(5),e.Q6J("ngForOf",t.recipe.steps)}}function x(n,c){if(1&n&&(e.TgZ(0,"div",12)(1,"strong"),e._uU(2,"Error!"),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.qZA()()),2&n){const t=e.oxw();e.xp6(4),e.hij(" ",t.errorMessage," ")}}let O=(()=>{class n{constructor(t,i){this.route=t,this.recipesService=i}ngOnInit(){const t=Number(this.route.snapshot.paramMap.get("id"));this.recipesService.getRecipeById(t).subscribe({next:i=>{this.recipe=i},error:i=>{this.errorMessage=i}})}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(_.gz),e.Y36(g.v))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-recipe-details"]],standalone:!0,features:[e.jDz],decls:2,vars:2,consts:[["class","container",4,"ngIf"],["class","alert",4,"ngIf"],[1,"container"],[3,"src","alt"],[1,"details"],[1,"description"],[4,"ngIf"],[1,"ingredients"],[4,"ngFor","ngForOf"],[1,"steps"],["class","example-box",4,"ngFor","ngForOf"],[1,"example-box"],[1,"alert"]],template:function(i,r){1&i&&(e.YNc(0,d,20,7,"div",0),e.YNc(1,x,5,1,"div",1)),2&i&&(e.Q6J("ngIf",r.recipe),e.xp6(1),e.Q6J("ngIf",r.errorMessage))},dependencies:[p.ez,p.sg,p.O5,s.Hi,s.HS,s.J4],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;padding:32px}.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:400px;height:400px;object-fit:cover}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(32px,4vw,52px)}.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(16px,4vw,32px)}.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:16px;color:#86939e}.alert[_ngcontent-%COMP%]{color:#f44336;margin-left:32px}"]})}return n})()}}]);