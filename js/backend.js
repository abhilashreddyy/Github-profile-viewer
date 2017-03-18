window.onload = function(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = myCallback;
  xhr.open("GET",'https://api.github.com/users/'+sessionStorage.login_user,true);
  xhr.send('');
  function myCallback(){
    if(xhr.readyState < 4){
      return;
    }
    if(xhr.status != 200){
      alert(error);
      return ;
    }
    var user = JSON.parse(xhr.responseText);
    if(user.login == sessionStorage.login_user)
    {
        console.log(user);
        var img_url = user.avatar_url;
        document.getElementById("image").setAttribute("src",user.avatar_url);
        document.getElementById("repos").innerHTML = user.public_repos;
        document.getElementById("followers").innerHTML = user.followers;
        document.getElementById("following").innerHTML = user.following;
        var xhr1 = new XMLHttpRequest();
        xhr1.onreadystatechange = myCallback2;
        xhr1.open('GET',user.repos_url,true);
        xhr1.send('');
        function myCallback2(){
          if(xhr1.readyState < 4 ){
            return ;
          }
          if(xhr1.status != 200 ){
            return ;
          }
          var repositories = JSON.parse(xhr1.responseText);
          console.log(repositories);
            for(i = 0; i < user.public_repos; i++){
              if(repositories[i] != null){
                var txt =String(repositories[i].description);
                var div_i = document.createElement('div');
                var t1 = document.createElement("p");
                var t2 = document.createElement('p');
                t1.innerHTML =  repositories[i].name;
                t1.className = "overview_head";
                if(txt.length > 100){
                  txt = repositories[i].description.slice(0,95)+"....";
                }
                t2.innerHTML = txt;
                t2.className = "overview_message"
                div_i.appendChild(t1);
                if(txt != 'null'){
                  div_i.appendChild(t2);
                }
                div_i.className = "inner_overview_div";
                document.getElementsByClassName('overview_div')[0].appendChild(div_i);
              }
            }
         }
    }
  }

}
