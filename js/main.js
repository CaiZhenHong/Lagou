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

/* ----------------轮播图--------------------------- */
let bannerContainer = document.querySelector('.banner__img');
let bannerImgs = document.getElementsByClassName('banner__img-item');
let imgArr = [
  '//www.lgstatic.com/i/image/M00/90/51/CgqCHmAKlaOAQVdTAAF-gfOC32s773.JPG',
  '//www.lgstatic.com/i/image/M00/93/1D/CgqCHmATwJqAexc8AAExdci65r8977.PNG',
  '//www.lgstatic.com/i/image/M00/90/51/CgqCHmAKlaOAQVdTAAF-gfOC32s773.JPG',
];

let preBtn = document.querySelector('.banner__pre');
let nextBtn = document.querySelector('.banner__next');
let banerPointer = document.getElementsByClassName('banner__pointer');

imgArr.unshift(imgArr.pop()); //置换数组顺序 队列

bannerImgs[0].setAttribute('src', imgArr[0]);
bannerImgs[1].setAttribute('src', imgArr[1]);
bannerImgs[2].setAttribute('src', imgArr[2]);
bannerImgs[3].setAttribute('src', imgArr[0]);
bannerImgs[4].setAttribute('src', imgArr[1]);

let marginLeft = -840;
bannerContainer.style.marginLeft = marginLeft + 'px';
setPointer(marginLeft);

preBtn.onclick = function () {
  pre();
};
nextBtn.onclick = function () {
  next();
};

function pre() {
  if (marginLeft == 0) {
    marginLeft = -840 * 3;
  }
  marginLeft += 840;
  bannerMove(marginLeft, 'pre');
  setPointer(marginLeft);
}

function next() {
  if (marginLeft == -840 * 4) {
    marginLeft = -840;
  }
  marginLeft -= 840;
  bannerMove(marginLeft, 'next');
  setPointer(marginLeft);
}

function bannerMove(marginLeft, i) {
  if (i === 'next') {
    let left = marginLeft + 840;
    let bannertime = setInterval(function () {
      left -= 40;
      bannerContainer.style.marginLeft = left + 'px';
      if (left == marginLeft) {
        clearInterval(bannertime);
      }
    }, 20);
  } else if (i === 'pre') {
    let left = marginLeft - 840;
    let bannertime = setInterval(function () {
      left += 40;
      bannerContainer.style.marginLeft = left + 'px';
      if (left == marginLeft) {
        clearInterval(bannertime);
      }
    }, 20);
  }
}

function setPointer(marginLeft) {
  for (let i = 0; i < banerPointer.length; i++) {
    banerPointer[i].style.backgroundColor = 'gba(255, 255, 255, 0.78)';
    banerPointer[i].style.paddingLeft = banerPointer[i].style.paddingRight = '0px';
  }
  if (marginLeft == -840 || marginLeft === -840 * 4) {
    banerPointer[0].style.backgroundColor = '#fff';
    pointerMove(0);
  } else if (marginLeft === -840 * 2) {
    banerPointer[1].style.backgroundColor = '#fff';
    pointerMove(1);
  } else {
    banerPointer[2].style.backgroundColor = '#fff';
    pointerMove(2);
  }
}

function pointerMove(index) {
  let i = 0;
  let time = setInterval(function () {
    i = i + 0.5;
    if (i >= 4) {
      clearInterval(time);
    } else {
      banerPointer[index].style.paddingLeft = i + 'px';
      banerPointer[index].style.paddingRight = i + 'px';
    }
  }, 30);
}
