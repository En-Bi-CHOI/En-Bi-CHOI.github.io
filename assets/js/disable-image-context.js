/* 이미지에서만 우클릭 메뉴 차단 + 드래그 방지 */
document.addEventListener('contextmenu', function (e) {
  const el = e.target;
  if (el && el.tagName === 'IMG') {
    e.preventDefault();
  }
});

document.addEventListener('dragstart', function (e) {
  const el = e.target;
  if (el && el.tagName === 'IMG') {
    e.preventDefault();
  }
});
