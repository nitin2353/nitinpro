function generateText(){
    var x = document.getElementById("inputText").value;
    console.log(x);
    let url = `https://www.google.com/search?q=${x}&oq=&aqs=chrome.6.35i39i362l8.28297j0j7&sourceid=chrome&ie=UTF-8`
    if(x!=''){
        window.location.href = url;
    }else{
        document.getElementById('outputText').innerText = "Search Anything!!"
    }
}
    
