function cov_2dtwhegdt0(){var path="C:\\Users\\User\\Documents\\DVOPS_Projects\\project1-yujie\\public\\js\\createRecipe.js";var hash="95c47e71460ac13e11513abc7cd8503f9900caf6";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\User\\Documents\\DVOPS_Projects\\project1-yujie\\public\\js\\createRecipe.js",statementMap:{"0":{start:{line:2,column:19},end:{line:2,column:21}},"1":{start:{line:3,column:19},end:{line:3,column:31}},"2":{start:{line:4,column:4},end:{line:4,column:70}},"3":{start:{line:5,column:4},end:{line:5,column:72}},"4":{start:{line:6,column:4},end:{line:6,column:72}},"5":{start:{line:7,column:4},end:{line:7,column:60}},"6":{start:{line:8,column:4},end:{line:8,column:68}},"7":{start:{line:12,column:28},end:{line:12,column:149}},"8":{start:{line:15,column:4},end:{line:19,column:5}},"9":{start:{line:16,column:8},end:{line:16,column:116}},"10":{start:{line:17,column:8},end:{line:17,column:80}},"11":{start:{line:18,column:8},end:{line:18,column:15}},"12":{start:{line:22,column:20},end:{line:22,column:40}},"13":{start:{line:23,column:4},end:{line:23,column:45}},"14":{start:{line:24,column:4},end:{line:24,column:65}},"15":{start:{line:27,column:4},end:{line:48,column:6}},"16":{start:{line:28,column:8},end:{line:28,column:52}},"17":{start:{line:29,column:8},end:{line:29,column:30}},"18":{start:{line:31,column:8},end:{line:47,column:9}},"19":{start:{line:32,column:12},end:{line:32,column:98}},"20":{start:{line:33,column:12},end:{line:33,column:85}},"21":{start:{line:36,column:12},end:{line:36,column:61}},"22":{start:{line:37,column:12},end:{line:37,column:62}},"23":{start:{line:38,column:12},end:{line:38,column:62}},"24":{start:{line:39,column:12},end:{line:39,column:56}},"25":{start:{line:40,column:12},end:{line:40,column:60}},"26":{start:{line:43,column:12},end:{line:43,column:53}},"27":{start:{line:45,column:12},end:{line:45,column:83}},"28":{start:{line:46,column:12},end:{line:46,column:84}},"29":{start:{line:51,column:4},end:{line:51,column:43}}},fnMap:{"0":{name:"addRecipe",decl:{start:{line:1,column:9},end:{line:1,column:18}},loc:{start:{line:1,column:21},end:{line:52,column:1}},line:1},"1":{name:"(anonymous_1)",decl:{start:{line:27,column:21},end:{line:27,column:22}},loc:{start:{line:27,column:32},end:{line:48,column:5}},line:27}},branchMap:{"0":{loc:{start:{line:15,column:4},end:{line:19,column:5}},type:"if",locations:[{start:{line:15,column:4},end:{line:19,column:5}},{start:{line:undefined,column:undefined},end:{line:undefined,column:undefined}}],line:15},"1":{loc:{start:{line:15,column:8},end:{line:15,column:166}},type:"binary-expr",locations:[{start:{line:15,column:8},end:{line:15,column:34}},{start:{line:15,column:38},end:{line:15,column:65}},{start:{line:15,column:69},end:{line:15,column:96}},{start:{line:15,column:100},end:{line:15,column:121}},{start:{line:15,column:125},end:{line:15,column:166}}],line:15},"2":{loc:{start:{line:31,column:8},end:{line:47,column:9}},type:"if",locations:[{start:{line:31,column:8},end:{line:47,column:9}},{start:{line:44,column:15},end:{line:47,column:9}}],line:31}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0},f:{"0":0,"1":0},b:{"0":[0,0],"1":[0,0,0,0,0],"2":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"95c47e71460ac13e11513abc7cd8503f9900caf6"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2dtwhegdt0=function(){return actualCoverage;};}return actualCoverage;}cov_2dtwhegdt0();function addRecipe(){cov_2dtwhegdt0().f[0]++;let response=(cov_2dtwhegdt0().s[0]++,"");let jsonData=(cov_2dtwhegdt0().s[1]++,new Object());cov_2dtwhegdt0().s[2]++;jsonData.recipeName=document.getElementById("recipeName").value;cov_2dtwhegdt0().s[3]++;jsonData.description=document.getElementById("description").value;cov_2dtwhegdt0().s[4]++;jsonData.ingredients=document.getElementById("ingredients").value;cov_2dtwhegdt0().s[5]++;jsonData.steps=document.getElementById("steps").value;cov_2dtwhegdt0().s[6]++;jsonData.imageLink=document.getElementById("imageLink").value;// Validation check for empty fields
//const imageUrlPattern = /*/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg)(?:\?.*)?$*//^data:image\/(?:png|jpg|jpeg|gif|svg);base64,[A-Za-z0-9+/=]+$)/i;
const imageUrlPattern=(cov_2dtwhegdt0().s[7]++,/^(https?:\/\/.*(?:png|jpg|jpeg|gif|svg|tbn).*(?:\?.*)?$|^data:image\/(?:png|jpg|jpeg|gif|svg);base64,[A-Za-z0-9+/=]+$)/i);cov_2dtwhegdt0().s[8]++;if((cov_2dtwhegdt0().b[1][0]++,jsonData.recipeName==="")||(cov_2dtwhegdt0().b[1][1]++,jsonData.description==="")||(cov_2dtwhegdt0().b[1][2]++,jsonData.ingredients==="")||(cov_2dtwhegdt0().b[1][3]++,jsonData.steps==="")||(cov_2dtwhegdt0().b[1][4]++,!imageUrlPattern.test(jsonData.imageLink))){cov_2dtwhegdt0().b[0][0]++;cov_2dtwhegdt0().s[9]++;document.getElementById("message").innerHTML="All fields are required! and a valid image link is needed!";cov_2dtwhegdt0().s[10]++;document.getElementById("message").setAttribute("class","text-danger");cov_2dtwhegdt0().s[11]++;return;}else{cov_2dtwhegdt0().b[0][1]++;}// Create and configure XMLHttpRequest
const request=(cov_2dtwhegdt0().s[12]++,new XMLHttpRequest());cov_2dtwhegdt0().s[13]++;request.open("POST","/addRecipe",true);cov_2dtwhegdt0().s[14]++;request.setRequestHeader("Content-Type","application/json");// Handle the response from the server
cov_2dtwhegdt0().s[15]++;request.onload=function(){cov_2dtwhegdt0().f[1]++;cov_2dtwhegdt0().s[16]++;response=JSON.parse(request.responseText);cov_2dtwhegdt0().s[17]++;console.log(response);cov_2dtwhegdt0().s[18]++;if(response.message===undefined){cov_2dtwhegdt0().b[2][0]++;cov_2dtwhegdt0().s[19]++;document.getElementById("message").innerHTML="Added Recipe: "+jsonData.recipeName;cov_2dtwhegdt0().s[20]++;document.getElementById("message").setAttribute("class","text-success");// Clear input fields after successful submission
cov_2dtwhegdt0().s[21]++;document.getElementById("recipeName").value="";cov_2dtwhegdt0().s[22]++;document.getElementById("description").value="";cov_2dtwhegdt0().s[23]++;document.getElementById("ingredients").value="";cov_2dtwhegdt0().s[24]++;document.getElementById("steps").value="";cov_2dtwhegdt0().s[25]++;document.getElementById("imageLink").value="";// Optionally redirect to another page, such as the main page
cov_2dtwhegdt0().s[26]++;window.location.href="viewRecipe.html";}else{cov_2dtwhegdt0().b[2][1]++;cov_2dtwhegdt0().s[27]++;document.getElementById("message").innerHTML="Unable to add recipe!";cov_2dtwhegdt0().s[28]++;document.getElementById("message").setAttribute("class","text-danger");}};// Send the JSON data to the server
cov_2dtwhegdt0().s[29]++;request.send(JSON.stringify(jsonData));}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmR0d2hlZ2R0MCIsImFjdHVhbENvdmVyYWdlIiwiYWRkUmVjaXBlIiwiZiIsInJlc3BvbnNlIiwicyIsImpzb25EYXRhIiwiT2JqZWN0IiwicmVjaXBlTmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwiaW5ncmVkaWVudHMiLCJzdGVwcyIsImltYWdlTGluayIsImltYWdlVXJsUGF0dGVybiIsImIiLCJ0ZXN0IiwiaW5uZXJIVE1MIiwic2V0QXR0cmlidXRlIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWQiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInVuZGVmaW5lZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNlbmQiLCJzdHJpbmdpZnkiXSwic291cmNlcyI6WyJjcmVhdGVSZWNpcGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYWRkUmVjaXBlKCkge1xyXG4gICAgbGV0IHJlc3BvbnNlID0gXCJcIjtcclxuICAgIGxldCBqc29uRGF0YSA9IG5ldyBPYmplY3QoKTtcclxuICAgIGpzb25EYXRhLnJlY2lwZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlY2lwZU5hbWVcIikudmFsdWU7XHJcbiAgICBqc29uRGF0YS5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XHJcbiAgICBqc29uRGF0YS5pbmdyZWRpZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5ncmVkaWVudHNcIikudmFsdWU7XHJcbiAgICBqc29uRGF0YS5zdGVwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RlcHNcIikudmFsdWU7XHJcbiAgICBqc29uRGF0YS5pbWFnZUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlTGlua1wiKS52YWx1ZTtcclxuXHJcbiAgICAvLyBWYWxpZGF0aW9uIGNoZWNrIGZvciBlbXB0eSBmaWVsZHNcclxuICAgIC8vY29uc3QgaW1hZ2VVcmxQYXR0ZXJuID0gLyovXihodHRwcz86XFwvXFwvLipcXC4oPzpwbmd8anBnfGpwZWd8Z2lmfHN2ZykoPzpcXD8uKik/JCovL15kYXRhOmltYWdlXFwvKD86cG5nfGpwZ3xqcGVnfGdpZnxzdmcpO2Jhc2U2NCxbQS1aYS16MC05Ky89XSskKS9pO1xyXG4gICAgY29uc3QgaW1hZ2VVcmxQYXR0ZXJuID0gL14oaHR0cHM/OlxcL1xcLy4qKD86cG5nfGpwZ3xqcGVnfGdpZnxzdmd8dGJuKS4qKD86XFw/LiopPyR8XmRhdGE6aW1hZ2VcXC8oPzpwbmd8anBnfGpwZWd8Z2lmfHN2Zyk7YmFzZTY0LFtBLVphLXowLTkrLz1dKyQpL2k7XHJcblxyXG5cclxuICAgIGlmIChqc29uRGF0YS5yZWNpcGVOYW1lID09PSBcIlwiIHx8IGpzb25EYXRhLmRlc2NyaXB0aW9uID09PSBcIlwiIHx8IGpzb25EYXRhLmluZ3JlZGllbnRzID09PSBcIlwiIHx8IGpzb25EYXRhLnN0ZXBzID09PSBcIlwiIHx8ICFpbWFnZVVybFBhdHRlcm4udGVzdChqc29uRGF0YS5pbWFnZUxpbmspKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlXCIpLmlubmVySFRNTCA9IFwiQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWQhIGFuZCBhIHZhbGlkIGltYWdlIGxpbmsgaXMgbmVlZGVkIVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZVwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRleHQtZGFuZ2VyXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDcmVhdGUgYW5kIGNvbmZpZ3VyZSBYTUxIdHRwUmVxdWVzdFxyXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgcmVxdWVzdC5vcGVuKFwiUE9TVFwiLCBcIi9hZGRSZWNpcGVcIiwgdHJ1ZSk7XHJcbiAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cclxuICAgIC8vIEhhbmRsZSB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyXHJcbiAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2UubWVzc2FnZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZVwiKS5pbm5lckhUTUwgPSBcIkFkZGVkIFJlY2lwZTogXCIgKyBqc29uRGF0YS5yZWNpcGVOYW1lO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0ZXh0LXN1Y2Nlc3NcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBDbGVhciBpbnB1dCBmaWVsZHMgYWZ0ZXIgc3VjY2Vzc2Z1bCBzdWJtaXNzaW9uXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVjaXBlTmFtZVwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZ3JlZGllbnRzXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGVwc1wiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VMaW5rXCIpLnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsbHkgcmVkaXJlY3QgdG8gYW5vdGhlciBwYWdlLCBzdWNoIGFzIHRoZSBtYWluIHBhZ2VcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcInZpZXdSZWNpcGUuaHRtbFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZVwiKS5pbm5lckhUTUwgPSBcIlVuYWJsZSB0byBhZGQgcmVjaXBlIVwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0ZXh0LWRhbmdlclwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNlbmQgdGhlIEpTT04gZGF0YSB0byB0aGUgc2VydmVyXHJcbiAgICByZXF1ZXN0LnNlbmQoSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEpKTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiJ5akhBZVk7QUFBQUEsY0FBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxjQUFBLEdBZlosUUFBUyxDQUFBRSxTQUFTQSxDQUFBLENBQUcsQ0FBQUYsY0FBQSxHQUFBRyxDQUFBLE1BQ2pCLEdBQUksQ0FBQUMsUUFBUSxFQUFBSixjQUFBLEdBQUFLLENBQUEsTUFBRyxFQUFFLEVBQ2pCLEdBQUksQ0FBQUMsUUFBUSxFQUFBTixjQUFBLEdBQUFLLENBQUEsTUFBRyxHQUFJLENBQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUNQLGNBQUEsR0FBQUssQ0FBQSxNQUM1QkMsUUFBUSxDQUFDRSxVQUFVLENBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDQyxLQUFLLENBQUNYLGNBQUEsR0FBQUssQ0FBQSxNQUNsRUMsUUFBUSxDQUFDTSxXQUFXLENBQUdILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDQyxLQUFLLENBQUNYLGNBQUEsR0FBQUssQ0FBQSxNQUNwRUMsUUFBUSxDQUFDTyxXQUFXLENBQUdKLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDQyxLQUFLLENBQUNYLGNBQUEsR0FBQUssQ0FBQSxNQUNwRUMsUUFBUSxDQUFDUSxLQUFLLENBQUdMLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxLQUFLLENBQUNYLGNBQUEsR0FBQUssQ0FBQSxNQUN4REMsUUFBUSxDQUFDUyxTQUFTLENBQUdOLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxLQUFLLENBRS9EO0FBQ0E7QUFDQSxLQUFNLENBQUFLLGVBQWUsRUFBQWhCLGNBQUEsR0FBQUssQ0FBQSxNQUFHLHlIQUF5SCxFQUFDTCxjQUFBLEdBQUFLLENBQUEsTUFHbEosR0FBSSxDQUFBTCxjQUFBLEdBQUFpQixDQUFBLFNBQUFYLFFBQVEsQ0FBQ0UsVUFBVSxHQUFLLEVBQUUsSUFBQVIsY0FBQSxHQUFBaUIsQ0FBQSxTQUFJWCxRQUFRLENBQUNNLFdBQVcsR0FBSyxFQUFFLElBQUFaLGNBQUEsR0FBQWlCLENBQUEsU0FBSVgsUUFBUSxDQUFDTyxXQUFXLEdBQUssRUFBRSxJQUFBYixjQUFBLEdBQUFpQixDQUFBLFNBQUlYLFFBQVEsQ0FBQ1EsS0FBSyxHQUFLLEVBQUUsSUFBQWQsY0FBQSxHQUFBaUIsQ0FBQSxTQUFJLENBQUNELGVBQWUsQ0FBQ0UsSUFBSSxDQUFDWixRQUFRLENBQUNTLFNBQVMsQ0FBQyxFQUFFLENBQUFmLGNBQUEsR0FBQWlCLENBQUEsU0FBQWpCLGNBQUEsR0FBQUssQ0FBQSxNQUNoS0ksUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUNTLFNBQVMsQ0FBRyw0REFBNEQsQ0FBQ25CLGNBQUEsR0FBQUssQ0FBQSxPQUM1R0ksUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUNVLFlBQVksQ0FBQyxPQUFPLENBQUUsYUFBYSxDQUFDLENBQUNwQixjQUFBLEdBQUFLLENBQUEsT0FDeEUsT0FDSixDQUFDLEtBQUFMLGNBQUEsR0FBQWlCLENBQUEsVUFFRDtBQUNBLEtBQU0sQ0FBQUksT0FBTyxFQUFBckIsY0FBQSxHQUFBSyxDQUFBLE9BQUcsR0FBSSxDQUFBaUIsY0FBYyxDQUFDLENBQUMsRUFBQ3RCLGNBQUEsR0FBQUssQ0FBQSxPQUNyQ2dCLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBRSxZQUFZLENBQUUsSUFBSSxDQUFDLENBQUN2QixjQUFBLEdBQUFLLENBQUEsT0FDekNnQixPQUFPLENBQUNHLGdCQUFnQixDQUFDLGNBQWMsQ0FBRSxrQkFBa0IsQ0FBQyxDQUU1RDtBQUFBeEIsY0FBQSxHQUFBSyxDQUFBLE9BQ0FnQixPQUFPLENBQUNJLE1BQU0sQ0FBRyxVQUFXLENBQUF6QixjQUFBLEdBQUFHLENBQUEsTUFBQUgsY0FBQSxHQUFBSyxDQUFBLE9BQ3hCRCxRQUFRLENBQUdzQixJQUFJLENBQUNDLEtBQUssQ0FBQ04sT0FBTyxDQUFDTyxZQUFZLENBQUMsQ0FBQzVCLGNBQUEsR0FBQUssQ0FBQSxPQUM1Q3dCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDMUIsUUFBUSxDQUFDLENBQUNKLGNBQUEsR0FBQUssQ0FBQSxPQUV0QixHQUFJRCxRQUFRLENBQUMyQixPQUFPLEdBQUtDLFNBQVMsQ0FBRSxDQUFBaEMsY0FBQSxHQUFBaUIsQ0FBQSxTQUFBakIsY0FBQSxHQUFBSyxDQUFBLE9BQ2hDSSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQ1MsU0FBUyxDQUFHLGdCQUFnQixDQUFHYixRQUFRLENBQUNFLFVBQVUsQ0FBQ1IsY0FBQSxHQUFBSyxDQUFBLE9BQ3RGSSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQ1UsWUFBWSxDQUFDLE9BQU8sQ0FBRSxjQUFjLENBQUMsQ0FFeEU7QUFBQXBCLGNBQUEsR0FBQUssQ0FBQSxPQUNBSSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsS0FBSyxDQUFHLEVBQUUsQ0FBQ1gsY0FBQSxHQUFBSyxDQUFBLE9BQ2pESSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQ0MsS0FBSyxDQUFHLEVBQUUsQ0FBQ1gsY0FBQSxHQUFBSyxDQUFBLE9BQ2xESSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQ0MsS0FBSyxDQUFHLEVBQUUsQ0FBQ1gsY0FBQSxHQUFBSyxDQUFBLE9BQ2xESSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsS0FBSyxDQUFHLEVBQUUsQ0FBQ1gsY0FBQSxHQUFBSyxDQUFBLE9BQzVDSSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsS0FBSyxDQUFHLEVBQUUsQ0FFL0M7QUFBQVgsY0FBQSxHQUFBSyxDQUFBLE9BQ0E0QixNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFHLGlCQUFpQixDQUM1QyxDQUFDLElBQU0sQ0FBQW5DLGNBQUEsR0FBQWlCLENBQUEsU0FBQWpCLGNBQUEsR0FBQUssQ0FBQSxPQUNISSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQ1MsU0FBUyxDQUFHLHVCQUF1QixDQUFDbkIsY0FBQSxHQUFBSyxDQUFBLE9BQ3ZFSSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQ1UsWUFBWSxDQUFDLE9BQU8sQ0FBRSxhQUFhLENBQUMsQ0FDM0UsQ0FDSixDQUFDLENBRUQ7QUFBQXBCLGNBQUEsR0FBQUssQ0FBQSxPQUNBZ0IsT0FBTyxDQUFDZSxJQUFJLENBQUNWLElBQUksQ0FBQ1csU0FBUyxDQUFDL0IsUUFBUSxDQUFDLENBQUMsQ0FDMUMiLCJpZ25vcmVMaXN0IjpbXX0=