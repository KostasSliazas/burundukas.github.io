(function ($) {
  $('#kmenu > ul.nav.navbar-nav.navbar-right').append(
    '<a data-toggle="collapse" data-target=".navbar-collapse.in" style="background:#3b5998;color:#eee; border-radius:5px; line-height:50px; margin:0 24px; padding:0 6px;" href="https://www.facebook.com/sharer/sharer.php?u=https://kostassliazas.github.io/burundukas.github.io/" rel="nofollow" target="_blank">Share</a>'
  )

  $('body').on('click',
    '.arrowd, #kmenu.collapse.navbar-collapse>ul.nav.navbar-nav>li.dropdown.open>ul.dropdown-menu>li>a, #kmenu.collapse.navbar-collapse>ul.nav.navbar-nav>li>a, .breadcrumb a',
    function (e) {
      e.preventDefault()
      $('#headImage').addClass('pause')
      let t = $(this).attr('href')
      let i = 0
      i = (t = t.substring(1, t.length)).slice(0, -1) === 'collapse' ? 102 : 50
      const id = '#' + t
      if (id.length > 1) {
        $('html, body').animate({
          scrollTop: $(id).offset().top - i
        }, 'slow')
      }
    })

  $('#gotoac').on('click', function (e) {
    e.preventDefault()
    $('.navbar-collapse.in').animate({
      scrollTop: 168
    }, 'slow')
  })

  $('#headImage,.arrowd').click(function () {
    $('#headImage').toggleClass('pause')
  })
  $(document).ready(function () {
    $('#loader').removeClass('loader')
  })
})(jQuery)
