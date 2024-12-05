function cov_1nq0wuik5p(){var path="C:\\Users\\User\\Documents\\DVOPS_Projects\\project1-yujie\\public\\js\\updateRecipe.js";var hash="9f43919b55549ab36b4826623058387716356fe8";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\User\\Documents\\DVOPS_Projects\\project1-yujie\\public\\js\\updateRecipe.js",statementMap:{"0":{start:{line:2,column:0},end:{line:31,column:1}},"1":{start:{line:3,column:4},end:{line:30,column:5}},"2":{start:{line:5,column:25},end:{line:5,column:78}},"3":{start:{line:6,column:8},end:{line:9,column:9}},"4":{start:{line:7,column:12},end:{line:7,column:38}},"5":{start:{line:8,column:12},end:{line:8,column:19}},"6":{start:{line:12,column:23},end:{line:12,column:44}},"7":{start:{line:15,column:27},end:{line:22,column:9}},"8":{start:{line:24,column:8},end:{line:24,column:77}},"9":{start:{line:27,column:8},end:{line:27,column:51}},"10":{start:{line:29,column:8},end:{line:29,column:66}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:26},end:{line:2,column:27}},loc:{start:{line:2,column:45},end:{line:31,column:1}},line:2}},branchMap:{"0":{loc:{start:{line:6,column:8},end:{line:9,column:9}},type:"if",locations:[{start:{line:6,column:8},end:{line:9,column:9}},{start:{line:undefined,column:undefined},end:{line:undefined,column:undefined}}],line:6}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9f43919b55549ab36b4826623058387716356fe8"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1nq0wuik5p=function(){return actualCoverage;};}return actualCoverage;}cov_1nq0wuik5p();cov_1nq0wuik5p().s[0]++;// Function to store selected recipe in sessionStorage and navigate to updateRecipe.html
window.goToUpdateRecipe=async function(id){cov_1nq0wuik5p().f[0]++;cov_1nq0wuik5p().s[1]++;try{// Fetch the recipe details by its ID
const response=(cov_1nq0wuik5p().s[2]++,await fetch(`http://localhost:5050/viewRecipe/${id}`));cov_1nq0wuik5p().s[3]++;if(!response.ok){cov_1nq0wuik5p().b[0][0]++;cov_1nq0wuik5p().s[4]++;alert('Recipe not found');cov_1nq0wuik5p().s[5]++;return;}else{cov_1nq0wuik5p().b[0][1]++;}// Get the recipe data from the response
const recipe=(cov_1nq0wuik5p().s[6]++,await response.json());// Store both the recipe ID and the recipe details in sessionStorage
const recipeData=(cov_1nq0wuik5p().s[7]++,{id:recipe.id,recipeName:recipe.recipeName,description:recipe.description,ingredients:recipe.ingredients,steps:recipe.steps,imageLink:recipe.imageLink});cov_1nq0wuik5p().s[8]++;sessionStorage.setItem("selectedRecipe",JSON.stringify(recipeData));// Navigate to the update page
cov_1nq0wuik5p().s[9]++;window.location.href="updateRecipe.html";}catch(error){cov_1nq0wuik5p().s[10]++;console.error('Error fetching recipe for update:',error);}};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMW5xMHd1aWs1cCIsImFjdHVhbENvdmVyYWdlIiwicyIsIndpbmRvdyIsImdvVG9VcGRhdGVSZWNpcGUiLCJpZCIsImYiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJiIiwiYWxlcnQiLCJyZWNpcGUiLCJqc29uIiwicmVjaXBlRGF0YSIsInJlY2lwZU5hbWUiLCJkZXNjcmlwdGlvbiIsImluZ3JlZGllbnRzIiwic3RlcHMiLCJpbWFnZUxpbmsiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZXMiOlsidXBkYXRlUmVjaXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZ1bmN0aW9uIHRvIHN0b3JlIHNlbGVjdGVkIHJlY2lwZSBpbiBzZXNzaW9uU3RvcmFnZSBhbmQgbmF2aWdhdGUgdG8gdXBkYXRlUmVjaXBlLmh0bWxcclxud2luZG93LmdvVG9VcGRhdGVSZWNpcGUgPSBhc3luYyBmdW5jdGlvbihpZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBGZXRjaCB0aGUgcmVjaXBlIGRldGFpbHMgYnkgaXRzIElEXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDUwL3ZpZXdSZWNpcGUvJHtpZH1gKTtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdSZWNpcGUgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgcmVjaXBlIGRhdGEgZnJvbSB0aGUgcmVzcG9uc2VcclxuICAgICAgICBjb25zdCByZWNpcGUgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIC8vIFN0b3JlIGJvdGggdGhlIHJlY2lwZSBJRCBhbmQgdGhlIHJlY2lwZSBkZXRhaWxzIGluIHNlc3Npb25TdG9yYWdlXHJcbiAgICAgICAgY29uc3QgcmVjaXBlRGF0YSA9IHtcclxuICAgICAgICAgICAgaWQ6IHJlY2lwZS5pZCxcclxuICAgICAgICAgICAgcmVjaXBlTmFtZTogcmVjaXBlLnJlY2lwZU5hbWUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZWNpcGUuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiByZWNpcGUuaW5ncmVkaWVudHMsXHJcbiAgICAgICAgICAgIHN0ZXBzOiByZWNpcGUuc3RlcHMsXHJcbiAgICAgICAgICAgIGltYWdlTGluazogcmVjaXBlLmltYWdlTGlua1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJzZWxlY3RlZFJlY2lwZVwiLCBKU09OLnN0cmluZ2lmeShyZWNpcGVEYXRhKSk7XHJcblxyXG4gICAgICAgIC8vIE5hdmlnYXRlIHRvIHRoZSB1cGRhdGUgcGFnZVxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJ1cGRhdGVSZWNpcGUuaHRtbFwiO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyByZWNpcGUgZm9yIHVwZGF0ZTonLCBlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoic3FEQWVZO0FBQUFBLGNBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsY0FBQSxHQUFBQSxjQUFBLEdBQUFFLENBQUEsTUFmWjtBQUNBQyxNQUFNLENBQUNDLGdCQUFnQixDQUFHLGVBQWVDLEVBQUUsQ0FBRSxDQUFBTCxjQUFBLEdBQUFNLENBQUEsTUFBQU4sY0FBQSxHQUFBRSxDQUFBLE1BQ3pDLEdBQUksQ0FDQTtBQUNBLEtBQU0sQ0FBQUssUUFBUSxFQUFBUCxjQUFBLEdBQUFFLENBQUEsTUFBRyxLQUFNLENBQUFNLEtBQUssQ0FBQyxvQ0FBb0NILEVBQUUsRUFBRSxDQUFDLEVBQUNMLGNBQUEsR0FBQUUsQ0FBQSxNQUN2RSxHQUFJLENBQUNLLFFBQVEsQ0FBQ0UsRUFBRSxDQUFFLENBQUFULGNBQUEsR0FBQVUsQ0FBQSxTQUFBVixjQUFBLEdBQUFFLENBQUEsTUFDZFMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUNYLGNBQUEsR0FBQUUsQ0FBQSxNQUMxQixPQUNKLENBQUMsS0FBQUYsY0FBQSxHQUFBVSxDQUFBLFVBRUQ7QUFDQSxLQUFNLENBQUFFLE1BQU0sRUFBQVosY0FBQSxHQUFBRSxDQUFBLE1BQUcsS0FBTSxDQUFBSyxRQUFRLENBQUNNLElBQUksQ0FBQyxDQUFDLEVBRXBDO0FBQ0EsS0FBTSxDQUFBQyxVQUFVLEVBQUFkLGNBQUEsR0FBQUUsQ0FBQSxNQUFHLENBQ2ZHLEVBQUUsQ0FBRU8sTUFBTSxDQUFDUCxFQUFFLENBQ2JVLFVBQVUsQ0FBRUgsTUFBTSxDQUFDRyxVQUFVLENBQzdCQyxXQUFXLENBQUVKLE1BQU0sQ0FBQ0ksV0FBVyxDQUMvQkMsV0FBVyxDQUFFTCxNQUFNLENBQUNLLFdBQVcsQ0FDL0JDLEtBQUssQ0FBRU4sTUFBTSxDQUFDTSxLQUFLLENBQ25CQyxTQUFTLENBQUVQLE1BQU0sQ0FBQ08sU0FDdEIsQ0FBQyxFQUFDbkIsY0FBQSxHQUFBRSxDQUFBLE1BRUZrQixjQUFjLENBQUNDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNULFVBQVUsQ0FBQyxDQUFDLENBRXBFO0FBQUFkLGNBQUEsR0FBQUUsQ0FBQSxNQUNBQyxNQUFNLENBQUNxQixRQUFRLENBQUNDLElBQUksQ0FBRyxtQkFBbUIsQ0FDOUMsQ0FBRSxNQUFPQyxLQUFLLENBQUUsQ0FBQTFCLGNBQUEsR0FBQUUsQ0FBQSxPQUNaeUIsT0FBTyxDQUFDRCxLQUFLLENBQUMsbUNBQW1DLENBQUVBLEtBQUssQ0FBQyxDQUM3RCxDQUNKLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=