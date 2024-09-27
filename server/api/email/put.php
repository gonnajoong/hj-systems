<?
echo($_POST['template_params']);

$ConsumerName = $_POST['ConsumerName'];
$CompanyName = $_POST['CompanyName'];
$Position = $_POST['Position'];
$Contact = $_POST['Contact'];
$EmailAddress = $_POST['EmailAddress'];
$Address = $_POST['Address'];
$LiquidTablet = $_POST['LiquidTablet'];
$PenTablet = $_POST['PenTablet'];
$InquiryTitle = $_POST['InquiryTitle'];
$InquiryContents = $_POST['InquiryContents'];
$TermsEssential = $_POST['TermsEssential'];
$ServiceTermsEssential = $_POST['ServiceTermsEssential'];
$CreateDate = date("Y-m-d H:i:s");

echo('=======');
echo($_POST['data']);

$conn = mysqli_connect("db.hjsystems.gabia.io", "hjsystems", "hj191001!", "dbhjsystems");


mysqli_query($conn, "
    INSERT INTO essential_user (
        ConsumerName,
        CompanyName,
        Position,
        Contact,
        EmailAddress,
        Address,
        LiquidTablet,
        PenTablet,
        InquiryTitle,
        InquiryContents,
        TermsEssential,
        ServiceTermsEssential,
        CreateDate
    ) VALUES (
        '$ConsumerName',
        '$CompanyName',
        '$Position',
        '$Contact',
        '$EmailAddress',
        '$Address',
        '$LiquidTablet',
        '$InquiryTitle',
        '$InquiryContents',
        '$TermsEssential',
        '$ServiceTermsEssential',
        '$CreateDate',
    )");

    $result = mysqli_query($conn, $sql);
    if($result === false) {
        echo mysqli_error($conn);
    }
?>