export function createElement__v2(vNode) {
  // 1. vNode가 falsy면 빈 텍스트 노드를 반환합니다.
  if (!vNode) return document.createTextNode('');

  // 2. vNode가 문자열이나 숫자면 텍스트 노드를 생성하여 반환합니다.
  if (typeof vNode === 'string' || typeof vNode === 'number') {
    return document.createTextNode(vNode);
  }

  // 3. vNode가 배열이면 DocumentFragment를 생성하고 각 자식에 대해 createElement__v2를 재귀 호출하여 추가합니다.
  if (Array.isArray(vNode)) {
    const fragment = document.createDocumentFragment();
    vNode.forEach(child => {
      fragment.appendChild(createElement__v2(child));
    });
    return fragment;
  }

  // 4. 일반 요소 vNode 처리
  const { type, props, children } = vNode;

  // 타입이 함수인 경우, props를 전달하며 호출
  if (typeof type === 'function') {
    const childVNode = type(props); // 함수 호출
    return createElement__v2(childVNode); // 반환된 vNode로 다시 createElement__v2 호출
  }

  // 타입이 문자열인 경우, DOM 요소 생성
  const element = document.createElement__v2(type);

  // 속성 설정
  if (props) {
    Object.keys(props).forEach(prop => {

      if (prop.startsWith('on')) { // 이벤트 리스너 처리
        const eventType = prop.slice(2).toLowerCase();
        element.addEventListener(eventType, props[prop]);
      } else if (prop === 'className') { // className 처리
        element.className = props[prop];
      } else { // 일반 속성 처리
        element.setAttribute(prop, props[prop]);
      }
    });
  }

  // 자식 요소 추가
  if (children) {
    children.forEach(child => {
      element.appendChild(createElement__v2(child)); // 자식도 createElement__v2로 처리
    });
  }

  return element;
}
