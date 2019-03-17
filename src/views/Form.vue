<template>
  <div :class="[{ show: visible, hide: !visible }, 'fixed-container']">
    <Form />
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
    }
  }
}
</script>