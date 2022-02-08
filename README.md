# wanted_pre_onboarding

원티드 프리 온보딩 코스 선발 과제

## 사용 기술

- React
- JavaScript
- CSS Module

## 📦 컴포넌트 구성

- [x] Toggle
- [ ] Modal
- [ ] Tab
- [ ] Tag
- [ ] AutoComplete
- [x] ClickToEdit

## ✏️ 구현 방법 및 어려웠던 점

### Toggle

- 구현 방법
  - 토글 버튼 클릭 여부를 boolean 값으로 관리하기 위해서 useState로 상태 관리하는 방법으로 구현했습니다.
- 어려웠던 점
  - className을 두 개 이상 할당하는 과정에서 문법적인 오류로 어려움이 있었습니다. 구글 서칭을 통해 삼항연산자를 사용하는 방법으로 해결했습니다.
- 실행 방법
  - 스위치 버튼 영역 클릭 시 스위치 토글

### ClickToEdit

- 구현 방법
  - 두 개의 Input value를 위한 form, 하단 이름, 나이 출력을 위한 submitForm, Input Focus 상태를 추적하기 위한 isActive
- 어려웠던 점
  - 간단하게 해결할 줄 알았는데 전체적으로 로직을 구현하는데 많은 어려움이 있었습니다. 우선 기능 구현 자체에만 초점을 두고 로직을 만들었습니다.
- 실행 방법
  - 인풋 박스 더블 클릭 -> 입력 -> 포커스 아웃 시 하단 이름, 나이 변경
