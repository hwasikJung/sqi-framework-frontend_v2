/** ***** layout/default.vue ****** */

/** **** 해더, 풋터 사용어부 ***** */
const layoutHeader = true;
const layoutFooter = true;

/** **** GnB 사용어부 ***** */
const layoutGnB = true;
const layoutColor = '#263b85';

/** **** 레프트, 라이트 설정 ***** */
const layoutLeft = true;
// 레프트메뉴 사용시(layoutLeft=ture) v-col => md 사이즈 조절, 미사용할경우 layoutRightCol : 12
const layoutLeftCol = 3;
const layoutRightCol = 9;

export { layoutHeader, layoutFooter, layoutGnB, layoutColor, layoutLeft, layoutLeftCol, layoutRightCol };
