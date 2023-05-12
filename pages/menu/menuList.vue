<template>
  <div>
    <v-row no-gutters>
      <v-col cols="6">
        <h1 class="title">메뉴관리</h1>
        <ul class="wtree">
          <li
            v-for="(data, i) in navMenu.filter((c) => c.mnuLvl === 1)"
            :key="i"
            :class="data.mnuId"
            @click="fetchMainMnuFncCds(data.mnuId, data.mnuFncCds)"
            @keypress="fetchMainMnuFncCds(data.mnuId, data.mnuFncCds)"
          >
            <span>{{ data.mnuNm }}</span>
            <ul>
              <li
                v-for="(subData, j) in navMenu.filter((c) => c.mnuLvl === 2 && data.mnuId === c.uppMnuId)"
                :key="j"
                :class="subData.mnuId"
                @click="fetchSubMnuFncCds(subData.mnuId, subData.mnuFncCds)"
                @keypress="fetchSubMnuFncCds(subData.mnuId, subData.mnuFncCds)"
              >
                <span>{{ subData.mnuNm }}</span>
              </li>
            </ul>
          </li>
        </ul>
      </v-col>
      <v-col cols="6">
        <v-card>
          <table class="detailTb">
            <tr>
              <th>역할 명 *</th>
              <td>역할 명 *</td>
            </tr>
            <tr>
              <th>역할 설명</th>
              <td>역할 설명</td>
            </tr>
            <tr v-if="mainRolBoolean">
              <th>서비스 권한</th>
              <td>
                <div class="demo-inline-spacing">
                  <v-checkbox
                    v-model="mainRolCheck"
                    value="A"
                  >
                    A
                  </v-checkbox>
                </div>
              </td>
            </tr>
            <tr v-if="subRolBoolean">
              <th>서비스 권한</th>
              <td>
                <div class="demo-inline-spacing">
                  <v-checkbox
                    v-model="subRolCheck"
                    value="C"
                  >
                    C
                  </v-checkbox>
                  <v-checkbox
                    v-model="subRolCheck"
                    value="R"
                  >
                    R
                  </v-checkbox>
                  <v-checkbox
                    v-model="subRolCheck"
                    value="U"
                  >
                    U
                  </v-checkbox>
                  <v-checkbox
                    v-model="subRolCheck"
                    value="D"
                  >
                    D
                  </v-checkbox>
                </div>
              </td>
            </tr>
          </table>
          <div class="rolRegBtn">
            <v-btn
              variant="primary"
              @click="saveAdmRolInfo"
            >
              저장
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'MenuList',
  middleware: ['anonymous'], // 모든 사용자 접근 미들웨어 추가
  data() {
    return {
      rolId: this.$route.query.rolId, // 권한 아이디
      mainRolCheck: [], // 권한 저장 영역 (A)
      subRolCheck: [], // 권한 저장 영역 (C,R,U,D)
      mainRolBoolean: false, // 체크박스 영역 true/false
      subRolBoolean: false, // 체크박스 영역 true/false
      menuId: '', // 메뉴 아이디
    };
  },
  async fetch() {
    // GnB 메뉴 정보
    await this.$store.dispatch('layouts/loadNavMenu');
  },
  computed: {
    navMenu() { // fetch 로 저장된 vuex navMenu 로드
      return this.$store.state.layouts.navMenu;
    },
  },
  methods: {
    // 레벨1 메뉴 클릭
    fetchMainMnuFncCds(menuId, mnuFncCds) {
      if (mnuFncCds) {
        // 체크박스 초기화
        this.mainRolCheck = [];
        this.subRolCheck = [];

        this.mainRolCheck = mnuFncCds.split(',');
        this.menuId = menuId;
      }
      this.mainRolBoolean = true;
      this.subRolBoolean = false;

      const li = document.querySelectorAll('.wtree li');
      li.forEach((v) => document
        .getElementsByClassName(v.classList.value)[0]
        .classList.remove('addClass'));
      document.getElementsByClassName(menuId)[0].classList.add('addClass');
    },
    // 레벨2 메뉴 클릭
    fetchSubMnuFncCds(menuId, mnuFncCds) {
      event.stopPropagation();
      if (mnuFncCds) {
        this.mainRolCheck = [];
        this.subRolCheck = [];

        this.subRolCheck = mnuFncCds.split(',');
        this.menuId = menuId;
      }
      this.mainRolBoolean = false;
      this.subRolBoolean = true;
      const li = document.querySelectorAll('.wtree li');
      li.forEach((v) => document
        .getElementsByClassName(v.classList.value)[0]
        .classList.remove('addClass'));
      document.getElementsByClassName(menuId)[0].classList.add('addClass');
    },
  },
  async saveAdmRolInfo() {
    const mnuFncCds = this.mainRolBoolean
      ? this.mainRolCheck
      : this.subRolCheck;

    // if (mnuFncCds.length > 0) {
    //   utils.fnConfirm(this, '저장하시겠습니까?', '').then(async (res) => {
    //     if (res.value) {
    //       try {
    //         const res = await this.$store.dispatch('adm/FETCH_ADM_ROL_SAVE', {
    //           rolId: this.rolId,
    //           mnuId: this.menuId,
    //           mnuFncCds,
    //         });
    //
    //         if (res.resCd === 'SQI0000') {
    //           await this.fetchNavMenu();
    //           utils.fnAlert(this, '수정이 완료되었습니다.');
    //         }
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     }
    //   });
    // } else {
    //   utils.fnAlert(this, '권한설정을 위한 메뉴를 선택하세요.');
    // }
  },
};
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  /*padding: 50px;*/
  font-family: helvetica, arial, sans-serif;
}

ul {
  margin-left: 20px;
}

.wtree li {
  list-style-type: none;
  margin: 10px 0 10px 10px;
  position: relative;
}
.wtree li:before {
  content: "";
  position: absolute;
  top: -10px;
  left: -20px;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  width: 20px;
  height: 15px;
}
.wtree li:after {
  position: absolute;
  content: "";
  top: 5px;
  left: -20px;
  border-left: 1px solid #ddd;
  border-top: 1px solid #ddd;
  width: 20px;
  height: 100%;
}
.wtree li:last-child:after {
  display: none;
}
.wtree li span {
  display: block;
  border: 1px solid #ddd;
  padding: 10px;
  color: #888;
  text-decoration: none;
}

.wtree li span:hover,
.wtree li span:focus {
  background: #263b85;
  color: #ffffff;
  border: 1px solid #aaa;
  cursor: pointer;
}
/*.wtree li span:hover + ul li span, .wtree li span:focus + ul li span {
  background: #eee;
  color: #000;
  border: 1px solid #aaa;
}*/
.wtree li span:hover + ul li:after,
.wtree li span:hover + ul li:before,
.wtree li span:focus + ul li:after,
.wtree li span:focus + ul li:before {
  border-color: #aaa;
}
.addClass > span {
  background-color: #263b85;
  color: #ffffff !important;
}
.rolRegBtn {
  padding: 10px 0 10px 10px;
  text-align: right;
}
</style>
