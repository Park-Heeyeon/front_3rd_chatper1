import Footer from "../components/Footer";
import Header from "../components/Header";
import Component from "../core/Component";

class BasicLayout extends Component {
  constructor(pageContent) {
    super();
    this.pageContent = pageContent;
    this.header = new Header();
    this.footer = new Footer();
  }
  template() {
    return `
        <div class='bg-gray-100 min-h-screen flex justify-center'>
          <div class='max-w-md w-full'>
            ${this.header.template()}
            ${this.pageContent.template()}
            ${this.footer.template()}
          </div>
        </div>
      `;
  }
  
  loadData() {
    // 헤더 데이터 불러오는 함수
    if(this.header?.loadData) this.header.loadData();
    
    // 메인 페이지 데이터 불러오느 ㄴ함수 
    if(this.pageContent?.loadData) this.pageContent.loadData();
    
  }
  
  bindEvents() {
    // 헤더 이벤트
    if (this.header?.bindEvents) this.header.bindEvents();
    
    // 메인 페이지 이벤트
    if (this.pageContent?.bindEvents) this.pageContent.bindEvents();
  }
  
}
export default BasicLayout;
