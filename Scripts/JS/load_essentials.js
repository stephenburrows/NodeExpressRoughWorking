document.getElementById("myNav").setAttribute("class","navbar navbar-expand-md navbar-light bg-light sticky-top")
   document.getElementById("myNav").innerHTML =
  `<div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <img src="img/Albion.png" style="height: 75px" >
        <!-- Collapse button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavId">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
         <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Service</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Team</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">conect</a>
              </li>
          </ul>
   
        </div>
        </div>`;

document.getElementById("myFooter").innerHTML =
`<blockquote class="blockquote text-center">
    <p id='copyright'>Copyright &copy; ${  new Date().getFullYear()}Albion Software
      rights reserved.</p>
    </blockquote>`;

   document.getElementById("myHead").innerHTML =
	`<span id='headerText'>Title</span>
	<span id='headerSubtext'>Subtitle</span>`;