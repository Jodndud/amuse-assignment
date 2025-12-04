import{R as u,j as e}from"./iframe-D3pLbnwY.js";import{d as t}from"./styled-components.browser.esm-DcjKVN9V.js";import{d as l}from"./devicesState-XOIesESP.js";import"./preload-helper-PPVm8Dsz.js";function x(){const[a,i]=u(l);return{changeTemperature:(n,o)=>{i(d=>d.map(r=>r.id===n?{...r,state:{...r.state,temperature:(r.state.temperature??0)+o}}:r))}}}function m({deviceId:a,temperature:i}){const{changeTemperature:p}=x(),n=o=>{a&&p(a,o)};return e.jsxs(f,{children:[e.jsx(g,{children:"🌡️온도조절"}),e.jsxs(h,{children:[e.jsx(c,{onClick:()=>n(-1),"aria-label":"1도 하락",children:e.jsx("img",{src:"/images/minus-icon.svg",alt:"minus"})}),e.jsxs(T,{"aria-live":"polite","aria-atomic":"true",children:[i,e.jsx(j,{children:"℃"})]}),e.jsx(c,{onClick:()=>n(1),"aria-label":"1도 상승",children:e.jsx("img",{src:"/images/plus-icon.svg",alt:"plus"})})]})]})}const f=t.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,g=t.h2`
  font-size: 18px;
  font-weight: 600;
`,h=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`,T=t.div`
  font-size: 40px;
  font-weight: 700;
`,j=t.span`
  font-weight: 500;
  font-size: 28px;
  margin-left: 4px;
`,c=t.button`
  background: #fff;
  width: 31px;
  height: 31px;
  border-radius: 50%;
  box-shadow: 0 1px 2px 0 #00000007;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;m.__docgenInfo={description:"",methods:[],displayName:"Temperature",props:{deviceId:{required:!1,tsType:{name:"string"},description:""},temperature:{required:!1,tsType:{name:"number"},description:""}}};const w={title:"Components/Function/Temperature",component:m,tags:["autodocs"],argTypes:{deviceId:{control:"text",description:"제어할 기기의 고유 ID"},temperature:{control:{type:"number"},description:"현재 표시 온도 (섭씨)"}},args:{deviceId:"d2"}},s={args:{deviceId:"d2",temperature:24},name:"온도 표시",parameters:{}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    deviceId: 'd2',
    temperature: 24
  },
  name: '온도 표시',
  parameters: {}
}`,...s.parameters?.docs?.source}}};const C=["DefaultTemperature"];export{s as DefaultTemperature,C as __namedExportsOrder,w as default};
