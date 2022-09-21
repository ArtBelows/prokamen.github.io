<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ПроКамень</title>
        <link rel="stylesheet" href="style/bootstrap.min.css">
        <link rel="stylesheet" href="style/reset.css">
        <link rel="stylesheet" href="style/style.css">
        <link rel="icon" href="img/icon/brick_logo.png">
    </head>
    
    <body>
        <? require_once "php/db.php"; ?>
        
        <header>
            <nav>
               <div class="menu">
                   <div class="container">
                       <div class="row, nav_block">
                           <div class="logo_block col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-8">
                               <a href="#main"><div class="logo_text"><p>Всё</p></div><div class="logo">ПРО КАМЕНЬ</div></a>
                           </div>
                           <div class="menu_block offset-xxl-0 col-xxl-8 offset-xl-1 col-xl-7 col-lg-7 d-lg-block d-none">
                               <ul>
                                   <li><a href="#service"><p>Услуги</p></a></li>
                                   <li><a href="#catalog"><p>Каталог</p></a></li>
                                   <li><a href="#deliver"><p>Доставка</p></a></li>
                                   <li><a href="#contact"><p>Контакты</p></a></li>
                               </ul>
                           </div>
                           <div class="dropdown offset-md-3 col-md-3 d-lg-none d-md-block d-none">
                               <button class="dropdown_button" type="button" data-bs-toggle="dropdown" aria-expanded="false"><p>Навигация</p></button>
                               <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                   <li><a href="#service"><p>Услуги</p></a></li>
                                   <li><a href="#catalog"><p>Каталог</p></a></li>
                                   <li><a href="#deliver"><p>Доставка</p></a></li>
                                   <li><a href="#contact"><p>Контакты</p></a></li>
                               </ul>
                           </div>
                           <div class="dropdown d-md-none offset-sm-3 col-sm-1">
                               <button class="dropdown_button_little dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                               <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                   <li><a href="#service"><p>Услуги</p></a></li>
                                   <li><a href="#catalog"><p>Каталог</p></a></li>
                                   <li><a href="#deliver"><p>Доставка</p></a></li>
                                   <li><a href="#contact"><p>Контакты</p></a></li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
            </nav>
        </header>
        
        <div class="nav_space"></div>
        
        <div class="main" id="main">
            <div class="midlayer">
                <div class="container">
                    <div class="row, main_block">
                        <div class="title">
                            <h1>ЧЕМ МЫ ЗАНИМАЕМСЯ</h1>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
        
        <div class="service" id="service">
            <div class="container">
               <div class="row title_bl">
                   <h1>Услуги</h1>
               </div>
               <div class="row, service_block">
                  <div class="bars_block">
                      <p>Материалы</p>
                      <div class="select" id="select_head1">
                          <div class="select_head"><p>Выберите пункт...</p></div>
                          <ul class="select_list" id="select1">
                              <li class="select_item" id="type1" price="300">Габбро</li>
                              <li class="select_item" id="type2" price="200">Амфиболит</li>
                              <li class="select_item" id="type2" price="400">Дымовский</li>
                              <li class="select_item" id="type2" price="300">Мансуровский</li>
                          </ul>
                      </div>
                      <p>Вид изделия</p>
                      <div class="select" id="select_head2">
                          <div class="select_head">Выберите пункт...</div>
                          <ul class="select_list" id="select2">
                              <li class="select_item" id="type_work1" price="100">СТЕЛЛА полировка с 2-х сторон</li>
                              <li class="select_item" id="type_work2" price="100">ТУМБА полировка с 5-и сторон</li>
                              <li class="select_item" id="type_work3" price="200">ЦВЕТНИК полировка с 2-х сторон</li>
                              <li class="select_item" id="type_work4" price="100">ПЛИТА полировка с 1-й стороны</li>
                              <li class="select_item" id="type_work5" price="300">ЦОКОЛЬ полировка с 3-х сторон</li>
                              <li class="select_item" id="type_work6" price="300">СТОЛБИКИ полировка с 4-х сторон</li>
                              <li class="select_item" id="type_work7" price="400">СТОЛБИКИ полировка с 5-и сторон</li>
                              <li class="select_item" id="type_work8" price="100">полировка с 2-х сторон</li>
                          </ul>
                      </div>
                      <p>Размеры</p>
                      <div class="select" id="select_head3">
                          <div class="select_head">Выберите пункт...</div>
                          <ul class="select_list" id="select3">
                              <li class="select_item" id="type_size1" price="100">800х400х50</li>
                              <li class="select_item" id="type_size2" price="100">1000х500х50	</li>
                              <li class="select_item" id="type_size3" price="100">1200х50х50</li>
                              <li class="select_item" id="type_size4" price="100">800х400х60</li>
                              <li class="select_item" id="type_size5" price="100">1000х500х60	</li>
                              <li class="select_item" id="type_size6" price="100">1200х500х60	</li>
                              <li class="select_item" id="type_size7" price="100">800х400х70</li>
                              <li class="select_item" id="type_size8" price="100">1000х500х70</li>
                              <li class="select_item" id="type_size9" price="100">1200х500х70</li>
                              <li class="select_item" id="type_size10" price="100">400х200х150</li>
                              <li class="select_item" id="type_size11" price="100">450х200х150</li>
                              <li class="select_item" id="type_size12" price="100">500х200х150</li>
                              <li class="select_item" id="type_size13" price="100">600х200х150</li>
                              <li class="select_item" id="type_size14" price="100">700х200х150</li>
                              <li class="select_item" id="type_size15" price="100">800х200х150</li>
                              <li class="select_item" id="type_size16" price="100">1000х200х150</li>
                              <li class="select_item" id="type_size17" price="100">1200х200х150</li>
                              <li class="select_item" id="type_size18" price="100">1000х50х80</li>
                              <li class="select_item" id="type_size19" price="100">1200х50х80</li>
                              <li class="select_item" id="type_size20" price="100">1000х100х80</li>
                              <li class="select_item" id="type_size21" price="100">1200х100х80</li>
                              <li class="select_item" id="type_size22" price="100">1000х500х20</li>
                              <li class="select_item" id="type_size23" price="100">1000х600х20</li>
                              <li class="select_item" id="type_size24" price="100">1200х600х20</li>
                              <li class="select_item" id="type_size25" price="100">1000х500х30</li>
                              <li class="select_item" id="type_size26" price="100">1000х600х30</li>
                              <li class="select_item" id="type_size27" price="100">1200х600х30</li>
                              <li class="select_item" id="type_size28" price="100">1000х80х50</li>
                              <li class="select_item" id="type_size29" price="100">1200х80х50</li>
                              <li class="select_item" id="type_size30" price="100">1000х100х80</li>
                              <li class="select_item" id="type_size31" price="100">1200х100х80</li>
                              <li class="select_item" id="type_size32" price="100">1200х100х100</li>
                              <li class="select_item" id="type_size33" price="100">1000х100х100</li>
                              <li class="select_item" id="type_size34" price="100">300х100х100</li>
                              <li class="select_item" id="type_size35" price="100">200х100х100</li>
                              <li class="select_item" id="type_size36" price="100">1200х500х50</li>
                          </ul>
                      </div>
                      <div class="price">
                          <div class="price_type">
                              <p>Примерная цена:</p> 
                          </div>
                          <div class="price_value">
                              <p class="price_num">0 BYN</p>
                          </div>
                      </div>
                  </div>
               </div>
            </div>  
        </div>
          
        <div class="catalog" id="catalog">
            <div class="midlayer_blue">
                <div class="container">
                    <div class="row title_wh">
                        <h1>Каталог</h1>
                    </div>
                    <div class="row, catalog_block">
                        <div class="twice">
                            <?
                            $material = R::findAll('material','ORDER BY id LIMIT 4');
                            foreach($material as $material_inf)
                            {
                            ?>  
                            <div class="material_link">
                                <div class="material_image" style="background: url(<? echo $material_inf["picture"]; ?>) center/cover;">
                                    <div class="mid_image"></div>
                                </div>
                                <p><? echo $material_inf["name"]; ?></p>
                            </div>
                            <?
                            }
                            ?>
                        </div>
                    </div>
                    <div class="row catalog_else">
                        <div class="catalog_button">
                            <a href="pages/catalog.php"><input id="catalog_button_input" type="submit" value="Показать ещё"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="deliver" id="deliver">
            <div class="container">
                <div class="row">
                    <div class="offset-xxl-0 col-xxl-12 offset-xl-0 col-xl-12 offset-lg-1 col-lg-10 offset-md-0 col-md-12 offset-sm-1 col-sm-10 offset-2 col-8">
                       <div class="title_bl">
                           <h1>Доставка по всей Беларуси</h1>
                       </div>
                    </div>
                </div>
                <div class="row">
                    <div class="deliver_block offset-xxl-2 col-xxl-8 offset-xl-2 col-xl-8 offset-lg-1 col-lg-10 offset-md-0 col-md-12 offset-sm-0 col-sm-12 offset-0 col-12"></div>
                </div>
            </div>
        </div>
        
        <div class="contact" id="contact">
            <div class="midlayer_grey">
                <div class="container">
                    <div class="row title_wh">
                        <h1>Контакты</h1>
                    </div>
                    <div class="row">
                            <div class="contact_points offset-xxl-2 col-xxl-8 offset-xl-1 col-xl-10 offset-lg-1 col-lg-10 offset-md-0 col-md-12 offset-sm-0 col-sm-12">
                                <div class="mid_cont">
                                    <div class="point cont"><p>Город, улица, дом</p></div>
                                    <div class="message cont"><p>company_name@gmail.com</p></div>
                                    <div class="phone cont"><p>+375(33)225-25-25</p></div>
                                </div>
                            </div>
                        </div>
                    <div class="row">
                        <div class="contact_block">
                            <form action="php/mail.php" id="form" method="POST">
                                <div class="name_mail">
                                    <input type="text" id="name" name="name" placeholder="Имя" required>
                                    <input type="email" id="mail" name="mail" placeholder="Email" required>
                                </div>
                                <div class="text_area">
                                    <textarea type="text" id="message" name="text" placeholder="Сообщение" required></textarea>
                                </div>
                                <div class="send_block">
                                    <div class="send_button">
                                        <button type="submit" id="send_message">Отправить</button>
                                    </div>
                                </div>
                            </form>
                        </div>
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
        
        <script src="script/preconfig/jquery-3.6.1.min.js"></script>
        <script src="script/preconfig/bootstrap.bundle.min.js"></script>
        <!-- <script src="script/js/mail.js"></script> -->
        <script src="script/js/animation.js"></script>
    </body>
</html>