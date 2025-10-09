(() => {
  // <stdin>
  var generates = document.getElementsByClassName("generate-content").item(0);
  if (generates != null) {
    const children = generates.childNodes;
    let hasTitle = false;
    const content = document.createElement("div");
    content.className = "catalogue-container";
    for (i = 0; i < children.length; i++) {
      const ele = children[i];
      if (ele.nodeName === "H1") {
        hasTitle = true;
        const a = document.createElement("button");
        a.textContent = ele.textContent;
        a.className = "catalogue catalogue-h1";
        const title = ele.textContent;
        a.onclick = function() {
          history.pushState(null, "", "#" + title);
          ele.scrollIntoView({ behavior: "smooth" });
        };
        content.appendChild(a);
      }
      if (ele.nodeName === "H2") {
        hasTitle = true;
        const a = document.createElement("button");
        a.textContent = ele.textContent;
        a.className = "catalogue catalogue-h2";
        const title = ele.textContent;
        a.onclick = function() {
          history.pushState(null, "", "#" + title);
          ele.scrollIntoView({ behavior: "smooth" });
        };
        content.appendChild(a);
      }
      if (ele.nodeName === "H3") {
        hasTitle = true;
        const a = document.createElement("button");
        a.textContent = ele.textContent;
        a.className = "catalogue catalogue-h3";
        const title = ele.textContent;
        a.onclick = function() {
          history.pushState(null, "", "#" + title);
          ele.scrollIntoView({ behavior: "smooth" });
        };
        content.appendChild(a);
      }
      if (ele.nodeName === "H4") {
        hasTitle = true;
        const a = document.createElement("button");
        a.textContent = ele.textContent;
        a.className = "catalogue catalogue-h4";
        const title = ele.textContent;
        a.onclick = function() {
          history.pushState(null, "", "#" + title);
          ele.scrollIntoView({ behavior: "smooth" });
        };
        content.appendChild(a);
      }
      if (ele.nodeName === "H5") {
        hasTitle = true;
        const a = document.createElement("button");
        a.textContent = ele.textContent;
        a.className = "catalogue catalogue-h5";
        const title = ele.textContent;
        a.onclick = function() {
          history.pushState(null, "", "#" + title);
          ele.scrollIntoView({ behavior: "smooth" });
        };
        content.appendChild(a);
      }
      if (ele.nodeName === "H6") {
        hasTitle = true;
        const a = document.createElement("button");
        a.textContent = ele.textContent;
        a.className = "catalogue catalogue-h6";
        const title = ele.textContent;
        a.onclick = function() {
          history.pushState(null, "", "#" + title);
          ele.scrollIntoView({ behavior: "smooth" });
        };
        content.appendChild(a);
      }
    }
    if (hasTitle) {
      const aside = document.getElementsByClassName("aside").item(0);
      aside.appendChild(content);
    }
  }
  var i;
})();
