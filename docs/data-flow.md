# IoT 대시보드 데이터 파싱 & 상태 관리 정리

## 1. Dashboard.tsx – 전체 디바이스 조회 흐름

### 1-1. API 호출: GET `/api/devices`
- `useGetDevices` 훅에서 첫 마운트 시 전체 디바이스 목록을 조회한다.
- 실제 네트워크 호출은 MSW(Mock Service Worker)를 통해 가로채며, 응답 데이터는 `mockData.json`의 `devices` 배열을 그대로 사용한다.
- Recoil에 전체 디바이스 상태 저장

### 1-2. Dashboard.tsx에서 전체 디바이스 조회 및 렌더링
- Dashboard 컴포넌트에서는 Recoil 상태를 읽어서 카드 리스트로 렌더링한다.
- 조회는 `useRecoilValue(devicesState)`로 처리

## 2. DeviceDetail.tsx – 단일 디바이스 조회 흐름

### 2-1. URL 파라미터에서 deviceId 추출
- React Router의 `useParams`로 상세 페이지의 디바이스 ID를 가져온다.

### 2-2. Recoil 캐시(devicesState)에서 단일 디바이스 조회 시도
- `useGetDeviceById` 훅 내부에서 우선 Recoil atom에 이미 데이터가 있는지 확인한다.
- 캐시가 남아있는 경우
    - device가 존재하면 별도의 API 호출 없이 이 값을 그대로 사용한다.
    - Dashboard에서 이미 `/api/devices`를 통해 상태를 채운 뒤 이동한 시나리오에서 동작.

### 2-3. 캐시가 없을 경우: 단일 조회 API 호출
- 새로고침 등으로 인해 devicesState가 비어있는 경우(device가 undefined인 경우) GET `/api/devices/:deviceId`를 호출해 단일 디바이스를 조회한다.

### 2-4. DeviceDetail.tsx에서 단일 디바이스 조회 및 렌더링
- 훅에서 반환한 device를 이용해 UI를 구성한다.

## 요약
- Dashboard.tsx에서 Recoil 상태저장을 하면 페이지 이동 시 조회 가능하지만, GET `/api/devices/:deviceId`를 호출을 통해 DetailDevice.tsx에서 새로고침 하더라도 데이터가 안보이는 문제 해결