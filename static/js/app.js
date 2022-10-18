var obj_class_name = {0 : '', 1 : 'one', 2 : 'two', 3:'three'};
$(document).on('click', '.modal .close', function () {
    close_modal();
})
$(document).on('click', '.search', function () {
    $('body').addClass('overflow-hidden');
    $('.overlay').addClass('search');
    $('.overlay').removeClass('hide');
    $('.search-modal').removeClass('hide');
    $('#txt_search').focus();
    $('header').addClass('no-action');
});
$(document).on('click', '.sub-menu-item', function () {
    $('.sub-menu-item').removeClass('active');
    $(this).addClass('active');
})
$(document).on('click', '.view-story', function () {
    $('.overlay').removeClass('hide');
    $('.story-modal').removeClass('hide');
    $('body').addClass('overflow-hidden');
})
$(document).on('click', '.show-upload-images', function () {
    $('.overlay').removeClass('hide');
    $('.upload-images-modal').removeClass('hide');
    $('#list_images_from_modal li a').removeClass('choosen');
    $('body').addClass('overflow-hidden');
})
$(document).on('click', '.overlay', function () {
    close_modal();
})
$(document).on('click', '.close-story', function () {
    close_modal();
})
function close_modal() {
    $('.search-box-modal').removeClass('show');
    $('.overlay').addClass('hide');
    $('.overlay').removeClass('search');
    $('.modal').addClass('hide');
    $('body').removeClass('overflow-hidden');
    $('header').removeClass('no-action');
}
function show_modal() {
    $('.overlay').removeClass('hide');
    $('body').addClass('overflow-hidden');
}
$(document).on('click', '.btn-login, .btn-register', function () {
    $('.auth-modal').removeClass('hide');
    show_modal();
})
$(document).on('keyup', '#txt_search', function () {
    if ($(this).val().length > 0) {
        $('.clear-search').removeClass('hide')
    } else {
        $('.clear-search').addClass('hide')
    }
})
$(document).on('keyup', '#search_user_article', function () {
    if ($(this).val().length > 0) {
        $('.clear-search-article').removeClass('hide')
    } else {
        $('.clear-search-article').addClass('hide')
    }
})
$(document).on('click', '.clear-search', function () {
    $('#txt_search').val('');
    $('#txt_search').focus();
    $(this).addClass('hide')
})
$(document).on('click', '.clear-search-article', function () {
    $(this).addClass('hide')
    $('#search_user_article').val('');
    $('#search_user_article').focus();
})
$(document).on('click', '.search-topic', function () {
    $('.overlay').removeClass('hide')
    $('.other-topic-search-box').removeClass('hide');
    $('#txt_search_topic').focus();
})
$(document).on('click', '.select-item', function () {
    $(this).toggleClass('selected');
    $('#btn_start').removeClass('btn-disabled').addClass('btn-primary')
})
$(document).on('click', '.add-item-topic', function () {
    $(this).closest('li').remove();
    $('.topic-list').append(
        '<li><a class="select-item selected" href="javascript:void(0)">Social Media</a></li>'
    )
    $('#btn_start').removeClass('btn-disabled').addClass('btn-primary')
})
$(document).on('hover', '.comment-section', function () {
    $('body').addClass('overflow-hidden');
});
$(".comment-section").hover(function () {
    $('body').addClass('overflow-hidden');
});
$(".comment-section").mouseleave(function () {
    $('body').removeClass('overflow-hidden');
});
$(document).on('click', '#close_comment', function () {
    $('.comment-section').removeClass('show');
});
$(document).on('click', '#close_side_profile_menu', function () {
    $('.side-profile-menu').removeClass('show');
});
$(document).on('click', '.comment', function () {
    $('.comment-section').addClass('show');
});

$(document).on('click', '.comment-article', function () {
    $('.comment-section-article').addClass('show');
});
$(document).on('click', '#close_comment-article', function () {
    $('.comment-section-article').removeClass('show');
});

$(document).on('click', '.search-box .input', function () {
    $('body').addClass('overflow-hidden');
    $('.overlay').addClass('search');
    $('.overlay').removeClass('hide');
    $('.search-box-modal').addClass('show');
    $('.comment-section').removeClass('show');
    $('.side-profile-menu').removeClass('show');
    $('#txt_search').focus();
});
$(document).keyup(function (e) {
    if (e.key === "Escape") {
        close_modal();
    }
});
function show_profile_menu() {
    $('.side-profile-menu').addClass('show')
    close_modal();
}
$('#nav_item_profile').on('click', function (){
    $('.side-profile-menu').addClass('show')
    close_modal();
})
$('.controls a').on('click', function (e) {
    e.preventDefault();
    // $(this).toggleClass('active');
    let role = $(this).data('role');
    if ( role === 'blockquote') {
        // document.execCommand($(this).data('role'), false, '<blockquote>');
        document.execCommand('formatBlock', false, "<blockquote>");
        var quote = window.getSelection().focusNode.parentNode;
        $(quote).toggleClass("quote");
    }
    else if (role === 'unordered'){
        let content = '<ul><li>Type text here.</li></ul>';
        add_range(content);
    }
    else if (role === 'ordered'){
        let content = '<ol start="1"><li>Type text here.</li></ol>';
        add_range(content);
    }
    else {
        document.execCommand($(this).data('role'), false);
    }
});
var paste = document.getElementById("div[contenteditable]");

