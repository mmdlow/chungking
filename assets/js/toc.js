document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".prose");
  scrollnav.init(content, {
    debug: false,
    sections: "h1",
    subSections: "h2, h3, h4",
    insertTarget: document.querySelector(".contents")
  });
});
