$(function () {

    var router = new Router({
        container: '#container',
        enterTimeout: 250,
        leaveTimeout: 250
    });

    // // grid
    // var home = {
    //     url: '/',
    //     className: 'home',
    //     render: function () {
    //         return $('#tpl_home').html();
    //     }
    // };
    //
    // // person
    // var person = {
    //     url: '/person',
    //     className: 'person',
    //     render: function () {
    //         return $('#tpl_person').html();
    //     },
    //     bind: function (){
    //         prePerson();
    //     }
    // };
    //
    // // game
    // var game = {
    //     url: '/game',
    //     className: 'game',
    //     render: function () {
    //         return $('#tpl_game').html();
    //     },
    //     bind: function (){
    //         preGame();
    //         preGameScore();
    //     }
    // };
    //
    // // // history
    // // var history = {
    // //     url: '/history',
    // //     className: 'history',
    // //     render: function () {
    // //         return $('#tpl_history').html();
    // //     }
    // // };
    //
    //
    //
    //
    //
    // // cell
    // var cell = {
    //     url: '/cell',
    //     className: 'cell',
    //     render: function () {
    //         return $('#tpl_cell').html();
    //     },
    //     bind: function (){
    //         $('.container').on('click', '#showTooltips', function (){
    //             $('.js_tooltips').show();
    //             setTimeout(function (){
    //                 $('.js_tooltips').hide();
    //             }, 3000);
    //         });
    //     }
    // };
    //
    // // toast
    // var toast = {
    //     url: '/toast',
    //     className: 'toast',
    //     render: function () {
    //         return $('#tpl_toast').html();
    //     },
    //     bind: function () {
    //         $('#container').on('click', '#showToast', function () {
    //             $('#toast').show();
    //             setTimeout(function () {
    //                 $('#toast').hide();
    //             }, 2000);
    //         }).on('click', '#showLoadingToast', function () {
    //             $('#loadingToast').show();
    //             setTimeout(function () {
    //                 $('#loadingToast').hide();
    //             }, 2000);
    //         });
    //     }
    // };
    //
    // // dialog
    // var dialog = {
    //     url: '/dialog',
    //     className: 'dialog',
    //     render: function () {
    //         return $('#tpl_dialog').html();
    //     },
    //     bind: function () {
    //         $('#container').on('click', '#showDialog1', function () {
    //             $('#dialog1').show().on('click', '.weui_btn_dialog', function () {
    //                 $('#dialog1').off('click').hide();
    //             });
    //         }).on('click', '#showDialog2', function () {
    //             $('#dialog2').show().on('click', '.weui_btn_dialog', function () {
    //                 $('#dialog2').off('click').hide();
    //             });
    //         });
    //
    //     }
    // };
    //
    // // progress
    // var progress = {
    //     url: '/progress',
    //     className: 'progress',
    //     render: function () {
    //         return $('#tpl_progress').html();
    //     },
    //     bind: function () {
    //         $('#container').on('click', '#btnStartProgress', function () {
    //             if ($(this).hasClass('weui_btn_disabled')) {
    //                 return;
    //             }
    //
    //             $(this).addClass('weui_btn_disabled');
    //
    //             var progress = 0;
    //             var $progress = $('.js_progress');
    //
    //             function next() {
    //                 $progress.css({width: progress + '%'});
    //                 progress = ++progress % 100;
    //                 setTimeout(next, 30);
    //             }
    //
    //             next();
    //         });
    //     }
    // };
    //
    // // msg
    // var msg = {
    //     url: '/msg',
    //     className: 'msg',
    //     render: function () {
    //         return $('#tpl_msg').html();
    //     }
    // };
    //
    // // article
    // var article = {
    //     url: '/article',
    //     className: 'article',
    //     render: function () {
    //         return $('#tpl_article').html();
    //     }
    // };
    //
    // // actionsheet
    // var actionsheet = {
    //     url: '/actionsheet',
    //     className: 'actionsheet',
    //     render: function () {
    //         return $('#tpl_actionsheet').html();
    //     },
    //     bind: function () {
    //         $('#container').on('click', '#showActionSheet', function () {
    //             var mask = $('#mask');
    //             var weuiActionsheet = $('#weui_actionsheet');
    //             weuiActionsheet.addClass('weui_actionsheet_toggle');
    //             mask.show()
    //                 .focus()//加focus是为了触发一次页面的重排(reflow or layout thrashing),使mask的transition动画得以正常触发
    //                 .addClass('weui_fade_toggle').one('click', function () {
    //                 hideActionSheet(weuiActionsheet, mask);
    //             });
    //             $('#actionsheet_cancel').one('click', function () {
    //                 hideActionSheet(weuiActionsheet, mask);
    //             });
    //             mask.unbind('transitionend').unbind('webkitTransitionEnd');
    //
    //             function hideActionSheet(weuiActionsheet, mask) {
    //                 weuiActionsheet.removeClass('weui_actionsheet_toggle');
    //                 mask.removeClass('weui_fade_toggle');
    //                 mask.on('transitionend', function () {
    //                     mask.hide();
    //                 }).on('webkitTransitionEnd', function () {
    //                     mask.hide();
    //                 })
    //             }
    //         });
    //     }
    // };
    //
    // // icons
    // var icons = {
    //     url: '/icons',
    //     className: 'icons',
    //     render: function () {
    //         return $('#tpl_icons').html();
    //     }
    // };
    //
    // // panel
    // var panel = {
    //     url: '/panel',
    //     className: 'panel',
    //     render: function () {
    //         return $('#tpl_panel').html();
    //     }
    // };
    //
    // // tab
    // var tab = {
    //     url: '/tab',
    //     className: 'tab',
    //     render: function () {
    //         return $('#tpl_tab').html();
    //     }
    // };
    //
    // // navbar
    // var navbar = {
    //     url: '/navbar',
    //     className: 'navbar',
    //     render: function () {
    //         return $('#tpl_navbar').html();
    //     },
    //     bind: function () {
    //         $('#container').on('click', '.weui_navbar_item', function () {
    //             $(this).addClass('weui_bar_item_on').siblings('.weui_bar_item_on').removeClass('weui_bar_item_on');
    //         });
    //     }
    // };
    //
    // // tabbar
    // var tabbar = {
    //     url: '/tabbar',
    //     className: 'tabbar',
    //     render: function () {
    //         return $('#tpl_tabbar').html();
    //     },
    //     bind: function () {
    //         $('#container').on('click', '.weui_tabbar_item', function () {
    //             $(this).addClass('weui_bar_item_on').siblings('.weui_bar_item_on').removeClass('weui_bar_item_on');
    //         });
    //     }
    // };
    //
    // // searchbar
    // var searchbar = {
    //     url: '/searchbar',
    //     className: 'searchbar',
    //     render: function () {
    //         return $('#tpl_searchbar').html();
    //     },
    //     bind: function () {
    //         $('#container').on('focus', '#search_input', function () {
    //             var $weuiSearchBar = $('#search_bar');
    //             $weuiSearchBar.addClass('weui_search_focusing');
    //         }).on('blur', '#search_input', function () {
    //             var $weuiSearchBar = $('#search_bar');
    //             $weuiSearchBar.removeClass('weui_search_focusing');
    //             if ($(this).val()) {
    //                 $('#search_text').hide();
    //             } else {
    //                 $('#search_text').show();
    //             }
    //         }).on('input', '#search_input', function () {
    //             var $searchShow = $("#search_show");
    //             if ($(this).val()) {
    //                 $searchShow.show();
    //             } else {
    //                 $searchShow.hide();
    //             }
    //         }).on('touchend', '#search_cancel', function () {
    //             $("#search_show").hide();
    //             $('#search_input').val('');
    //         }).on('touchend', '#search_clear', function () {
    //             $("#search_show").hide();
    //             $('#search_input').val('');
    //         });
    //     }
    // };
    //


    // .container 设置了 overflow 属性, 导致 Android 手机下输入框获取焦点时, 输入法挡住输入框的 bug
    // 相关 issue: https://github.com/weui/weui/issues/15
    // 解决方法:
    // 0. .container 去掉 overflow 属性, 但此 demo 下会引发别的问题
    // 1. 参考 http://stackoverflow.com/questions/23757345/android-does-not-correctly-scroll-on-input-focus-if-not-body-element
    //    Android 手机下, input 或 textarea 元素聚焦时, 主动滚一把
    if (/Android/gi.test(navigator.userAgent)) {
        window.addEventListener('resize', function () {
            if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
                window.setTimeout(function () {
                    document.activeElement.scrollIntoViewIfNeeded();
                }, 0);
            }
        })
    }

    $('.weui_grids').on('click', '#icon_person', function () {
        window.location.href = "person.html";
    });
    $('.weui_grids').on('click', '#icon_game', function () {
        if (localStorage.getItem('personList') === null) {
            window.location.href = "person.html";
        }
        else {
            window.location.href = "game.html";
        }
    });
    $('.weui_grids').on('click', '#icon_history', function () {
        window.location.href = "history.html";
    });

    //prePerson
    if (localStorage.personList) {
        var personList = localStorage.personList.split(",");
        for(var i = 1; i < personList.length; i++) {
            $('.person_list').append('<div class="weui_cell person">'+
                '<div class="weui_cell_hd"><label class="weui_label"><i class="weui_icon_cancel del_person"></i>&nbsp;姓名</label></div>'+
                '<div class="weui_cell_bd weui_cell_primary">'+
                '<input class="weui_input person_name" type="text" placeholder="请输入姓名"/>'+
                '</div>'+
                '</div>');
        }

        var index = 0;
        $('.person_list').find('.person_name').each(function(){
            $(this).val(personList[index]);
            index++;
        });
        $('.btn_area_person').append('<a class="weui_btn weui_btn_primary btn_end_game" href="javascript:;" id="confirmGameEnd">Game Over</a>');
    }

    //preGame
    if (localStorage.personList) {
        var personList = localStorage.personList.split(",");
        for(var i = 0; i < personList.length; i++) {
            $('.score_list').append('<div class="weui_cell card">'+
                '<div class="weui_cell_hd"><label class="weui_label">'+personList[i]+'</label></div>'+
                '<div class="weui_cell_bd weui_cell_primary">'+
                '<input class="weui_input card_num" type="number" placeholder="请输入剩余牌数"/>'+
                '</div>'+
                '<div class="weui_cell_ft win">'+
                '<input class="weui_switch win_switch" name="win" type="radio">'+
                '</div>'+
                '</div>');
        }
    }

    //preGameScore
    if (localStorage.personList) {
        var html = '';
        var personList = localStorage.personList.split(",");
        for(var i = 0; i < personList.length; i++) {
            if (localStorage.getItem(i)!==null) {
                var scoreList = localStorage.getItem(i).split(",");
                var total_num = 0;
                for(var j = 0; j < scoreList.length; j++) {
                    total_num += (+scoreList[j]);
                }
                html += '<div class="weui_cells">'+
                    '<label class="weui_label" style="width:100%">'+personList[i]+' <span style="color: red">总分:'+total_num+'</span></label>'+
                    '<p>'+localStorage.getItem(i).replace(/,/g,' ')+'</p>'+
                    '</div>';
            }
        }
        html += '</div>';
        if (localStorage.getItem(0)!==null) {
            html += '<div class="weui_btn_area">'+
                '<a class="weui_btn weui_btn_primary btn_end_game" href="javascript:;" id="confirmGameEnd">Game Over</a>'+
                '</div>';
        }
        $('.total_score_list').html(html);
    }

    //person
    $('.weui_btn_area').on('click', '.add_person', function () {
        $('.person_list').append('<div class="weui_cell person">'+
            '<div class="weui_cell_hd"><label class="weui_label"><i class="weui_icon_cancel del_person"></i>&nbsp;姓名</label></div>'+
            '<div class="weui_cell_bd weui_cell_primary">'+
            '<input class="weui_input person_name" type="text" placeholder="请输入姓名"/>'+
            '</div>'+
            '</div>');
    });

    $('.person').on('click', '.del_person', function () {
        var personObj = $(this).parent().parent().parent();
        personObj.remove();
    });

    $('.weui_btn_area').on('click', '.btn_add_person', function () {
        if (localStorage.getItem('isGame') == 0 || localStorage.getItem('isGame') === null) {
            var personList = [],
                index = 0;
            $('.person_list').find('.person_name').each(function(){
                if ($(this).val()) {
                    personList[index] = $(this).val();
                    index++;
                }
            });
            localStorage.setItem('personList', personList);
            localStorage.setItem('isGame', 1);
            $('#person_hint').find('.weui_toast_content').html('操作完成');
            window.location.href = "game.html";
        }
        else if (localStorage.getItem('isGame') == 1) {
            $('#person_hint').find('.weui_toast_content').html('比赛已经开始');
        }
        $('#person_hint').show();
        setTimeout(function () {
            $('#person_hint').hide();
        }, 2000);
    });

    //game
    $('.win').on('click', '.win_switch', function () {
        var personObj = $(this).parent().parent(),
            parentObj = personObj.parent();
        parentObj.find('.card_num').each(function(){
            $(this).show();
        });
        personObj.find('.card_num').each(function(){
            $(this).hide();
        });
    });

    $('.weui_btn_area').on('click', '.btn_add_score', function () {
        var isWin = 0;
        $('.score_list').find('.card_num').each(function () {
            if ($(this).css("display") == "none") {
                isWin = 1;
            }
        });
        if (isWin == 0) {
            $('#game_hint').find('.weui_toast_content').html('请选择本场赢家');
            $('#game_hint').show();
            setTimeout(function () {
                $('#game_hint').hide();
            }, 500);
            return false;
        }

        if (localStorage.getItem('isGame') == 1) {
            var index = 0,
                win_score = 0;
            $('.score_list').find('.card_num').each(function () {
                if ($(this).val() && $(this).css("display") != "none") {
                    localStorage.setItem(index, ((localStorage.getItem(index)===null)?'':localStorage.getItem(index)) + '-' + $(this).val() + ',');
                    win_score += Number($(this).val());
                }
                index++;
            });
            var index = 0;
            $('.score_list').find('.card_num').each(function () {
                if ($(this).css("display") == "none") {
                    localStorage.setItem(index, ((localStorage.getItem(index)===null)?'':localStorage.getItem(index)) + '+' + win_score + ',');
                }
                index++;
            });

            window.location.reload(true);
            $('#game_hint').find('.weui_toast_content').html('操作完成');
            $('#game_hint').show();
            preGameScore();
        }
        else if (localStorage.getItem('isGame') == 0) {
            $('#game_hint').find('.weui_toast_content').html('<p>游戏结束</p><p>请重新设置Person</p>');
            $('#game_hint').show();
            setTimeout(function () {
                $('#game_hint').hide();
            }, 2000);
        }
    });

    $('.weui_btn_area').on('click', '.btn_end_game', function () {
        $('#gameOver').show().on('click', '.continue', function () {
            $('#gameOver').off('click').hide();
        });
        $('#gameOver').show().on('click', '.stop', function () {
            if (localStorage.personList && localStorage.getItem('isGame') == 1) {
                var personList = localStorage.personList.split(",");
                for(var i = 0; i < personList.length; i++) {
                    localStorage.removeItem(i);
                }
                localStorage.setItem('isGame', 0);
                localStorage.removeItem('personList');
                $('.total_score_list').html('');
                $('#game_hint').find('.weui_toast_content').html('操作完成');
                $('#game_hint').show();
                setTimeout(function () {
                    $('#game_hint').hide();
                }, 2000);
            }
            window.location.href = "person.html";
        });
    });
});
