// 영화 차트 메뉴
const movBtn = document.querySelectorAll(".movie_title ul li");
const movCont = document.querySelectorAll(".movie_chart > div");
console.log(movCont);

// 모든 뮤비차트를 숨기고, 첫번째만 보이기 (기본화면)
movCont.forEach((cont) => {
  cont.style.display = "none";
});
movCont[0].style.display = "block";

// 이벤트 시작
movBtn.forEach((menu, index) => {
  menu.addEventListener("click", (e) => {
    e.preventDefault();

    movBtn.forEach((item) => {
      item.classList.remove("active");
    }); // 모든 버튼에서 active제거
    menu.classList.add("active"); // 클릭한 버튼만 active 추가

    movCont.forEach((cont) => {
      cont.style.display = "none";
    }); // 모든 차트 숨기기
    movCont[index].style.display = "block"; // 클릭한 버튼과 같은 index번호의 컨텐츠 보이기
  });
});

// 공지사항
// 공지사항 탭메뉴
const tabList = document.querySelectorAll(".notice > ul > li > a ");
const tabContents = document.querySelectorAll(".notice > ul > li > ul");

// 전부 숨기고, active만 보이기
tabContents.forEach((ul) => {
  ul.style.display = "none";
});
document.querySelector(".notice > ul > li.active > ul").style.display = "block";

tabList.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();

    //모든 메뉴 active를 제거하고 전체 컨텐츠 숨기기
    tabList.forEach((item) => {
      item.parentElement.classList.remove("active");
      item.nextElementSibling.style.display = "none";
    });
    // 클릭한 것만 active + 해당하는 컨텐츠가 보이기
    a.parentElement.classList.add("active");
    a.nextElementSibling.style.display = "block";
  });
});
