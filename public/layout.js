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
        <center><div class="header-title">The Other Shore</div></center>
        
        <!-- NAVIGATION -->
        <nav>
          <ul>
            <li>
            <a href="/">[ Home ]</a>
            </li>

            <li>
              <strong>[ Site ]</strong>
                <ul>
                  <li><a href="/webrings">Webrings</a></li>

                  <li><a href="/manifesto">Site Manifesto</a></li>

                  <li><a href="/spirithunterwebring">Mark Bearer Webring</a></li>

                  <li><a href="/credits">Credits</a></li>
                </ul>
            </li>

            <li>
              <strong>[ Webmaster ]</strong>
              <ul>
              <li><a href="/about">About Us</a></li>

              <li><a href="/cats">Our Cats</a></li>

              <li><a href="/shop">Commissions</a></li>
            </ul>
            </li>

            <li>
              <strong>[ Craft Corner ]</strong> 
                <ul>
                  <li><a href="/art">Our Art</a></li>

                  <li><a href="/writing">Our Writing</a></li>

                  <li><a href="/katabasis">Katabasis</a></li>

                  <li><a href="/chaos">Chaos is the Game</a></li>

                  <li><a href="/rorrim">Rorrim Sacellum</a></li>

                  <li><a href="/curseofstrahd">Curse of Strahd: Winterhold</a></li>

                  <li><a href="/ao3-codes">Ao3 Style Codes</a></li>
                </ul> 
                </li>

           <li><a href="/shrines">[ Shrines ]</a></li>

           <li>
            <strong>[ OCs ]</strong>
            <ul>
              <li><a href="/spirithunterocs">Spirit Hunter</a></li>

              <li><a href="/rabbits"><center>Habit Trials Rabbits</center></a></li>
            </ul>
          </li>
          </ul>
        </nav>
        
      </div>
    </header>
    
    


  
      
    <!-- =============================================== -->
    <!-- LEFT SIDEBAR -->
    <!-- =============================================== -->

    <aside class="left-sidebar">
    
    <!-- Site Button Link -->
    <div id="link-me" class="sidebar-section" style="padding:5%;border:dotted;border-radius:2em;text-align:center;align-items:center;justify-content:center;">
    <h4><u>Link Back</u> <img src="https://files.catbox.moe/gkjzko.png" alt="miniature stylized curse mark" style="width:15%;"></h4>
    <p style="font-size:10px;">Hotlinking is ok!</p>
    <div id="site-button-code">
    <img src="https://divineintrusion.neocities.org/site%20images/button.png" alt="Divine Intrusion Website Button">
    <textarea style="padding:1em;border: solid; font-size:12px; color:white; background: black; height:50px; width:120px;">
    &lt;a href="https://divineintrusion.neocities.org"&gt;&lt;img src="https://divineintrusion.neocities.org/site%20images/button.png"&gt;</textarea></div>
     </div>
     
     <!-- Changelog Beta -->
     <div id="local-time" class="sidebar-section" style="height:200px;padding:5%;border:dotted;border-radius:2em;text-align:center;align-items:center;justify-content:center;">
     <h4><u>Changelog</u> <img src="https://files.catbox.moe/gkjzko.png" alt="miniature stylized curse mark" style="width:15%;"></h4> 
     <div class="scrollbar" style="margin:1%;height:70%;overflow-y:scroll;">
    <p><strong><u>2/13/26</u></strong> <br /> The "I tried to fix the aside bars and made it WORSE" update :D. I also did a lot of restructuring on the nav and a few new pages. Im a mess and Im trying XD</p>
    
     <p><strong>12/24/25</strong>: So I still don't quite know how to change how the actual changelog displays, but everything should update through git/github now!</p>
    <p><strong>12/7/25</strong>: Updated the official "to-do" list on the index, as well as cleaned up the index to be consistent across devices. Also updated the disclaimers on any pages with potentially NSFW content to make it harder to access by those who may not be of age. It's not a perfect system, but provides at minimum 2-3 barriers of entry to said content.</p>
    <p><strong>12/3/25</strong>: Finished adding the actual count to the <a href="/timewarp">system</a> pages, it's going to be a long term project to actually design the buttons for everyone, unless I can think of a nicer way to do that. Right now I'm valuing the aesthetics of it.
    <p><strong>12/2/25</strong>: Finally got around to fixing the sidebar issues (hopefully) and added a few new things!</p>
    <p><strong>11/23/25</strong>: Adjusted the rabbits burrow, added a death mark manga archive</p>
    <p><strong>11/16/25</strong>: Revamped the Journal page, finally made it look pretty. Hell of a day to do it too ngl...</p>
    <p><strong>11/15/25</strong>: Added the Habit Trial Rabbits, Chaos, and Rorrim. Art page updated</p>
    <p><strong>11/11/2025</strong>: Art page added</p>
    <p><strong>11/9/2025</strong>: Credits Page Added, Need to adjust it tho XD</p>
    <p><strong>11/8/2025</strong>: Spirit Hunter Webring created, 404 page updated</p>
    <p><strong>11/7/2025</strong>: Cats added, about updated</p>
    <p><strong>11/3/2025</strong>: Layout, JavaScript, About, Katabasis Widget, webrings, cliques added, index updated </p>
    <p><strong>9/15/2025</strong>: Journal Page Added</p>
    <p><strong>5/2/2019</strong>: Site Created (And then sits in limbo for a number of years)</p>
    </div>
     </div>

    
    <!-- Status Cafe and IMood -->
    <div id="status" class="sidebar-section" style="height:fit-content; padding:3%; border:dotted;border-radius:2em; text-align:center; margin:0; display:block;">

    <h4><u>Status</u> <img src="https://files.catbox.moe/gkjzko.png" alt="miniature stylized curse mark" style="width:15%;"></h4>

    <iframe style="height:100px;" src="https://petrapixel.neocities.org/widgets/statuscafe?username=lycoris&hideUsernameAndTime=1&center=1&overflow=hidden&height=20px&width=140px&font-family=Garamond&font-size=14px&color=#e4ffe7&padding=3%" frameborder="0"></iframe>
    <hr />

    <p> I'm feeling: <a href="https://www.imood.com/users/x_lycoris_x"><img src="https://moods.imood.com/display/uname-x_lycoris_x/fg-e4ffe7/trans-1/imood.gif" alt="The current mood of x_lycoris_x at www.imood.com" border="0"></a></p>
    </div>
    
    <!-- Hanayome Manga Link -->
    <div id="hanayome-chibi" class="sidebar-section" style="padding:5%;border-radius:2em;text-align:center;align-items:center;justify-content:center;">
    <div class="images"><a href="/dm-manga.html" title="Read the Death Mark Manga!"><img style="width:100%" src="https://files.catbox.moe/shrnwd.png"></a></div>
    </div>


    <!-- My Time Widget -->
    <div id="local-time" class="sidebar-section" style="padding:5%;border:dotted;border-radius:2em;text-align:center;align-items:center;justify-content:center;">
    <h4><u>My Local Time</u> <img src="https://files.catbox.moe/gkjzko.png" alt="miniature stylized curse mark" style="width:15%;"></h4>
    <iframe src="https://free.timeanddate.com/clock/ia5ab0uz/n3547/fn9/fs16/fce4ffe7/tct/pct/ftb/pd2/tt0/tw0/tm1/th2/ts1/tb4" frameborder="0" width="100" height="39" allowtransparency="true"></iframe>
    </div>
    
    <!-- Nav Widgets -->
    <div id="other-site-nav" class="sidebar-section" style="padding:5%;border:dotted;border-radius:2em;text-align:center;align-items:center;justify-content:center;">
    <iframe width="130" height="130" style="border:none" src="https://dimden.neocities.org/navlink/" name="neolink"></iframe>
    <p><small>These are "ads" to other indie web sites. You should check them out</small></p>
    <iframe width="88" height="31" style="border:none" src="https://melonsoda.nekoweb.org/button.html" name="buttonlink"></iframe>
    </div>
    
    <!-- tamanotchi -->
      <div id="tamanotchi" class="sidebar-section" style="height:auto;padding:1%;border-radius:2em;text-align:center;align-items:center;justify-content:center;">
     <a href="https://tamanotchi.world/27705c" target="_blank"><img src="https://tamanotchi.world/i2/27705" alt="It's tamaNOTchi! Click to feed!"></a>
     <a href="https://tamanotchi.world/28080c" target="_blank"><img src="https://tamanotchi.world/i2/28080" alt="It's tamaNOTchi! Click to feed!"></a>
     <a target="_blank" href="https://tamanotchi.world/28249c"><img src="https://tamanotchi.world/i2/28249" alt="It's tamaNOTchi! Click to feed!"></a>
     </div>

     <div class="sidebar-section">
     <iframe width="100%" height="160px" style="border:solid; border-radius:1em;
     margin:0 auto; 
     text-align:center;" 
     
     src="https://dimden.dev/moon?custom=1" name="dimdenmoonwidget"></iframe>
     </div>
    
    </aside>

  
    <!-- =============================================== -->
    <!-- RIGHT SIDEBAR -->
    <!-- =============================================== -->

    <aside class="right-sidebar">
    
     <!-- Guestbook Links -->
    <div id="guestbook-links" class="sidebar-section" style="height:auto;padding:5%;border-radius:2em;text-align:center;align-items:center;justify-content:center;">
    <h4><u>Guestbook and Claps</u> <img src="https://files.catbox.moe/gkjzko.png" alt="miniature stylized curse mark" style="width:15%;"></h4>
    <p><a href="https://www.ultraguest.com/view/1757822848">View/Sign Guestbook?</a></p>
    <hr />
    <p><a href="https://neocities.org/site/divineintrusion"><img src="https://88by31.neocities.org/web/hosted.gif"</a></p>
    <hr />
    <div class="images" style="text-align:center;align-items:center;justify-content:center;width:40%;margin:auto;"><a href="//clap.fc2.com/post/divineintrusion/?url=https%3A%2F%2Fdivineintrusion.neocities.org%2F" target="_blank" title="Web Clap by FC2"><img src="https://files.catbox.moe/gkjzko.png" alt="Web Clap by FC2" style="border:none;" /></a></div>
    <h6>⇗Click to clap for me!⇖</h6>
    </div>
 
      <!-- Online Counter -->
    <div id="online-status" class="sidebar-section" style="padding:5%;border:dotted;border-radius:2em;text-align:center;align-items:center;justify-content:center;">
    <h4><u>Currently Online</u> <img src="https://files.catbox.moe/gkjzko.png" alt="miniature stylized curse mark" style="width:15%;></h4>

    <p><a href="http://www.snazzyspace.com/generators/viewer-counter/" title="SnazzySpace.com Viewer Counter" target="_blank"><img src="http://www.snazzyspace.com/generators/viewer-counter/counter.php/fid=1762540146/style=0/counter.png" border="0"></a></p>
    </div>
      
      <!-- Recent Media -->
     <div id="recently" class="sidebar-section" style="height:auto;padding:5%;border:dotted;border-radius:2em;text-align:center;align-items:center;justify-content:center;">
     <h4><u>My Recent</u> <img src="https://files.catbox.moe/gkjzko.png" alt="miniature stylized curse mark" style="width:15%;"></h4>
     <h5>Podcast</h5>
     <p><img style="width:50%;" title="Malevolent" src="https://i.scdn.co/image/ab6765630000ba8a07a06522757bd8b41ab5a4f1"></p>
     <hr />
     <h5>Tv/Movie</h5>
     <p><img style="width:50%;" title="Oshi no Ko" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2023%2F06%2Foshi-no-ko-tv-poster.jpg&f=1&nofb=1&ipt=de88d293d9d09bc1ded5f3a937848347a4a1b83b0f9991be8b0fe39c06c7ea94"></p>
     <hr />
     <h5>Game</h5>
     <p><a target="_blank" href="https://backloggd.com/u/x_Lycoris_x/"><img style="width:50%;" title="Depth Spelunking (Roblox)" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK1eIaz9QkMp0mGgd3DO6UmbbEcL7yqpOg5A&s"></a></p>
     <hr />
     <h5>Book</h5>
     <p><a target="_blank" href="https://www.goodreads.com/user/show/195659899"><img style="width:50%;" title="The Haunting of Hill House by Shirley Jackson" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81FMksyikrL.jpg&f=1&nofb=1&ipt=2809fef3f2ba47a13c1ebf62c19da9a16a63776020015acf6e6427b46c6b7535"></a></p>
     <hr />
     <h5>Song</h5>
     <iframe style="height: 50px;" src="https://petrapixel.neocities.org/widgets/lastfm?&padding=1%&center=1&height=10px&width=140px&font-family=Garamond&font-size=14px&color=#f4ffe7&username=xLycorisx&swapPositions=0&delimiter=✨&underline=0" frameborder="0" title="Last.Fm Status"></iframe>
      </div>
      
      <!-- Chatbox -->
      <div id="chatbox" class="sidebar-section" style="height:auto;border-radius:2em;text-align:center;align-items:center;justify-content:center;">
      <iframe src="https://www3.cbox.ws/box/?boxid=3550618&boxtag=XRVhOg" width="100%" height="450" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe>
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
         <p style="text-align:center;">© divineintrusion 2024 - ∞ | <a href="https://neocities.org/site/divineintrusion">My Neocities Profile</a> | <a href="/sitemap">sitemap</a> | <a href="https://github.com/x-Lycoris-x/divineintrusion.neocities.org">GitHub</a> | <a href="https://ko-fi.com/xx_lycoris_xx">Tip Jar</a> | Initial Template by <a href="https://petrapixel.neocities.org/coding/layout-generator">Petrapixels Layout Generator</a>
        
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
//WHAT THE FUCK IS GOING ON HERE


