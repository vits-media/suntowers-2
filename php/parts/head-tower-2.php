<?php
function head($root='', $pageName) {
include __DIR__ . '/../version.php';
?>
<!doctype html>
<html class="no-js" lang="en">
  <head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-42375863-3"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
     
      gtag('config', 'UA-42375863-3');
    </script>

    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Burnaby Condos Coming Soon | Sun Towers 2 in Metrotown | suntowersmetrotown.com</title>
    <meta name="description" content="Sun Towers 2, an elegant sanctuary that puts you just steps from Metropolis at Metrotown Mall and Skytrain station. Register today for this highly anticipated condo development coming soon to Burnaby.">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, minimal-ui" />
    <!-- Fonts -->
    <style>
    </style>
    <link href="<?php echo $root; ?>assets/vendor/bootstrap-grid.min.css" rel="stylesheet">
    <link href="<?php echo $root; ?>assets/main.css?v=<?php echo $VERSION; ?>" rel="stylesheet">

    <!-- Favicon: START -->
    <link rel="shortcut icon" href="<?php echo $root; ?>favicon.ico" /> 
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo $root; ?>apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo $root; ?>favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo $root; ?>favicon-16x16.png">
    <link rel="manifest" href="<?php echo $root; ?>site.webmanifest">
    <link rel="mask-icon" href="<?php echo $root; ?>safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#00aba9">
    <meta name="theme-color" content="#ffffff">
    <!-- Favicon: END -->
  </head>

  <body data-page='<?php echo $pageName; ?>'>
  <!--[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]-->
<?php } ?>

