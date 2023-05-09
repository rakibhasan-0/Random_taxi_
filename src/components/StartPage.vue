<template>
  <div class="heading"></div>
  <div class="first-options">
    <va-button
      color="#397367"
      class="food-button"
      style="
        border: 1px solid black;
        border-radius: 12px;
        font-size: 16px;
        padding: 1px 12px;
        margin-bottom: 20px;
}
      "
    >
      Food
    </va-button>
    <br /><br />

    <router-link to="/taxi">
      <va-button
        color="#397367"
        class="taxi-button"
        style="
          border: 1px solid black;
          border-radius: 12px;
          font-size: 16px;
          padding: 1px 15px;
        "
      >
        Taxi
      </va-button>
    </router-link>
  </div>

  <div class="emergency-container">
    <va-button color="danger" class="Emergecny-button"> Emergecny </va-button>
    <div class="text-area" style="font-size: 10px">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five.
    </div>
  </div>
</template>

<style>
.first-options {
  position: fixed;
  padding: 12px;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
}

.Emergecny-button {
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: auto;
}
.emergency-container {
  background-color: black;
  padding: 30px;
  position: fixed;
  bottom: 0px;
  top: 370px;
  left: 0;
  width: 100%;
  color: white;
  margin: auto;
}

.text-area {
  position: relative;
  bottom: -39px;
}

.heading {
  background-color: grey;
  border: 2px solid grey;
  padding: 60px;
  position: fixed;
  top: 10px;
  left: 0px;
  width: 250%;
  display: flex;
  transform: translateX(-50%);
  background-image: url('../assets/stockholm.png');
  transform: skewY(10deg);
}
</style>
<script>
export default {
  name: 'StartPage',
};
</script>
