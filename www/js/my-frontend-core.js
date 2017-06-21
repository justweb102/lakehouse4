$(document).ready(function(){
    
    var all;
    sessionStorage.setItem('back', null);
    
/**** УДАЛИТЬ ПОСЛЕ ОТЛАДКИ - перекидывание на рабочую страницу для удобства ****/
/*
    $('.section.first').removeClass('active');
    $('.base-screen').css({'display' : 'block'});
    //$('.gal').addClass('active');
    //$('.lk-tickets').addClass('active');
    $('.lk-polls').addClass('active');
*/
/**** УДАЛИТЬ ПОСЛЕ ОТЛАДКИ - перекидывание на рабочую страницу для удобства ****/














/**** Кнопка на первом экране приложения ****/
    //$('.but-main').click(function(){
    $('#go-main').click(function(){
        $('.section.first').removeClass('active');
        $('.base-screen').css({'display' : 'block'});
        //$('.project').addClass('active');
        
        return false;
    });
/**** Кнопка на первом экране приложения ****/




function menu_add_open(){
    $('#menu-add').addClass('active');
    $('#menu-top-sandwich').removeClass('active');
    $('#menu-top-close').addClass('active');
    $('#top-title').html('Меню');
    return false;
}

function menu_add_close(){
    $('#menu-add').removeClass('active');
    $('#menu-top-close').removeClass('active');
    $('#menu-top-sandwich').addClass('active');
    $('#top-title').html('');
    return false;
}

/*function topBarMaker(){
    
}*/


/**** Кнопки перехода между локациямми, там же и кнопки нижнего меню ****/
    $('.go-location-link').click(function(){
    //$('body').on('click', '.go-location-link', function(){
    //$('body').delegate('.go-location-link', 'click', function(){
        
        
        //topBarMaker();
        
        
        // если нажали на какую-то менюху, чтобы первый экран не блокировал все остальное
        if( $('#section-first').hasClass('active') ){
            $('#section-first').removeClass('active');
            $('#base-screen').css({'display' : 'block'});
        }
        
        
        $('.section').each(function(){
            $(this).removeClass('active');
        });
        
        sectionGo = $(this).attr('data-link');
        $('.' + sectionGo).addClass('active');
        
        
        

        
        
        
        /*---- Заголовок раздела ----*/
        top_title = $('.section.active').attr('data-title');
        if( top_title ){
            $('#top-title2').html( top_title );
        }
        else{
            $('#top-title2').html('');
        }
        /*---- / Заголовок раздела ----*/
        
        
        
        /*---- Иконка "Выход из ЛК" ----*/
        /*if( top_title=='lk-info-person' )
        top_title=='lk-info-person'
        top_title=='lk-main'
        top_title=='lk-info-kv'
        top_title=='lk-tickets'
        top_title=='lk-polls'
        top_title=='lk-settings'*/
        
        
        /* Ниже рабочий вариант (почти).
        Включить css~260: #tbar-ico-lk, #tbar-ico-auth{display:none;}
        и раскомментировать иконку в разметке
        
        prefix = sectionGo.split('-');
        
        if( prefix[0]=='lk' ){
            $('#tbar-ico-lk').removeClass('active');
            $('#tbar-ico-logout').addClass('active');
        }
        else{
            $('#tbar-ico-logout').removeClass('active');
            $('#tbar-ico-lk').addClass('active');
        }*/
        /*---- Иконка "Выход из ЛК" ----*/
        
        menu_add_close(); // если открыто
        
        
        
        if( $(this).attr('data-link')!='first' ){
            $('#tbar-1').removeClass('active');
            $('#tbar-2').addClass('active');
        }
        
        if( $(this).attr('data-link')=='first' ){
            $('#tbar-2').removeClass('active');
            $('#tbar-1').addClass('active');
        }
        
        
        
        
        /*if( 
            sectionGo==''
            || sectionGo=='auth-form'
            || sectionGo=='signup-form'
            || sectionGo=='flats'
            //|| sectionGo=='map'
            || sectionGo=='contacts'
            || sectionGo=='gal'
            || sectionGo=='menu-add-project'
            || sectionGo=='menu-add-raspolozhenie'
            || sectionGo=='menu-add-territoriya'
            || sectionGo=='menu-add-infrastruktura'
            || sectionGo=='menu-add-arhitektura'
            || sectionGo=='menu-add-servis'
            || sectionGo=='menu-add-dokumentyi'
        ){
            $('#tbar-2').removeClass('active');
            $('#tbar-1').addClass('active');
        }*/
        
        
        
        if(
            sectionGo==''
            || sectionGo=='auth-form'
            || sectionGo=='signup-form'
            || sectionGo=='flats'
            //|| sectionGo=='map'
            || sectionGo=='contacts'
            || sectionGo=='gal'
            || sectionGo=='menu-add-project'
            || sectionGo=='menu-add-raspolozhenie'
            || sectionGo=='menu-add-territoriya'
            || sectionGo=='menu-add-infrastruktura'
            || sectionGo=='menu-add-arhitektura'
            || sectionGo=='menu-add-servis'
            || sectionGo=='menu-add-dokumentyi'
            || sectionGo=='lk-progress'
            || sectionGo=='menu-add-o_zastroyshike'
        ){
            $('body').addClass('tbar-superposition');
            sessionStorage.setItem('back', 'first');
        }
        else{
            $('body').removeClass('tbar-superposition');
        }
        
        
        
        
        
        
        if(
            sectionGo=='menu-add-project'
            || sectionGo=='menu-add-raspolozhenie'
            || sectionGo=='menu-add-territoriya'
            || sectionGo=='menu-add-infrastruktura'
            || sectionGo=='menu-add-arhitektura'
            || sectionGo=='menu-add-servis'
            || sectionGo=='menu-add-dokumentyi'
            || sectionGo=='lk-progress'
            || sectionGo=='menu-add-o_zastroyshike'
        ){
            $('body').addClass('back-in-menu');
        }
        else{
            $('body').removeClass('back-in-menu');
        }
        
        
        
        
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // !!!!  АХУЕННО КОСЯЧНЫЙ МОМЕНТ, КОТОРЫЙ МОЖЕТ УБИТЬ ПРИЛАГУ БЛЯТЬ  !!!!
        // !!!!        Клик по кнопке "назад" - Выход обратно в меню         !!!!
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        
        if( $('body').hasClass('back-in-menu') ){
            $('.back-link').click(function(){
                menu_add_open();
                return false;
            });
        }
        else{
            $('.back-link').click(function(){
                menu_add_close();
                return false;
            });
        }
        
        
        
        
        if(
            sectionGo=='lk-main'
        ){
            sessionStorage.setItem('back', 'first');
        }
        
        
        /*if( $('#back-link').attr('data-link')=='1-komnat-list' ){
            sessionStorage.setItem('back', '1-komnat-list');
        }*/
        
        if( $('.section.active').attr('data-kolichestvo-komnat')=='1' ){
            sessionStorage.setItem('back', '1-komnat-list' );
        }
        
        if( $('.section.active').attr('data-kolichestvo-komnat')=='2' ){
            sessionStorage.setItem('back', '2-komnat-list' );
        }
        
        if( $('.section.active').attr('data-kolichestvo-komnat')=='3' ){
            sessionStorage.setItem('back', '3-komnat-list' );
        }
        
        if( $('.section.active').attr('data-kolichestvo-komnat')=='4' ){
            sessionStorage.setItem('back', '4-komnat-list' );
        }
        
        
        
        if( $(this).parent().hasClass('go-srez') ){
            sessionStorage.setItem('back', $(this).parent().parent().parent().parent().attr('data-kv-id') );
        }
        
        
        if( $(this).hasClass('go-kv-item') ){
            
        }
        
        if(
            sectionGo=='1-komnat-list'
            || sectionGo=='2-komnat-list'
            || sectionGo=='3-komnat-list'
            || sectionGo=='4-komnat-list'
        ){
            sessionStorage.setItem('back', 'flats');
        }
        
        
        
        if(
            sectionGo=='lk-info-person'
            || sectionGo=='lk-info-kv'
            || sectionGo=='lk-tickets'
            || sectionGo=='lk-polls'
            || sectionGo=='lk-settings'
        ){
            sessionStorage.setItem('back', 'lk-main');
        }


        /*---- определяем "назад" ----*/
        //alert( sessionStorage.getItem('back') );
        if( sessionStorage.getItem('back')=='null' ){
            sessionStorage.setItem('back', 'first');
        }
        $('#back-link').attr('data-link', sessionStorage.getItem('back') );
        //$('#back-link').append( sessionStorage.getItem('back') );
        sessionStorage.setItem('back', sectionGo); // запоминаем, куда "назад будет в следующей локации"
        /*---- / определяем "назад" ----*/
        
        
                
        return false;
    });
/**** Кнопки перехода между локациямми, там же и кнопки нижнего меню ****/

























/**** Клик в сэндвич меню ****/
$('#menu-top-sandwich').click(function(){
    menu_add_open();
});

$('#menu-top-close').click(function(){
    menu_add_close();
});
/**** Клик в сэндвич меню ****/




/**** Выбор определенной галереи ****/
$('.gals-item a').click(function(){
    $('.section.gal').removeClass('active');
    $('#' + $(this).attr('data-gal') ).addClass('active');
    
    // определяем "назад"
    $('#back-link').attr('data-link', sessionStorage.getItem('back') );
    
    // удаляем класс супер-топ-бара
    $('body').removeClass('tbar-superposition');
    
    // прибивание заголовка отдельной фотогалереи
    $('#top-title2').html( $(this).find('.gals-item-description').html() );
    
    // прибивание превьюх к низу экрана + выравнивание по вертикали большой фотки и стрелок
    setTimeout(function(){
        heightAll = $('body').height() - 40 - 58;
        heightBigfoto = heightAll - $('.active .fotorama__nav-wrap').height();
        marginTopArrows = ( heightAll - $('.active .fotorama__nav-wrap').height() ) / 2;
        fotoramaVerticalAlignFixStyle = '<style>.fotorama{height: ' + heightAll + 'px !important;} .for-fancybox3{height: ' + heightBigfoto + 'px !important;} .fotorama__stage{height: ' + heightAll + 'px !important;} .fotorama__arr{top: ' + marginTopArrows + 'px !important;}</style>';
        $('#fotoramaVerticalAlignFixStyle').html( fotoramaVerticalAlignFixStyle );
    }, 200);


        
    return false;
});
/**** Выбор определенной галереи ****/









/**** Переход в "Бронировать квартиру" ****/
$('.kv_bronirovat_link').click(function(){
    kv_title_bronirovat = $(this).attr('data-kv_title_bronirovat');
    $('#kv_title_bronirovat').html( kv_title_bronirovat );
    $('#form-bronirivat input[name="text"]').val( kv_title_bronirovat );
    back_kv_id = $(this).parent().parent().parent().parent().attr('data-kv-id');
    $('#form-bronirivat .submit').attr('data-back-kv', back_kv_id);
    return false;
});
/**** Переход в "Бронировать квартиру" ****/




/**** Отправка формы из Контакты ****/
$('#form-contacts .submit').click(function(e){
    e.preventDefault();
    
    var error = false;
    
    var fio = $('#form-contacts input[name="fio"]').val();
    var tel = $('#form-contacts input[name="tel"]').val();
    
    if(fio.length == 0){
        var error = true;
        $('#form-contacts input[name="fio"]').addClass('input-error-red');
    }else{
        $('#form-contacts input[name="fio"]').removeClass('input-error-red');
    }
    
    if(tel.length == 0){
        var error = true;
        $('#form-contacts input[name="tel"]').addClass('input-error-red');
    }else{
        $('#form-contacts input[name="tel"]').removeClass('input-error-red');
    }
    
    

    
    
    if(error == false){
        
        action = 'form_contacts_send';
        
        // в этом месте "data" НЕ JSON 
        data = $('#form-contacts').serialize();
        data +='&action=' + action;
        
        $.post("http://cx35469.tmweb.ru/server.php", data, function(result){
            $('.form-contacts-wrapper').html('<div class="good-mail"><span style="font-size:30px;">Спасибо за сообщение!</span><br /><br /><span style="font-size:18px;">В ближайшее время мы свяжемся с Вами.</span><br /><br /><br /><br /></div>');
        });
    }

});
/**** Отправка формы из Контакты ****/





/**** Отправка формы из Бронировать квартиру ****/
$('#form-bronirivat .submit').click(function(e){
    e.preventDefault();
    
    var data_back_kv = $(this).attr('data-back-kv');
    
    var error = false;
    
    var fio = $('#form-bronirivat input[name="fio"]').val();
    var tel = $('#form-bronirivat input[name="tel"]').val();
    
    if(fio.length == 0){
        var error = true;
        $('#form-bronirivat input[name="fio"]').addClass('input-error-red');
    }else{
        $('#form-bronirivat input[name="fio"]').removeClass('input-error-red');
    }
    
    /* Фамилия - необязательное поле. Если нужно обязательным - раскомментировать
    if(fio_surname.length == 0){
        var error = true;
        $('#form-bronirivat input[name="fio_surname"]').addClass('input-error-red');
    }else{
        $('#form-bronirivat input[name="fio_surname"]').removeClass('input-error-red');
    }*/
    
    if(tel.length == 0){
        var error = true;
        $('#form-bronirivat input[name="tel"]').addClass('input-error-red');
    }else{
        $('#form-bronirivat input[name="tel"]').removeClass('input-error-red');
    }
    
    

    
    
    if(error == false){
        
        action = 'form_bronirivat';
        
        // в этом месте "data" НЕ JSON 
        data = $('#form-bronirivat').serialize();
        data +='&action=' + action;
        
        $.post("http://cx35469.tmweb.ru/server.php", data, function(result){
            //$('.form-bronirivat-wrapper').html('<div class="good-mail"><span style="font-size:30px;">Спасибо!</span><br /><br /><span style="font-size:18px;">Мы свяжемся с Вами в ближайшее время.</span><br /><br /><br /><br /></div>');
            
            //alert('Спасибо! Мы свяжемся с Вами в ближайшее время.');
            $.fancybox.open('<div class="myalert">Спасибо! Мы свяжемся с Вами в ближайшее время.</div>');
            setTimeout(function(){$.fancybox.close()}, 1500);

            $('.section').each(function(){
                $(this).removeClass('active');
            });
            
            sectionGo = data_back_kv;
            $('.' + sectionGo).addClass('active');


        });
    }

});
/**** Отправка формы из Бронировать квартиру ****/



/**** Перезапуск google map по клику перехода в локацию "Карта" ****/
$('.go-location-link[data-link="map"]').click(function(){
    
    setTimeout(function(){
        heightAll = $('body').height() - 40 - 58;
        
        $('.geomap').height( heightAll );

        ginitialize();

    }, 200);
    
    
    
});
/**** / Перезапуск google map по клику перехода в локацию "Карта" ****/





/**** Проверка, залогинен ли ****/
    //if( sessionStorage.getItem('fio')==null ){
    if( sessionStorage.getItem('login')==null ){
        $('.auth-bar-hello').removeClass('active');
        $('.go-auth-form').addClass('active');
        $('.go-signup-form').addClass('active');
    }
    else{
        $('.auth-bar-name').html( sessionStorage.getItem('fio') );
        $('.auth-bar-hello').addClass('active');
        $('.go-auth-form').removeClass('active');
        
        $('.go-auth-form.top-bar-lk').attr('data-link', 'lk-main');
        
        $('.first .go-location-link[data-link="auth-form"]').css('display', 'none');
    }
/**** Проверка, залогинен ли ****/




/**** Авторизация ****/
    /* Делаем проверку профиля и в случае прохода авторизации устанавливаем куки (заменитель) */
    $('.auth-form .submit').click(function(){
    //$('.go-auth-form').click(function(){
    //$(document).ready(function(){
        
        action = 'auth';
        
        // тут проверки
        login = $('#login').val();
        pass = $('#pass').val();
        //login = '2';
        //pass = '3';
        
        data = {
            'login' : login,
            'pass' : pass,
        }
        
        data.action = action;
        
        $.post("http://cx35469.tmweb.ru/server.php", data, function(result){
            all = JSON.parse(result);
            
            if( all.auth=='1' ){
                sessionStorage.setItem('auth', all.auth);
                sessionStorage.setItem('login', login);
                sessionStorage.setItem('pass', pass);
                
                sessionStorage.setItem('fio', all.fio);
                sessionStorage.setItem('fio_surname', all.fio_surname);
                sessionStorage.setItem('tel', all.tel);
                sessionStorage.setItem('email', all.email);
                sessionStorage.setItem('date_of_birth', all.date_of_birth);
                sessionStorage.setItem('gender', all.gender);
                sessionStorage.setItem('pass', all.pass);
                //sessionStorage.setItem('cont', all.cont);
                
                sessionStorage.setItem('dogovor', all.dogovor);
                sessionStorage.setItem('role', all.role);
                sessionStorage.setItem('kvartira_num', all.kvartira_num);
                sessionStorage.setItem('nomer_doma', all.nomer_doma);
                sessionStorage.setItem('info_etazh', all.info_etazh);
                sessionStorage.setItem('info_sq_ob', all.info_sq_ob);
                sessionStorage.setItem('info_sq_zhil', all.info_sq_zhil);
                sessionStorage.setItem('info_planirovka', all.info_planirovka);
                
                sessionStorage.setItem('active', all.active);
                
                //sessionStorage.setItem('1111', all.1111);
                
                location.reload();
                








                
                
                
    /*** Формирование тикетов ***/
                var tickets = new Array();
                var tickets_subjects = new Array();
                
                var tickets_subjects_html = '';
                
                for(var key in all['tickets_subjects']){
                    /*** Заполнение массива активных тем, чтобы "по порядку" ***/
                    tickets_subjects[key] = all['tickets_subjects'][key]['id'];
                    /*** Создание и обнуление всех тикетов ***/
                    tickets[key] = '';
                    
                    
                    // Раздел с ссылками на ТЕМЫ
                    tickets_subjects_html += '<div onclick=\'ticket_go("lk-subject-' + all['tickets_subjects'][key]['id'] + '");\' class="subject-name" data-link="lk-subject-' + all['tickets_subjects'][key]['id'] + '">' + all['tickets_subjects'][key]['name'] + '</div>';
                }
                
                
                sessionStorage.setItem('lk_tickets_subjects', tickets_subjects_html);
                
                
                
                for(var key in all['messages']){
                    /*** Заполнение массива сообщениями ***/
                    for(var k in tickets_subjects){
                        if( all['messages'][key]['subject'] == tickets_subjects[k] ){
                            if( all['messages'][key]['vopros_otvet']=='vopros' ){
                                //tickets[ k ] += '<div class="message-item vopros">' + all['messages'][key]['message'] + '</div>';
                                tickets[ k ] += '<div class="message-item vopros">';
                                tickets[ k ] += all['messages'][key]['message'];
                                if( (all['messages'][key]['img'].length > 0) && (all['messages'][key]['img'] != 'null') ){
                                    tickets[ k ] += '<div class="clear"></div>';
                                    tickets[ k ] += '<a data-fancybox="" href="http://cx35469.tmweb.ru/uploads/' + all['messages'][key]['img'] + '"><img src="http://cx35469.tmweb.ru/uploads/' + all['messages'][key]['img'] + '" /></a>';
                                }
                                tickets[ k ] += '</div>';
                            }
                            if( all['messages'][key]['vopros_otvet']=='otvet' ){
                                //tickets[ k ] += '<div class="message-item otvet">' + all['messages'][key]['message'] + '</div>';
                                tickets[ k ] += '<div class="message-item otvet">';
                                tickets[ k ] += all['messages'][key]['message'];
                                if( (all['messages'][key]['img'].length > 0) && (all['messages'][key]['img'] != 'null') ){
                                    tickets[ k ] += '<div class="clear"></div>';
                                    tickets[ k ] += '<a data-fancybox="" href="http://cx35469.tmweb.ru/uploads/' + all['messages'][key]['img'] + '"><img src="http://cx35469.tmweb.ru/uploads/' + all['messages'][key]['img'] + '" /></a>';
                                }
                                tickets[ k ] += '</div>';
                            }
                        }
                    }
                    
                }
                
                
                /*** Тут формируем сами разделы тикетов с сообщениями ***/
                /*** Тут же прибиваем все разделы тикетов в одну переменную в сессию, чтобы по перезагрузке захуячивать в ДОМ ***/
                var tickets_all = '';
                for(var key in tickets){
                    tickets[key] = '<div class="lk-tickets-messages">' + tickets[key] + '</div>';
                    tickets[key] += '<div class="clear"></div>';
                    //tickets[key] += '<div class="lk-tickets-form"><form class="subject-sendmessage" data-subject="' + all['tickets_subjects'][key]['id'] + '"><input type="file" name="userfile" id="file-id-' + all['tickets_subjects'][key]['id'] + '" /><br /><div class="ticket-text-input"><label for="file-id-' + all['tickets_subjects'][key]['id'] + '" class="label-for-file"><img src="img/ico-file.png" /></label><input type="text" name="message" /><a href="#" class="submit">Отпр.</a><div class="clear"></div></div></form></div>';
                    tickets[key] += '<div class="lk-tickets-form"><form class="subject-sendmessage" data-subject="' + all['tickets_subjects'][key]['id'] + '"><input type="file" name="userfile" id="file-id-' + all['tickets_subjects'][key]['id'] + '" /><br /><div class="ticket-text-input"><label for="file-id-' + all['tickets_subjects'][key]['id'] + '" class="label-for-file"><img src="img/ico-file.png" /></label><textarea name="message"></textarea><a href="#" class="submit"><img src="img/ico-ticket-send.png"></a><div class="clear"></div></div></form></div>';
                    tickets[key] = '<div class="subject-' + all['tickets_subjects'][key]['id'] + '">' + tickets[key] + '</div>';
                    tickets[key] = '<h3 class="subject-name">' + all['tickets_subjects'][key]['name'] + '</h3>' + tickets[key];
                    
                    tickets[key] = '<div class="section lk-subject-' + all['tickets_subjects'][key]['id'] + '"><div class="section-wrapper bgmenuadd"><div class="content-std">' + tickets[key] + '</div></div></div>';
                    
                    tickets_all += tickets[key];
                }
                sessionStorage.setItem('lk_tickets', tickets_all);
    /*** Формирование тикетов ***/
                
                
                
                
    /*** Формирование опросов ***/
                var poll = new Array();
                var poll_subjects = new Array();
                
                for(var key in all['poll_subjects']){
                    /*** Заполнение массива активных тем опросов, чтобы "по порядку" ***/
                    poll_subjects[key] = all['poll_subjects'][key]['id'];
                    /*** Создание и обнуление всех опросов ***/
                    poll[key] = '';
                }
                
                for(var key in all['poll_options']){
                    /*** Заполнение массива сообщениями ***/
                    for(var k in poll_subjects){
                        if( all['poll_options'][key]['subject_id'] == poll_subjects[k] ){
                                //poll[ k ] += '<div class="options-item vopros">' + all['poll_options'][key]['options'] + '</div>';
                                poll[ k ] += '<div class="poll-options-item">';
                                poll[ k ] += '<input type="radio" name="' + all['poll_options'][key]['subject_id'] + '" value="' + all['poll_options'][key]['id'] + '"';
                                
                                for(var k3 in all['poll_replies']){
                                // тут отмечаем варианты, на которые клиент уже отвечал
                                    if( all['poll_replies'][k3]['subject_id']==all['poll_replies'][k3]['subject_id'] && all['poll_options'][key]['id']==all['poll_replies'][k3]['option_id'] ){
                                        poll[ k ] += ' checked="checked"';
                                    }
                                }
                                
                                poll[ k ] += 'id="' + all['poll_options'][key]['subject_id'] + '_' + all['poll_options'][key]['id'] + '"';
                                poll[ k ] += ' /> ';
                                poll[ k ] += all['poll_options'][key]['text'];
                                
                                poll[ k ] += '<label for="' + all['poll_options'][key]['subject_id'] + '_' + all['poll_options'][key]['id'] + '"><span></span></label>';
                                
                                poll[ k ] += '</div>';
                        }
                    }
                    
                }
                
                
                /*** Тут формируем сами разделы опросов с вариантами ***/
                /*** Тут же прибиваем все разделы опросов в одну переменную в сессию, чтобы по перезагрузке захуячивать в ДОМ ***/
                var poll_all = '';
                for(var key in poll){
//                    poll[key] = '<div class="lk-poll-poll_options">' + poll[key] + '</div>';
                    //poll[key] += '<div class="lk-poll-form"><form class="subject-sendmessage" data-subject="' + all['poll_subjects'][key]['id'] + '"><input type="file" name="userfile" /><br /><input type="text" name="message" /><br clear="all" /><a href="#" class="submit">Отправить</a></form></div>';
                    poll[key] = '<div class="subject-' + all['poll_subjects'][key]['id'] + '"><form class="form-poll poll-' + all['poll_subjects'][key]['id'] + '" data-subject="' + all['poll_subjects'][key]['id'] + '">' + poll[key] + '<div class="clear"></div><a href="#" class="button b1 submit">Отправить ответ</a></form></div>';
                    poll[key] = '<h3 class="subject-name">' + all['poll_subjects'][key]['text'] + '</h3>' + poll[key];
                    poll_all += poll[key];
                }
                sessionStorage.setItem('lk_polls', poll_all);
                
                
                /*for(var key in all['poll_replies']){
                    //qq = all['poll_replies'][key]['subject_id'] + ' - ' + all['poll_replies'][key]['option_id'];
                    $('form.form-poll input[type="radio"]').each(function(){
                        if( $(this).attr('name')==all['poll_replies'][key]['subject_id'] && $(this).val()==all['poll_replies'][key]['option_id'] ){
                            $(this).attr('checked', 'checked');
                        }
                    });
                    //alert(qq);
                }*/
    /*** Формирование опросов ***/
                
            }
            else{
                //alert('Логин/пароль не верны или пользователь не активирован');
                $.fancybox.open('<div class="myalert">Логин/пароль не верны или пользователь не активирован</div>');
                setTimeout(function(){$.fancybox.close()}, 1500);
            }
            
            
            
        });
        
        sessionStorage.setItem('auth_now', '1');
        
        return false;
    });
/**** Авторизация ****/







/**** Регистрация ****/
    /* Делаем проверку профиля и в случае прохода авторизации устанавливаем куки (заменитель) */
    $('#signup-form .submit').click(function(e){
    //$('.go-auth-form').click(function(){
    //$(document).ready(function(){
        
        action = 'signup';
        
        e.preventDefault();
        var error = false;
        
        // тут проверки
        fio = $('#signup-fio').val();
        fio_surname = $('#signup-fio_surname').val();
        login = $('#signup-login').val();
        pass = $('#signup-pass').val();
        pass_duplicate = $('#signup-pass_duplicate').val();
        email = $('#signup-email').val();
        tel = $('#signup-tel').val();
        
        /*
        Проверка на клиенте - нужна ли?
        Ниже делаем проверку на сервере.
        Возможно нужно удалить этот кусок.
        
        if(login.length == 0){
            var error = true;
            $('.signup-error-login').addClass('input-error');
        }else{
            $('.signup-error-login').removeClass('input-error');
        }
        
        if(pass.length == 0){
            var error = true;
            $('.signup-error-pass').addClass('input-error');
        }else{
            $('.signup-error-pass').removeClass('input-error');
        }
        
        if(email.length == 0){
            var error = true;
            $('.signup-error-email').addClass('input-error');
        }else{
            $('.signup-error-email').removeClass('input-error');
        }
        
        if(tel.length == 0){
            var error = true;
            $('.signup-error-tel').addClass('input-error');
        }else{
            $('.signup-error-tel').removeClass('input-error');
        }
        
        if( pass != pass_duplicate ){
            var error = true;
            $('.signup-error-pass').addClass('input-error');
            $('.signup-error-pass_duplicate').addClass('input-error');
        }else{
            $('.signup-error-pass').removeClass('input-error');
            $('.signup-error-pass_duplicate').removeClass('input-error');
        }
        */
        
        data = {
            'fio' : fio,
            'fio_surname' : fio_surname,
            'login' : login,
            'pass' : pass,
            'pass_duplicate' : pass_duplicate,
            'email' : email,
            'tel' : tel,
        }
        
        data.action = action;
        
        $.post("http://cx35469.tmweb.ru/server.php", data, function(result){
            all = JSON.parse(result);
            
            if( all['signup_error']['fio'] != '' ){
                var error = true;
                $('.signup-error-fio').html( all['signup_error']['fio'] );
                $('.signup-error-fio').addClass('input-error');
            }else{
                $('.signup-error-fio').removeClass('input-error');
            }
            
            /* Фамилия - необязательное поля. Если нужно "обязательным" - раскомментировать кусок
            if( all['signup_error']['fio_surname'] != '' ){
                var error = true;
                $('.signup-error-fio_surname').html( all['signup_error']['fio_surname'] );
                $('.signup-error-fio_surname').addClass('input-error');
            }else{
                $('.signup-error-fio_surname').removeClass('input-error');
            }*/
            
            if( all['signup_error']['login'] != '' ){
                var error = true;
                $('.signup-error-login').html( all['signup_error']['login'] );
                $('.signup-error-login').addClass('input-error');
            }else{
                $('.signup-error-login').removeClass('input-error');
            }
            
            if( all['signup_error']['pass'] != '' ){
                var error = true;
                $('.signup-error-pass').html( all['signup_error']['pass'] );
                $('.signup-error-pass').addClass('input-error');
            }else{
                $('.signup-error-pass').removeClass('input-error');
            }
            
            if( all['signup_error']['email'] != '' ){
                var error = true;
                $('.signup-error-email').html( all['signup_error']['email'] );
                $('.signup-error-email').addClass('input-error');
            }else{
                $('.signup-error-email').removeClass('input-error');
            }
            
            if( all['signup_error']['tel'] != '' ){
                var error = true;
                $('.signup-error-tel').html( all['signup_error']['tel'] );
                $('.signup-error-tel').addClass('input-error');
            }else{
                $('.signup-error-tel').removeClass('input-error');
            }
            
            /*
            Проверка на совпадение пароля+подтверждения уже сделана на сервере. Удалить этот блок
            if( pass != pass_duplicate ){
                var error = true;
                $('.signup-error-pass').addClass('input-error');
                $('.signup-error-pass_duplicate').addClass('input-error');
            }else{
                $('.signup-error-pass').removeClass('input-error');
                $('.signup-error-pass_duplicate').removeClass('input-error');
            }*/

//alert( all['signup_response']['response_code'] );
//alert( all['signup_response']['text'] );

            if( all['signup_response']['response_code'] == '1' ){
                respHtml = '<div class="section-wrapper goodm">' + all['signup_response']['text'] + '</div>';
                $('.signup-form').html( respHtml );
            }
            


            
            
            
            /*if( all=='1' ){
                sessionStorage.setItem('auth', all.auth);
                sessionStorage.setItem('login', login);
                sessionStorage.setItem('pass', pass);
                
                location.reload();
                
            }
            else{
                alert('Авторизация');
            }*/
            
            
            
        });
        
        return false;
    });
/**** Регистрация ****/




/**** Изменения в личном кабинете ****/
    $('#lk-info .submit').click(function(){
        
        action = 'lk_update';
        
        // в этом месте "data" НЕ JSON 
        data = $('#lk-info').serialize();
        data +='&action=' + action;
        data +='&login=' + sessionStorage.getItem('login');
        data +='&pass=' + sessionStorage.getItem('pass');
        
        /*
        data.action = action;
        data.login = sessionStorage.getItem('login');
        data.pass = sessionStorage.getItem('pass');
        alert(data);
        */
        
        
        $.post("http://cx35469.tmweb.ru/server.php", data, function(result){
            all = JSON.parse(result);
            
            if( sessionStorage.getItem('auth')=='1' ){
                sessionStorage.setItem('fio', all.fio);
                sessionStorage.setItem('fio_surname', all.fio_surname);
                sessionStorage.setItem('tel', all.tel);
                sessionStorage.setItem('dogovor', all.dogovor);
                sessionStorage.setItem('role', all.role);
                sessionStorage.setItem('kvartira_num', all.kvartira_num);
                sessionStorage.setItem('nomer_doma', all.nomer_doma);
                sessionStorage.setItem('active', all.active);
                
                sessionStorage.setItem('date_of_birth', all.date_of_birth);
                sessionStorage.setItem('gender', all.gender);
                sessionStorage.setItem('pass', all.pass);
                sessionStorage.setItem('email', all.email);

                
                location.reload();
            }
            else{
                
            }
        });
        
        return false;
    });
/**** Изменения в личном кабинете ****/
    
    
    
    
/**** Логаут ****/
    $('.auth-bar-logout').click(function(){
        // !!! тут нужно прописать "sessionStorage.removeItem" для всей соответствующей информации
        /*
        sessionStorage.removeItem('auth');
        sessionStorage.removeItem('fio');
        sessionStorage.removeItem('tel');
        
        sessionStorage.removeItem('dogovor');
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('kvartira_num');
        sessionStorage.removeItem('nomer_doma');
        sessionStorage.removeItem('active');
        */
        
        sessionStorage.clear();
        
        
        
        location.reload();
        
        return false;
    });
/**** Логаут ****/













/*** Когда пользователь выбрал фотку для прикрепления - отправляем ее сразу же на сервачок и запоминаем адрес ***/
$('body').on('change', 'input[name="userfile"]',function(){

    action = 'ticket_new_message_imageee';

    var data = new FormData();    

    data.append( 'userfile', $(this)[0].files[0]);
    data.append('action', action);
    
    
    $.ajax({
        url: 'http://cx35469.tmweb.ru/server.php',
        data: data,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function(data){
            
            all = JSON.parse(data);
            
            sessionStorage.setItem('image_name_new', all.image_name_new);
            
            $(this).val('');
            
            
            $('.active .subject-sendmessage label img').attr('src', 'http://cx35469.tmweb.ru/uploads/' + all.image_name_new );
            $('.active .subject-sendmessage label img').addClass('ticket_image_notempty')
            //$('label[for="' + $(this).attr('id') + '"] img').attr('src', '/home/c/cx35469/public_html/uploads/' + all.image_name_new );

//$('label[for="file-id-3"] img').attr('src', '/home/c/cx35469/public_html/uploads/123123' );

        }
    });
    
    
    setTimeout(function(){
        $('.active .content-std').scrollTop( 9999999999 );
    }, 500);
    
    
    return false;
});
/*** Когда пользователь выбрал фотку для прикрепления - отправляем ее сразу же на сервачок и запоминаем адрес ***/













/**** Отправка сообщения в тикет ****/

//$('.lk-tickets').on('click', 'form.subject-sendmessage .submit', function(){
$('#tickets-msgs').on('click', 'form.subject-sendmessage .submit', function(){
    
    action = 'ticket_new_message';
    
    login = sessionStorage.getItem('login');
    pass = sessionStorage.getItem('pass');
    
    form = $(this).parent().parent();
    ticketText = form.find('textarea[name="message"]');
    ticketTextVal = ticketText.val();
    ticketSubject = form.attr('data-subject');
    
    if( (ticketTextVal.length==0) && form.find('input[name="userfile"]').val().length==0 ){
        return false;
    }
    
    var data = new FormData();    
    //data.append( 'userfile', $('#userfile')[0].files[0]);
//    data.append( 'userfile', form.find('input[name="userfile"]')[0].files[0]);
    data.append( 'userfile', sessionStorage.getItem('image_name_new') );
    
    data.append('action', action);
    data.append('login', login);
    data.append('pass', pass);
    data.append('ticketText', ticketTextVal);
    data.append('ticketSubject', ticketSubject);
    
    /*data = {
        'login' : login,
        'pass' : pass,
        'ticketText' : ticketText.val(),
        'ticketSubject' : ticketSubject,
    };*/
    
    //data.action = action;
    
//    var response;
    
        //processData: false,
        //contentType: false,
    
    
    $.ajax({
        url: 'http://cx35469.tmweb.ru/server.php',
        data: data,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function(data){
            //console.log('upload success!')
            //$('#data').empty();
            //$('#data').append(data);
            
//            $('.subject-' + ticketSubject + ' .lk-tickets-messages').append('<div class="message-item vopros">' + ticketTextVal + '</div>');
            
            if( (sessionStorage.getItem('image_name_new') == null) || (sessionStorage.getItem('image_name_new').length == 0)  ){
                $('.subject-' + ticketSubject + ' .lk-tickets-messages').append('<div class="message-item vopros">' + ticketTextVal + '</div>');
                
            }
            else{
                $('.subject-' + ticketSubject + ' .lk-tickets-messages').append('<div class="message-item vopros">' + ticketTextVal + '<div class="clear"></div><a data-fancybox="" href="http://cx35469.tmweb.ru/uploads/' + sessionStorage.getItem('image_name_new') + '" ><img src="http://cx35469.tmweb.ru/uploads/' + sessionStorage.getItem('image_name_new') + '" /></a>' + '</div>');
                
            }
            
            
            
            ticketText.val('');
            form.find('input[name="userfile"]').val('');
            
            sessionStorage.setItem('image_name_new', '');
            $('.active .subject-sendmessage label img').removeClass('ticket_image_notempty');
            $('.active .subject-sendmessage label img').attr('src', 'img/ico-file.png');
        }
    });
    

    
//    $.post("http://cx35469.tmweb.ru/server.php", data, function(result){
        // сразу же прибиваем к html для красоты
        //$('.subject-' + ticketSubject + ' .message-item').last().after('<div class="message-item vopros">' + ticketText.val() + '</div>');
//        $('.subject-' + ticketSubject + ' .lk-tickets-messages').append('<div class="message-item vopros">' + ticketText.val() + '</div>');
//        ticketText.val('');
//        response = JSON.parse(result);
            /*all = JSON.parse(result);
            
            if( sessionStorage.getItem('auth')=='1' ){
                sessionStorage.setItem('fio', all.fio);
                sessionStorage.setItem('tel', all.tel);
                sessionStorage.setItem('dogovor', all.dogovor);
                sessionStorage.setItem('role', all.role);
                sessionStorage.setItem('kvartira_num', all.kvartira_num);
                sessionStorage.setItem('nomer_doma', all.nomer_doma);
                sessionStorage.setItem('active', all.active);
                
                location.reload();
            }
            else{
                
            }*/
//    });
    
    //ticket_new_message_image();
    
    setTimeout(function(){
        $('.active .content-std').scrollTop( 9999999999 );
    }, 500);
    
    
    return false;
});
/**** Отправка сообщения в тикет ****/



function ticket_new_message_image(){
    
    action = 'ticket_new_message_image';
    
    var fd = new FormData();    
    fd.append( 'userfile', $('#userfile')[0].files[0]);
    
    fd.append('action', action);
    //fd.action = action;
    
    $.ajax({
        url: 'http://cx35469.tmweb.ru/server.php',
        data: fd,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function(data){
            console.log('upload success!')
            $('#data').empty();
            $('#data').append(data);
        }
    });
    
}




/**** Ответ на опрос ****/
$('.lk-polls').on('click', 'form.form-poll .submit', function(){
    
    action = 'poll_response';
    
    login = sessionStorage.getItem('login');
    pass = sessionStorage.getItem('pass');
    
    form = $(this).parent();
    responseOption = form.find('input[type="radio"]:checked');
    responseSubject = form.attr('data-subject');
    
    
    var data = new FormData();    
    
    
    data.append('action', action);
    data.append('login', login);
    data.append('pass', pass);
    data.append('responseOption', responseOption.val());
    data.append('responseSubject', responseSubject);
    
    
    $.ajax({
        url: 'http://cx35469.tmweb.ru/server.php',
        data: data,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function(data){
            //console.log('upload success!')
            //$('#data').empty();
            //$('#data').append(data);
//            $('.subject-' + ticketSubject + ' .lk-tickets-messages').append('<div class="message-item vopros">' + ticketText.val() + '</div>');
//            ticketText.val('');
//            form.find('input[name="userfile"]').val('');
        }
    });
    
    //alert('Спасибо за Ваше мнение!');
    $.fancybox.open('<div class="myalert">Спасибо за Ваше мнение!</div>');
    setTimeout(function(){$.fancybox.close()}, 1500);
    
    return false;
});
/**** Ответ на опрос ****/

    
    
    
    
/**** Прибивание информации к блокам сразу же после перезагрузки, в соответствии с авторизацией ****/
    if( sessionStorage.getItem('auth')=='1' ){
        //$('#info-ajax2').html( sessionStorage.getItem('cont') );
        
        // информация в форме личного кабинета
        $('#lk-info input[name="fio"]').val( sessionStorage.getItem('fio') );
        $('#lk-info input[name="fio_surname"]').val( sessionStorage.getItem('fio_surname') );
        $('#lk-info input[name="tel"]').val( sessionStorage.getItem('tel') );
        $('#lk-info input[name="dogovor"]').val( sessionStorage.getItem('dogovor') );
        
        $('#lk-info input[name="email"]').val( sessionStorage.getItem('email') );
        $('#lk-info input[name="newpass"]').val( sessionStorage.getItem('pass') );
        $('#lk-info input[name="date_of_birth"]').val( sessionStorage.getItem('date_of_birth') );
        $('#lk-info input[name="gender"]').val( sessionStorage.getItem('gender') );
        
        $('#lk-info input[name="role"]').val( sessionStorage.getItem('role') );
        $('#lk-info input[name="kvartira_num"]').val( sessionStorage.getItem('kvartira_num') );
        $('#lk-info input[name="nomer_doma"]').val( sessionStorage.getItem('nomer_doma') );
        $('#lk-info input[name="active"]').val( sessionStorage.getItem('active') );
        
        //$('.lk-tickets').html( sessionStorage.getItem('lk_tickets') );
        //$('#lk-tickets-accordion').html( sessionStorage.getItem('lk_tickets') );
        
        
        $('#lk-tickets-subjects').html( sessionStorage.getItem('lk_tickets_subjects') );
        $('#tickets-msgs').html( sessionStorage.getItem('lk_tickets') );
        
        $('#lk_polls_wrapper').html( sessionStorage.getItem('lk_polls') );

        
        /*$('.message-item:last-child').each(function(){
            
            //alert( $(this).parent().attr('data-subject') );
            $(this).after('<br clear="both" /><form class="subject-sendmessage" data-subject="' + $(this).parent().attr('subject') + '" id="subject-textarea-' + $(this).parent().attr('subject') + '"><textarea placeholder="Сообщение"></textarea><br clear="both" /><a href="#" class="submit">Отправить</a></form>');
            //alert( $(this).html() );
        });*/
        
//        $("#lk-tickets-accordion").accordion( "refresh" );


        /* Страничка информации о пользователе в Личном кабинете */
        $('#lk-info-person-item-fio').html( sessionStorage.getItem('fio') + ' ' + sessionStorage.getItem('fio_surname') );
        $('#lk-info-person-item-tel').html( sessionStorage.getItem('tel') );
        $('#lk-info-person-item-email').html( sessionStorage.getItem('email') );
        $('#lk-info-person-item-dogovor').html( sessionStorage.getItem('dogovor') );
        
        $('#lk-info-kv-item-num').html( sessionStorage.getItem('nomer_doma') );
        $('#lk-info-kv-item-etazh').html( sessionStorage.getItem('info_etazh') );
        $('#lk-info-kv-item-kvartira_num').html( sessionStorage.getItem('kvartira_num') );
        $('#lk-info-kv-item-sq_ob').html( sessionStorage.getItem('info_sq_ob') );
        $('#lk-info-kv-item-sq_zhil').html( sessionStorage.getItem('info_sq_zhil') );
        $('#lk-info-kv-item-img').attr('src', 'img/pic-plan-' + sessionStorage.getItem('info_planirovka') + '.png');
        $('#lk-info-kv-item-img-a').attr('href', 'img/pic-plan-' + sessionStorage.getItem('info_planirovka') + '.png');
        
        

        
        
        

        
        
        
        
        //alert( all['tickets_subjects'][key]['name'] );
    }
    else{
        
    }
/**** Прибивание информации к блокам сразу же после перезагрузки, в соответствии с авторизацией ****/    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
/** После авторизации перекидываем на главную "Личного кабинета" **/
if( sessionStorage.getItem('auth_now')=='1' ){
        if( $('#section-first').hasClass('active') ){ // ...чтобы первый экран не блокировал все остальное
            $('#section-first').removeClass('active');
            $('#base-screen').css({'display' : 'block'});
        }
        
        $('.section').each(function(){
            $(this).removeClass('active');
        });
        
        $('.lk-main').addClass('active');
        
        menu_add_close(); // если открыто
        sessionStorage.setItem('auth_now', '0')
}
/** После авторизации перекидываем на главную "Личного кабинета" **/
    
    
    
    
    
 
    
        /*---- Меняем ширину поля для ввода в тикетах относительно родительской подложки ----*/
        function lk_tickets_input_width_fix(){
            ticketsContentWidth = $('.lk-tickets .content-std').width();
            contentHeight = $('body').height() - 58 - 40 - 36 - 12 - 12 - 40;
            
            $('.lk-tickets-form').each(function(){
                $(this).width( ticketsContentWidth );
            });
            
            $('#tickets-msgs .subject-name').each(function(){
                $(this).innerWidth( ticketsContentWidth );
            });
            
            $('#tickets-msgs .content-std').each(function(){
                $(this).height( contentHeight );
            });
            
            
        }
        
        $('.go-location-link[data-link="lk-tickets"]').click(function(){
            lk_tickets_input_width_fix();
            $("textarea").each(function(){
                $(this).autoResize();
            });
            
            
   
   /*         
var textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', autosize);
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}*/

        });
        
        // авторесайз поля для ввода
        //$("textarea").autoResize();
        
        

        
        /*---- / Меняем ширину поля для ввода в тикетах относительно родительской подложки ----*/
        
    
    
    
/*---- Выравниваем Квартиры (1,2,3,4) по вертикали ----*/
$('a[data-link="flats"]').click(function(){
    contentHeight = $('body').height() - $('.flats .h1-std-big').height() - 58;
    $('.flats .content-std').height( contentHeight );
});
/*---- / Выравниваем Квартиры (1,2,3,4) по вертикали ----*/





/*---- Выравниваем Список галерей по вертикали ----*/
$('a[data-link="gal"]').click(function(){
    contentHeight = $('body').height() - $('.gal .h1-std-big').height() - 58;
    $('.gals-all').height( contentHeight );
    
    $('.gals-all .gals-item').each(function(){
        $(this).height(contentHeight/2);
    });
    
    $('.gals-all .gals-item img').each(function(){
        $(this).height(contentHeight/2);
    });
});
/*---- / Выравниваем Список галерей по вертикали ----*/





    
    
    
    
    
});











