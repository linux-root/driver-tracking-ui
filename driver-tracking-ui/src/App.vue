<template>
  <div id="app" class="header-navbar-fixed">
    <router-view></router-view>
    <!-- Footer -->
    <footer id="page-footer" class="content-mini content-mini-full font-s12 bg-gray-lighter clearfix">
      <div class="pull-right">
        Dinh Bao Khanh <i class="fa fa-heart text-city"></i> by <a class="font-w600" href="http://goo.gl/vNS3I" target="_blank">pixelcave</a>
      </div>
      <div class="pull-left">
        <a class="font-w600" href="http://fb.com/mr.kurro" target="_blank">OneUI 3.0</a> © <span class="js-year-copy">2015-18</span>
      </div>
    </footer>
    <!-- END Footer -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>