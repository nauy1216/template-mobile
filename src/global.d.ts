// 声明ts全局变量供全局使用，比如： px
declare function px(px: number): string;
// 给window添加属性，比如： window.px2rem
interface Window {
  px2rem: typeof px;
}
