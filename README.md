# Silvia Challenge


## 프로젝트 구조

### `src/components`

이 폴더는 애플리케이션 전반에서 사용되는 재사용 가능한 UI 컴포넌트를 포함합니다. 예를 들어 `TextStyle`, `QuestionBox` 및 `NavigateButton`과 같은 커스텀 컴포넌트가 있습니다.

### `src/constants`

이 폴더는 프로젝트에서 사용되는 상수 값과 설정을 보관합니다. 문제의 key와 image를 명시한 `KEY_IMAGE` 배열이 있습니다.

### `src/screens`

이 폴더는 애플리케이션의 주요 화면을 포함합니다. `Home`, `Test`, `Report` 이 세 가지의 스크린을 포함하고 있습니다.

### `src/stores`

이 폴더는 애플리케이션의 상태 관리 로직을 포함합니다. 테스트 데이터를 관리하는 `TestStore`가 포함되어 있습니다.

### `src/utils`

이 폴더는 애플리케이션 전반에서 사용되는 유틸리티 함수를 포함합니다. 무작위 숫자를 생성하는 `randomization`가 포함되어 있습니다.


## Node version

v21.6.2


## command

패키지 설치 - yarn install

실행 - yarn start


## 주요 패키지 설명

- **@emotion/native**: React Native 애플리케이션에서 스타일링을 쉽게 할 수 있도록 지원하는 라이브러리입니다. `@emotion/react`와 함께 사용되며, React Native 컴포넌트에 스타일을 지정할 수 있습니다.

- **@emotion/react**: React 애플리케이션을 위한 CSS-in-JS 스타일링 라이브러리입니다. 스타일 코드가 JS 안에서 처리되며, `@emotion/native`와 함께 사용하여 일관된 스타일링을 구현합니다.

- **@fortawesome/fontawesome-svg-core**: FontAwesome 아이콘의 SVG를 사용하는 데 필요한 핵심 패키지입니다. 아이콘 설정을 통합 관리할 수 있습니다.

- **@fortawesome/free-solid-svg-icons**: FontAwesome의 무료 솔리드 아이콘 모음입니다. 다양한 고해상도 아이콘을 제공하여 UI 디자인의 일관성과 접근성을 높일 수 있습니다.

- **@fortawesome/react-native-fontawesome**: FontAwesome 아이콘을 React Native 애플리케이션에서 사용할 수 있도록 해주는 패키지입니다. FontAwesome 아이콘을 쉽게 추가하고 관리할 수 있습니다.

- **@react-navigation/native**: React Navigation의 핵심 패키지로, React Native 앱에서 화면 간 전환을 쉽게 구현할 수 있습니다. 네비게이션의 상태와 테마 등을 관리합니다.

- **@react-navigation/stack**: 스택 네비게이션을 구현하기 위한 패키지로, 화면 전환 시 스택 구조를 통해 이전 화면으로 돌아갈 수 있는 구조를 제공합니다.

- **expo**: Expo는 React Native 앱 개발을 보다 쉽게 할 수 있도록 도와주는 프레임워크입니다. 다양한 기본 기능과 개발자 도구를 제공하여 빠른 개발을 가능하게 합니다.

- **expo-status-bar**: Expo 애플리케이션에서 상태 표시줄을 제어하고 스타일링할 수 있도록 돕는 패키지입니다.

- **react**: React는 사용자 인터페이스를 구축하기 위한 라이브러리입니다. 이 프로젝트의 핵심 UI 구성 요소로 사용됩니다.

- **react-native**: React Native는 네이티브 모바일 애플리케이션을 개발하기 위한 프레임워크로, React와 JavaScript를 사용하여 iOS 및 Android 앱을 동시에 개발할 수 있습니다.

- **react-native-gesture-handler**: React Native에서 제스처(스와이프, 탭 등)를 보다 자연스럽고 정확하게 구현할 수 있도록 도와주는 라이브러리입니다.

- **react-native-safe-area-context**: 안전 영역을 고려하여 UI 요소의 위치와 여백을 자동으로 조정해주는 패키지로, 화면 상단 및 하단의 안전 영역을 자동으로 인식합니다.

- **react-native-svg**: SVG 이미지를 React Native 애플리케이션에서 렌더링할 수 있도록 지원하는 라이브러리입니다. 다양한 아이콘과 일러스트레이션을 쉽게 구현할 수 있습니다.

