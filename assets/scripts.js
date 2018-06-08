	function processData(c1,c2,c3) {
		var cv1 = document.getElementById(c1).value;
		var cv2 = document.getElementById(c2).value;
		var cv3 = document.getElementById(c3).value;
		//alert(cv1+"\n"+cv2);
		var leftDiv = document.getElementById('divLeft');
		var centerDiv = document.getElementById('divCenter');
		var rightDiv = document.getElementById('divRight');
		
		leftDiv.style.backgroundColor = cv1;
		centerDiv.style.backgroundColor = cv2;
		rightDiv.style.backgroundColor = cv3
		//leftDiv.setAttribute("background-color", cv1);
		// Use Ajax-PHP to send the values to server storage
		// Ajax-PHP Video Tutorial - www.developphp.com/view.php?tid=1185
	}

		var color1, color2, color3;
		var defaultColor1 = "#bcffce";
		var defaultColor2 = "#a1b1a5";
		var defaultColor3 = "#7c8e81";

		window.addEventListener("load", startup, false);
		function startup() {
		  	color1 = document.querySelector("#color1");
			color2 = document.querySelector("#color2");
			color3 = document.querySelector("#color3");
		  color1.value = defaultColor1;
		  color1.addEventListener("input", updateFirst1, false);
		  color1.addEventListener("change", updateAll1, false);
		  color1.select();
		  
		  color2.value = defaultColor2;
		  color2.addEventListener("input", updateFirst2, false);
		  color2.addEventListener("change", updateAll2, false);
		  color2.select();
		  
		  color3.value = defaultColor3;
		  color3.addEventListener("input", updateFirst3, false);
		  color3.addEventListener("change", updateAll3, false);
		  color3.select();
		  
		}
		function updateFirst1(event) {
		 var leftDiv = document.getElementById('divLeft');
		  if (leftDiv) {
			leftDiv.style.backgroundColor = event.target.value;
		  }
		}function updateAll1(event) {
			var leftDiv = document.getElementById('divLeft');
			leftDiv.style.backgroundColor = event.target.value;
		}

		function updateFirst2(event) {
		 var centerDiv = document.getElementById('divCenter');
		  if (centerDiv) {
			centerDiv.style.backgroundColor = event.target.value;
		  }
		}function updateAll2(event) {
			var centerDiv = document.getElementById('divCenter');
			centerDiv.style.backgroundColor = event.target.value;
		}
		
		function updateFirst3(event) {
		 var rightDiv = document.getElementById('divRight');
		  if (rightDiv) {
			rightDiv.style.backgroundColor = event.target.value;
		  }
		}function updateAll3(event) {
			var rightDiv = document.getElementById('divRight');
			rightDiv.style.backgroundColor = event.target.value;
		}
