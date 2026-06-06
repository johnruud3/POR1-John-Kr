document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const navLinks = document.querySelector(".nav-links");

  if (burger && navLinks) {
    burger.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  const copyLinkBtn = document.querySelector("[data-copy-link]");
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener("click", async function () {
      const url = window.location.href;

      try {
        await navigator.clipboard.writeText(url);
        copyLinkBtn.textContent = "Link copied!";
        copyLinkBtn.classList.add("copied");

        setTimeout(function () {
          copyLinkBtn.textContent = "Copy link";
          copyLinkBtn.classList.remove("copied");
        }, 2000);
      } catch {
        copyLinkBtn.textContent = "Copy failed";
        setTimeout(function () {
          copyLinkBtn.textContent = "Copy link";
        }, 2000);
      }
    });
  }
});