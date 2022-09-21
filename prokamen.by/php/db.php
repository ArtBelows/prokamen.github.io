<?

require_once "rb.php";

R::setup("mysql:host=127.0.0.1;dbname=prokamen","prokamen","2020pro2020");

if(!R::testConnection())
    exit("Нет подключения к базе данных");

?>