/*document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
function onVolumeDownKeyDown() {
    // Handle the volume down button
    alert();
}*/

//document.addEventListener("deviceready", onDeviceReady, false);
//alert( navigator.compass );

//window.addEventListener("batterystatus", onBatteryStatus, false);
//alert( status.level );

/*document.addEventListener("deviceready", onDeviceReady, false);
StatusBar.show;
alert( cordova.platformId );*/

//$(document).ready(function(){
    

    /*
    data1 = {
        //'token' : '123456789',
        'token' : '123456',
    }
    
    $.post("http://cx35469.tmweb.ru/server.php", data1, function(result){
        all = JSON.parse(result);
        all.fio;
        $('#info-ajax').html( all.fio );
    });
    */


//});






    /*data = {
        'token' : '123456789',
        'tel' : '222'
    };*/
    
    //$('#sendbtn').click(function(){
        //$.post("http://tekos.pro/assets/templates/tekos/js/send.php", data, function(result){
        //    navigator.vibrate(300);
        /*$.post("..../send.php", data, function(result){
            $('#info-ajax').html('<div class="good-mail"><span style="font-size:30px;">Спасибо за заявку!</span><br /><br /><span style="font-size:18px;">В ближайшее время мы позвоним Вам.</span></div>');
        });*/
    //});
    
//document.addEventListener("deviceready", onDeviceReady, false);
/*function onDeviceReady() {
    console.log(navigator.vibrate);
}*/






