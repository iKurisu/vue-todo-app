<template>
  <div :class="[{ show: visible, hide: !visible }, 'fixed-container']">
    <Form />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Form from "../components/Form.vue";

export default {
  name: "FormView",
  components: {
    Form
  },
  computed: {
    ...mapGetters({
      visible: "formIsVisible"
    })
  }
};
</script>
