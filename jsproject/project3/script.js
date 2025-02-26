const clocks = document.querySelector('#clock')

setInterval(() => {
    let date = new Date()
    clocks.innerHTML = date.toLocaleTimeString();
}, 1000);