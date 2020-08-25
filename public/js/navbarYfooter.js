navbar.innerHTML = `<nav id="nav" class="uk-navbar-container uk-margin" uk-navbar>
<div class="uk-navbar-left">    
    <a class="uk-navbar-item uk-logo" href="#"><img src="/img/logo_nav.png" width="150px" alt=""></a>        
</div>
<div class="uk-navbar-right uk-visible@m" >
    <form class= "uk-navbar-item" action="javascript:void(0)">
        <button class="uk-button uk-button-default" type="submit" onclick="window.location.href='/login'" style="border-radius: 1em;">Iniciar Sesión</button> &nbsp;
        <button class="uk-button uk-button-primary primary" style="border-radius: 1em;">Registrarse</button>
    </form>
</div>  

<div class="uk-navbar-right uk-hidden@m" >
    <div class="uk-inline">
        <button class="uk-button-small uk-button-primary primary" type="button" style="border-radius: 0.7em;"><span uk-icon="icon:chevron-down">Comenzar</span></button>
        <div uk-dropdown>
            <ul class="uk-nav uk-dropdown-nav">
                <li class="uk-active"><a href="login"><span uk-icon="icon:sign-in"></span>Iniciar sesión</a></li>
                <li class="uk-active"><a href="#"><span uk-icon="icon:file-edit"></span>Registrarse</a></li>
            </ul>
    </div>
</div> 
</nav>`;

footer.innerHTML = `<div class="uk-section primary uk-light">
<div class="uk-container">

    <h3 class="fLight">XOOK</h3>

    <div class="uk-grid-match uk-child-width-1-4@m fBold" uk-grid>
        <div>
            <p>© Copyright 2020</p>
        </div>
        <div>
            <p>Aviso legal</p>
            <p>Política de privacidad</p>
            <p>Condiciones de contratación</p>
        </div>
        <div>
            <p><span uk-icon="icon:receiver"></span> CONTACTANOS</p>
            <p>(+52) 341-411-64-44</p>
            <p>xook@gmail.com</p>
        </div>
        <div>
            <p>SIGUENOS</p>
            <a href="" class="uk-icon-button" uk-icon="twitter"></a>
            <a href="" class="uk-icon-button" uk-icon="facebook"></a>
            <a href="" class="uk-icon-button" uk-icon="instagram"></a>
        </div>
        
    </div>

</div>
</div>`;