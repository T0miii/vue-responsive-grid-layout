import{d as ps,h as o,p as is,a2 as cs,o as h,c as C,z as e,a3 as r,a4 as L,a5 as p,a as T,F as P,L as q,E as $,B as X,n as ds,b as Y,X as us,t as b,A as vs,M as ys,N as bs,a6 as hs,_ as gs,O as Cs}from"./chunks/framework.9b099134.js";import{t as ms,q as Ds,O as fs}from"./chunks/test.abf5e960.js";const n=g=>(ys("data-v-a76f3471"),g=g(),bs(),g),Fs={class:"container"},_s={class:"row"},xs={class:"col-sm"},As=n(()=>e("legend",null,"Test bench",-1)),ws=n(()=>e("label",{class:"hide",for:"rowHeight"}," Row Height(px) ",-1)),Bs=n(()=>e("label",{class:"hide",for:"colNum"}," Max Columns ",-1)),Rs=n(()=>e("label",{class:"hide",for:"maxRows"}," Max Rows ",-1)),ks=n(()=>e("br",{class:"hide"},null,-1)),zs=n(()=>e("label",{class:"hide",for:"autosize"}," autosize ",-1)),Vs=n(()=>e("label",{class:"",for:"editMode"}," editMode ",-1)),Es=n(()=>e("label",{class:"hide",for:"horizontalShift"}," horizontalShift ",-1)),Us=n(()=>e("label",{class:"hide",for:"isBounded"}," isBounded ",-1)),Ss=n(()=>e("label",{class:"",for:"isDraggable"}," isDraggable ",-1)),Is=n(()=>e("label",{class:"hide",for:"isMirrored"}," isMirrored ",-1)),Ms=n(()=>e("label",{class:"hide",for:"isResizable"}," isResizable ",-1)),Ns=n(()=>e("label",{class:"hide",for:"isResponsive"}," isResponsive ",-1)),Gs=n(()=>e("label",{class:"hide",for:"preserveAspectRatio"}," preserveAspectRatio ",-1)),Ls=n(()=>e("label",{class:"hide",for:"preventCollision"}," preventCollision ",-1)),Ts=n(()=>e("label",{class:"hide",for:"restoreOnDrag"}," restoreOnDrag ",-1)),Os=n(()=>e("label",{class:"hide",for:"showCloseButton"}," showCloseButton ",-1)),Hs=n(()=>e("label",{class:"hide",for:"showGridLines"}," showGridLines ",-1)),Ps=n(()=>e("label",{class:"hide",for:"useBorderRadius"}," useBorderRadius ",-1)),qs=n(()=>e("label",{class:"hide",for:"verticalCompact"}," verticalCompact ",-1)),Xs={class:"row"},Ys={class:"col-sm-2 hide"},$s={class:"col-sm-7 hide"},Js={class:"layoutJSON"},Ws=n(()=>e("code",null,"[x, y, w, h]",-1)),js={class:"columns"},Ks=n(()=>e("div",{class:"col-sm-3 hide"},[e("textarea",{style:{width:"100%","margin-top":"15px",height:"150px","border-radius":"12px"}})],-1)),Qs=n(()=>e("div",{style:{"font-size":"0",height:"5px",margin:"0",padding:"0"}},null,-1)),Zs={class:"row"},se={class:"col-sm"},ee={class:"layout"},ae={id:"content",class:"content"},ne={class:"text"},le=n(()=>e("div",{class:"vue-draggable-handle"},null,-1)),oe={class:"no-drag"},te=n(()=>e("br",null,null,-1)),re=n(()=>e("button",{class:"button"}," Click ",-1)),pe=ps({__name:"05-example",setup(g){hs(l=>({e8a0c406:d.value,"5bfa2bd2":l.rowHeightPx}));const m=o(!0),d=o(12),D=o(!0),A=o(!1),w=o(!1),f=o(!0),B=o(!1),R=o(!1),k=o(!0),z=o(40),V=o(!1),E=o(!1),U=o(50),S=o(!1),I=o(!1),M=o(!1),F=o(!0),N=o(!0),t=o(ms),y=o(),G=new Map;let O=d.value;const J=l=>{O!==l&&(O=l,d.value=l)},W=()=>{},j=()=>{},K=()=>{},Q=()=>{},Z=()=>{},ss=()=>{},es=()=>{},as=l=>{t.value=t.value.filter(a=>a.i!==l)},ns=l=>{let a=l.i;return l.isStatic&&(a+=" - Static"),a},ls=l=>{l&&l.i&&G.set(l.i,l)},i={x:0,y:0},c={h:1,i:"",w:1,x:0,y:0},os=l=>{if(l.stopPropagation(),l.preventDefault(),!D.value&&!f.value)return;const s=document.getElementById("content").getBoundingClientRect();let u=!1;i.x>s.left&&i.x<s.right&&i.y>s.top&&i.y<s.bottom&&(u=!0),u===!0&&t.value.findIndex(v=>v.i==="drop")===-1&&t.value.push({h:2,i:"drop",w:2,x:t.value.length*2%d.value,y:t.value.length+d.value});const _=t.value.findIndex(v=>v.i==="drop");if(_!==-1){try{y.value.defaultGridItem.$el.style.display="none"}catch{}const v=G.get("drop");if(!v)return;v.dragging={left:i.x-s.left,top:i.y-s.top};const x=v.calcXY(i.y-s.top,i.x-s.left);u===!0&&(y.value.dragEvent("dragstart","drop",x.x,x.y,2,2),c.i=String(_),c.x=t.value[_].x,c.y=t.value[_].y),u===!1&&(y.value.dragEvent("dragend","drop",x.x,x.y,2,2),t.value=t.value.filter(rs=>rs.i!=="drop"))}},ts=()=>{const a=document.getElementById("content").getBoundingClientRect();let s=!1;i.x>a.left&&i.x<a.right&&i.y>a.top&&i.y<a.bottom&&(s=!0),s===!0&&(y.value.dragEvent("dragend","drop",c.x,c.y,2,2),t.value=t.value.filter(u=>u.i!=="drop"),us(()=>{t.value.push({h:1,i:c.i,minH:1,minW:1,w:1,x:c.x,y:c.y}),y.value.dragEvent("dragend",c.i,c.x,c.y,2,2),G.delete("drop")}))},H=l=>{i.x=l.clientX,i.y=l.clientY};return is(()=>{document.addEventListener("dragover",H)}),cs(()=>{document.removeEventListener("dragover",H)}),(l,a)=>(h(),C("div",Fs,[e("div",_s,[e("div",xs,[e("form",null,[e("fieldset",null,[As,ws,r(e("input",{id:"rowHeight","onUpdate:modelValue":a[0]||(a[0]=s=>U.value=s),class:"hide",type:"number"},null,512),[[L,U.value]]),Bs,r(e("input",{id:"colNum","onUpdate:modelValue":a[1]||(a[1]=s=>d.value=s),class:"hide",type:"number"},null,512),[[L,d.value]]),Rs,r(e("input",{id:"maxRows","onUpdate:modelValue":a[2]||(a[2]=s=>z.value=s),class:"hide",type:"number"},null,512),[[L,z.value]]),ks,zs,r(e("input",{id:"autosize","onUpdate:modelValue":a[3]||(a[3]=s=>m.value=s),class:"hide",type:"checkbox"},null,512),[[p,m.value]]),Vs,r(e("input",{id:"editMode","onUpdate:modelValue":a[4]||(a[4]=s=>D.value=s),class:"",type:"checkbox"},null,512),[[p,D.value]]),Es,r(e("input",{id:"horizontalShift","onUpdate:modelValue":a[5]||(a[5]=s=>A.value=s),class:"hide",type:"checkbox"},null,512),[[p,A.value]]),Us,r(e("input",{id:"isBounded","onUpdate:modelValue":a[6]||(a[6]=s=>w.value=s),class:"hide",type:"checkbox"},null,512),[[p,w.value]]),Ss,r(e("input",{id:"isDraggable","onUpdate:modelValue":a[7]||(a[7]=s=>f.value=s),class:"",type:"checkbox"},null,512),[[p,f.value]]),Is,r(e("input",{id:"isMirrored","onUpdate:modelValue":a[8]||(a[8]=s=>B.value=s),class:"hide",type:"checkbox"},null,512),[[p,B.value]]),Ms,r(e("input",{id:"isResizable","onUpdate:modelValue":a[9]||(a[9]=s=>R.value=s),class:"hide",type:"checkbox"},null,512),[[p,R.value]]),Ns,r(e("input",{id:"isResponsive","onUpdate:modelValue":a[10]||(a[10]=s=>k.value=s),class:"hide",type:"checkbox"},null,512),[[p,k.value]]),Gs,r(e("input",{id:"preserveAspectRatio","onUpdate:modelValue":a[11]||(a[11]=s=>V.value=s),class:"hide",type:"checkbox"},null,512),[[p,V.value]]),Ls,r(e("input",{id:"preventCollision","onUpdate:modelValue":a[12]||(a[12]=s=>E.value=s),class:"hide",type:"checkbox"},null,512),[[p,E.value]]),Ts,r(e("input",{id:"restoreOnDrag","onUpdate:modelValue":a[13]||(a[13]=s=>S.value=s),class:"hide",type:"checkbox"},null,512),[[p,S.value]]),Os,r(e("input",{id:"showCloseButton","onUpdate:modelValue":a[14]||(a[14]=s=>I.value=s),class:"hide",type:"checkbox"},null,512),[[p,I.value]]),Hs,r(e("input",{id:"showGridLines","onUpdate:modelValue":a[15]||(a[15]=s=>M.value=s),class:"hide",type:"checkbox"},null,512),[[p,M.value]]),Ps,r(e("input",{id:"useBorderRadius","onUpdate:modelValue":a[16]||(a[16]=s=>F.value=s),class:"hide",type:"checkbox"},null,512),[[p,F.value]]),qs,r(e("input",{id:"verticalCompact","onUpdate:modelValue":a[17]||(a[17]=s=>N.value=s),class:"hide",type:"checkbox"},null,512),[[p,N.value]])])])])]),e("div",Xs,[e("div",Ys,[e("div",{class:"droppable-element",draggable:"true",onDrag:os,onDragend:ts}," Droppable Element (Drag me!) ",32)]),e("div",$s,[e("div",Js,[T(" Displayed as "),Ws,T(": "),e("div",js,[(h(!0),C(P,null,q(t.value,s=>(h(),C("div",{key:s.i},[e("b",null,b(s.i),1),T(": ["+b(s.x)+", "+b(s.y)+", "+b(s.w)+", "+b(s.h)+"] ",1)]))),128))])])]),Ks]),Qs,e("div",Zs,[e("div",se,[e("div",ee,[e("div",ae,[$(Y(fs),{ref_key:"refLayout",ref:y,layout:t.value,"onUpdate:layout":a[18]||(a[18]=s=>t.value=s),"auto-size":m.value,class:ds({grid:M.value}),"col-num":d.value,"horizontal-shift":A.value,"is-bounded":w.value,"is-draggable":f.value,"is-mirrored":B.value,"is-resizable":R.value,margin:[10,10],"max-rows":z.value,"prevent-collision":E.value,responsive:k.value,"restore-on-drag":S.value,"row-height":U.value,"use-border-radius":F.value,"use-css-transforms":!0,"vertical-compact":N.value,onColumnsChanged:J},{default:X(()=>[(h(!0),C(P,null,q(t.value,s=>(h(),vs(Y(Ds),{key:s.i,ref_for:!0,ref:u=>ls(u),class:"test","drag-allow-from":".vue-draggable-handle","drag-ignore-from":".no-drag","enable-edit-mode":D.value,h:s.h,i:s.i,"is-draggable":s.isDraggable,"is-resizable":s.isResizable,"is-static":s.isStatic,"min-h":s.minH,"min-w":s.minW,"preserve-aspect-ratio":V.value,"show-close-button":I.value,"use-border-radius":F.value,w:s.w,x:s.x,y:s.y,onContainerResized:W,onDrag:j,onDragged:K,onMove:Q,onMoved:Z,onRemoveGridItem:as,onResize:ss,onResized:es},{default:X(()=>[e("div",ne,[le,e("div",oe,[e("span",null,b(ns(s.i)),1),te,re])])]),_:2},1032,["enable-edit-mode","h","i","is-draggable","is-resizable","is-static","min-h","min-w","preserve-aspect-ratio","show-close-button","use-border-radius","w","x","y"]))),128))]),_:1},8,["layout","auto-size","class","col-num","horizontal-shift","is-bounded","is-draggable","is-mirrored","is-resizable","max-rows","prevent-collision","responsive","restore-on-drag","row-height","use-border-radius","vertical-compact"])])])])])]))}});const ie=gs(pe,[["__scopeId","data-v-a76f3471"]]),ce=Cs(`<h1 id="drag-allow-ignore-elements" tabindex="-1">Drag allow/ignore elements</h1><p>Ignore drag on certain elements and allow on others.</p><p>Click and drag the black dot on the corner of each GridItem to be able to drag it. <br></p><p>The GridItem has the following properties set in order to get this functionality.</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">drag-allow-from=&quot;.vue-draggable-handle&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">drag-ignore-from=&quot;.no-drag&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Style for the black circle drag handler and overriding the cursor property, so the grab and grabbing cursor is not shown.</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">vue-draggable-handle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-5px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> content-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> black</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">box-sizing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> border-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">cursor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grab</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">vue-grid-item</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">vue-draggable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">cursor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> default </span><span style="color:#F78C6C;">!important</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">vue-draggable-dragging</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">cursor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grabbing </span><span style="color:#F78C6C;">!important</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,7),ye=JSON.parse('{"title":"Drag allow/ignore elements","description":"","frontmatter":{},"headers":[],"relativePath":"examples/05-example.md","lastUpdated":1678630281000}'),de={name:"examples/05-example.md"},be=Object.assign(de,{setup(g){return(m,d)=>(h(),C("div",null,[ce,$(ie)]))}});export{ye as __pageData,be as default};
