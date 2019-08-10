<?php 
function foot($root="", $type='default') { 
include __DIR__ . '/../version.php';
?>
<!--  <script src="--><?php //echo $root; ?><!--assets/main.min.js?v=--><?php //echo $VERSION; ?><!--"></script>-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="assets/app.js"></script>
<?php 
  if ($type=='default') {
?>
  <!-- Lasso Tracking -->
  <script src="//app.lassocrm.com/analytics.js" type="text/javascript"></script>
  <script type="text/javascript">
  <!--
  var LassoCRM = LassoCRM || {};
  (function(ns){
      ns.tracker = new LassoAnalytics('LAS-661655-03');
  })(LassoCRM);
  try {
      LassoCRM.tracker.setTrackingDomain("//app.lassocrm.com");
      LassoCRM.tracker.init();  // initializes the tracker
      LassoCRM.tracker.track(); // track() records the page visit with the current page title, to record multiple visits call repeatedly.
      //@--
  } catch(error) {}
  -->
  </script>
  <!-- Lasso Tracking -->
<?php 
  }
?>



<?php 
  if ($type=='form') {
?>
<script src="//app.lassocrm.com/analytics.js" type="text/javascript"></script>
<script type="text/javascript">
<!--
var LassoCRM = LassoCRM || {};
(function(ns){
    ns.tracker = new LassoAnalytics('LAS-661655-03');
})(LassoCRM);
try {
    LassoCRM.tracker.setTrackingDomain("//app.lassocrm.com");
    LassoCRM.tracker.init();  // initializes the tracker
    LassoCRM.tracker.track(); // track() records the page visit with the current page title, to record multiple visits call repeatedly.
    LassoCRM.tracker.patchRegistrationForms();
} catch(error) {}
-->
</script>
<?php 
  }
?>


  </body>
</html>
<?php } ?>
