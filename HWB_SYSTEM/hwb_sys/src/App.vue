<template>
  <v-app id="inspire" style="display: flex; justify-content: center; align-items: center; overflow: hidden;">
    <v-app v-show="display.show_main">
      <v-system-bar app>
        <v-spacer></v-spacer>
      </v-system-bar>

      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>公路桥梁初始检查信息系统</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn v-if="display.show_bridge_items" color="blue" text @click="getBridges">刷新</v-btn>
        <v-btn v-if="display.show_bridge_detail" color="blue" text @click="reLoadBridgeDetail">刷新</v-btn>

        <RightTopMenu @logout="logout"></RightTopMenu>

      </v-app-bar>

      <v-navigation-drawer v-model="drawer" fixed temporary>
        <!-- 侧边选项区 -->
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Application
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ sider_tip }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <div v-if="display.show_bridge_detail">
          <BtifDialog style="margin-top: 10px; margin-bottom: 10px;" :bridge="currentBridge"></BtifDialog>
          <IcfDialog style="margin-top: 10px; margin-bottom: 10px;"></IcfDialog>
          <RcfDialog style="margin-top: 10px; margin-bottom: 10px;"></RcfDialog>
        </div>
        <div v-if="!display.show_bridge_detail">
          <v-list>
            <v-list-item>选择一个项目</v-list-item>
          </v-list>
        </div>




      </v-navigation-drawer>

      <v-main class="grey lighten-2">
        <v-container>
          <div v-show="display.show_bridge_items">
            <v-row align="center" justify="start" style="gap: 12px;" no-gutters>
              <v-col cols="auto" v-for="i in bridgeItmes" :key="i.b_no">
                <BridgeItem :data="i" @load_bridge_detail="load_bridge_detail" @get_bridges="getBridges"></BridgeItem>
              </v-col>
            </v-row>

          </div>

          <div v-if="display.show_bridge_detail">
            <BridgeDetail :bridge="detail.bridge" :scrollTop="scrollTop_detail"
              @back_to_bridge_items="back_to_bridge_items"></BridgeDetail>
          </div>

        </v-container>
      </v-main>

      <BbfDialog v-if="display.show_bridge_items"></BbfDialog>


    </v-app>


    <v-row justify="center" align="center">
      <UserLogin :show_main="display.show_main" @show_main="show_main"></UserLogin>
    </v-row>

    <Alert :alert="alert.show" :type="alert.type">{{ alert.message }}</Alert>

    <Loading :overlay="loading" />


  </v-app>
</template>

<script>
import InitialCheckForm from './components/InitialCheckForm.vue';
import IcfDialog from './components/IcfDialog.vue';
import BbfDialog from './components/BbfDialog.vue';
import BridgeItem from './components/BridgeItem.vue';
import UserLogin from './components/UserLogin.vue';
import RightTopMenu from './components/RightTopMenu.vue';
import BridgeDetail from './components/BridgeDetail.vue';
import RcfDialog from './components/RcfDialog.vue';
import Alert from './components/Alert.vue';
import Loading from './components/Loading.vue';
import BtifDialog from './components/BtifDialog.vue';
import ajax from './assets/js/ajax';
export default {
  data: () => ({
    drawer: null,
    loading: false,
    display: {
      show_main: false,
      show_bridge_items: true,
      show_bridge_detail: false,
    },
    alert: {
      show: false,
      type: 'error',
      message: '',
      timer: null
    },
    sider_tip: '选择一个项目',
    detail: {
      bridge: null,
    },
    scrollTop_detail: 0,
    bridgeItmes: [],
    currentBridge: null,
  }),
  methods: {
    load_bridge_detail(bridge) {
      this.detail.bridge = bridge
      this.scrollTop_detail = 0
      this.display.show_bridge_items = false
      this.loading = true
      this.sider_tip = '选择要添加的表:'
      this.display.show_bridge_detail = true
      this.currentBridge = bridge
    },
    back_to_bridge_items() {
      this.display.show_bridge_detail = false
      this.scrollTop_detail = 0
      this.loading = true
      ajax.GET('/get/bridges').then(res => {
        this.bridgeItmes = res.data
        this.loading = false
        this.sider_tip = '选择一个项目'
        this.display.show_bridge_items = true
      }).catch(reson => {
        this.loading = false
        this.$globalEventBus.$emit('show_alert', {
          type: 'error',
          message: '获取桥梁列表失败'
        })
        this.sider_tip = '选择一个项目'
        this.display.show_bridge_items = true
      })
    },
    show_main() {
      this.display.show_main = true
      this.getBridges()
    },
    logout() {
      this.show_main = false
    },
    getBridges() {
      this.loading = true
      ajax.GET('/get/bridges').then(res => {
        this.bridgeItmes = res.data
        this.loading = false
      }).catch(reson => {
        this.loading = false
        this.$globalEventBus.$emit('show_alert', {
          type: 'error',
          message: '获取桥梁列表失败'
        })
      })
    },
    reLoadBridgeDetail() {
      this.display.show_bridge_detail = false
      setTimeout(() => {
        this.display.show_bridge_detail = true
      }, 500);
    }
  },
  components: {
    InitialCheckForm,
    IcfDialog,
    BbfDialog,
    BridgeItem,
    UserLogin,
    RightTopMenu,
    BridgeDetail,
    RcfDialog,
    Alert,
    Loading,
    BtifDialog
  },
  beforeCreate() {
    this.$globalEventBus.$on('get_bridges', () => {
      this.loading = true
      ajax.GET('/get/bridges').then(res => {
        this.loading = false
        this.bridgeItmes = res.data
      }).catch(reson => {
        this.loading = false
        this.$globalEventBus.$emit('show_alert', {
          type: 'error',
          message: '获取桥梁列表失败'
        })
      })
    })

    this.$globalEventBus.$on('show_alert', (alert) => {
      if (this.alert.show) {
        clearTimeout(this.alert.timer)
      }
      const { type, message } = alert
      this.alert.show = true
      this.alert.type = type
      this.alert.message = message
      this.alert.timer = setTimeout(() => {
        this.alert.show = false
      }, 2000);
    })
    this.$globalEventBus.$on('start_loading', () => {
      this.loading = true
    })
    this.$globalEventBus.$on('stop_loading', () => {
      this.loading = false
    })
    this.$globalEventBus.$on('back_to_bridge_items', () => {
      this.back_to_bridge_items()
    })
    this.$globalEventBus.$on('reload_bridge_detail', () => {
      this.display.show_bridge_detail = false
      setTimeout(() => {
        this.display.show_bridge_detail = true
      }, 500);
    })
  }
}
</script>

<style scoped></style>
