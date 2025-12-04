import{R as c,j as d}from"./iframe-D3pLbnwY.js";import{d as m}from"./styled-components.browser.esm-DcjKVN9V.js";import{d as g}from"./devicesState-XOIesESP.js";import"./preload-helper-PPVm8Dsz.js";function u(){const[o,e]=c(g);return{togglePower:s=>{e(p=>p.map(r=>r.id===s?{...r,state:{...r.state,power:r.state.power==="on"?"off":"on"}}:r))}}}function i({deviceId:o,power:e}){const{togglePower:a}=u(),s=()=>{o&&a(o)};return d.jsx(f,{$on:e==="on",onClick:s,"aria-label":e==="on"?"전원 끄기":"전원 켜기","aria-pressed":e==="on"})}const f=m.div`
  position: absolute;
  top: -26px;
  right: 20px;

  background: #fafafa;
  background-color: ${({$on:o})=>o?"#225EA2":"#fafafa"};
  background-image: ${({$on:o})=>o?"url('/images/power-btn-on.svg')":"url('/images/power-btn-off.svg')"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 28px 28px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 3px 1px #00000013;

  @media (min-width: 768px) {
    right: 40px;
  }

  @media (min-width: 1400px) {
    right: 0;
  }
`;i.__docgenInfo={description:"",methods:[],displayName:"PowerButton",props:{deviceId:{required:!1,tsType:{name:"string"},description:""},power:{required:!1,tsType:{name:"string"},description:""}}};const h={title:"Components/Function/PowerButton",tags:["autodocs"],component:i,args:{deviceId:"d1",power:"off"},argTypes:{power:{control:"radio",options:["on","off"],description:"장치의 현재 전원 상태"},deviceId:{control:"text",description:"장치 ID (클릭 시 토글 훅에 전달됨)"}}},t={args:{power:"on"},name:"전원 켜짐 상태"},n={name:"전원 꺼짐 상태"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    power: 'on'
  },
  name: '전원 켜짐 상태'
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '전원 꺼짐 상태'
}`,...n.parameters?.docs?.source}}};const P=["PowerOn","PowerOff"];export{n as PowerOff,t as PowerOn,P as __namedExportsOrder,h as default};
