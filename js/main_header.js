//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"
document.querySelector(".writeHeader").innerHTML = `
    <header align="center">
        <a href="index.html"><img src="./img/orangecreem.gif" height="100" alt="Orangecreem" /></a> 

        <div id="nav">
            <a href="index.html"><div><img src="../img/home.png" alt="home"></a><span>Home</span></div>
            <a href="games.html"><div><img src="../img/games.png" alt="games"></a><span>Games</span></div> 
            <a href="GrogComic.html"><div><img src="../img/read.png" alt="grog comic"></a><span>Grog Comic</span></div>
            <a href="https://www.youtube.com/@BorangeBeams" target="_blank"><div><img src="../img/chuck.jpg" title="YouTube" alt="borange beams"></a><span>Borange Beams</span></div>
        </div>
    </header>
`;