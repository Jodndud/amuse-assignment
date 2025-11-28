import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { worker } from './mocks/browser.ts';

import { RecoilRoot } from 'recoil';

// 개발 환경에서만 worker사용
if (import.meta.env.DEV) {
  worker.start().then(() => {
    createRoot(document.getElementById('root')!).render(
      <RecoilRoot>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecoilRoot>
    )
  })
} else {
  createRoot(document.getElementById('root')!).render(
      <RecoilRoot>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecoilRoot>
    )
}
