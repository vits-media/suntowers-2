<?php
require('LassoLead.php');
require('RegistrantSubmitter.php');
/*
 * These variables should only be attached to the request on the server side
 */
$clientId  = '1319';
$projectId = '11512';
$templateId = '482911';
/*
 * This is a security token and should be kept private and should not be a
 * hidden field on your registration page
 */
$apiKey = 'gk9B)z$}9R';
if (empty($clientId) || empty($projectId) || empty($apiKey)) {
    throw new Exception('Required parameters are not set, please
                       check that your $clientId, $projectId and $apiKey are
                       configured correctly');
}

$data = $_REQUEST;


/*
 * Constructing and submitting a lead:
 * Map your forms fields into the lead object and submit
 */
$lead = new LassoLead($data['firstName'],
    $data['lastName'],
    $projectId,
    $clientId);
$lead->addEmail($data['email']);
$lead->addPhone($data['phone']);
$lead->addAddress($data['address'],
    $data['city'],
    $data['province'],
    $data['postal'],
    $data['country']);
$lead->sendAssignmentNotification();
$lead->sendAutoReplyThankYouEmail($templateId);

$lead->answerQuestionById(63320, $data['HowHear']);
$lead->answerQuestionByIdForText(63321, $data['HowHearOther']);
$lead->answerQuestionById(63393, $data['HomeType']);
$lead->answerQuestionById(63394, $data['Budget']);
$lead->answerQuestionById(63395, $data['WorkingWithRealtor']);
$lead->answerQuestionByIdForText(63396, $data['RealtorName']);
$lead->answerQuestionByIdForText(63397, $data['RealtorPhone']);
$lead->answerQuestionByIdForText(63398, $data['RealtorBrokerage']);
$lead->answerQuestionById(63319, $data['IAmRealtor']);

/**
 * Notes
 *
 * Added during submission by using the following
 *
 * $lead->addNote("I would like this comment recorded");
 */
/**
 * Rating
 *
 * Submitted as a string or using the ratingId
 *
 * $lead->setRating('N');
 *
 * $lead->setRatingId(1);
 */
/**
 * Website Tracking
 *
 * Associated with the submission as follows
 * tracking must be installed on the site and the value from the tracking
 * javascript LassoCRM.tracker.readCookie("ut");
 *
 * $lead->setWebsiteTracking("LAS-130457-02", "8FD6985D-D82C-4D4A-AF21-69989C933959");
 */

$lead->setWebsiteTracking($data['domainAccountId'], $data['guid']);

 /**
 * Questions
 *
 * Submitted either using string or ids
 *
 * Passing in a folder path will create the question if it does not exist. Note
 * that if the folder is moved in Lasso it will recreate it if the submissions
 * path is not updated as well
 *
 * $lead->addQuestion('\TheProject\Registration', 'How Heard', 'Newsletter');
 *
 * Questions can be answered by Id by setting questionId and answerId or Ids
 * $lead->answerQuestionById(2, [5,6]);
 * $lead->answerQuestionById(1, 2);
 *
 * Free form text questions can be answered by passing the questionId and an answer string
 * $lead->answerQuestionByIdForText($questionId, $answerText);
 */
/**
 * Auto Replay Emails
 *
 * The auto reply email content can be specified by passing in a templateId
 * with the submission.
 *
 * $lead->sendAutoReplyThankYouEmail($templateId);
 */
/**
 * Sales Rep Rotation
 * 
 * By passing in a rotationId a specific group of sales people can be assigned
 * the registrants that are submitted
 *
 * $lead->setRotationId($rotationId);
 */

$submitter = new RegistrantSubmitter();
$curl      = $submitter->submit('https://api.lassocrm.com/registrants', $lead, $apiKey);
/*
 * ---------------------------------------------------------------
 * Troubleshooting examples
 * ---------------------------------------------------------------
 */
/* Viewing the submission body */

echo json_encode($lead->toArray());
/* Getting the response servers response code */
//echo curl_getinfo($curl, CURLINFO_HTTP_CODE);
/* Getting all details of the cUrl request */
//print_r(curl_getinfo($curl));