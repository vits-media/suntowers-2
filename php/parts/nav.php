<?php
function renderNav($languageLink = "./ch", $activeLanguage='en') {
?>

<header id='nav' react-to-scroll='0'>
  <div class='mobile-mask'></div>
  <div class='logo'>
    <a href='http://suntowersmetrotown.com/suntower-2'>
      <?php include __DIR__ . '/../assets/images/mlogo.svg'; ?>
    </a>
  </div>
  <div class='button language'>
    <a 
      class='<?php echo $activeLanguage == 'en' ? "active" : "";  ?>'
      href='<?php echo $activeLanguage == 'ch' ? $languageLink : ""; ?>'>EN</a>
    <div class='divider'>|</div>
    <a 
      class='<?php echo $activeLanguage == 'ch' ? "active" : "";  ?>' 
      href='<?php echo $activeLanguage == 'en' ? $languageLink : ""; ?>'>中文</a>  
  </div>
</header>

<?php
}
?>
