function right(key) {
    fetch(`https://arafat1243.github.io/copyright/index.json`)
        .then((res) => {
            return res.json();
        })
        .then(function(obj) {
            let el = document.querySelector("footer a.copyright");
            let name = "",
                url = "";
            if (key in obj) {
                (name = obj[key].name), (url = obj[key].url);
            } else {
                (name = obj.default.name), (url = obj.default.url);
            }
            if (!el) {
                el = document.createElement("a");
                el.classList.add('copyright')
                document.body.appendChild(el);
            }
            el.setAttribute("href", url), (el.innerHTML = name);
        })
        .catch(function(error) {
            console.error(error);
        });
}

module.exports.right = right;