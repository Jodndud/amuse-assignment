## IoT Device Dashboard

- [Amuse과제 Dashboard](https://amuse-assignment.vercel.app/)

사물인터넷TASK 과제를 위한 IoT 기기 대시보드 및 상세 제어 웹 애플리케이션입니다.  
React, Recoil, React Router DOM, styled-components를 기반으로 구현되었습니다.

- 사용자 경험을 개선하기위해 `mockDate.json`에 `imageUrl` 필드 추가
- `category.json` 데이터 추가
- `docs/` 에 기능별 문서 정리

### 프로젝트 실행 방법

#### 1. 패키지 설치
```bash
# npm 사용 시
npm install

# 또는 yarn 사용 시
yarn install
```

#### 2. 개발 서버 실행
```bash
# npm
npm run dev

# 또는 yarn
yarn dev
```

### 3. 프로젝트 구조
```
프로젝트 루트/
├── docs/               # 프로젝트 문서 작성
├── public/             # 이미지 데이터(url접근)
├── src/
│   ├── assets/         # 이미지 데이터(import접근)
│   ├── components/     # 컴포넌트
│   ├── data/           # 사용데이터
│   ├── hooks/          # 커스텀 훅 관리
│   ├── mocks/          # msw설정 및 handler정의
│   ├── pages/          # 라우팅 페이지
│   ├── recoil/         # Recoil 상태관리
│   ├── types/          # 타입 관리
├── App.css
├── App.tsx
├── index.css
├── main.tsx
├── ...
└── README.md
```

#### 4. 일정
| 요일 | 작업 내용 |
|------|-----------|
| 목 | 프로젝트 구조 설계, Recoil 상태 관리 |
| 금 | 프로젝트 디자인, MSW 도입, 대시보드 구현 |
| 토 | 상세 페이지 구현 (랜덤 기기 상태 변환, 파워 버튼, 온도 제어, 잠금), 대시보드 상태 토글 |
| 일 | 필터 기능, 사이드바, 상세 페이지 리팩토링 |
| 월 | SSAFY 전국 결선 발표 리허설 |
| 화 | SSAFY 전국 결선 발표 |
| 수 | 대시보드 기기 추가 기능 구현 |
| 목 | 문서 정리 및 최종 테스트 |

#### 5. Git Commit 컨벤션
이 프로젝트에서는 의미 있는 커밋 단위와 일관된 커밋 메시지를 위해
다음과 같은 Prefix 규칙을 사용합니다.

#### Prefix 규칙
- feat: 새로운 기능 추가 (화면, 로직 등)
- fix: 버그 수정
- chore: 빌드/설정/패키지 변경, 초기 세팅, 폴더 구조 등
- refactor: 기능 변화 없이 코드 구조 개선
- style: 코드 스타일/포맷 수정 (세미콜론, 들여쓰기 등)
- docs: 문서 수정 (README 등)
- test: 테스트 코드 추가/수정