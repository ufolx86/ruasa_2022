import{b as d}from"/build/_shared/chunk-PD7TX5XR.js";import{a as x}from"/build/_shared/chunk-5ATXAWEU.js";import{a as b}from"/build/_shared/chunk-6VGB7G7K.js";import{a as i,d as m,e as s,i as n,k as a}from"/build/_shared/chunk-3YGOQTTM.js";import{c as l,d as e,e as t}from"/build/_shared/chunk-QC4FO2RC.js";t();t();var N=l(b());var g=l(x());function u(){let r=a(),p=d();return e.createElement("div",{className:"flex h-full min-h-screen flex-col"},e.createElement("header",{className:"flex items-center justify-between bg-slate-800 p-4 text-white"},e.createElement("h1",{className:"text-3xl font-bold"},e.createElement(s,{to:"."},"Notes")),e.createElement("p",null,p.email),e.createElement(n,{action:"/logout",method:"post"},e.createElement("button",{type:"submit",className:"rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"},"Logout"))),e.createElement("main",{className:"flex h-full bg-white"},e.createElement("div",{className:"h-full w-80 border-r bg-gray-50"},e.createElement(s,{to:"new",className:"block p-4 text-xl text-blue-500"},"+ New Note"),e.createElement("hr",null),r.noteListItems.length===0?e.createElement("p",{className:"p-4"},"No notes yet"):e.createElement("ol",null,r.noteListItems.map(o=>e.createElement("li",{key:o.id},e.createElement(m,{className:({isActive:f})=>`block border-b p-4 text-xl ${f?"bg-white":""}`,to:o.id},"\u{1F4DD} ",o.title))))),e.createElement("div",{className:"flex-1 p-6"},e.createElement(i,null))))}export{u as default};