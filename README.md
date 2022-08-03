# My To-do-List

---

![image](https://user-images.githubusercontent.com/107628613/182594167-27117c74-ed47-4911-9f07-7bfa37027a62.png)

---

![image](https://user-images.githubusercontent.com/107628613/182594318-9b8d8fce-7ef3-4e45-af80-3737af72ed80.png)

---

### 간략 소개

- 계획된 일에 대해서 제목과 내용을 입력하여 사용하는 To-do-List입니다.

### 핵심 기능

- To-do-List list-up
- To-do=List 상세보기

---

### 컴포넌트를 나눈 기준

- 컴포넌트를 나누는 이유
  - 컴포넌트 내의 state값이 변화하면 렌더링이 되는데요. 이 렌더링을 불필요한 코드까지 모두 다 렌더링 하지 않고 그에 해당하는 컴포넌트만 렌더링 되도록 하여 성능을 향상시킬 수 있습니다.
  - 추후 페이지가 늘어날 때를 대비하여 컴포넌트는 독립적이로 재사용 가능한 부분으로 분리해주는 것이 좋습니다.
  - 컴포넌트 관리가 잘 되어 있으면 예상치 못한 변경에 유연하게 대처할 수 있고, 유지보수 효율이 올라갑니다.
- 생성한 컴포넌트 : `Header`, `Form`, `List`, `Todo`, `Button`, `Detail`
- `Header` : To-do-List 제목을 출력하는 용도의 컴포넌트입니다.
- `Form` : `Form` 컴포넌트를 통해 입력한 내용들이 Global State에 업데이트 되도록 하는 용도의 컴포넌트 입니다.
- `List` : To-do-List는 Working, Done 두가지로 나뉘어 집니다. 그렇기 때문에, `List`는 `Todo`컴포넌트를 두 갈래로 나누어 출력시켜야 되므로 Todo의 상위 컴포넌트로 생성하였습니다.
- `Todo` : 한 개의 `Todo`가 여러 개수로 `List` 내에서 출력되게 됩니다. 즉, 재사용해야 되는 컴포넌트이므로 한 개의 컴포넌트로 생성하였습니다.
- `Button` : `Button`이 계속해서 동일한 디자인으로 출력되므로 한 개의 컴포넌트로 생성하여 `width`사이즈만 수정하는 방식으로 사용하였습니다.
- `Detail` : To-do-List의 상세페이지 용도의 컴포넌트 입니다.

### 페이지를 나눈 기준

- TodoDetail : To-do-List 상세 페이지
- TodoList : To-do-List Main Page
