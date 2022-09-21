<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ПроКамень</title>
        <link rel="stylesheet" href="../style/bootstrap.min.css">
        <link rel="stylesheet" href="../style/reset.css">
        <link rel="stylesheet" href="../style/style.css">
        <link rel="icon" href="../img/icon/brick_logo.png">
    </head>
    
    <body>
        <? require_once "../php/db.php"; ?>
        
        <header>
            <nav>
               <div class="menu">
                   <div class="container">
                       <div class="row, nav_block">
                           <div class="logo_block col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-8">
                               <a href="../index.php#main"><div class="logo_text"><p>Всё</p></div><div class="logo">ПРО КАМЕНЬ</div></a>
                           </div>
                           <div class="menu_block offset-xxl-0 col-xxl-8 offset-xl-1 col-xl-7 col-lg-7 d-lg-block d-none">
                               <ul>
                                   <li><a href="../index.php#service"><p>Услуги</p></a></li>
                                   <li><a href="../index.php#catalog"><p>Каталог</p></a></li>
                                   <li><a href="../index.php#deliver"><p>Доставка</p></a></li>
                                   <li><a href="../index.php#contact"><p>Контакты</p></a></li>
                               </ul>
                           </div>
                           <div class="dropdown offset-md-3 col-md-3 d-lg-none d-md-block d-none">
                               <button class="dropdown_button" type="button" data-bs-toggle="dropdown" aria-expanded="false"><p>Навигация</p></button>
                               <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                   <li><a href="../index.php#service"><p>Услуги</p></a></li>
                                   <li><a href="../index.php#catalog"><p>Каталог</p></a></li>
                                   <li><a href="../index.php#deliver"><p>Доставка</p></a></li>
                                   <li><a href="../index.php#contact"><p>Контакты</p></a></li>
                               </ul>
                           </div>
                           <div class="dropdown d-md-none offset-sm-3 col-sm-1">
                               <button class="dropdown_button_little dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                               <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                   <li><a href="../index.php#service"><p>Услуги</p></a></li>
                                   <li><a href="../index.php#catalog"><p>Каталог</p></a></li>
                                   <li><a href="../index.php#deliver"><p>Доставка</p></a></li>
                                   <li><a href="../index.php#contact"><p>Контакты</p></a></li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
            </nav>
        </header>
        
        <div class="nav_space"></div>
        
        <div class="catalog_full" id="catalog">
            <div class="container">
                <div class="row title_bl">
                    <h1>Каталог</h1>
                </div>
                <div class="row, catalog_block_full">
                    <div class="twice">
                        <?
                        $material = R::findAll('material','ORDER BY id');
                        foreach($material as $material_inf)
                        {
                        ?>  
                        <div class="material_link_full">
                            <div class="material_image" style="background: url(../<? echo $material_inf["picture"]; ?>) center/cover;">
                                <div class="mid_image"></div>
                            </div>
                            <p><? echo $material_inf["name"]; ?></p>
                        </div>
                        <?
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>
        
        <footer>
            <div class="container">
                <div class="row">
                    <p>Copyright © 2022 ArtBell. Desing by Web</p>
                </div>
            </div>
        </footer>
        
        <script src="../script/preconfig/jquery-3.6.1.min.js"></script>
        <script src="../script/preconfig/bootstrap.bundle.min.js"></script>
        <!-- <script src="../script/js/mail.js"></script> -->
        <script src="../script/js/animation.js"></script>
        
    </body>
</html>