<template>
<div id="app">
  <router-view/>
  <div class="legal-notice">
    Steel alphabet symbols from
    <a href="https://brandonsanderson.com">Brandon Sanderson's</a>&nbsp;<em>Mistborn</em> series of
    books. This app is not affiliated with Dragonsteel Entertainment in any way. SVG versions of the
    symbols taken with kind permission from the
    <a href="https://coppermind.net/wiki/Steel_alphabet">Coppermind</a>.
  </div>
</div>
</template>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  position: relative;
}

#app {
  font-family: 'Nunito Sans', Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  position: relative;
}

.legal-notice {
  position: absolute;
  padding: 1rem;
  bottom: 0;
  max-width: 50%;

  @media (max-width: 960px) {
    max-width: 100%;
  }
}
</style>
