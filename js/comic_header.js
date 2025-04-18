//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"
document.querySelector(".writeHeader").innerHTML = `
    <header align="center">
        <a href="GrogComic.html"><img src="./img/logo.png" alt="" /></a> 

        <div id="nav">
            <a href="GrogComic.html"><div class="nav-item"><img src="../img/read.png" alt="read"></a><span>Read</span></div>
            <a href="archive.html"><div class="nav-item"><img src="../img/archive.png" alt="archive"></a><span>Archive</span></div> 
            <a href="about.html"><div class="nav-item"><img src="../img/about.png" alt="about"></a><span>About</span></div>
            <a href="index.html"><div class="nav-item"><img src="../img/home.png" alt="home"></a><span>Home</span></div>
        </div>
    </header>
`;