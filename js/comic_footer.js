//the footer of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeFooter"
document.querySelector(".writeFooter").innerHTML = `
    <footer align="center">
        <p>Grog Comic by Orangecreem</p>
        <p>2024-2025</p>
    </footer>
`;
