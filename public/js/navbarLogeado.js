navbarLogeado.innerHTML = `<!-- navbar -->
<nav id="nav" class="uk-navbar-container uk-margin uk-light" uk-navbar>
<div class="uk-navbar-left">    
    <a class="uk-icon-button" uk-icon="menu" uk-toggle="target: #offcanvas-nav"></a>
    <a class="uk-navbar-item uk-logo" href="/"><img src="/img/logo_nav.png" width="150px" alt=""></a>        
</div>
<div class="uk-navbar-right uk-visible@m" >
    <form class= "uk-navbar-item" action="javascript:void(0)">
    <a class="uk-icon-button" uk-icon="bell" uk-toggle="target: #offcanvas-nav"></a> &nbsp;
        <button class="uk-button uk-button-primary primary fNormal" onclick="window.location.href='/'" style="border-radius: 1em;">Cerrar Sesión</button>
    </form>
</div> 

<div class="uk-navbar-right uk-hidden@m fNormal" >
<a class="uk-icon-button" uk-icon="bell"></a> &nbsp;
<a class="uk-icon-button primary" uk-icon="sign-out"href="/"></a> &nbsp;
</div> 
</nav>

<!-- off- canvas -->
   
    <div id="offcanvas-nav" uk-offcanvas="overlay: true">
        <div class="uk-offcanvas-bar" style="background-color: #4A4A4A;">
    
            <div class="uk-width-auto center">
                <img class="uk-comment-avatar" src="img/96x96.png" width="80" height="80" alt="">
                <p class="uk-flex uk-flex-nowrap fNormal uk-text-uppercase uk-text-truncate">Samanta Vianey Rubio García</p>
            </div> <hr class="uk-divider-icon">
            <ul class="uk-nav fNormal">
            <li><a href="/home"><span class="uk-margin-small-right" uk-icon="icon: home"></span> Inicio</a></li>
                <li class="uk-margin-small-top"><a href="/chats"><span class="uk-margin-small-right" uk-icon="icon: commenting"></span> Conversaciones</a></li>
                <li class="uk-margin-small-top"><a href="/classes"><span class="uk-margin-small-right" uk-icon="icon: calendar"></span> Clases</a></li>
                <li class="uk-margin-small-top"><a href="/payments"><span class="uk-margin-small-right" uk-icon="icon: credit-card"></span> Pagos</a></li>
                <br><br>
                <li class="uk-margin-small-top"><a href="#"><span class="uk-margin-small-right" uk-icon="icon: cog"></span> Configuración</a></li>
            </ul>
    
        </div>
    </div>`;