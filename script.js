document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll(".faq-item");
  const showAllBtn = document.getElementById("show-all-btn");

  // 初期表示の数
  const initialItemsToShow = 3;

  // 初期表示以外の質問を非表示にする
  for (let i = initialItemsToShow; i < faqItems.length; i++) {
    faqItems[i].classList.add("hidden");
  }

  // 全ての質問を表示するボタンのクリックイベント
  showAllBtn.addEventListener("click", function() {
    for (let i = initialItemsToShow; i < faqItems.length; i++) {
      faqItems[i].classList.toggle("hidden");
    }

    if (showAllBtn.innerText === "すべての質問を見る") {
      showAllBtn.innerText = "閉じる";
    } else {
      showAllBtn.innerText = "すべての質問を見る";
    }
  });

  // 各質問のトグルボタンのクリックイベント
  faqItems.forEach(function(item) {
    const toggleBtn = item.querySelector(".toggle-btn");

    toggleBtn.addEventListener("click", function() {
      item.querySelector(".answer").classList.toggle("active");
    });
  });
});




