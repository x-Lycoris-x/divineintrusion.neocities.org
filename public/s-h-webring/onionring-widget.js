// onionring.js is made up of four files - onionring-widget.js (this one!), onionring-index.js, onionring-variables.js and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium house, last updated 2020-11-24

// === ONIONRING-WIDGET ===
//this file contains the code which builds the widget shown on each page in the ring. ctrl+f 'EDIT THIS' if you're looking to change the actual html of the widget

var tag = document.getElementById(ringID); //find the widget on the page

thisSite = window.location.href; //get the url of the site we're currently on
thisIndex = null;

// go through the site list to see if this site is on it and find its position
for (i = 0; i < sites.length; i++) {
    if (thisSite.startsWith(sites[i])) { //we use startswith so this will match any subdirectory, users can put the widget on multiple pages
        thisIndex = i;
        break; //when we've found the site, we don't need to search any more, so stop the loop
    }
}

function randomSite() {
    otherSites = sites.slice(); //create a copy of the sites list
    otherSites.splice(thisIndex, 1); //remove the current site so we don't just land on it again
    randomIndex = Math.floor(Math.random() * otherSites.length);
    location.href = otherSites[randomIndex];
}

//if we didn't find the site in the list, the widget displays a warning instead
if (thisIndex == null) {
    tag.insertAdjacentHTML('afterbegin', `

<div style="padding: 5px; border: dotted">
<center><p>It seems you are not a <mark>${ringName}...</mark></p>
<p>Worry not...so long as you <a href="https://divineintrusion.neocities.org/spirithunterwebring"> wander into danger</a>, the curse is sure to find you. </p></center>

</div>
  `);
}
else {
    //find the 'next' and 'previous' sites in the ring. this code looks complex
    //because it's using a shorthand version of an if-else statement to make sure
    //the first and last sites in the ring join together correctly
    previousIndex = (thisIndex - 1 < 0) ? sites.length - 1 : thisIndex - 1;
    nextIndex = (thisIndex + 1 >= sites.length) ? 0 : thisIndex + 1;

    indexText = ""
    //if you've chosen to include an index, this builds the link to that
    if (useIndex) {
        indexText = `<a href='${indexPage}'>index</a> | `;
    }

    randomText = ""
    //if you've chosen to include a random button, this builds the link that does that
    if (useRandom) {
        randomText = `<a href='javascript:void(0)' onclick='randomSite()'>random</a> | `;
    }

    //this is the code that displays the widget - EDIT THIS if you want to change the structure
    tag.insertAdjacentHTML('afterbegin', `
  <table style="border:solid;border-radius:2em;">
    <tr>
      <td class='webring-prev'><a href='${sites[previousIndex]}'>â† previous</a></td>
      <td class='webring-info'>This site has heard a rumor... and been <mark>marked</mark> for the trouble. <br />
      This <mark>${ringName}</mark> will have until the stroke of midnight to break their curse.</br>
      <img style="width:100px;" src="https://files.catbox.moe/shrnwd.png"><br />
      <span class='webring-links'>
        ${randomText}
        ${indexText}
        <a href='https://garlic.garden/onionring/'>what is this?</a></span></td>
      <td class='webring-next'><a href='${sites[nextIndex]}'>next â†’</a></td>
    </tr>
  </table>
  `);

}
