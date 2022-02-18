
// Tabs
function switchTab(evt, tcid) {
	// Get all elements with class="tabcontent" and hide them
	var tabcontent = document.querySelectorAll(".tabcontent");
	tabcontent.forEach((tc)=>{
	  tc.classList.add("hidden")
	})
	// Get all elements with class="tablinks" and remove the class "active"
	var tablinks = document.querySelectorAll(".tablinks");
	tablinks.forEach((tl)=>{
	  tl.classList.remove("activeTabLink")
	})
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tcid).classList.remove("hidden")
	evt.classList.add("activeTabLink")
  }


 async function getData() {
            try {
              
              var allLi = document.getElementById("allList")
                var gainerLi = document.getElementById("gainerList")
                var loserLi = document.getElementById("loserList")
                var updatedAt = document.getElementById("updatedAt");
                var date=""
                let res = await fetch("https://api.coincap.io/v2/assets");
                var result = await res.json();
               
               console.log(result)
                data = result["data"]
               

                date = new Date(result['timestamp'])
                updatedAt.innerHTML= ""
                updatedAt.innerHTML = date


                allLi.innerHTML = ""
                for(let i=0;i<15;i++){
                  let td1 = document.createElement("td");
                  td1.classList.add("p-2","font-bold","text-blue-500")
                  td1.innerHTML= "<span class='bg-yellow-400 text-white text-xs font-normal p-2 h-8 w-8'>"+data[i].symbol+"</span>"+data[i].name
                  
                  let td2 = document.createElement("td");
                  td2.classList.add("p-2","font-bold")
                  td2.innerHTML= parseInt(data[i].priceUsd).toFixed(4)

                  let td3 = document.createElement("td");
                  if(parseInt(data[i].changePercent24Hr)<0){
                    td3.classList.add("p-2","font-bold","text-red-500")
                    td3.innerHTML= '<i class="fa-solid fa-arrow-down animate-bounce"></i> '+Math.abs(parseInt(data[i].changePercent24Hr)).toFixed(4)
                  }else{
                    td3.classList.add("p-2","font-bold","text-green-500")
                    td3.innerHTML= '<i class="fa-solid fa-arrow-up animate-bounce"></i> '+Math.abs(parseInt(data[i].changePercent24Hr)).toFixed(4)
                  }

                  let tr = document.createElement("tr");

                  tr.appendChild(td1)
                  tr.appendChild(td2)
                  tr.appendChild(td3)
                  allLi.appendChild(tr)
                }

                data.sort((a, b) => {
                  return b.changePercent24Hr - a.changePercent24Hr; // descending
                })

                gainerLi.innerHTML = ""
                for(let i=0;i<15;i++){
                  let td1 = document.createElement("td");
                  td1.classList.add("p-2","font-bold","text-blue-500")
                  td1.innerHTML= data[i].name
                  
                  let td2 = document.createElement("td");
                  td2.classList.add("p-2","font-bold")
                  td2.innerHTML= parseInt(data[i].priceUsd).toFixed(4)

                  let td3 = document.createElement("td");
                  if(parseInt(data[i].changePercent24Hr)<0){
                    td3.classList.add("p-2","font-bold","text-red-500")
                    td3.innerHTML= '<i class="fa-solid fa-arrow-down animate-bounce"></i> '+Math.abs(parseInt(data[i].changePercent24Hr)).toFixed(4)
                  }else{
                    td3.classList.add("p-2","font-bold","text-green-500")
                    td3.innerHTML= '<i class="fa-solid fa-arrow-up animate-bounce"></i> '+Math.abs(parseInt(data[i].changePercent24Hr)).toFixed(4)
                  }

                  let tr = document.createElement("tr");

                  tr.appendChild(td1)
                  tr.appendChild(td2)
                  tr.appendChild(td3)
                  gainerLi.appendChild(tr)
                }

                data.sort((a, b) => {
                  return a.changePercent24Hr - b.changePercent24Hr; // descending
                })

                loserLi.innerHTML = ""
                for(let i=0;i<15;i++){
                  let td1 = document.createElement("td");
                  td1.classList.add("p-2","font-bold","text-blue-500")
                  td1.innerHTML= data[i].name
                  
                  let td2 = document.createElement("td");
                  td2.classList.add("p-2","font-bold")
                  td2.innerHTML= parseInt(data[i].priceUsd).toFixed(4)

                  let td3 = document.createElement("td");
                  if(parseInt(data[i].changePercent24Hr)<0){
                    td3.classList.add("p-2","font-bold","text-red-500")
                    td3.innerHTML= '<i class="fa-solid fa-arrow-down animate-bounce"></i> '+Math.abs(parseInt(data[i].changePercent24Hr)).toFixed(4)
                  }else{
                    td3.classList.add("p-2","font-bold","text-green-500")
                    td3.innerHTML= '<i class="fa-solid fa-arrow-up animate-bounce"></i> '+Math.abs(parseInt(data[i].changePercent24Hr)).toFixed(4)
                  }

                  let tr = document.createElement("tr");

                  tr.appendChild(td1)
                  tr.appendChild(td2)
                  tr.appendChild(td3)
                  loserLi.appendChild(tr)
                }
                
                
            }catch (error) {  
                updatedAt.innerHTML= ""
                updatedAt.innerHTML = "<div><p>"+date+"</p><p class='text-red-500'>"+error+"</p></div>" 
                console.log(error);
            }
        }
        setInterval(()=>{
          getData()
        },2000)