class Component {
  constructor() {
    this.init();
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.render();
    });
  }
  
  template() {
    return ``;
  }

  render(errorMsg) {
    const rootElement = document.querySelector('#root');

    if (!rootElement) {
      return;
    }
    
    if(this.loadData) this.loadData();

    rootElement.innerHTML = errorMsg ? this.errorTemplate(errorMsg) : this.template();

    if (this.bindEvents) this.bindEvents();
  };

  // 데이터 
  loadData() {
  }

  bindEvents() {
  }

  handleError(errorMsg) {
    this.render(errorMsg);
  }

  errorTemplate(errorMsg) {
    return `
      <div class='error-container' style="color: red; font-weight: bold;">
        <p>오류 발생!</p>
        <p>${errorMsg}</p>
      </div>
    `;
  }
}
export default Component;
