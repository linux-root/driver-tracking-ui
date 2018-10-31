<template>
    <div>
      <!-- Header -->
      <header id="header-navbar" class="content-mini content-mini-full">
        <!-- Header Navigation Right -->
        <ul class="nav-header pull-right">
          <li>
            <div class="btn-group">
              <button class="btn btn-default btn-image dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false">
                <h5>{{user.full_name}}</h5>
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu dropdown-menu-right">
                <li class="dropdown-header">Profile</li>
                <li>
                  <a tabindex="-1" href="base_pages_inbox.html">
                    <i class="si si-envelope-open pull-right"></i>
                    <span class="badge badge-primary pull-right">3</span>Inbox
                  </a>
                </li>
                <li>
                  <a tabindex="-1" href="base_pages_profile.html">
                    <i class="si si-user pull-right"></i>
                    <span class="badge badge-success pull-right">1</span>Profile
                  </a>
                </li>
                <li>
                  <a tabindex="-1" href="javascript:void(0)">
                    <i class="si si-settings pull-right"></i>Settings
                  </a>
                </li>
                <li class="divider"></li>
                <li class="dropdown-header">Actions</li>
                <li>
                  <a tabindex="-1" href="base_pages_lock.html">
                    <i class="si si-lock pull-right"></i>Lock Account
                  </a>
                </li>
                <li>
                  <a tabindex="-1" @click="logout">
                    <i class="si si-logout pull-right"></i>Log out
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <!-- END Header Navigation Right -->

        <!-- Header Navigation Left -->
        <ul class="nav-header pull-left">
          <li class="hidden-md hidden-lg">
            <!-- Layout API, functionality initialized in App() -> uiLayoutApi() -->
            <button class="btn btn-default" data-toggle="layout" data-action="sidebar_toggle" type="button">
              <i class="fa fa-navicon"></i>
            </button>
          </li>
          <li>
            <!-- Opens the Apps modal found at the bottom of the page, before including JS code -->
            <button class="btn btn-default pull-right" data-toggle="modal" data-target="#apps-modal" type="button">
              <i class="si si-grid"></i>
            </button>
          </li>
          <li class="visible-xs">
            <!-- Toggle class helper (for .js-header-search below), functionality initialized in App() -> uiToggleClass() -->
            <button class="btn btn-default" data-toggle="class-toggle" data-target=".js-header-search" data-class="header-search-xs-visible" type="button">
              <i class="fa fa-search"></i>
            </button>
          </li>
        </ul>
        <!-- END Header Navigation Left -->
      </header>
      <!-- END Header -->
      <main id="main-container" style="min-height: 107px;">
        <!-- Page Header -->
        <div class="content bg-image" style="background-image: url('public/static/assets/img/photos/photo8@2x.jpg');">
          <div class="push-50-t push-15 clearfix">
            <div class="push-15-r pull-left animated fadeIn">
              <img class="img-avatar img-avatar-thumb" src="/static/assets/img/avatars/avatar13.jpg" alt="">
            </div>
            <h1 class="h2 text-primary push-5-t animated zoomIn">{{user.full_name}}</h1>
            <h2 class="h5 text-primary animated zoomIn">CMTND: {{user.citizen_id}}</h2>
          </div>
        </div>
        <!-- END Page Header -->

        <!-- Stats -->
        <div class="content bg-white border-b">
          <div class="row items-push text-uppercase">
            <div class="col-xs-6 col-sm-3">
              <div class="font-w700 text-gray-darker animated fadeIn">Tong so gio chay</div>
              <a class="h2 font-w300 text-primary animated flipInX" href="javascript:void(0)">45</a>
            </div>
            <div class="col-xs-6 col-sm-3">
              <div class="font-w700 text-gray-darker animated fadeIn">Products</div>
              <a class="h2 font-w300 text-primary animated flipInX" href="javascript:void(0)">27</a>
            </div>
            <div class="col-xs-6 col-sm-3">
              <div class="font-w700 text-gray-darker animated fadeIn">Followers</div>
              <a class="h2 font-w300 text-primary animated flipInX" href="javascript:void(0)">1360</a>
            </div>
            <div class="col-xs-6 col-sm-3">
              <div class="font-w700 text-gray-darker animated fadeIn">739 Ratings</div>
              <div class="text-warning push-10-t animated flipInX">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <span class="text-muted">(4.9)</span>
              </div>
            </div>
          </div>
        </div>
        <!-- END Stats -->

        <!-- Page Content -->
        <div class="content content-boxed">
          <div class="row">
            <div class="col-sm-7 col-lg-8">
              <!-- Timeline -->
              <div class="block">
                <div class="block-header bg-gray-lighter">
                  <ul class="block-options">
                    <li>
                      <button type="button" data-toggle="block-option" data-action="fullscreen_toggle"><i class="si si-size-fullscreen"></i></button>
                    </li>
                    <li>
                      <button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
                    </li>
                  </ul>
                  <h3 class="block-title"><i class="fa fa-newspaper-o"></i> Updates</h3>
                </div>
                <div class="block-content">
                  <ul class="list list-timeline pull-t">
                    <!-- Facebook Notification -->
                    <li>
                      <div class="list-timeline-time">3 hrs ago</div>
                      <i class="fa fa-facebook list-timeline-icon bg-default"></i>
                      <div class="list-timeline-content">
                        <p class="font-w600">+ 290 Page Likes</p>
                        <p class="font-s13">This is great, keep it up!</p>
                      </div>
                    </li>
                    <!-- END Facebook Notification -->

                    <!-- Generic Notification -->
                    <li>
                      <div class="list-timeline-time">4 hrs ago</div>
                      <i class="fa fa-briefcase list-timeline-icon bg-modern"></i>
                      <div class="list-timeline-content">
                        <p class="font-w600">3 New Products were added!</p>
                        <div class="push-10-t">
                          <a class="item item-rounded push-10-r bg-info" data-toggle="tooltip" title="" href="javascript:void(0)" data-original-title="MyPanel">
                            <i class="si si-rocket text-white-op"></i>
                          </a>
                          <a class="item item-rounded push-10-r bg-amethyst" data-toggle="tooltip" title="" href="javascript:void(0)" data-original-title="Project Time">
                            <i class="si si-calendar text-white-op"></i>
                          </a>
                          <a class="item item-rounded push-10-r bg-city" data-toggle="tooltip" title="" href="javascript:void(0)" data-original-title="iDashboard">
                            <i class="si si-speedometer text-white-op"></i>
                          </a>
                        </div>
                      </div>
                    </li>
                    <!-- END Generic Notification -->

                    <!-- Twitter Notification -->
                    <li>
                      <div class="list-timeline-time">12 hrs ago</div>
                      <i class="fa fa-twitter list-timeline-icon bg-info"></i>
                      <div class="list-timeline-content">
                        <p class="font-w600">+ 1150 Followers</p>
                        <p class="font-s13">You’re getting more and more followers, keep it up!</p>
                      </div>
                    </li>
                    <!-- END Twitter Notification -->

                    <!-- System Notification -->
                    <li>
                      <div class="list-timeline-time">1 day ago</div>
                      <i class="fa fa-database list-timeline-icon bg-smooth"></i>
                      <div class="list-timeline-content">
                        <p class="font-w600">Database backup completed!</p>
                        <p class="font-s13">Download the <a href="javascript:void(0)">latest backup</a>.</p>
                      </div>
                    </li>
                    <!-- END System Notification -->

                    <!-- Social Notification -->
                    <li>
                      <div class="list-timeline-time">2 days ago</div>
                      <i class="fa fa-user-plus list-timeline-icon bg-success"></i>
                      <div class="list-timeline-content">
                        <p class="font-w600">+ 5 Friend Requests</p>
                        <ul class="nav-users push-10-t push">
                          <li>
                            <a href="base_pages_profile.html">
                              <img class="img-avatar" src="assets/img/avatars/avatar4.jpg" alt="">
                              <i class="fa fa-circle text-success"></i> Amanda Powell
                              <div class="font-w400 text-muted"><small>Web Designer</small></div>
                            </a>
                          </li>
                          <li>
                            <a href="base_pages_profile.html">
                              <img class="img-avatar" src="assets/img/avatars/avatar11.jpg" alt="">
                              <i class="fa fa-circle text-success"></i> Eric Lawson
                              <div class="font-w400 text-muted"><small>Graphic Designer</small></div>
                            </a>
                          </li>
                          <li>
                            <a href="base_pages_profile.html">
                              <img class="img-avatar" src="assets/img/avatars/avatar1.jpg" alt="">
                              <i class="fa fa-circle text-warning"></i> Emma Cooper
                              <div class="font-w400 text-muted"><small>Photographer</small></div>
                            </a>
                          </li>
                          <li>
                            <a href="base_pages_profile.html">
                              <img class="img-avatar" src="assets/img/avatars/avatar15.jpg" alt="">
                              <i class="fa fa-circle text-warning"></i> Eugene Burke
                              <div class="font-w400 text-muted"><small>Copywriter</small></div>
                            </a>
                          </li>
                          <li>
                            <a href="base_pages_profile.html">
                              <img class="img-avatar" src="assets/img/avatars/avatar15.jpg" alt="">
                              <i class="fa fa-circle text-danger"></i> Ethan Howard
                              <div class="font-w400 text-muted"><small>UI Designer</small></div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <!-- END Social Notification -->

                    <!-- System Notification -->
                    <li>
                      <div class="list-timeline-time">1 week ago</div>
                      <i class="fa fa-cog list-timeline-icon bg-primary-dark"></i>
                      <div class="list-timeline-content">
                        <p class="font-w600">System updated to v2.02</p>
                        <p class="font-s13">Check the complete changelog at the <a href="javascript:void(0)">activity page</a>.</p>
                      </div>
                    </li>
                    <!-- END System Notification -->

                    <!-- Generic Notification -->
                    <li>
                      <div class="list-timeline-time">2 weeks ago</div>
                      <i class="fa fa-briefcase list-timeline-icon bg-modern"></i>
                      <div class="list-timeline-content">
                        <p class="font-w600">1 New Product was added!</p>
                        <div class="push-10-t">
                          <a class="item item-rounded push-10-r bg-modern" data-toggle="tooltip" title="" href="javascript:void(0)" data-original-title="eSettings">
                            <i class="si si-settings text-white-op"></i>
                          </a>
                        </div>
                      </div>
                    </li>
                    <!-- END Generic Notification -->

                    <!-- System Notification -->
                    <li>
                      <div class="list-timeline-time">2 months ago</div>
                      <i class="fa fa-cog list-timeline-icon bg-primary-dark"></i>
                      <div class="list-timeline-content">
                        <p class="font-w600">System updated to v2.01</p>
                        <p class="font-s13">Check the complete changelog at the <a href="javascript:void(0)">activity page</a>.</p>
                      </div>
                    </li>
                    <!-- END System Notification -->
                  </ul>
                </div>
              </div>
              <!-- END Timeline -->
            </div>
            <div class="col-sm-5 col-lg-4">
              <!-- Products -->
              <div class="block">
                <div class="block-header bg-gray-lighter">
                  <ul class="block-options">
                    <li>
                      <button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
                    </li>
                  </ul>
                  <h3 class="block-title"><i class="fa fa-fw fa-briefcase"></i> Products</h3>
                </div>
                <div class="block-content">
                  <ul class="list list-simple list-li-clearfix">
                    <li>
                      <a class="item item-rounded pull-left push-10-r bg-info" href="javascript:void(0)">
                        <i class="si si-rocket text-white-op"></i>
                      </a>
                      <h5 class="push-10-t">MyPanel</h5>
                      <div class="font-s13">Responsive App Template</div>
                    </li>
                    <li>
                      <a class="item item-rounded pull-left push-10-r bg-amethyst" href="javascript:void(0)">
                        <i class="si si-calendar text-white-op"></i>
                      </a>
                      <h5 class="push-10-t">Project Time</h5>
                      <div class="font-s13">Web application</div>
                    </li>
                    <li>
                      <a class="item item-rounded pull-left push-10-r bg-danger" href="javascript:void(0)">
                        <i class="si si-speedometer text-white-op"></i>
                      </a>
                      <h5 class="push-10-t">iDashboard</h5>
                      <div class="font-s13">Bootstrap Admin Template</div>
                    </li>
                  </ul>
                  <div class="text-center push">
                    <small><a href="javascript:void(0)">View More..</a></small>
                  </div>
                </div>
              </div>
              <!-- END Products -->

              <!-- Ratings -->
              <div class="block">
                <div class="block-header bg-gray-lighter">
                  <ul class="block-options">
                    <li>
                      <button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
                    </li>
                  </ul>
                  <h3 class="block-title"><i class="fa fa-fw fa-pencil"></i> Ratings</h3>
                </div>
                <div class="block-content">
                  <ul class="list list-simple">
                    <li>
                      <div class="push-5 clearfix">
                        <div class="text-warning pull-right">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <a class="font-w600" href="base_pages_profile.html">Ethan Howard</a>
                        <span class="text-muted">(5/5)</span>
                      </div>
                      <div class="font-s13">Flawless design execution! I'm really impressed with the product, it really helped me build my app so fast! Thank you!</div>
                    </li>
                    <li>
                      <div class="push-5 clearfix">
                        <div class="text-warning pull-right">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <a class="font-w600" href="base_pages_profile.html">Megan Dean</a>
                        <span class="text-muted">(5/5)</span>
                      </div>
                      <div class="font-s13">Great value for money and awesome support! Would buy again and again! Thanks!</div>
                    </li>
                    <li>
                      <div class="push-5 clearfix">
                        <div class="text-warning pull-right">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <a class="font-w600" href="base_pages_profile.html">Scott Ruiz</a>
                        <span class="text-muted">(5/5)</span>
                      </div>
                      <div class="font-s13">Working great in all my devices, quality and quantity in a great package! Thank you!</div>
                    </li>
                  </ul>
                  <div class="text-center push">
                    <small><a href="javascript:void(0)">Read More..</a></small>
                  </div>
                </div>
              </div>
              <!-- END Ratings -->

              <!-- Followers -->
              <div class="block">
                <div class="block-header bg-gray-lighter">
                  <ul class="block-options">
                    <li>
                      <button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
                    </li>
                  </ul>
                  <h3 class="block-title"><i class="fa fa-fw fa-share-alt"></i> Followers</h3>
                </div>
                <div class="block-content">
                  <ul class="nav-users push">
                    <li>
                      <a href="base_pages_profile.html">
                        <img class="img-avatar" src="assets/img/avatars/avatar15.jpg" alt="">
                        <i class="fa fa-circle text-success"></i> Dennis Ross
                        <div class="font-w400 text-muted"><small>Web Developer</small></div>
                      </a>
                    </li>
                    <li>
                      <a href="base_pages_profile.html">
                        <img class="img-avatar" src="assets/img/avatars/avatar3.jpg" alt="">
                        <i class="fa fa-circle text-success"></i> Laura Bell
                        <div class="font-w400 text-muted"><small>Web Designer</small></div>
                      </a>
                    </li>
                    <li>
                      <a href="base_pages_profile.html">
                        <img class="img-avatar" src="assets/img/avatars/avatar1.jpg" alt="">
                        <i class="fa fa-circle text-warning"></i> Tiffany Kim
                        <div class="font-w400 text-muted"><small>Photographer</small></div>
                      </a>
                    </li>
                  </ul>
                  <div class="text-center push">
                    <small><a href="javascript:void(0)">Load More..</a></small>
                  </div>
                </div>
              </div>
              <!-- END Followers -->
            </div>
          </div>
        </div>
        <!-- END Page Content -->
      </main>
      <!-- END Main Container -->
    </div>
</template>

<script>
export default {
  name: 'Home',
    computed:{
      user () {
          return  this.$store.state.user;
      }
    },
    created(){
      let accessToken = JSON.parse(localStorage.getItem('accessToken'));
      console.log(accessToken);
      this.$store.dispatch('fetchUserData', accessToken);
    },
    methods: {
      logout(){
          localStorage.removeItem('accessToken');
          localStorage.removeItem('user');
          this.$router.push('/login');
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
