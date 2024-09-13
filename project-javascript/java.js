const url = "https://jsonplaceholder.typicode.com/photos";

fetch(url).then(res => {
    // console.log(res)
    // console.log(res.ok)

    if (res.ok) return res.json()
}).then(data => {

    let info = data.slice(0, 20)
    console.log(info)

    let row = document.querySelector('.row')

    for (let i = 0; i < info.length; i++) {
        console.log(info[i])

        let div = document.createElement('div')
        div.classList.add('col-3')

        div.innerHTML = `
        <div class="card" style="width: 18rem;">
                    <img src="${info[i].thumbnailUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title">${info[i].title}</h4>
                    </div>
                </div>
        `

        row.append(div)
    }
})