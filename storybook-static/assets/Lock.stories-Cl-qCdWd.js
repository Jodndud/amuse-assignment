import{j as o}from"./iframe-D3pLbnwY.js";import{d as t}from"./styled-components.browser.esm-DcjKVN9V.js";import"./preload-helper-PPVm8Dsz.js";function n({locked:e}){return o.jsxs(c,{"aria-label":"잠금 상태",children:[o.jsx(d,{children:"🔒잠금여부"}),e?o.jsx(a,{$locked:!0,role:"status","aria-live":"polite",children:"현재 기기가 잠금 상태입니다"}):o.jsx(a,{$locked:!1,role:"status","aria-live":"polite",children:"현재 기기가 잠금해제 상태입니다"})]})}const c=t.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,d=t.h2`
  font-size: 18px;
  font-weight: 600;
`,a=t.div`
  border: 1px solid #dedede;
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  background: ${({$locked:e})=>e?"#efffeb":"#ffeaea"};
  color: ${({$locked:e})=>e?"#22c55e":"#f87171"};
`;n.__docgenInfo={description:"",methods:[],displayName:"Lock",props:{locked:{required:!1,tsType:{name:"boolean"},description:""}}};const m={title:"Components/Function/Lock",component:n,tags:["autodocs"],argTypes:{locked:{control:{type:"boolean"},description:"기기의 잠금 상태를 나타냅니다."}}},r={args:{locked:!1},name:"잠금 해제 상태"},s={args:{locked:!0},name:"잠금 상태"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    locked: false
  },
  name: '잠금 해제 상태'
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    locked: true
  },
  name: '잠금 상태'
}`,...s.parameters?.docs?.source}}};const f=["Unlocked","Locked"];export{s as Locked,r as Unlocked,f as __namedExportsOrder,m as default};
