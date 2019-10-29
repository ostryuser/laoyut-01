<?php
    // Message Vars
    $msg = '';
    $msgClass = '';


    // Check for Submit
    if(filter_has_var(INPUT_POST, 'submit')) {
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);

        // Check Required Fields
        if(!empty($email) && !empty($name) && !empty($message)){
            // Passed
            // Check Email
            if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
                // Failed
                $msg = 'Please use a valid email';
                $msgClass = 'alert-danger';
            } else {
                // Passed
                $toEmail = 'ostryuser@gmail.com';
                $subject = 'Contact Request From '.$name;
                $body = '<h2>Contact Request</h2>
                         <h4>Name</h4><p>'.$name.'</p>
                         <h4>Email</h4><p>'.$email.'</p>
                         <h4>Message</h4><p>'.$message.'</p>
                         ';
                // Email Headers
                $headers = "MIME-Version: 1.0"."\r\n";
                $headers .="Content-Type:text/html;charset=UTF-8" . "
                \r\n";

                // Additional Headers
                $headers .= "From: " .$name. "<".$email.">". "\r\n";

                if(mail($toEmail, $subject, $body, $headers)){
                    // Email Sent
                    $msg = 'Your email has been sent';
                    $msgClass = 'alert-success';
                } else {
                    // Failed
                    $msg = 'Your email was not sent';
                    $msgClass = 'alert-danger'; 
                }

            }
        } else {
            // Failed
            $msg = 'Please fill in all fields';
            $msgClass = 'alert-danger'; 
        }
    }
?>


<!DOCTYPE html>
<html lang="en">
<head>
        <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Oswald:400,700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700,800&display=swap" rel="stylesheet"> 
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    

    <!-- jQuery -->
    <script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous">
    </script>

    <!-- FONT AWESOME -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/cf529eda0d.js"></script>

    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css">
   

    <title>Document</title>
</head>
<body>
    <!-- SCROLL INDICATOR-->
    <div class="progress-container">
        <div class="progress-bar" id="myBar"></div>
    </div> 

    <!-- NAVIGATION -->
    <header id="header">
            <div class="logo"></div> 
            <nav>
                <ul>
                    <li><a href="#" class="current-page">Home</a></li>
                    <li><a href="#">O nas</a></li>
                    <li><a href="#">Usługi</a></li>
                    <li><a href="#">Realizacje</a></li>
                    <li><a href="#">Kariera</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </nav>
    </header>

    <!-- BANNER -->
    <div class="banner">
        <h1>Build it beautiful.</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, alias.</h3>
    </div>

    
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
            <section>
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
            <section>
                <div class="cta">
                    <div class="cta-quote">
                        <h2>Jeśli interesuje Cię najwyższa jakość wykonania, skontaktuj się z nami!</h2>
                    </div>
                    <div class="cta-button">
                        <button>Kontakt</button>
                    </div>
                </div>
            </section>


        <!-- SLIDER -->
        <section>
            <div class="slider-container">

                <div class="slider-wrapper">
                <div class="inner-wrapper">
                    <div class="slide"><img src="img/slides/slide-1.jpg" alt="example-slide-1"></div>
                    <div class="slide"><img src="img/slides/slide-2.jpg" alt="example-slide-2"></div>
                    <div class="slide"><img src="img/slides/slide-3.jpg" alt="example-slide-3"></div>
                    <div class="slide"><img src="img/slides/slide-4.jpg" alt="example-slide-4"></div>
                    <div class="slide"><img src="img/slides/slide-5.jpg" alt="example-slide-5"></div>
                    <div class="slide"><img src="img/slides/slide-6.jpg" alt="example-slide-6"></div>
                    <div class="slide"><img src="img/slides/slide-7.jpg" alt="example-slide-7"></div>
                    <div class="slide"><img src="img/slides/slide-8.jpg" alt="example-slide-8"></div>
                    <div class="slide"><img src="img/slides/slide-9.jpg" alt="example-slide-9"></div>
                </div>
                </div>
            
                <div class="button prev"></div>
                <div class="button next"></div>
            </div>
          </section>

          <!-- CAREER -->
          <section>
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



    <footer>
        <div class="contact-form-container">
            <div class="contact-form">
            <h2>Kontakt</h2>
                <?php if($msg != ''): ?>
                    <div class="alert <?php echo $msgClass; ?>"><?php 
                    echo $msg; ?></div>
                <?php endif; ?>
            <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                <div class="txtb">
                    <label></label>
                    <input type="text" name="name" class="input-cap"
                    value="<?php echo isset($_POST['name']) ? $name : ''; ?>" placeholder="IMIĘ">
                </div>
                <div class="txtb">
                    <label></label>
                    <input type="text" name="email" class="input-low"
                    value="<?php echo isset($_POST['email']) ? $email : ''; ?>" placeholder="EMAIL">
                </div>
                <div class="txtb">
                    <label></label>
                    <textarea name="message" placeholder="WIADOMOŚĆ"><?php echo isset($_POST['message']) ? $message : ''; ?></textarea>
                </div>
                <br>
                <button type="submit" name="submit" class="form-btn">Wyślij</button>
            </form>
        </div>
        </div>
        <div class="google-map"></div>
    </footer>


        

   
    <!-- JS FILES -->
    <script type="text/javascript" src="JS/main.js"></script> 
</body>
</html>