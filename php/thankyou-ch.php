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
        感谢您的关注
      </h1>
      <p>
          <span class='desktop-pre'>登记Sun Tower 2可确保您会第一时间收到我们提供的更新和信息。</span>
        <span class='desktop-pre'>您还可以在公开开放前，预览我们的展销中心。</span>
      </p>
      <?php if ($_GET['agent']=='1') { ?>
      <div class='btn-holder'>
        <p style='font-size: 13.5px;'>您可以在此处下载营销材料</p> 
        <a class='btn' target='_blank' href='https://drive.google.com/drive/folders/1qurni7TdxYyUSUNtCertJNOfnXYpzahT?usp=sharing'>下载PDF</a>
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


