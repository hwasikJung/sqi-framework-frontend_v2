<template>
  <v-app>
    <nav v-if="layoutHeader">
      <v-toolbar
        dark
        :color="layoutColor"
      >
        <v-toolbar-title>
          <nuxt-link
            to="/"
            class="color-white"
          >
            SQISOFT Header
          </nuxt-link>
        </v-toolbar-title>
        <v-spacer />
        <v-row v-if="layoutGnB">
          <v-menu
            v-for="(data, i) in navMenu.filter((c) => c.mnuLvl === 1 && c.tskId !== 'dashboard')"
            :key="i"
            open-on-hover
            offset-y
          >
            <template #activator="{ attrs, on }">
              <div
                class="white--text ma-5"
                v-bind="attrs"
                style="cursor: pointer"
                v-on="on"
              >
                {{ data.mnuNm }}
              </div>
            </template>
            <v-list>
              <v-list-item
                v-for="(subData, j) in navMenu.filter((c) => c.mnuLvl === 2 && data.mnuId === c.uppMnuId)"
                :key="j"
                lnik
                @click="goPath(subData.scrnPth)"
              >
                <v-list-item-title>
                  {{ subData.mnuNm }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-row>
        <v-toolbar-items>
          <v-btn
            text
            nuxt
            to="/member/loginInfo"
            :style="{ display: 'flex', alignItems: 'center' }"
          >
            <div>로그인</div>
          </v-btn>
          <v-btn
            text
            nuxt
            to="/member/joinMem"
            :style="{ display: 'flex', alignItems: 'center' }"
          >
            <div>회원가입</div>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </nav>
    <v-row no-gutters>
      <v-col
        v-if="layoutLeft"
        cols="12"
        :md="layoutLeft ? layoutLeftCol : ''"
      >
        레프트
      </v-col>
      <v-col
        cols="12"
        :md="layoutLeft ? layoutRightCol : '12'"
      >
        <!-- 메인 컨텐츠-->
        <nuxt />
      </v-col>
    </v-row>
    <nav v-if="layoutFooter">
      <v-toolbar
        dark
        :color="layoutColor"
      >
        <v-toolbar-title>
          <v-col
            class="text-center"
            cols="12"
          >
            {{ new Date().getFullYear() }} — <strong>SQISFOT Footer</strong>
          </v-col>
        </v-toolbar-title>
        <v-spacer />
      </v-toolbar>
    </nav>
  </v-app>
</template>
<script>

import {
  layoutHeader, layoutFooter, layoutGnB, layoutColor, layoutLeft, layoutLeftCol, layoutRightCol,
} from '~/plugin/layout.setting';

export default {
  name: 'DefaultPage',
  data() {
    return {
      layoutHeader,
      layoutFooter,
      layoutGnB,
      layoutColor,
      layoutLeft,
      layoutLeftCol,
      layoutRightCol,
    };
  },
  async fetch() {
    // GnB 메뉴 정보
    // await this.$store.dispatch('layouts/loadNavMenu');
  },
  computed: {
    navMenu() { // fetch 로 저장된 vuex navMenu 로드
      return this.$store.state.layouts.navMenu;
    },
  },
  methods: {
    goPath(scrnPth) {
      this.$router.push({ path: scrnPth });
    },
  },
};
</script>
<style scoped>
a, .color-white {
  display: inline-block;
  text-decoration: none;
  color: white;
}

</style>
