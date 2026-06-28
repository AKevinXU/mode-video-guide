// ===== 密码验证 =====
const CORRECT_PASSWORD = 'mode2026'; // 可修改为你自己的密码
const SESSION_KEY = 'mode_guide_auth';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24小时

function checkAuth() {
  const session = localStorage.getItem(SESSION_KEY);
  if (session) {
    const data = JSON.parse(session);
    if (Date.now() - data.timestamp < SESSION_DURATION) {
      return true;
    }
    localStorage.removeItem(SESSION_KEY);
  }
  return false;
}

function login() {
  const input = document.getElementById('password');
  const error = document.getElementById('error');
  const btn = document.getElementById('loginBtn');

  if (!input || !error) return;

  const pwd = input.value.trim();

  if (pwd === CORRECT_PASSWORD) {
    localStorage.setItem(SESSION_KEY, JSON.stringify({
      timestamp: Date.now(),
      password: pwd
    }));
    error.style.display = 'none';
    btn.textContent = '验证通过，进入中...';
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 500);
  } else {
    error.textContent = '密码错误，请重试';
    error.style.display = 'block';
    input.value = '';
    input.focus();
  }
}

function logout() {
  localStorage.removeItem(SESSION_KEY);
  window.location.href = 'index.html';
}

function initLogin() {
  const input = document.getElementById('password');
  if (input) {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') login();
    });
    input.focus();
  }

  // 如果已登录，自动跳转
  if (checkAuth() && window.location.pathname.includes('index.html')) {
    window.location.href = 'dashboard.html';
  }
}

// ===== 页面保护 =====
function protectPage() {
  if (!checkAuth() && !window.location.pathname.includes('index.html')) {
    window.location.href = 'index.html';
  }
}

// ===== 阅读进度 =====
function initProgress() {
  const fill = document.querySelector('.progress-fill');
  if (!fill) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    fill.style.width = progress + '%';
  });
}

// ===== 侧边栏高亮 =====
function initSidebar() {
  const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
  const links = document.querySelectorAll('.sidebar-menu a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentPage)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ===== 下载功能 =====
function downloadMarkdown(filename) {
  const link = document.createElement('a');
  link.href = 'docs/' + filename;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ===== 打印/PDF =====
function printPage() {
  window.print();
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
  protectPage();
  initLogin();
  initProgress();
  initSidebar();
});
