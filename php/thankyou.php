<?php include 'parts/head.php';
  head('../../', 'thankyou');
?>
<div id='main'>
  <section class='thankyou'>
    <div class='element-left'></div>
    <div class='element-right'></div>
    <div class='content'>
      <img src='assets/images/logo.svg' width='62' />
      <h1 class='vinter'>
        THANK YOU FOR YOUR INTEREST
      </h1>
      <p>
          Registering for Sun Towers 2 ensures you will receive updates and information as we make it available. You will also have the opportunity to preview our presentation centre in prior to our public opening.
      </p>
      <?php if ($_GET['agent']=='1') { ?>
      <div class='btn-holder'>
        <p style='font-size: 13.5px;'>You can download marketing materials here</p> 
        <a class='btn' target='_blank' href='https://drive.google.com/drive/folders/1qurni7TdxYyUSUNtCertJNOfnXYpzahT?usp=sharing'>DOWNLOAD PDF</a>
      </div>
      <?php } else { ?>
      <div class='btn-holder'>
        <a class='btn' href='/'>DONE</a>
      </div>
      <?php } ?>
      <p class='contact'>
        info@suntowersmetrotown.com<br />
      </p>
    </div>
  </section>
</div>
<?php include 'parts/footer.php'; ?>
<?php include 'parts/foot.php';
  footer();
  foot('../../');

?>


