$(function() {
    $('#yes').click(function(event) {
        modal('我就知道饭饭一定会愿意~(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('天气凉了要记得加衣服', A);
    });
});

function A() {
    modal('买点吃的放宿舍晚上会饿喔', B);
}

function B() {
    modal('出去玩的时候一定要少喝酒', C);
}

function C() {
    modal('打游戏不要玩太晚啦', D);
}

function D() {
    modal('好好睡觉', E);
}

function E() {
    modal('1000字检讨', F);
}

function F() {
    modal('我错啦', G);
}

function G() {
    modal('请饭饭一定要原谅我嘛', H);
}

function H() {
    modal('走着走着走到Coco了', I);
}
 function I() {
    modal('想喝奶茶扣1', J)
}
// function I() {
//     modal('会好好疼你', J)
// }
// function I() {
//     modal('会哄你睡觉', J)
// }
// function I() {
//     modal('会唱歌给你听', J)
// }
// function I() {
//     modal('爱你。么么哒！', J)
// }

function J() {
    modal('喝了我的奶茶不许拒绝我啦', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
