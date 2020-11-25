<template>
  <div class="device" style="width: 432px; height: 768px;">
    <div class="status-bar" style="--icon-height:28px; --icon-text-size:14px;">
      <div class="icons-wrap" style="padding: 8px 16px; color: white;">
        <div class="block left">
          <svg
            viewBox="0 0 48 62"
            xmlns="http://www.w3.org/2000/svg"
            class="icon m-r-xxs"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M37 11a2 2 0 00-2 2v10c0 1.1.9 2 2 2h8a2 2 0 002-2v-7.54a2 2 0 00-.75-1.56l-3.07-2.46a2 2 0 00-1.25-.44H37zm2.85 3.64a5.4 5.4 0 001.17-.92h1.06V23h-1.41v-7.58c-.56.53-1.28.92-2.14 1.17v-1.4c.42-.1.85-.29 1.32-.55zM5 3a4 4 0 00-4 4v12a4 4 0 004 4h22a4 4 0 004-4V7a4 4 0 00-4-4H5zm.12 16V7.58h1.87v4.76h5.8V7.58h1.87V19h-1.88v-5.06H7V19H5.12zm12.42 0V7.58h4.18c1.85 0 3.25.5 4.2 1.53.92.96 1.38 2.35 1.38 4.18 0 1.8-.46 3.2-1.37 4.17-.96 1.03-2.36 1.54-4.21 1.54h-4.18zm3.83-9.82H19.4v8.22h1.96c1.42 0 2.46-.34 3.12-1 .64-.66.96-1.7.96-3.11 0-1.44-.32-2.5-.96-3.14-.66-.65-1.7-.97-3.12-.97zM5 38a4 4 0 00-4 4v12a4 4 0 004 4h22a4 4 0 004-4V42a4 4 0 00-4-4H5zm.12 16V42.58h1.87v4.76h5.8v-4.76h1.87V54h-1.88v-5.06H7V54H5.12zm12.42 0V42.58h4.18c1.85 0 3.25.5 4.2 1.53.92.96 1.38 2.35 1.38 4.18 0 1.8-.46 3.2-1.37 4.17-.96 1.03-2.36 1.54-4.21 1.54h-4.18zm3.83-9.82H19.4v8.22h1.96c1.42 0 2.46-.34 3.12-1 .64-.66.96-1.7.96-3.11 0-1.44-.32-2.5-.96-3.14-.66-.65-1.7-.97-3.12-.97zM37 46a2 2 0 00-2 2v10c0 1.1.9 2 2 2h8a2 2 0 002-2v-7.54a2 2 0 00-.75-1.56l-3.07-2.46a2 2 0 00-1.25-.44H37zm1.65 3.54c.6-.68 1.4-1 2.4-1 .88 0 1.62.24 2.19.76.56.52.84 1.19.84 2s-.3 1.54-.9 2.2c-.37.38-1 .87-1.93 1.5-1 .66-1.6 1.24-1.8 1.75h4.65V58h-6.4c0-.92.3-1.73.92-2.43.34-.4 1.05-.96 2.1-1.7.62-.43 1.06-.78 1.32-1.06.42-.47.64-.97.64-1.52 0-.52-.14-.9-.43-1.17-.28-.26-.71-.39-1.26-.39-.58 0-1.03.2-1.33.6-.3.39-.46.95-.49 1.7h-1.42c.02-1.04.32-1.87.9-2.5z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div class="block right">
          <div class="block left">
            <svg
              viewBox="0 0 48 62"
              xmlns="http://www.w3.org/2000/svg"
              class="icon m-r-xxs"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37 11a2 2 0 00-2 2v10c0 1.1.9 2 2 2h8a2 2 0 002-2v-7.54a2 2 0 00-.75-1.56l-3.07-2.46a2 2 0 00-1.25-.44H37zm2.85 3.64a5.4 5.4 0 001.17-.92h1.06V23h-1.41v-7.58c-.56.53-1.28.92-2.14 1.17v-1.4c.42-.1.85-.29 1.32-.55zM5 3a4 4 0 00-4 4v12a4 4 0 004 4h22a4 4 0 004-4V7a4 4 0 00-4-4H5zm.12 16V7.58h1.87v4.76h5.8V7.58h1.87V19h-1.88v-5.06H7V19H5.12zm12.42 0V7.58h4.18c1.85 0 3.25.5 4.2 1.53.92.96 1.38 2.35 1.38 4.18 0 1.8-.46 3.2-1.37 4.17-.96 1.03-2.36 1.54-4.21 1.54h-4.18zm3.83-9.82H19.4v8.22h1.96c1.42 0 2.46-.34 3.12-1 .64-.66.96-1.7.96-3.11 0-1.44-.32-2.5-.96-3.14-.66-.65-1.7-.97-3.12-.97zM5 38a4 4 0 00-4 4v12a4 4 0 004 4h22a4 4 0 004-4V42a4 4 0 00-4-4H5zm.12 16V42.58h1.87v4.76h5.8v-4.76h1.87V54h-1.88v-5.06H7V54H5.12zm12.42 0V42.58h4.18c1.85 0 3.25.5 4.2 1.53.92.96 1.38 2.35 1.38 4.18 0 1.8-.46 3.2-1.37 4.17-.96 1.03-2.36 1.54-4.21 1.54h-4.18zm3.83-9.82H19.4v8.22h1.96c1.42 0 2.46-.34 3.12-1 .64-.66.96-1.7.96-3.11 0-1.44-.32-2.5-.96-3.14-.66-.65-1.7-.97-3.12-.97zM37 46a2 2 0 00-2 2v10c0 1.1.9 2 2 2h8a2 2 0 002-2v-7.54a2 2 0 00-.75-1.56l-3.07-2.46a2 2 0 00-1.25-.44H37zm1.65 3.54c.6-.68 1.4-1 2.4-1 .88 0 1.62.24 2.19.76.56.52.84 1.19.84 2s-.3 1.54-.9 2.2c-.37.38-1 .87-1.93 1.5-1 .66-1.6 1.24-1.8 1.75h4.65V58h-6.4c0-.92.3-1.73.92-2.43.34-.4 1.05-.96 2.1-1.7.62-.43 1.06-.78 1.32-1.06.42-.47.64-.97.64-1.52 0-.52-.14-.9-.43-1.17-.28-.26-.71-.39-1.26-.39-.58 0-1.03.2-1.33.6-.3.39-.46.95-.49 1.7h-1.42c.02-1.04.32-1.87.9-2.5z"
                fill="currentColor"
              ></path></svg
            ><svg
              viewBox="0 0 53 62"
              xmlns="http://www.w3.org/2000/svg"
              class="icon m-r-xxs"
            >
              <path
                d="M6.95 17.58l-5.63 7.3v1.64h5.57V29h1.66v-2.48h1.73v-1.4H8.55v-7.54h-1.6zm-.11 2.2h.05v5.35H2.74l4.1-5.35zM17.3 17.35c-1.68 0-3.03.58-4.02 1.76a6.27 6.27 0 00-1.4 4.23c0 1.7.46 3.08 1.4 4.16a5.33 5.33 0 004.24 1.72c1 0 1.9-.12 2.74-.38.78-.26 1.47-.6 2.06-1.07v-4.8h-4.9v1.49h3.16v2.48c-.39.24-.8.43-1.28.56-.5.12-1.03.2-1.59.2-1.42 0-2.48-.4-3.15-1.2-.64-.73-.94-1.79-.94-3.16 0-1.41.33-2.52 1.04-3.32a3.28 3.28 0 012.64-1.13c.9 0 1.63.19 2.17.59.55.38.9.96 1.06 1.73h1.76a4.34 4.34 0 00-1.54-2.87c-.84-.67-2-.99-3.45-.99z"
                fill="currentColor"
              ></path>
              <rect
                x="20"
                y="40"
                width="4"
                height="8"
                rx="2"
                fill="currentColor"
              ></rect>
              <rect
                x="27"
                y="35"
                width="4"
                height="13"
                rx="2"
                fill="currentColor"
              ></rect>
              <rect
                x="34"
                y="28"
                width="4"
                height="20"
                rx="2"
                fill="currentColor"
              ></rect>
              <rect
                x="41"
                y="22"
                width="4"
                height="26"
                rx="2"
                fill="currentColor"
              ></rect>
              <rect
                x="48"
                y="16"
                width="4"
                height="32"
                rx="2"
                fill="currentColor"
              ></rect></svg
            ><svg
              viewBox="0 0 52 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
            >
              <path
                d="M6.95 17.58l-5.63 7.3v1.64h5.57V29h1.66v-2.48h1.73v-1.4H8.55v-7.54h-1.6zm-.11 2.2h.05v5.35H2.74l4.1-5.35zM17.3 17.35c-1.68 0-3.03.58-4.02 1.76a6.27 6.27 0 00-1.4 4.23c0 1.7.46 3.08 1.4 4.16a5.33 5.33 0 004.24 1.72c1 0 1.9-.12 2.74-.38.78-.26 1.47-.6 2.06-1.07v-4.8h-4.9v1.49h3.16v2.48c-.39.24-.8.43-1.28.56-.5.12-1.03.2-1.59.2-1.42 0-2.48-.4-3.15-1.2-.64-.73-.94-1.79-.94-3.16 0-1.41.33-2.52 1.04-3.32a3.28 3.28 0 012.64-1.13c.9 0 1.63.19 2.17.59.55.38.9.96 1.06 1.73h1.76a4.34 4.34 0 00-1.54-2.87c-.84-.67-2-.99-3.45-.99z"
                fill="currentColor"
              ></path>
              <rect
                x="19"
                y="40"
                width="4"
                height="8"
                rx="2"
                fill="currentColor"
              ></rect>
              <rect
                x="26"
                y="35"
                width="4"
                height="13"
                rx="2"
                fill="currentColor"
              ></rect>
              <rect
                x="33"
                y="28"
                width="4"
                height="20"
                rx="2"
                fill="currentColor"
              ></rect>
              <rect
                x="40"
                y="22"
                width="4"
                height="26"
                rx="2"
                fill="currentColor"
              ></rect>
              <rect
                x="47"
                y="16"
                width="4"
                height="32"
                rx="2"
                fill="currentColor"
              ></rect>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.75 42H6v4a1 1 0 102 0v-8a1 1 0 00-1-1h-.5a1 1 0 00-.8.4l-2.55 3.4a.75.75 0 00.6 1.2zM14.25 42H12v-4a1 1 0 10-2 0v8a1 1 0 001 1h.5a1 1 0 00.8-.4l2.55-3.4a.75.75 0 00-.6-1.2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.status-bar,
.status-bar .icons-wrap,
.status-bar .icons-wrap .block {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.status-bar,
.status-bar .icons-wrap {
  width: 100%;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.status-bar {
  position: absolute;
  z-index: 999;
  left: 0;
  top: 0;
}
.status-bar .icons-wrap .block {
  width: 33.33333%;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}
.status-bar .icons-wrap .block.left {
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}
.status-bar .icons-wrap .block.right {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
.status-bar .icons-wrap .block {
  width: 33.33333%;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}
</style>