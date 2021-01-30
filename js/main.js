let tag = document.querySelector('.side-bar__item--hover');
let tagImg = document.querySelector('.side-bar__item--hover img');
let sideBarItems = document.querySelectorAll('.side-bar__item');
let sideBarList = document.querySelector('.side-bar__list');

let sideBarQrCodeHover = document.querySelector('.side-bar__qr-code--hover');
let tagContent = ['收藏职位', '投递记录', '职位订阅', '面试邀约'];

sideBarList.onmouseover = function (e) {
  for (let i = 0; i < sideBarItems.length; i++) {
    if (e.target === sideBarItems[i]) {
      tag.innerHTML = tagContent[i];
      tag.style.top = sideBarItems[i].offsetTop + 'px';
      tag.style.display = 'block';
      if (i === 4) {
        sideBarQrCodeHover.style.display = 'block';
        tag.style.display = 'none';
      }
    } else if (e.target === sideBarList) {
      tag.style.display = 'none';
      sideBarQrCodeHover.style.display = 'none';
    }
  }
};

/* --- */
let toTop = document.querySelector('.to-top');
document.documentElement.scrollTop;

window.onscroll = function () {
  topTopIsSHow();
  goTop();
};

function topTopIsSHow() {
  if (document.documentElement.scrollTop <= 50) {
    toTop.style.display = 'none';
  } else {
    toTop.style.display = 'block';
  }
}

function goTop() {
  let flag = 0;
  toTop.onclick = function () {
    let time = setInterval(function () {
      flag += 5;
      document.documentElement.scrollTop -= flag;
      if (document.documentElement.scrollTop <= 0) {
        clearInterval(time);
      }
    }, 15);
  };
}

let lagouLeft = document.querySelector('.lagou__left');
let lagouLeftHover = document.querySelector('.lagou__left--hover');
let lagouApplet = document.querySelector('.lagou__applet');
let lagouWechat = document.querySelector('.lagou__wechat a');
lagouLeft.onmouseover = function (e) {
  if (e.target === lagouApplet) {
    lagouLeftHover.style.display = 'block';
    lagouLeftHover.style.top = '58px';
    lagouLeftHover.style.left = '190px';
  }
  if (e.target === lagouWechat) {
    lagouLeftHover.style.display = 'block';
    lagouLeftHover.style.top = '150px';
    lagouLeftHover.style.left = '0';
  } else if (e.target === lagouLeft) {
    lagouLeftHover.style.display = 'none';
  }
};
