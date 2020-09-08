navbar.innerHTML = `<nav id="nav" class="uk-navbar-container uk-margin" uk-navbar>
<div class="uk-navbar-left">    
    <a class="uk-navbar-item uk-logo" href="#"><img src="/img/logo_nav.png" width="150px" alt=""></a>        
</div>
<div class="uk-navbar-right uk-visible@m" >
    <form class= "uk-navbar-item" action="javascript:void(0)">
        <button class="uk-button uk-button-default fNormal" type="submit" onclick="window.location.href='/login'" style="border-radius: 1em;">Iniciar Sesión</button> &nbsp;
        <button class="uk-button uk-button-primary primary fNormal" style="border-radius: 1em;">Registrarse</button>
    </form>
</div>  

<div class="uk-navbar-right uk-hidden@m fNormal" >
    <div class="uk-inline">
        <button class="uk-button-small uk-button-primary primary" type="button" style="border-radius: 0.7em;"><span uk-icon="icon:chevron-down">Comenzar</span></button>
        <div uk-dropdown="pos: bottom-right">
            <ul class="uk-nav uk-dropdown-nav">
                
                <li class="uk-active"><a href="login"><span uk-icon="icon:sign-in"></span>Iniciar sesión</a></li>
                <li class="uk-active"><a href="#"><span uk-icon="icon:file-edit"></span>Registrarse</a></li>
            </ul> 
    </div>
</div> 
</nav>`;