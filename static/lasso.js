var LassoCRM = LassoCRM || {};
(function(ns) {
  ns.tracker = new LassoAnalytics("LAS-355170-01");
})(LassoCRM);
try {
  LassoCRM.tracker.setTrackingDomain("//app.lassocrm.com");
  LassoCRM.tracker.init(); // initializes the tracker
  LassoCRM.tracker.track(); // track() records the page visit with the current page title, to record multiple visits call repeatedly.
  LassoCRM.tracker.patchRegistrationForms();
} catch (error) {}
