### Vercel 라우팅 설정 문제
동적 경로로 직접 접근하거나 새로고침을 하면, Vercel 서버는 해당 경로에 매핑된 물리적인 파일을 찾음

#### 폴백 설정 추가
- `/device/d1`와 같은 동적라우팅 할 경우 vercel은 `d1.html`로 라우팅하기 때문에 `vercel.json`파일을 작성해 기본경로를 `index.html`로 잡아줌
```
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```