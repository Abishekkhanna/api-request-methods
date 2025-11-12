const url = "https://jsonplaceholder.typicode.com/users";
const xhr = new XMLHttpRequest();
xhr.open("GET",url,true);
xhr.onload = function() {
    if(xhr.status==200){
        const data = JSON.parse(xhr.responseText);
        console.log("XMLHttpRequest : ",data);
    }
}
xhr.send();

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log("fetch method : ",data));

axios.get(url).then((res) => console.log("Axios Method : ",res.data));



async function fetchData(){
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log("Async method : ",data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();