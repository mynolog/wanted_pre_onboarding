# wanted_pre_onboarding

원티드 프리 온보딩 코스 선발 과제

## 💻 사용 기술

- React
- JavaScript
- CSS Module

## 📦 컴포넌트 구성

- [x] Toggle
- [x] Modal
- [ ] Tab
- [ ] Tag
- [ ] AutoComplete
- [x] ClickToEdit

## ✏️ 구현 방법 및 어려웠던 점

### Toggle

- 구현 방법
  - 토글 버튼 클릭 여부를 boolean 값으로 관리하기 위해서 useState로 상태 관리하는 방법으로 구현했습니다.
- 어려웠던 점
  - 조건부로 className을 두 개 이상 할당하는 과정이 어려움이 있었습니다. 템플릿 리터럴과 삼항 연산자를 사용하여 해결했습니다.
- 실행 방법
  - 스위치 버튼 영역 클릭 시 스위치 토글

### Modal

- 구현 방법
  - 모달창 오픈 여부를 boolean 값으로 관리하기 위한 isOpen을 활용하여 조건부 스타일링을 적용했습니다.
- 어려웠던 점
  - JSX 문법이 아직 익숙하지 않아서 조건부 렌더링 방법이 어려웠습니다. Fragment를 사용하여 해결했습니다.
- 실행 방법
  - Open Modal 버튼 클릭 시 모달 창 Open -> X버튼 클릭 시 모달 창 Close

### ClickToEdit

- 구현 방법
  - 두 개의 Input value를 위한 form, 하단 이름, 나이 출력을 위한 submitForm, Input Focus 상태를 추적하기 위한 isActive 총 3개의 상태를 관리하여 구현했습니다.
- 어려웠던 점
  - 전체적으로 로직을 구현하는데 많은 어려움이 있었습니다. 우선 기능 구현 자체에만 초점을 두고 로직을 구현하였고 추후에 리팩토링을 통해서 다시 구현해볼 예정입니다.
- 실행 방법
  - 인풋 박스 더블 클릭 -> 입력 -> 포커스 아웃 시 하단 이름, 나이 변경
