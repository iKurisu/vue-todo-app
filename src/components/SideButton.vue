<template>
  <div class="button-container top" @click="setActive">
    <div :class="['side-button', { 'side-button--active': isActive }]">
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
  height: 8px;
  left: 10%;
  display: flex;
  align-items: center;
  transform: translateY(3px);
}

.side-button {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: height .3s ease .3s;
  cursor: pointer;
}

.row {
  width: 100%;
  height: 1px;
  background: #333;
  transition: transform .3s ease;
}

.side-button--active {
  height: 1px;
  transition-delay: 0s;
}

.side-button--active .row {
  transition-delay: .3s;
}

.side-button--active .row:nth-child(1) {
  transform: rotate(135deg);
}

.side-button--active .row:nth-child(2) {
  transform: rotate(45deg);
}
</style>


