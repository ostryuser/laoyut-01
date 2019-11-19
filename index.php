<?php 
    $pageName = 'Company';
    require('header.php');
    require('contact.php')
?>
    <!-- BANNER -->
    <div class="banner">
            <h1>Build it beautiful.</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, alias.</h3>
    </div>

    <!-- BUTTON UP -->
    <button class="button-up"><i class="fas fa-chevron-up"></i></button>

    <div class="container">
        <main>

            <!-- ICON BOX -->
            <section>
                <div class="icon-box">
                    <ul>
                        <li>
                            <span class="fa-stack">
                                <i class="fa fa-circle fa-stack-2x icon-background"></i>
                                <i class="fab fa-fort-awesome fa-stack-1x"></i>
                            </span>
                            <h3>Profesjonalizm</h3>
                            <p>Najwyższy standard wykonania przez profesjonalistów z pasją do budowania</p>
                        </li>
                        <li>
                            <span class="fa-stack">
                                <i class="fa fa-circle fa-stack-2x icon-background"></i>
                                <i class="fas fa-archway fa-stack-1x"></i>
                            </span>
                            <h3>Konkurencyjne ceny</h3>
                            <p>Najlepszy stosunek ceny do jakości wykonania</p>
                        </li>
                        <li>
                            <span class="fa-stack">
                                <i class="fa fa-circle fa-stack-2x icon-background"></i>
                                <i class="fas fa-school fa-stack-1x"></i>
                            </span>
                            <h3>Terminowość</h3>
                            <p>Liczymy się z klientami, więc dbamy o terminowe realizacje</p>
                        </li>
                    </ul>
                </div>
            </section>

            <!-- CARDS -->
            <section class="hideme">
                <div class="cards-container">
                    <div class="card">
                        <div class="card-image"><div class="image-1"></div></div>
                        <div class="card-desc desc-1">
                            <h3></h3>
                            <button class="cards-button"></button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image"><div class="image-2"></div></div>
                        <div class="card-desc desc-2">
                            <button class="cards-button"></button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image"><div class="image-3"></div></div>
                        <div class="card-desc desc-3">
                            <button class="cards-button"></button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CALL TO ACTION -->
            <section class="hideme">
                <div class="cta">
                    <div class="cta-quote">
                        <h2>Jeśli interesuje Cię najwyższa jakość wykonania, skontaktuj się z nami!</h2>
                    </div>
                    <div class="cta-button">
                        <button onclick="scrollContact()">Kontakt</button>
                    </div>
                </div>
            </section>


        <!-- SLIDER -->

        <h2 class="slider-heading hideme">Przykładowe realizacje</h2>
    
        <div id="slider" class="slider hideme">
        <div class="wrapper">
          <div id="slides" class="slides">
            <span class="slide"><img src="img/slides/slide-1.jpg" alt=""></span>
            <span class="slide"><img src="img/slides/slide-2.jpg" alt=""></span>
            <span class="slide"><img src="img/slides/slide-3.jpg" alt=""></span>
            <span class="slide"><img src="img/slides/slide-4.jpg" alt=""></span>
            <span class="slide"><img src="img/slides/slide-5.jpg" alt=""></span>
            <span class="slide"><img src="img/slides/slide-6.jpg" alt=""></span>
            <span class="slide"><img src="img/slides/slide-7.jpg" alt=""></span>
            <span class="slide"><img src="img/slides/slide-8.jpg" alt=""></span>
            <span class="slide"><img src="img/slides/slide-9.jpg" alt=""></span>
          </div>
          
        </div>

        
        <a id="prev" class="control prev"><i class="fas fa-chevron-left"></i></a>
          <a id="next" class="control next"><i class="fas fa-chevron-right"></i></a>
       
      </div>

      <button class="orange-btn hideme">Zobacz więcej</button>

        <!-- TESTIMONIALS -->
        
                 <!--       <div id="slider-2" class="slider .testimonials-slider">
                <div class="wrapper">
                    <div id="slides-2" class="slides">
                    <span class="slide">Slide 1</span>
                    <span class="slide">Slide 2</span>
                    <span class="slide">Slide 3</span>
                    <span class="slide">Slide 4</span>
                    <span class="slide">Slide 5</span>
                    </div>
                </div>
                <a id="prev-2" class="control prev"></a>
                <a id="next-2" class="control next"></a>
                </div>

-->

          <!-- CAREER -->
          <section id="career">
              <div class="career-wrapper">
                  <div class="career-side career-left">
                      <div>
                        <h3>Dołącz do nas!</h3>
                        <p>Jesteśmy nowoczesną firmą, która stale się rozwija i szuka nowych pracowników. W naszym zespole
                            to szansa na zdobycie cennego zawodowego doświadczenia oraz pracy wśród profesjonalistów.
                            Najważniejsze dla nas to chęć doskonalenia się, motywacja i zaangażowanie.
                            Jeśli nie boisz się nowych wyzwań, to jesteś doskonałym kandydatem do pracy w naszej firmie.
                        </p>
                    </div>
                  </div>
                  <div class="career-side career-right">
                      <div>
                        <h2>CHCESZ Z NAMI WSPÓŁPRACOWAĆ?</h2>
                        <p>Firmy zainteresowane współpracą prosimy o składanie ofert na adres: <span>example@example.com</span>
                        Zastrzegamy, że skontaktujemy się tylko z wybranymi firmami.</p>
                        <div>
                            <h4>Nazwa firmy</h4>
                            <p>Siedziba główna</p>
                            <p>+48 000 00 00</p>
                            <p>example@example.com</p>
                        </div>
                    </div>
                  </div>
              </div>
          </section>

        </main>
</div>

<?php
    require('footer.php');
?>
