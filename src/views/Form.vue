<template>
  <div :class="[{ show: visible, hide: !visible }, 'fixed-container']">
    <Form :changeView="changeView" />
  </div>
</template>

<script>
import Form from '../components/Form';

export default {
  name: "FormView",
  components: {
    Form
  },
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    changeView: {
      type: Function,
      required: true
    }
  }
}
</script>