<template>
  <div class="button-container top" @click="setActive">
    <div :class="'side-button'">
      <div class="row"/>
      <div class="row"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideButton",
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    setActive() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="scss">
.button-container {
  width: 20px;
  height: 10px;
  left: 10%;
  display: flex;
  align-items: center;
  transform: translateY(2px);
}

.side-button {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}

.row {
  width: 100%;
  height: 1px;
  background: #555;
}

.row:nth-child(2) {
  width: 65%;
  transition: width .3s ease;
}
</style>


