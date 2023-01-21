// var $,
//     isJQuery = typeof jQuery == 'function';
// if (isJQuery) $ = jQuery;
// var isBuilder = document.querySelector('html').classList.contains('is-builder');
// function ready(fn) {
//     if (document.readyState != 'loading'){
//       fn();
//     } else {
//       document.addEventListener('DOMContentLoaded', fn);
//     }
// }

// /*
// if (!isBuilder) {
//     if (typeof window.initSwitchArrowPlugin === 'undefined') {
//         window.initSwitchArrowPlugin = true;
//         ready(function () {
//             if (document.querySelectorAll('.accordionStyles').length != 0) {
//                 document.querySelectorAll('.accordionStyles .card-header a[role="button"]').forEach(function (el) {
//                     if (!el.classList.contains('collapsed')) {
//                         el.classList.add('collapsed');
//                     }
//                 });
//             }
//         });
//         document.querySelectorAll('.accordionStyles .card-header a[role="button"]').forEach(element => {
//             element.addEventListener('click', function (event) {
//                 var el = event.target,
//                     id = el.closest('.accordionStyles').getAttribute('id'),
//                     iscollapsing = el.closest('.card').querySelector('.panel-collapse'),
//                     card = el.closest('.card'),
//                     sign = card.querySelector('span.mbr-iconfont'),
//                     button = card.querySelector('a[role="button"]');
//                 if (!iscollapsing.classList.contains('collapsing')) {
//                     if (id.indexOf('toggle') != -1) {
//                         if (button.classList.contains('collapsed')) {
//                             sign.classList.remove('mbri-arrow-down');
//                             sign.classList.add('mbri-arrow-up');
//                             button.classList.remove('collapsed');
//                         } else {
//                             sign.classList.remove('mbri-arrow-up');
//                             sign.classList.add('mbri-arrow-down');
//                             button.classList.add('collapsed');
//                         }
//                     }
//                     else if (id.indexOf('accordion') != -1) {
//                         var accordion = el.closest('.accordionStyles ');
//                         if (accordion) {
//                             if (card.querySelector('.collapsed')) {
//                                 sign.classList.remove('mbri-arrow-down');
//                                 sign.classList.add('mbri-arrow-up');
//                                 button.classList.remove('collapsed');
//                             } else {
//                                 sign.classList.remove('mbri-arrow-up');
//                                 sign.classList.add('mbri-arrow-down');
//                                 button.classList.add('collapsed');
//                             }
//                         }
//                     }
//                 }
//             })
//         })
//     }
// };
// */


// if (!isBuilder) {
//     if (typeof window.initSwitchArrowPlugin === 'undefined'){
//         window.initSwitchArrowPlugin = true;
//         ready(function () {
//             if (document.querySelectorAll('.accordionStyles').length!=0) {
//                 document.querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]').forEach(function(el){
//                         if(!el.classList.contains('collapsed')){
//                             el.classList.add('collapsed');
//                         }
//                     });
//                 }
//         });
//         document.querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]').forEach(el => {
//             el.addEventListener('click', () => {
//                 var id = el.closest('.accordionStyles').getAttribute('id'),
//                     iscollapsing = el.closest('.card').querySelector('.panel-collapse'),
//                     sign = el.querySelector('span.sign');
                
//                 if (iscollapsing.classList.contains('collapsing')) {
//                     if (id.indexOf('toggle')!= -1 || id.indexOf('accordion')!= -1) {
//                         if (el.classList.contains('collapsed')) {
//                             sign.classList.remove('mbri-arrow-up');
//                             sign.classList.add('mbri-arrow-down');
//                         } else {
//                             sign.classList.remove('mbri-arrow-down');
//                             sign.classList.add('mbri-arrow-up');
//                         }
//                         if (id.indexOf('accordion')!= -1) {
//                             var accordion = el.closest('.accordionStyles');
//                             Array.from(accordion.children).filter(el => el.querySelector('span.sign') !== sign)
//                             .forEach(child => {
//                                 child.querySelector('span.sign').classList.remove('mbri-arrow-up');
//                                 child.querySelector('span.sign').classList.add('mbri-arrow-down');
//                             })
//                         }
//                     }
//                 }
//             })
//         })
//     }
// };


// /*
// var isBuilder = $('html').hasClass('is-builder');
// if (!isBuilder) {
//     if (typeof window.initSwitchArrowPlugin === 'undefined'){
//         window.initSwitchArrowPlugin = true;
//         $(document).ready(function() {
//             if ($('.accordionStyles').length!=0) {
//                     $('.accordionStyles .card-header a[role="button"]').each(function(){
//                         if(!$(this).hasClass('collapsed')){
//                             $(this).addClass('collapsed');
//                         }
//                     });
//                 }
//         });

//         $('.accordionStyles .card-header a[role="button"]').click(function(){
//             var $id = $(this).closest('.accordionStyles').attr('id'),
//                 $iscollapsing = $(this).closest('.card').find('.panel-collapse');

//             if (!$iscollapsing.hasClass('collapsing')) {
//                 if ($id.indexOf('toggle') != -1){
//                     if ($(this).hasClass('collapsed')) {
//                         $(this).find('span.sign').removeClass('mbri-arrow-down').addClass('mbri-arrow-up'); 
//                     }
//                     else{
//                         $(this).find('span.sign').removeClass('mbri-arrow-up').addClass('mbri-arrow-down'); 
//                     }
//                 }
//                 else if ($id.indexOf('accordion')!=-1) {
//                     var $accordion =  $(this).closest('.accordionStyles ');
                
//                     $accordion.children('.card').each(function() {
//                         $(this).find('span.sign').removeClass('mbri-arrow-up').addClass('mbri-arrow-down'); 
//                     });
//                     if ($(this).hasClass('collapsed')) {
//                         $(this).find('span.sign').removeClass('mbri-arrow-down').addClass('mbri-arrow-up'); 
//                     }
//                 }
//             }
//         });
//     }
// };
// */

