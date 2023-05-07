var items = [
    {
        id: 1,
        title: "iphone",
        isSale: false,
        imgUrl: "https://img.5element.by/import/images/ut/goods/good_102e8242-c7ec-11ed-bb90-005056012464/komplekt-iphone-14-pro-max-256gb-deep-purple--plus-skretch-stiker-podpiska-ivi-3-mes-1_600.jpg",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        id: 1,
        title: "iphone",
        isSale: true,
        imgUrl: "https://img.5element.by/import/images/ut/goods/good_102e8242-c7ec-11ed-bb90-005056012464/komplekt-iphone-14-pro-max-256gb-deep-purple--plus-skretch-stiker-podpiska-ivi-3-mes-1_600.jpg",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        id: 1,
        title: "iphone",
        isSale: false,
        imgUrl: "https://img.5element.by/import/images/ut/goods/good_102e8242-c7ec-11ed-bb90-005056012464/komplekt-iphone-14-pro-max-256gb-deep-purple--plus-skretch-stiker-podpiska-ivi-3-mes-1_600.jpg",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        id: 1,
        title: "iphone",
        isSale: true,
        imgUrl: "https://img.5element.by/import/images/ut/goods/good_102e8242-c7ec-11ed-bb90-005056012464/komplekt-iphone-14-pro-max-256gb-deep-purple--plus-skretch-stiker-podpiska-ivi-3-mes-1_600.jpg",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        id: 1,
        title: "iphone",
        isSale: true,
        imgUrl: "https://img.5element.by/import/images/ut/goods/good_102e8242-c7ec-11ed-bb90-005056012464/komplekt-iphone-14-pro-max-256gb-deep-purple--plus-skretch-stiker-podpiska-ivi-3-mes-1_600.jpg",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        id: 1,
        title: "iphone",
        isSale: false,
        imgUrl: "https://img.5element.by/import/images/ut/goods/good_102e8242-c7ec-11ed-bb90-005056012464/komplekt-iphone-14-pro-max-256gb-deep-purple--plus-skretch-stiker-podpiska-ivi-3-mes-1_600.jpg",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {

        id: 2,
        title: "samsung",
        isSale: true,
        imgUrl: "https://img.5element.by/import/images/ut/goods/good_9ce74b98-a3b6-11ed-bb92-005056012465/sm-s918bzkgcau-chernyy-256gb-telefon-gsm-samsung-galaxy-s23ultra-1_600.jpg",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {

        id: 3,
        title: "honor",
        isSale: true,
        imgUrl: "https://img.5element.by/import/images/ut/goods/good_acb71b62-a6fb-11ed-bb92-005056012465/x8a-crt-lx1-6gb-128gb-cyan-lake-telefon-gsm-honor-1_600.jpg",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {

        id: 4,
        title: "huawei",
        isSale: true,
        imgUrl: "https://cdn21vek.by/img/galleries/7629/255/preview_b/y704gb128gbmgalx9n_huawei_62d7be679c7d5.jpeg",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        id: 5,
        title: "sony",
        isSale: true,
        imgUrl: "https://img.5element.by/import/images/ut/goods/good_e6a1bdfb-4885-11ed-bb95-0050560120e8/nok-719901183971-blue-smartfon-g21-ds-ta-1418-4-64gb-nokia-1_600.jpg",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
];


var app = document.getElementById('app');

var result = '';

for (var i = 0; i < items.length; i++) {
    result += `
    <div class="card" style="width: 18rem;">
        ${items[i].isSale ? '<div class="sale"></div>': ''}
        <div class="divForImg">
            <img src="${items[i].imgUrl}" class="card-img-top" alt="${items[i].imgUrl}">
        </div> 
        <div class="card-body">
            <h5 class="card-title">${items[i].title}</h5>
            <p class="card-text">${items[i].body}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `
}


app.innerHTML = result;



