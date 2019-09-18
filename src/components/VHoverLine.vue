<template>
  <div
    :class="['hover-line', { 'hover-line--active': hovering || isActive }]"
  />
</template>

<script>
export default {
  name: "HoverLine",
  props: {
    hovering: {
      type: Boolean,
      required: true
    },
    isActive: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss">
.hover-line {
  width: 0;
  margin-top: 4px;
  border-bottom: 1px solid #555;
  transition: width 0.3s ease;
}

.hover-line--active {
  width: 100%;
}
</style>
