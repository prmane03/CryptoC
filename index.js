
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