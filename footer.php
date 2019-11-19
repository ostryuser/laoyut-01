<footer>
        <div class="contact-form-container" id="contact">
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