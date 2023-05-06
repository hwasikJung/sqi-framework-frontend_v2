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
                @click="testProc(subData.scrnPth)"
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

import { layoutHeader, layoutFooter, layoutGnB, layoutColor, layoutLeft, layoutLeftCol, layoutRightCol } from "~/plugin/layout.setting";

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
      navMenu: [
        {
          mnuId: "SYS-UI-001-000",
          uppMnuId: null,
          mnuNm: "대시보드",
          mnuLvl: 1,
          mnuImg: null,
          scrnPth: "dashboard",
          srtSqn: 100,
          mnuFncCds: "C,D,R,U",
          tskId: "dashboard",
          pgmDsCd: "SYS"
        },
        {
          mnuId: "SYS-UI-002-000",
          uppMnuId: null,
          mnuNm: "사이트 관리",
          mnuLvl: 1,
          mnuImg: null,
          scrnPth: "adm",
          srtSqn: 200,
          mnuFncCds: "A",
          tskId: "manager",
          pgmDsCd: "SYS"
        },
        {
          mnuId: "SYS-UI-002-001",
          uppMnuId: "SYS-UI-002-000",
          mnuNm: "메뉴 관리",
          mnuLvl: 2,
          mnuImg: null,
          scrnPth: "/adm/mnu/mnuList",
          srtSqn: 201,
          mnuFncCds: "C,D,R,U",
          tskId: "menu",
          pgmDsCd: "SYS"
        },
        {
          mnuId: "SYS-UI-002-002",
          uppMnuId: "SYS-UI-002-000",
          mnuNm: "관리사용자 관리",
          mnuLvl: 2,
          mnuImg: null,
          scrnPth: "/adm/adm/admList",
          srtSqn: 202,
          mnuFncCds: "C,D,R,U",
          tskId: "mngrmanager",
          pgmDsCd: "SYS"
        },
        {
          mnuId: "SYS-UI-002-003",
          uppMnuId: "SYS-UI-002-000",
          mnuNm: "역할/권한 관리",
          mnuLvl: 2,
          mnuImg: null,
          scrnPth: "/adm/admRol/admRolList",
          srtSqn: 203,
          mnuFncCds: "C,D,R,U",
          tskId: "sysmngr/roles",
          pgmDsCd: "SYS"
        },
        {
          mnuId: "SYS-UI-003-000",
          uppMnuId: null,
          mnuNm: "시스템 관리",
          mnuLvl: 1,
          mnuImg: null,
          scrnPth: "sysSet",
          srtSqn: 300,
          mnuFncCds: "A",
          tskId: "system",
          pgmDsCd: "SYS"
        },
        {
          mnuId: "SYS-UI-003-001",
          uppMnuId: "SYS-UI-003-000",
          mnuNm: "홈넷사 관리",
          mnuLvl: 2,
          mnuImg: null,
          scrnPth: "/sysSet/hNetCo/hNetCoList",
          srtSqn: 301,
          mnuFncCds: "C,D,R,U",
          tskId: "homenet",
          pgmDsCd: "SYS"
        },
        {
          mnuId: "SYS-UI-003-002",
          uppMnuId: "SYS-UI-003-000",
          mnuNm: "연동시스템 상태",
          mnuLvl: 2,
          mnuImg: null,
          scrnPth: "/sysSet/lnkgSys/lnkgSysList",
          srtSqn: 302,
          mnuFncCds: "C,D,R,U",
          tskId: "linksys",
          pgmDsCd: "SYS"
        },
        {
          mnuId: "SYS-UI-003-003",
          uppMnuId: "SYS-UI-003-000",
          mnuNm: "공지사항",
          mnuLvl: 2,
          mnuImg: null,
          scrnPth: "/sysSet/boardNotice/boardNoticeList",
          srtSqn: 303,
          mnuFncCds: "C,D,R,U",
          tskId: "boards/notice",
          pgmDsCd: "SYS"
        },
        {
          mnuId: "SYS-UI-003-004",
          uppMnuId: "SYS-UI-003-000",
          mnuNm: "서비스 약관 관리",
          mnuLvl: 2,
          mnuImg: null,
          scrnPth: "/sysSet/serviceClu/serviceCluList",
          srtSqn: 304,
          mnuFncCds: "C,D,R,U",
          tskId: "serviceClu",
          pgmDsCd: "SYS"
        },
        {
          mnuId: "SYS-UI-004-000",
          uppMnuId: null,
          mnuNm: "리포트",
          mnuLvl: 1,
          mnuImg: null,
          scrnPth: "report",
          srtSqn: 400,
          mnuFncCds: "A",
          tskId: "report",
          pgmDsCd: "SYS"
        },
        {
          mnuId: "SYS-UI-004-001",
          uppMnuId: "SYS-UI-004-000",
          mnuNm: "배치 프로세스 이력",
          mnuLvl: 2,
          mnuImg: null,
          scrnPth: "/report/batchHst/batchHstList",
          srtSqn: 401,
          mnuFncCds: "C,D,R,U",
          tskId: "mngr/log",
          pgmDsCd: "SYS"
        },
        {
          mnuId: "SYS-UI-004-002",
          uppMnuId: "SYS-UI-004-000",
          mnuNm: "클라우드 운영 보고서",
          mnuLvl: 2,
          mnuImg: null,
          scrnPth: "/report/cldOprt/cldOprtList",
          srtSqn: 402,
          mnuFncCds: "C,D,R,U",
          tskId: "cloudreport",
          pgmDsCd: "SYS"
        },
        {
          mnuId: "SYS-UI-004-003",
          uppMnuId: "SYS-UI-004-000",
          mnuNm: "접속/메뉴 사용이력",
          mnuLvl: 2,
          mnuImg: null,
          scrnPth: "/report/usConn/usConnList",
          srtSqn: 403,
          mnuFncCds: "C,D,R,U",
          tskId: "mngr/log",
          pgmDsCd: "SYS"
        },
        {
          mnuId: "SYS-UI-005-000",
          uppMnuId: null,
          mnuNm: "앱사용자 관리",
          mnuLvl: 1,
          mnuImg: null,
          scrnPth: "usrAdm",
          srtSqn: 500,
          mnuFncCds: "A",
          tskId: "user",
          pgmDsCd: "SYS"
        },
        {
          mnuId: "SYS-UI-005-001",
          uppMnuId: "SYS-UI-005-000",
          mnuNm: "앱사용자 관리",
          mnuLvl: 2,
          mnuImg: null,
          scrnPth: "/usrAdm/usrAdm/usrList",
          srtSqn: 501,
          mnuFncCds: "C,D,R,U",
          tskId: "usermanager",
          pgmDsCd: "SYS"
        },
        {
          mnuId: "SYS-UI-006-000",
          uppMnuId: null,
          mnuNm: "설정",
          mnuLvl: 1,
          mnuImg: null,
          scrnPth: "set",
          srtSqn: 600,
          mnuFncCds: "A",
          tskId: "config",
          pgmDsCd: "SYS"
        },
        {
          mnuId: "SYS-UI-006-001",
          uppMnuId: "SYS-UI-006-000",
          mnuNm: "내설정",
          mnuLvl: 2,
          mnuImg: null,
          scrnPth: "/set/myInfoSet/myInfoSet",
          srtSqn: 601,
          mnuFncCds: "C,D,R,U",
          tskId: "mngr/myinfo",
          pgmDsCd: "SYS"
        }
      ]
    };
  },
  methods: {
    testProc(scrnPth) {
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
