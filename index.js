function openNav() {
    const screenwidth = document.body.clientWidth;

    if (screenwidth < 415) {
        document.getElementById("mySidenav").style.width = screenwidth.toString()+"px";
        document.getElementById("main").style.marginLeft = screenwidth.toString()+"px";
    }
    else {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }