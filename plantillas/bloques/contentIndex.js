export function cargarIndex(isDirectiva) {
    let space = "";
    if (isDirectiva) {
        space = "../"
    }
    let content = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark" id="navBarBlock"></nav>
    
        <header class="content header">
            <h2 class="title">Junta de vecinos</h2>
            <div class="mi-div rounded presentation">
            <p>
            Somos una junta de vecinos de Quintero que se enorgullece de servir a esta comunidad con pasión y dedicación. 
            Nuestra misión es clara: fomentar la unión y mejorar la calidad de vida de todos los residentes.

            Trabajamos incansablemente para abogar por la seguridad y el bienestar de nuestro hermoso vecindario. A lo largo 
            de los años, hemos logrado grandes éxitos, desde la organización de eventos comunitarios exitosos hasta la implementación 
            de mejoras en la infraestructura local que benefician a todos.
            
            Sin embargo, también somos conscientes de los desafíos que enfrenta nuestra comunidad y estamos comprometidos a 
            abordarlos de manera efectiva. Queremos que todos los residentes de Quintero se sientan escuchados y representados en nuestras decisiones y acciones.
            
            Nos enorgullece contar con un equipo de directiva compuesto por un presidente, un tesorero y un secretario, cada 
            uno de los cuales aporta habilidades únicas para el beneficio de la comunidad. Trabajamos juntos con un enfoque en 
            la transparencia, la comunicación efectiva y la colaboración.
            
            Únete a nosotros en este emocionante viaje. Juntos, podemos continuar haciendo de Quintero un lugar maravilloso 
            para vivir y prosperar. ¡Nuestra puerta siempre está abierta para nuevos miembros comprometidos con el bienestar de nuestra comunidad!"
            </p>
            </div>
            
        </header>
        <section class="content about" id="Nosotros">
            <h2 class="title">
                <p></p>Nosotros
            </h2>
            <div class="mi-div">
            <p>Somos una junta de vecinos de Quintero que se enorgullece de ser el corazón de 
            nuestra querida vecindad. Somos un grupo de residentes 
            apasionados que trabajan juntos para hacer de nuestro vecindario un 
            lugar mejor para todos.
            </p>
            </div>
            <p>¿Quieres saber mas sobre lo que hacemos o sobre nuestros objetivos? Presione en saber mas.</p>
            <a href="nosotros.html" class="btn">Saber más</a>
            <br><br>
        </section>
        <section class="content sau" id="Directiva">
            <h2 class="title">Directiva</h2>
            <div class="mi-div">
            <p>Nuestra directiva está conformado por tres roles clave que trabajan juntos para el bienestar de nuestra comunidad:</p>
            <p>Presidente: Como líder principal, el presidente juega un papel fundamental en la toma de decisiones y la 
            representación de la comunidad. Estamos comprometidos a ser un líder que inspire, con habilidades de 
            liderazgo sólidas y la capacidad de motivar a nuestros miembros.</p>
            <p>Tesorero: Nuestro tesorero se encarga de la gestión financiera de la junta de vecinos. Nos enorgullece 
            tener un tesorero que es conocido por su precisión, organización y transparencia en la administración de los 
            fondos de la comunidad.</p>
            <p>Secretario: El secretario es esencial para la documentación y el registro de las actividades y decisiones 
            de la junta de vecinos. Valoramos la precisión y la capacidad de llevar registros como cualidades esenciales 
            para un secretario eficaz.</p>
            <p>Juntos, como equipo de directiva, estamos comprometidos a servir a nuestra comunidad y trabajar en su nombre 
            para lograr un vecindario más fuerte y unido.</p>
            </div>
    
            <div class="box-container">
                <div class="box">
                    <img src="../../${space}static/img/Index/agusto2.png" />
                    <h3>Presidente</h3>
                    <p>Augusto Veniam</p>
                </div>
                <div class="box">
                    <img src="../../${space}static/img/Index/galit2.png" />
                    <h3>Secretaria</h3>
                    <p>Galit Guzman</p>
                </div>
                <div class="box">
                    <img src="../../${space}static/img/Index/Suzana2.png" />
                    <h3>Tesorera</h3>
                    <p>Suzana Labor</p>
                </div>
            </div>
        </section>
    
        <section class="content about" id="Noticias">
            <h2 class="title">
                <p></p>Noticias
            </h2>
            <div class="mi-div">
            <p>En la Junta de Vecinos de Quintero, estamos comprometidos en mantener a nuestros 
            vecinos informados sobre las novedades y noticias más relevantes de nuestra zona. Creemos que una 
            comunidad informada es una comunidad más fuerte y capaz de tomar decisiones fundamentadas.
            </p>
            <p>En esta sección, encontrarás las últimas noticias y actualizaciones que afectan a nuestra comunidad 
            y alrededores. Estamos atentos a los temas que más preocupan a nuestros vecinos, desde mejoras en la 
            infraestructura local hasta eventos comunitarios emocionantes.
            </p>
            </div>
            <a href="noticias.html" class="btn">Saber más</a>
            <br><br>
    
        </section>
        <section class="content price" id="Actividades">
            <article class="contain">
                <h2 class="title">
                    <p></p>Actividades
                </h2>
                <p>En la Junta de Vecinos de Quintero, realizamos tantas actividades y eventos 
                como sea posible para enriquecer la vida de nuestros vecinos y fortalecer los lazos de nuestra 
                comunidad. Nuestro compromiso es fomentar la participación y el bienestar de todos los residentes.
                </p>
                <p>A lo largo del año, organizamos una amplia variedad de eventos, desde reuniones informativas y 
                talleres educativos hasta actividades recreativas y festivales comunitarios. Nuestra agenda está 
                diseñada para abordar las diversas necesidades e intereses de nuestra comunidad.
                </p>
    
                <a href="actividades.html" class="btn">Saber más</a>
                </p>
            </article>
        </section>
    
        <section class="content contact" id="Contacto">
            <h2 class="title">Contacto</h2>
            <p>+56948481548</p>
            <figure class="map">
                <a href="https://maps.app.goo.gl/oN6BhadqNebWFKa97">
                    <img src="../../${space}static/img/Index/mapa.png" height="220px" width="100%" alt="mapa">
                </a>
            </figure>
        </section>
        <footer>
            <div class="container">
                <p>&copy; Junta de vecinos 2023</p>
            </div>
        </footer>
    `;
    document.getElementById('contentIndex').innerHTML = content;
}
