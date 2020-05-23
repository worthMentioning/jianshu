import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
    @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1589880293066'); /* IE9 */
    src: url('./iconfont.eot?t=1589880293066#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1589880293066') format('woff'),
    url('./iconfont.ttf?t=1589880293066') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1589880293066#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

`



