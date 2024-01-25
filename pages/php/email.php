<?
$to="dam2202@naver.com";
$ConsumerName=$_REQUEST['ConsumerName'];
$CompanyName=$_REQUEST['CompanyName'];
$Position = $_REQUEST['Position'];
$Contact = $_REQUEST['Contact'];
$EmailAddress = $_REQUEST['EmailAddress'];
$Address = $_REQUEST['Address'];
$LiquidTablet = $_REQUEST['LiquidTablet'];
$PenTablet = $_REQUEST['PenTablet'];
$InquiryTitle = $_REQUEST['InquiryTitle'];
$InquiryContents = $_REQUEST['InquiryContents'];
$TermsEssential = $_REQUEST['TermsEssential'];
$ServiceTermsEssential = $_REQUEST['ServiceTermsEssential'];

$content .= "\r\n\n\n\n\n\n\n\n\n\n\n\n\n - identity - \r\n";
$content .= "name:".$ConsumerName."\r\n";
$content .= "from:".$EmailAddress."\r\n"; 

$headers = "from:".$EmailAddress."\r\n";    
$InquiryTitle = iconv('utf-8', 'euc-kr', $InquiryTitle);
$InquiryContents = iconv('utf-8', 'euc-kr', $InquiryContents);
         $result = mail($to, $InquiryTitle, $InquiryContents, $headers);
echo "false";

?>