import "./index.less"

import $ from "jquery"

const begin = Date.now()
setInterval(() => {
    $("body").html("Hello, world!".substr(0, (Date.now() - begin) / 200))
}, 200)