if(paste){
    document.querySelector("div[contenteditable]").addEventListener("paste", function (e) {
        e.preventDefault();
        var text = e.clipboardData.getData("text/plain");
        document.execCommand("insertHTML", false, text);
    });
    
    document.querySelector("div[contenteditable]").addEventListener('keypress', function(ev){
        console.log(ev);
        if(ev.keyCode === 13){
            // document.execCommand('formatBlock', false, 'p');
        }
    }, false);
}
// var keypress = document.getElementById("div[contenteditable]");

// document.querySelector("div[contenteditable]").addEventListener("paste", function (e) {
//     e.preventDefault();
//     var text = e.clipboardData.getData("text/plain");
//     document.execCommand("insertHTML", false, text);
// });

// document.querySelector("div[contenteditable]").addEventListener('keypress', function(ev){
//     console.log(ev);
//     if(ev.keyCode === 13){
//         // document.execCommand('formatBlock', false, 'p');
//     }
// }, false);

$('.pick-image').on('click', function (){
   $(this).toggleClass('choosen');
});
$('#btn_choose_image').on('click', function (){
    var li = '';
    let count = 0;
    let uclass = random();
    let class_name = 'col '+ uclass;
    $('#list_images_from_modal li').each(function() {
        var data = $(this).find('a').attr('data-url');
        if($(this).find('a').is('.choosen')){
            li = li + '<li ul-class="'+uclass+'"><img src="'+data+'"></li>'
            count++;
        }
    });
    if(count < 4){
        class_name = obj_class_name[count] + ' ' + uclass;
    }
    var sel, range, node;
    if (window.getSelection) {
        sel = window.getSelection();
        try {
            if (sel.anchorNode.parentNode.classList.contains('editable')) {
                if (sel.getRangeAt && sel.rangeCount) {
                    range = window.getSelection().getRangeAt(0);
                    node = range.createContextualFragment('<ul class="list-images ' + class_name + '">' + li + '</ul>');
                    range.insertNode(node);
                }else{
                    $("#content_editor").append('<div class="list-images ' + class_name + '">' + li + '</div>');
                }
            }else{
                $("#content_editor").append('<ul class="list-images ' + class_name + '">' + li + '</ul>');
            }
        }catch(err) {
            $("#content_editor").append('<ul class="list-images ' + class_name + '">' + li + '</ul>');
        }
    }
    close_modal();
})
$(".list-images li img").hover(function (){
    console.log('hover');
    $(this).closest('li').append('<div class="image-control">hover</div>');
})
$(document).on('mouseenter', '.list-images > li > img', function (){
    $(this).closest('li').append('<div class="image-control">' +
        '<a href="javascript:void(0)" class="delete-image"></a>' +
        '<a href="javascript:void(0)" class="add-image-title"></a>' +
        '</div>');
});
$(document).on('mouseleave', '.list-images > li > .image-control', function (){
    $(this).remove();
});
$(document).on('click', '.delete-image', function (){
    $(this).closest('li').remove();
    let class_name = 'col';
    let count = $('ul.list-images').children('li').length;
    if(count < 4){
        class_name = obj_class_name[count]
    }
    if(count === 0){
        $('ul.list-images').remove();
    }else{
        $('ul.list-images').removeClass('one two three col');
        $('ul.list-images').addClass(class_name);
    }
});
$(document).on('click', '.add-image-title', function (){
    let parent = $(this).closest('li').attr('ul-class');
    if($('.image-label.'+parent).length > 0){
        $('.image-label.'+parent).focus();
    }else{
        $('<small class="image-label '+parent+'">Image Label</small>').insertAfter($("ul."+parent));
        $('.image-label.'+parent).focus();
    }
});
function random() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 8; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
function add_range(content){
    var sel, range, node;
    if (window.getSelection) {
        sel = window.getSelection();
        try {
            if (sel.anchorNode.parentNode.classList.contains('editable')) {
                if (sel.getRangeAt && sel.rangeCount) {
                    range = window.getSelection().getRangeAt(0);
                    node = range.createContextualFragment(content);
                    range.insertNode(node);
                }else{
                    $("#content_editor").append(content);
                }
            }else{
                $("#content_editor").append(content);
            }
        }catch(err) {
            $("#content_editor").append(content);
        }
    }
}
