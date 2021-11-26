const mySidenav = document.getElementById("mySidenav");
const wrapper = document.getElementById("wrapper");

function openNav() {
  const screenwidth = document.body.clientWidth;
  if (screenwidth < 415) {
    mySidenav.style.width = screenwidth.toString()+"px";
    wrapper.style.marginLeft = screenwidth.toString()+"px";
  }
    
  else {
    mySidenav.style.width = "250px";
    wrapper.style.marginLeft = "250px";
  }
}

function closeNav() {
  mySidenav.style.width = "0";
  wrapper.style.marginLeft= "0";
}