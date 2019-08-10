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
    <title>New Metrotown Condos in Burnaby, BC | Sun Towers 2 | suntowersmetrotown.com</title>
    <meta name="description" content="Register now for your opportunity to purchase Burnaby’s most highly desired and highly anticipated condo development just steps from Metrotown Mall and Skytrain station.">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, minimal-ui" />
    <!-- Fonts -->
    <style>
    </style>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="<?php echo $root; ?>assets/vendor/bootstrap-grid.min.css" rel="stylesheet">
    <link href="<?php echo $root; ?>assets/main.css?v=<?php echo $VERSION; ?>" rel="stylesheet">

    <!-- Favicon: START -->
    <link rel="shortcut icon" href="<?php echo $root; ?>favicon.ico" />
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

