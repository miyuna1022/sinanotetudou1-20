const stations = {
    shinonoi: {
        name: "篠ノ井駅",
        info: "豊かな自然と歴史スポットが共存しています🍎",
        img: "images/shinonoi.jpg"
    },
    ueda: {
        name: "上田駅",
        info: "上田城や歴史スポットが豊富です🏯",
        img: "images/ueda.jpg"
    },
    komoro: {
        name: "小諸駅",
        info: "小諸城や温泉などが楽しめます♨️",
        img: "images/komoro.jpg"
    },
    karuizawa: {
        name: "軽井沢駅",
        info: "軽井沢の観光スポットやグルメ情報があります🌸",
        img: "images/karuizawa.jpg"
    }
};

function showStation(stationId) {
    const infoDiv = document.getElementById("station-info");
    const station = stations[stationId];

    // HTMLを入れ替える
    infoDiv.innerHTML = `
    <h3>${station.name}</h3>
    <p>${station.info}</p>
    <img src="${station.img}" alt="${station.name}" width="400">
  `;

    // アニメーションをつけたい場合
    infoDiv.classList.remove("fade");
    void infoDiv.offsetWidth; // アニメーションリセット
    infoDiv.classList.add("fade");


}