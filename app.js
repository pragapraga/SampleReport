function preview(){
    let environment = document.getElementById('env').value;   
    console.log(environment);
    var branchName = document.getElementById("branch").value;
    alert(environment+'-'+branchName);
}