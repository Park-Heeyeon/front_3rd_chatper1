import { getUser, updateUser } from "../utils/auth";

class ProfilePage {
  template() {
    return `
      <main class="p-4">
      <div class="bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">내 프로필</h2>
        <form id="profile-form">
          <div class="mb-4">
            <label for="username" class="block text-gray-700 text-sm font-bold mb-2">사용자 이름</label>
            <input type="text" id="username" name="username" value="${this.username}" class="w-full p-2 border rounded">
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">이메일</label>
            <input type="email" id="email" name="email" value="${this.email}" class="w-full p-2 border rounded">
          </div>
          <div class="mb-6">
            <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">자기소개</label>
            <textarea id="bio" name="bio" rows="4" class="w-full p-2 border rounded">${this.bio}</textarea>
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">프로필 업데이트</button>
        </form>
      </div>
    </main>
    `
  }

  loadData() {
    const {username = "", email = "", bio = ""} = getUser();
    this.username = username;
    this.email = email;
    this.bio = bio;
  }

  bindEvents(){
    const profileForm = document.querySelector('#profile-form');
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = profileForm.querySelector('#username').value;
      const email = profileForm.querySelector('#email').value;
      const bio = profileForm.querySelector('#bio').value;
      updateUser({username, email, bio});
    })
  }
}
export default ProfilePage;