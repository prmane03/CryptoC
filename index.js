// Tabs
function switchTab(evt, tcid) {
  // Get all elements with class="tabcontent" and hide them
  var tabcontent = document.querySelectorAll(".tabcontent");
  tabcontent.forEach((tc) => {
    tc.classList.add("hidden",);
  });
  // Get all elements with class="tablinks" and remove the class "active"
  var tablinks = document.querySelectorAll(".tablinks");
  tablinks.forEach((tl) => {
    tl.classList.remove("activeTabLink");
  });
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tcid).classList.remove("hidden");
  evt.classList.add("activeTabLink",);
}

async function getData() {
  try {
    var allLi = document.getElementById("allList");
    var gainerLi = document.getElementById("gainerList");
    var loserLi = document.getElementById("loserList");
    var updatedAt = document.getElementById("updatedAt");
    var date = "";
    let res = await fetch("https://api.coincap.io/v2/assets");
    var result = await res.json();

    console.log(result);
    data = result["data"];

    date = new Date(result["timestamp"]);
    updatedAt.innerHTML = "";
    updatedAt.innerHTML = date;

    allLi.innerHTML = "";
    for (let i = 0; i < 15; i++) {
      let td0 = document.createElement("td");
      td0.classList.add("p-2", "font-bold",);
      td0.innerHTML =
        " <span class='text-white text-sm ml-2 p-2 my-auto bg-orange-400 shadow-lg rounded-lg'> # " +
        data[i].rank +
        "</span>";
      let td1 = document.createElement("td");
      td1.classList.add("p-2", "font-bold", "text-blue-500",);
      td1.innerHTML =
        "<div class='flex'><img src='https://cryptoicon-api.vercel.app/api/icon/" +
        data[i].symbol.toLowerCase() +
        "' class='h-8 w-8 mr-4'>" +
        data[i].name +
        " <span class='text-white text-xs font-normal ml-2 p-1 my-auto bg-orange-400 rounded-full'>" +
        data[i].symbol +
        "</span></div>";
      //price
      let td2 = document.createElement("td");
      td2.classList.add("p-2", "font-bold","hidden" ,"sm:table-cell","text-blue-500",);
      td2.innerHTML = "$ " + parseFloat(data[i].priceUsd).toFixed(2);

      //marketcap
      let td4 = document.createElement("td");
      td4.classList.add("p-2", "font-bold","hidden","md:table-cell","text-blue-500",);
      td4.innerHTML = "$ " + parseFloat(data[i].marketCapUsd).toFixed(2);

      //change volume
      let td5 = document.createElement("td");
      td5.classList.add("p-2", "font-bold","hidden","md:table-cell","text-blue-500",);
      td5.innerHTML = "$ " + parseFloat(data[i].volumeUsd24Hr).toFixed(2);

      //change
      let td3 = document.createElement("td");
      if (parseFloat(data[i].changePercent24Hr) < 0) {
        td3.classList.add("p-2", "font-bold", "text-red-500",);
        td3.innerHTML =
          '<i class="fa-solid fa-arrow-down animate-bounce"></i> ' +
          Math.abs(parseFloat(data[i].changePercent24Hr).toFixed(2));
      } else {
        td3.classList.add("p-2", "font-bold", "text-green-500",);
        td3.innerHTML =
          '<i class="fa-solid fa-arrow-up animate-bounce"></i> ' +
          Math.abs(parseFloat(data[i].changePercent24Hr).toFixed(2));
      }

      let tr = document.createElement("tr");
      tr.classList.add("border-b")
      tr.appendChild(td0);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(td3);
      allLi.appendChild(tr);
    }
    data.sort((a, b) => {
      return b.changePercent24Hr - a.changePercent24Hr; // descending
    });

    gainerLi.innerHTML = "";
    for (let i = 0; i < 15; i++) {
      let td0 = document.createElement("td");
      td0.classList.add("p-2", "font-bold");
      td0.innerHTML =
        " <span class='text-white text-sm ml-2 p-2 my-auto bg-orange-400 shadow-lg rounded-lg'> # " +
        data[i].rank +
        "</span>";
      let td1 = document.createElement("td");
      td1.classList.add("p-2", "font-bold", "text-blue-500",);
      td1.innerHTML =
        "<div class='flex'><img src='https://cryptoicon-api.vercel.app/api/icon/" +
        data[i].symbol.toLowerCase() +
        "' class='h-8 w-8 mr-4'>" +
        data[i].name +
        " <span class='text-white text-xs font-normal ml-2 p-1 my-auto bg-orange-400 rounded-full'>" +
        data[i].symbol +
        "</span></div>";
      //price
      let td2 = document.createElement("td");
      td2.classList.add("p-2", "font-bold","hidden" ,"sm:table-cell","text-blue-500",);
      td2.innerHTML = "$ " + parseFloat(data[i].priceUsd).toFixed(2);

      //marketcap
      let td4 = document.createElement("td");
      td4.classList.add("p-2", "font-bold","hidden","md:table-cell","text-blue-500",);
      td4.innerHTML = "$ " + parseFloat(data[i].marketCapUsd).toFixed(2);

      //change volume
      let td5 = document.createElement("td");
      td5.classList.add("p-2", "font-bold","hidden","md:table-cell","text-blue-500",);
      td5.innerHTML = "$ " + parseFloat(data[i].volumeUsd24Hr).toFixed(2);

      //change
      let td3 = document.createElement("td");
      if (parseFloat(data[i].changePercent24Hr) < 0) {
        td3.classList.add("p-2", "font-bold", "text-red-500",);
        td3.innerHTML =
          '<i class="fa-solid fa-arrow-down animate-bounce"></i> ' +
          Math.abs(parseFloat(data[i].changePercent24Hr).toFixed(2));
      } else {
        td3.classList.add("p-2", "font-bold", "text-green-500",);
        td3.innerHTML =
          '<i class="fa-solid fa-arrow-up animate-bounce"></i> ' +
          Math.abs(parseFloat(data[i].changePercent24Hr).toFixed(2));
      }

      let tr = document.createElement("tr");
      tr.classList.add("border-b")
      tr.appendChild(td0);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(td3);
      gainerLi.appendChild(tr);
    }
    data.sort((a, b) => {
      return a.changePercent24Hr - b.changePercent24Hr; // descending
    });

    loserLi.innerHTML = "";
    for (let i = 0; i < 15; i++) {
      let td0 = document.createElement("td");
      td0.classList.add("p-2", "font-bold");
      td0.innerHTML =
        " <span class='text-white text-sm ml-2 p-2 my-auto shadow-lg bg-orange-400 rounded-lg'> # " +
        data[i].rank +
        "</span>";
      let td1 = document.createElement("td");
      td1.classList.add("p-2", "font-bold", "text-blue-500",);
      td1.innerHTML =
        "<div class='flex'><img src='https://cryptoicon-api.vercel.app/api/icon/" +
        data[i].symbol.toLowerCase() +
        "' class='h-8 w-8 mr-4'>" +
        data[i].name +
        " <span class='text-white text-xs font-normal ml-2 p-1 my-auto bg-orange-400 rounded-full'>" +
        data[i].symbol +
        "</span></div>";
      //price
      let td2 = document.createElement("td");
      td2.classList.add("p-2", "font-bold","hidden" ,"sm:table-cell","text-blue-500",);
      td2.innerHTML = "$ " + parseFloat(data[i].priceUsd).toFixed(2);

      //marketcap
      let td4 = document.createElement("td");
      td4.classList.add("p-2", "font-bold","hidden","md:table-cell","text-blue-500",);
      td4.innerHTML = "$ " + parseFloat(data[i].marketCapUsd).toFixed(2);

      //change volume
      let td5 = document.createElement("td");
      td5.classList.add("p-2", "font-bold","hidden","md:table-cell","text-blue-500",);
      td5.innerHTML = "$ " + parseFloat(data[i].volumeUsd24Hr).toFixed(2);

      //change
      let td3 = document.createElement("td");
      if (parseFloat(data[i].changePercent24Hr) < 0) {
        td3.classList.add("p-2", "font-bold", "text-red-500",);
        td3.innerHTML =
          '<i class="fa-solid fa-arrow-down animate-bounce"></i> ' +
          Math.abs(parseFloat(data[i].changePercent24Hr).toFixed(2));
      } else {
        td3.classList.add("p-2", "font-bold", "text-green-500",);
        td3.innerHTML =
          '<i class="fa-solid fa-arrow-up animate-bounce"></i> ' +
          Math.abs(parseFloat(data[i].changePercent24Hr).toFixed(2));
      }

      let tr = document.createElement("tr");
      tr.classList.add("border-b")
      tr.appendChild(td0);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(td3);
      loserLi.appendChild(tr);
    }
  } catch (error) {
    updatedAt.innerHTML = "";
    updatedAt.innerHTML =
      "<div><p>" + date + "</p><p class='text-red-500'>" + error + "</p></div>";
    console.log(error);
  }
}
setInterval(() => {
  getData();
}, 2000);
