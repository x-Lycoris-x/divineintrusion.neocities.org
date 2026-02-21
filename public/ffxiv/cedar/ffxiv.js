document.addEventListener("DOMContentLoaded", function () {
    // Page has finished loading. Now, do things.
    loadLayoutByPetraPixel();

    // Add any custom JavaScript code here...
});

function loadLayoutByPetraPixel() {
    const mainEl = document.querySelector("main");
    if (!mainEl) return;
    mainEl.insertAdjacentHTML("beforebegin", headerHTML());
    mainEl.insertAdjacentHTML("afterend", footerHTML());
    giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {
    // ${nesting} outputs "./" or "../" depending on current page depth.
    // You can use it to refer to images etc.
    // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

    return `
    
        <!-- =============================================== -->
        <!-- HEADER -->
        <!-- =============================================== -->
  
        <header>
  
          <div class="header-content">
              <div class="header-title">[ The Final Witness ] | Cedar Rowk</div>
              
              <!-- NAVIGATION -->
              <nav>
                <ul>
                  <li><a href="/ffxiv/ffxiv">Home</a></li>

                  <li><a href="/about">About</a></li>

                  <li><a href="/gallery">Gallery</a></li>

                  <li><a href="/hooks">RP Hooks</a></li>

                  <li><a href="/ooc">OOC</a></li>
                </ul>
              </nav>
              
          </div>
        </header>
  
        
          
        <!-- =============================================== -->
        <!-- LEFT SIDEBAR -->
        <!-- =============================================== -->
  
        <aside class="left-sidebar">
        
          
          <div class="sidebar-section">
            <div class="sidebar-title">Current MSQ</div>
            <p><a href="https://xiv-journey.gitpaulo.moe?progress=H4sIAAAAAAAACnWOO24CUQxFuf7MR_NhpAlKEEhB1FTZQyQ61jCCaSMlSCRpU7IEymnZSApgBSwG-02aFLjws-87vvZPt36_4uUywGD6BLDGCoIQPOrRrMR4MXmWIoHJoPgBobBgf5klUnDkPXHQUXkqemruTvQ3gWhoSYyIRo9B0KLOfExYUENFkcP3I3GMUgRechd8O1IkbHakdhxpcI4LIOfM_jPrwg3ikA9UhNlpX1p5Oph9f8bKIQ3gF-7EOfm99_UPo2-8duv2uGybXfu2_Ww-NjelfmTXUgEAAA">In Search of Iceheart</a></p>
          </div>
          
          <div class="sidebar-section">
            <div class="sidebar-title">Lodestone Link</div>
            <blockquote>
              <p><a href="https://na.finalfantasyxiv.com/lodestone/character/52420121/">Lodestone</a></p>
            </blockquote>
          </div>
          
          <div class="sidebar-section">
            <div class="sidebar-title">Classes</div>
            <ul>
              <li><b>Tank:</b><br /> <img src="https://forward.artemisia.quest/images/Icons/set4/Dark_Knight_Icon_1.png"> 58</li>
              
              <li><b>DPS:</b><br /> Currently N/A</li>

              <li><b>Healer:</b><br /> <img src="https://forward.artemisia.quest/images/Icons/set4/Astrologian_Icon_1.png"> 30</li>

              <li><b>Gatherers:</b> <br /><img src="https://forward.artemisia.quest/images/Icons/set4/Botanist_Icon_1.png"> 39 <br/><img src="https://forward.artemisia.quest/images/Icons/set4/Fisher_Icon_1.png"> 39</li>

              <li><b>Crafters:</b><br /> <img src="https://forward.artemisia.quest/images/Icons/set4/Culinarian_Icon_1.png"> 35</li>
            </ul>
          </div>
        </aside>
      
        `;
}

function footerHTML() {
    // ${nesting} outputs "./" or "../" depending on current page depth.
    // You can use it to refer to images etc.
    // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

    return `
  
  
        <!-- =============================================== -->
        <!-- FOOTER -->
        <!-- =============================================== -->
  
        <footer>
              <div>Footer Text. <a href="/">Link.</a> Template generated with <a href="https://petrapixel.neocities.org/coding/layout-generator.html">petrapixel's layout generator</a>.</div>
        </footer>`;
}

/* Do not edit anything below this line unless you know what you're doing. */

function giveActiveClassToCurrentPage() {
    const els = document.querySelectorAll("nav a");
    [...els].forEach((el) => {
        const href = el.getAttribute("href").replace(".html", "").replace("#", "");
        const pathname = window.location.pathname.replace("/public/", "");
        const currentHref = window.location.href.replace(".html", "") + "END";

        /* Homepage */
        if (href == "/" || href == "/index.html") {
            if (pathname == "/") {
                el.classList.add("active");
            }
        } else {
            /* Other pages */
            if (currentHref.includes(href + "END")) {
                el.classList.add("active");

                /* Subnavigation: */

                if (el.closest("details")) {
                    el.closest("details").setAttribute("open", "open");
                    el.closest("details").classList.add("active");
                }

                if (el.closest("ul")) {
                    if (el.closest("ul").closest("ul")) {
                        el.closest("ul").closest("ul").classList.add("active");
                    }
                }
            }
        }
    });
}

function getNesting() {
    const numberOfSlashes = window.location.pathname.split("/").length - 1;
    if (numberOfSlashes == 1) return "./";
    return "../".repeat(numberOfSlashes - 1);
}
  