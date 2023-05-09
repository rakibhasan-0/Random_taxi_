<script>
import { defineComponent } from 'vue';
import { VaAppBar, VaButton, VaInput } from 'vuestic-ui';

export default defineComponent({
  name: 'TaxiPage',
  components: {
    VaAppBar,
    VaButton,
    VaInput,
  },
});
</script>

<template>
  <div class="nav-bar">
    <va-app-bar style="background-color: #397367">
      <va-button icon="Home" color="#fff" preset="plain" />
      <va-spacer />
      <va-button icon="Support" color="#fff" preset="plain" />
    </va-app-bar>
  </div>

  <div class="menu-bar">
    <div>
      <va-input placeholder="Enter your pick up position"></va-input>
      <br /><br />
      <va-input placeholder="Enter your destination"></va-input>
      <br /><br />
      <va-input placeholder="Select time"></va-input>
      <br /><br />
    </div>
  </div>

  <va-button color="#397367" class="check"> Order </va-button>

  <br /><br /><br />

  <div class="container">
    <h3>Current Location</h3>
    <div class="text-image"></div>
  </div>
</template>

<style>
.nav-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 40px;
}
.container {
  position: relative;
}
.text-image {
  width: 100%;
  border: 1px solid black;
  background-size: 220%, 200%;
  background-repeat: no-repeat;
  background-image: url('../assets/stockholm.png');
  padding: 8px;
  box-sizing: border-box;
  background-position: center bottom;
  height: 120px;
  position: absolute;
  top: 25px;
  transform: translateX(-50%);
  left: 50%;
}
</style>
