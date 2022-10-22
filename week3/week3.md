# React vs Vue vs Angular vs Svelte 비교

## 🚀각 프레임워크의 주된 차이점은 무엇인가?

### 라이브러리, 프레임워크가 먼데?

- 가장 큰 차이점은 **주도권**의 차이
- 라이브러리는 사용자가 원할 때 가져다가 쓸 수 있는 도구
- 프레임워크는 이미 짜여진 틀, 문법에 맞게 사용자가 맞춰줘야 하는 도구

### React vs Vue

---

> 주된 차이점

- React는 라이브러리, Vue는 프레임워크
- React는 jsx 형태로 코드를 작성하고, DOM과 UI 로직을 한 번에 구현할 수 있다.
- Vue는 html, css, js 영역이 <template>, <style>, <script>로 구분되어 있다.
- **React는 Vue에 비해 자유도가 높고 Vue는 React에 비해 코드 작성이 쉽다.**

> 각각의 장점

React

- 컴포넌트 재사용이 용이하다. 파일 별로 컴포넌트를 쉽게 만들고 재사용할 수 있다.
- props 전달이 용이하다.
- TypeScript 적용이 Vue에 비해 쉽다.

Vue

- 러닝커브가 낮아서 초보자가 배우기에 더 쉬운 편이다. 또한 React는 상태관리 라이브러리로 Recoil, Redux 등 학습해야할 것이 많은 반면 Vue는 VueX가 가장 대표적이다.
- 속도가 미세하게 더 빠르다고 한다.

### React vs Angular

---

> 차이점

- React는 Virtual DOM, Angular는 Incremental DOM을 조작
- Angular는 Component와 Service 단이 분리되어 있다. Component에서는 View를 처리하는 로직만, Service에서는 비지니스 로직만을 작성함
- React에서는 부모 컴포넌트에서 자식 컴포넌트로 props를 보내는 것과 같이 데이터 바운딩이 단방향인 반면, Angular에서는 데이터가 양방향으로 흐른다.

>Angular 장점

- SSR 지원 가능한 SPA 프레임워크
- TypeScript가 주된 개발 언어이다.

> Angular 단점

- 러닝커브가 높다. 초기 진입 장벽이 높아 초보자가 배우기에 어렵지만, 유지보수와 개발 속도에 있어서 특화되어 있는 프레임워크이다.
- Vue와 같이 Framework에 가까워서 자유도가 떨어진다.

### React vs Svelte

---

> Svelte 장점

- React, Angular, Vue와 비교했을 때 성능이 가장 뛰어나다.
- 런타임이 아니라 빌드 타임에 애플리케이션 코드를 해석한다.
- Virtual DOM이 없다. Svelte의 반응형 선언문은 업데이트가 발생하는 동안 자동으로 로직을 재계산해준다. 변경된 DOM을 반영하기 위해 Virtual DOM과 비교하지 않고 반응형 선언문과 변수에 의해 업데이트 명령을 받아 DOM을 업데이트한다.
- 자동으로 export된다.
- React와 달리 외부 라이브러리(상태관리, 스타일 등)에 의존하지 않는다. 다 내장하고 있음
- 크기가 작아 가볍다! 개발 속도가 빠르다! 코드가 짧고 가독성이 좋다! 배우기 쉽다!

> Svelte 단점

- React는 인기가 많아서 커뮤니티가 활성화되어 있고, 개발 생산성 향상 도구(Redux 등)가 많은 편이지만 Svelte는 이러한 지원이 부족하다.
- 대규모 웹에 적합하지 않다.

## 🚀스타트업을 창업한다면, 무슨 라이브러리/프레임워크를 사용해야 할까?

- 가장 인기가 많고 널리 쓰이고 있는 React를 사용할 것 같다.
- 레퍼런스도 많고, 커뮤니티가 활성화되어 있기 때문에 상대적으로 문제 해결이 쉬울 것이다.

## 🚀난 무엇을 위해 React를 학습하는가?

- 유지보수와 생산성 측면에서 장점을 가지고 있다.
- interactive한 웹 페이지를 보다 효율적으로 관리하고 개발할 수 있다.
- React는 개발 자유도가 높은 편에 속하므로 React를 쓸 줄 알면 다른 라이브러리/프레임워크에도 금방 익숙해질 수 있을 것이다.

# Styled-components

## 🚀styled-components의 장/단점

---

> 장점

- css-in-js는 JavaScript 환경을 최대한 활용할 수 있다. props 등을 넘겨주어서 조건에 따른 스타일링이 용이하다.
- css를 컴포넌트화 할 수 있다. css 파일을 전역적으로 관리할 필요 없이 컴포넌트 단위로 쓸 수 있다. → 프로젝트 규모가 커질 때 유지보수가 편리하다.

> 단점

- 별도의 라이브러리를 설치해야 하므로 번들 크기가 커진다.
- 사용자 인터랙션이 많은 페이지일 경우 css 파일을 따로 쓰는 것보다 성능이 느리다고 한다.

## 🚀대체할 수 있는 라이브러리? (emotion, stitches , …)

css-in-js 종류 > runtime, zero-runtime 두 가지가 존재

- runtime css-in-js (styled-components, emotion)
    - javascript runtime에서 필요한 CSS를 동적으로 만들어 적용한다.
    - css파일을 생성하지 않기에 webpack에서 css-loader가 필요 없다.
    - 스크롤, 드래그 앤 드랍과 같이 복잡한 동적 스타일링에서는 오버헤드가 발생할 수 있다.
- zero-runtime (stitches)
    - 페이지를 더 빨리 로드할 수 있다.
    - JS 번들에서 styles코드를 모두 실행되어야 페이지가 로드된다.
    - 첫 load는 빠르지만, 첫 paint는 느릴 수 있다.

> emotion vs styled-components
- 아직까지 styled-components가 더 많이 쓰이지만 npm 다운로드 횟수는 emotion이 더 많고 인기도 많아지는 추세이다.
- emotion이 styled-components보다 좀 더 가볍고 빠르다고 하지만 성능 상 유의미한 차이는 없다.
- emotion은 inline style을 작성해도 class로 변환해준다.
- emotion은 css 속성으로 props를 결합해서 복잡한 스타일링을 할 수 있다.

## 🚀본인은 어떤 스타일링 라이브러리가 가장 마음에 드나요?

- styled-components를 가장 많이 사용해왔기 떄문에 익숙하다.
- 눈에 띄는 성능 차이가 없다면 앞으로도 styled-components를 사용할 것 같다.