$(document).ready(function ()
{
    jQuery(($) =>
    {
        $(".select").on("click", ".select_head", function ()
        {
            if ($(this).hasClass("open"))
            {
                $(this).removeClass("open");
                $(this).next().fadeOut();
            } 
            else 
            {
                $(".select_head").removeClass("open");
                $(".select_list").fadeOut();
                $(this).addClass("open");
                $(this).next().fadeIn();
            }
        });

        $(".select").on("click", ".select_item", function ()
        {
            $(".select_head").removeClass("open");
            $(this).parent().fadeOut();
            $(this).parent().prev().text($(this).text());
            $(this).parent().prev().prev().val($(this).text());
        });

        $(document).click(function (e)
        {
            if (!$(e.target).closest('.select').length)
            {
                $(".select_head").removeClass("open");
                $(".select_list").fadeOut();
            }
        });
    });

    $("a[href*='#']").click(function ()
    {
        var val_href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(val_href).offset().top - 70 + "px"});
    });

    var valPrice1 = 0, valPrice2 = 0, valPrice3 = 0;

    $("#select1 li").click(function ()
    {
        valPrice1 = Number($(this).attr("price"));
        let textContent1 = $(this).text();
        if (textContent1 == "Габбро")
        {
            $("#type_work1").css("display", "block");
            $("#type_work2").css("display", "block");
            $("#type_work3").css("display", "block");
            $("#type_work4").css("display", "block");
            $("#type_work5").css("display", "block");
            $("#type_work6").css("display", "block");
            $("#type_work7").css("display", "block");
            $("#type_work8").css("display", "none");
            $("#select_head2 .select_head").text("Выберите пункт...");
            $("#select_head3 .select_head").text("Выберите пункт...");
            valPrice2 = 0, valPrice3 = 0;
        }
        if (textContent1 == "Амфиболит")
        {
            $("#type_work1").css("display", "none");
            $("#type_work2").css("display", "none");
            $("#type_work3").css("display", "none");
            $("#type_work4").css("display", "none");
            $("#type_work5").css("display", "none");
            $("#type_work6").css("display", "none");
            $("#type_work7").css("display", "none");
            $("#type_work8").css("display", "block");
            $("#select_head2 .select_head").text("Выберите пункт...");
            $("#select_head3 .select_head").text("Выберите пункт...");
            valPrice2 = 0, valPrice3 = 0;
        }
        if (textContent1 == "Дымовский")
        {
            $("#type_work1").css("display", "none");
            $("#type_work2").css("display", "none");
            $("#type_work3").css("display", "none");
            $("#type_work4").css("display", "none");
            $("#type_work5").css("display", "none");
            $("#type_work6").css("display", "none");
            $("#type_work7").css("display", "none");
            $("#type_work8").css("display", "block");
            $("#select_head2 .select_head").text("Выберите пункт...");
            $("#select_head3 .select_head").text("Выберите пункт...");
            valPrice2 = 0, valPrice3 = 0;
        }
        if (textContent1 == "Мансуровский")
        {
            $("#type_work1").css("display", "none");
            $("#type_work2").css("display", "none");
            $("#type_work3").css("display", "none");
            $("#type_work4").css("display", "none");
            $("#type_work5").css("display", "none");
            $("#type_work6").css("display", "none");
            $("#type_work7").css("display", "none");
            $("#type_work8").css("display", "block");
            $("#select_head2 .select_head").text("Выберите пункт...");
            $("#select_head3 .select_head").text("Выберите пункт...");
            valPrice2 = 0, valPrice3 = 0;
        }
    });

    $("#select2 li").click(function ()
    {
        valPrice2 = Number($(this).attr("price"));
        let textContent2 = $(this).attr("id");
        if (textContent2 == "type_work1")
        {
            $("#type_size1").css("display", "block");
            $("#type_size2").css("display", "block");
            $("#type_size3").css("display", "block");
            $("#type_size4").css("display", "block");
            $("#type_size5").css("display", "block");
            $("#type_size6").css("display", "block");
            $("#type_size7").css("display", "block");
            $("#type_size8").css("display", "block");
            $("#type_size9").css("display", "block");
            $("#type_size10").css("display", "none");
            $("#type_size11").css("display", "none");
            $("#type_size12").css("display", "none");
            $("#type_size13").css("display", "none");
            $("#type_size14").css("display", "none");
            $("#type_size15").css("display", "none");
            $("#type_size16").css("display", "none");
            $("#type_size17").css("display", "none");
            $("#type_size18").css("display", "none");
            $("#type_size19").css("display", "none");
            $("#type_size20").css("display", "none");
            $("#type_size21").css("display", "none");
            $("#type_size22").css("display", "none");
            $("#type_size23").css("display", "none");
            $("#type_size24").css("display", "none");
            $("#type_size25").css("display", "none");
            $("#type_size26").css("display", "none");
            $("#type_size27").css("display", "none");
            $("#type_size28").css("display", "none");
            $("#type_size29").css("display", "none");
            $("#type_size30").css("display", "none");
            $("#type_size31").css("display", "none");
            $("#type_size32").css("display", "none");
            $("#type_size33").css("display", "none");
            $("#type_size34").css("display", "none");
            $("#type_size35").css("display", "none");
            $("#type_size36").css("display", "none");
            $("#select_head3 .select_head").text("Выберите пункт...");
            valPrice3 = 0;
        }
        if (textContent2 == "type_work2")
        {
            $("#type_size1").css("display", "none");
            $("#type_size2").css("display", "none");
            $("#type_size3").css("display", "none");
            $("#type_size4").css("display", "none");
            $("#type_size5").css("display", "none");
            $("#type_size6").css("display", "none");
            $("#type_size7").css("display", "none");
            $("#type_size8").css("display", "none");
            $("#type_size9").css("display", "none");
            $("#type_size10").css("display", "block");
            $("#type_size11").css("display", "block");
            $("#type_size12").css("display", "block");
            $("#type_size13").css("display", "block");
            $("#type_size14").css("display", "block");
            $("#type_size15").css("display", "block");
            $("#type_size16").css("display", "block");
            $("#type_size17").css("display", "block");
            $("#type_size18").css("display", "none");
            $("#type_size19").css("display", "none");
            $("#type_size20").css("display", "none");
            $("#type_size21").css("display", "none");
            $("#type_size22").css("display", "none");
            $("#type_size23").css("display", "none");
            $("#type_size24").css("display", "none");
            $("#type_size25").css("display", "none");
            $("#type_size26").css("display", "none");
            $("#type_size27").css("display", "none");
            $("#type_size28").css("display", "none");
            $("#type_size29").css("display", "none");
            $("#type_size30").css("display", "none");
            $("#type_size31").css("display", "none");
            $("#type_size32").css("display", "none");
            $("#type_size33").css("display", "none");
            $("#type_size34").css("display", "none");
            $("#type_size35").css("display", "none");
            $("#type_size36").css("display", "none");
            $("#select_head3 .select_head").text("Выберите пункт...");
            valPrice3 = 0;
        }
        if (textContent2 == "type_work3")
        {
            $("#type_size1").css("display", "none");
            $("#type_size2").css("display", "none");
            $("#type_size3").css("display", "none");
            $("#type_size4").css("display", "none");
            $("#type_size5").css("display", "none");
            $("#type_size6").css("display", "none");
            $("#type_size7").css("display", "none");
            $("#type_size8").css("display", "none");
            $("#type_size9").css("display", "none");
            $("#type_size10").css("display", "none");
            $("#type_size11").css("display", "none");
            $("#type_size12").css("display", "none");
            $("#type_size13").css("display", "none");
            $("#type_size14").css("display", "none");
            $("#type_size15").css("display", "none");
            $("#type_size16").css("display", "none");
            $("#type_size17").css("display", "none");
            $("#type_size18").css("display", "block");
            $("#type_size19").css("display", "block");
            $("#type_size20").css("display", "block");
            $("#type_size21").css("display", "block");
            $("#type_size22").css("display", "none");
            $("#type_size23").css("display", "none");
            $("#type_size24").css("display", "none");
            $("#type_size25").css("display", "none");
            $("#type_size26").css("display", "none");
            $("#type_size27").css("display", "none");
            $("#type_size28").css("display", "none");
            $("#type_size29").css("display", "none");
            $("#type_size30").css("display", "none");
            $("#type_size31").css("display", "none");
            $("#type_size32").css("display", "none");
            $("#type_size33").css("display", "none");
            $("#type_size34").css("display", "none");
            $("#type_size35").css("display", "none");
            $("#type_size36").css("display", "none");
            $("#select_head3 .select_head").text("Выберите пункт...");
            valPrice3 = 0;
        }
        if (textContent2 == "type_work4")
        {
            $("#type_size1").css("display", "none");
            $("#type_size2").css("display", "none");
            $("#type_size3").css("display", "none");
            $("#type_size4").css("display", "none");
            $("#type_size5").css("display", "none");
            $("#type_size6").css("display", "none");
            $("#type_size7").css("display", "none");
            $("#type_size8").css("display", "none");
            $("#type_size9").css("display", "none");
            $("#type_size10").css("display", "none");
            $("#type_size11").css("display", "none");
            $("#type_size12").css("display", "none");
            $("#type_size13").css("display", "none");
            $("#type_size14").css("display", "none");
            $("#type_size15").css("display", "none");
            $("#type_size16").css("display", "none");
            $("#type_size17").css("display", "none");
            $("#type_size18").css("display", "none");
            $("#type_size19").css("display", "none");
            $("#type_size20").css("display", "none");
            $("#type_size21").css("display", "none");
            $("#type_size22").css("display", "block");
            $("#type_size23").css("display", "block");
            $("#type_size24").css("display", "block");
            $("#type_size25").css("display", "block");
            $("#type_size26").css("display", "block");
            $("#type_size27").css("display", "block");
            $("#type_size28").css("display", "none");
            $("#type_size29").css("display", "none");
            $("#type_size30").css("display", "none");
            $("#type_size31").css("display", "none");
            $("#type_size32").css("display", "none");
            $("#type_size33").css("display", "none");
            $("#type_size34").css("display", "none");
            $("#type_size35").css("display", "none");
            $("#type_size36").css("display", "none");
            $("#select_head3 .select_head").text("Выберите пункт...");
            valPrice3 = 0;
        }
        if (textContent2 == "type_work5")
        {
            $("#type_size1").css("display", "none");
            $("#type_size2").css("display", "none");
            $("#type_size3").css("display", "none");
            $("#type_size4").css("display", "none");
            $("#type_size5").css("display", "none");
            $("#type_size6").css("display", "none");
            $("#type_size7").css("display", "none");
            $("#type_size8").css("display", "none");
            $("#type_size9").css("display", "none");
            $("#type_size10").css("display", "none");
            $("#type_size11").css("display", "none");
            $("#type_size12").css("display", "none");
            $("#type_size13").css("display", "none");
            $("#type_size14").css("display", "none");
            $("#type_size15").css("display", "none");
            $("#type_size16").css("display", "none");
            $("#type_size17").css("display", "none");
            $("#type_size18").css("display", "none");
            $("#type_size19").css("display", "none");
            $("#type_size20").css("display", "none");
            $("#type_size21").css("display", "none");
            $("#type_size22").css("display", "none");
            $("#type_size23").css("display", "none");
            $("#type_size24").css("display", "none");
            $("#type_size25").css("display", "none");
            $("#type_size26").css("display", "none");
            $("#type_size27").css("display", "none");
            $("#type_size28").css("display", "block");
            $("#type_size29").css("display", "block");
            $("#type_size30").css("display", "block");
            $("#type_size31").css("display", "block");
            $("#type_size32").css("display", "none");
            $("#type_size33").css("display", "none");
            $("#type_size34").css("display", "none");
            $("#type_size35").css("display", "none");
            $("#type_size36").css("display", "none");
        }
        if (textContent2 == "type_work6")
        {
            $("#type_size1").css("display", "none");
            $("#type_size2").css("display", "none");
            $("#type_size3").css("display", "none");
            $("#type_size4").css("display", "none");
            $("#type_size5").css("display", "none");
            $("#type_size6").css("display", "none");
            $("#type_size7").css("display", "none");
            $("#type_size8").css("display", "none");
            $("#type_size9").css("display", "none");
            $("#type_size10").css("display", "none");
            $("#type_size11").css("display", "none");
            $("#type_size12").css("display", "none");
            $("#type_size13").css("display", "none");
            $("#type_size14").css("display", "none");
            $("#type_size15").css("display", "none");
            $("#type_size16").css("display", "none");
            $("#type_size17").css("display", "none");
            $("#type_size18").css("display", "none");
            $("#type_size19").css("display", "none");
            $("#type_size20").css("display", "none");
            $("#type_size21").css("display", "none");
            $("#type_size22").css("display", "none");
            $("#type_size23").css("display", "none");
            $("#type_size24").css("display", "none");
            $("#type_size25").css("display", "none");
            $("#type_size26").css("display", "none");
            $("#type_size27").css("display", "none");
            $("#type_size28").css("display", "none");
            $("#type_size29").css("display", "none");
            $("#type_size30").css("display", "none");
            $("#type_size31").css("display", "none");
            $("#type_size32").css("display", "block");
            $("#type_size33").css("display", "block");
            $("#type_size34").css("display", "none");
            $("#type_size35").css("display", "none");
            $("#type_size36").css("display", "none");
            $("#select_head3 .select_head").text("Выберите пункт...");
            valPrice3 = 0;
        }
        if (textContent2 == "type_work7")
        {
            $("#type_size1").css("display", "none");
            $("#type_size2").css("display", "none");
            $("#type_size3").css("display", "none");
            $("#type_size4").css("display", "none");
            $("#type_size5").css("display", "none");
            $("#type_size6").css("display", "none");
            $("#type_size7").css("display", "none");
            $("#type_size8").css("display", "none");
            $("#type_size9").css("display", "none");
            $("#type_size10").css("display", "none");
            $("#type_size11").css("display", "none");
            $("#type_size12").css("display", "none");
            $("#type_size13").css("display", "none");
            $("#type_size14").css("display", "none");
            $("#type_size15").css("display", "none");
            $("#type_size16").css("display", "none");
            $("#type_size17").css("display", "none");
            $("#type_size18").css("display", "none");
            $("#type_size19").css("display", "none");
            $("#type_size20").css("display", "none");
            $("#type_size21").css("display", "none");
            $("#type_size22").css("display", "none");
            $("#type_size23").css("display", "none");
            $("#type_size24").css("display", "none");
            $("#type_size25").css("display", "none");
            $("#type_size26").css("display", "none");
            $("#type_size27").css("display", "none");
            $("#type_size28").css("display", "none");
            $("#type_size29").css("display", "none");
            $("#type_size30").css("display", "none");
            $("#type_size31").css("display", "none");
            $("#type_size32").css("display", "none");
            $("#type_size33").css("display", "none");
            $("#type_size34").css("display", "block");
            $("#type_size35").css("display", "block");
            $("#type_size36").css("display", "none");
            $("#select_head3 .select_head").text("Выберите пункт...");
            valPrice3 = 0;
        }
        if (textContent2 == "type_work8")
        {
            $("#type_size1").css("display", "none");
            $("#type_size2").css("display", "none");
            $("#type_size3").css("display", "none");
            $("#type_size4").css("display", "none");
            $("#type_size5").css("display", "none");
            $("#type_size6").css("display", "none");
            $("#type_size7").css("display", "none");
            $("#type_size8").css("display", "none");
            $("#type_size9").css("display", "none");
            $("#type_size10").css("display", "none");
            $("#type_size11").css("display", "none");
            $("#type_size12").css("display", "none");
            $("#type_size13").css("display", "none");
            $("#type_size14").css("display", "none");
            $("#type_size15").css("display", "none");
            $("#type_size16").css("display", "none");
            $("#type_size17").css("display", "none");
            $("#type_size18").css("display", "none");
            $("#type_size19").css("display", "none");
            $("#type_size20").css("display", "none");
            $("#type_size21").css("display", "none");
            $("#type_size22").css("display", "none");
            $("#type_size23").css("display", "none");
            $("#type_size24").css("display", "none");
            $("#type_size25").css("display", "none");
            $("#type_size26").css("display", "none");
            $("#type_size27").css("display", "none");
            $("#type_size28").css("display", "none");
            $("#type_size29").css("display", "none");
            $("#type_size30").css("display", "none");
            $("#type_size31").css("display", "none");
            $("#type_size32").css("display", "none");
            $("#type_size33").css("display", "none");
            $("#type_size34").css("display", "none");
            $("#type_size35").css("display", "none");
            $("#type_size36").css("display", "block");
            $("#select_head3 .select_head").text("Выберите пункт...");
            valPrice3 = 0;
        }
    });

    $("#select3 li").click(function ()
    {
        valPrice3 = Number($(this).attr("price"));
    });

    $(".select_item").click(function ()
    {
        var Price = valPrice1 + valPrice2 + valPrice3;
        $("p.price_num").text(Price + " BYN");
    });
    
    $("#form").submit(function(e)
    {
        e.preventDefault()
        var formData = $(this).serialize();
        console.log(formData);
        $.ajax(
        {
            type: "POST",
            url: "../../php/send.php",
            data: formData,
            success: function(data)
            {
                alert("Сообщение почти отправлено!");
            }
        });
    });
});