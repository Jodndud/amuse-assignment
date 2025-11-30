import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { worker } from './mocks/browser.ts';

import { RecoilRoot } from 'recoil';

// 배포 & 개발 환경에서 worker사용
worker.start().then(() => {
  createRoot(document.getElementById('root')!).render(
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  )
})