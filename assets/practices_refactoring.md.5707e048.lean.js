import{_ as o,o as i,c as r,z as e,a}from"./chunks/framework.f2b73973.js";const b=JSON.parse('{"title":"Refactorización (Refactoring)","description":"","frontmatter":{},"headers":[],"relativePath":"practices/refactoring.md","filePath":"practices/refactoring.md"}'),n={name:"practices/refactoring.md"},c=e("h1",{id:"refactorizacion-refactoring",tabindex:"-1"},[a("Refactorización "),e("em",null,"(Refactoring)"),a(),e("a",{class:"header-anchor",href:"#refactorizacion-refactoring","aria-label":'Permalink to "Refactorización _(Refactoring)_"'},"​")],-1),t=e("blockquote",null,[e("p",null,"Un mayor número de líneas de código no siempre es mejor, y además requiere mayor esfuerzo de pruebas y de mantenimiento. La refactorización es una técnica que consiste en minimizar el código fuente de un software sin afectar a su comportamiento externo.")],-1),s=e("p",null,"Dado que se propone “desarrollar lo mínimamente indispensable”, en la construcción de cada nueva funcionalidad, puede (y debe) ser necesario, realizar una refactorización del código, a fin de lograr una mayor cohesión de éste, impidiendo redundancias. Cuando tenemos que introducir una nueva característica del sistema, si esta tiene mucho en común con otra previa, lo mejor es eliminar el código duplicado, sin miedo a que falle, debido a que con las pruebas continuas se corroborá el correcto funcionamiento.",-1),d=e("p",null,"Según la refactorización el código debe ser simple y claro. Esto provoca el huir del código duplicado. El código duplicado complica la tarea de programación por diversas causas. Una de ellas es que “ensucia” el programa haciéndolo mas largo de lo estrictamente necesario (con lo que no satisfacemos el fundamento de los Diseños Simples). Además aumentan las posibilidades de tener errores, y hace incomprensible o de difícil lectura el programa. Por ello, la refactorización es la principal técnica propuesta, para evolucionar el código de la aplicación con facilidad en cada iteración.",-1),l=[c,t,s,d];function u(m,p,f,g,_,h){return i(),r("div",null,l)}const q=o(n,[["render",u]]);export{b as __pageData,q as default};