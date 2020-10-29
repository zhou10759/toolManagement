<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style >
.flex-column {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.flex-column {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.items-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.flex-grow {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}
.m-t-auto {
  margin-top: auto;
}
img,
svg,
video {
  max-width: 100%;
}
.m-r-md {
  margin-right: 1.25em;
}
.text-truncate,
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.din-font {
  font-family: suite-admin-din-font !important;
}
.by {
  font-family: by !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
