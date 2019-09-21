<template>
  <div :class="[{ show: visible, hide: !visible }, 'fixed-container']">
    <Form :type="type" />
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
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      visible: "formIsVisible"
    })
  }
};
</script>
