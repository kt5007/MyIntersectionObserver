"use strict";
{
  const targets = document.querySelectorAll("img");
  function callback(entries, obs) {
    //交差したターゲットだけが入ってくる
    console.log(entries);

    // すべての配列 entry[0]以外も取得
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);
  targets.forEach(target => {
    observer.observe(target);
  });
}
