<template>
  <div :class="[{ show: visible, hide: !visible }, 'fixed-container']">
    <Form
      :add-list="addList"
      :active-list="activeList"
      :active-id="activeId"
      :update="update"
      :type="type"
    />
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
    activeList: {
      type: Object,
      default: () => ({})
    },
    activeId: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    addList: {
      type: Function,
      required: true
    },
    update: {
      type: Function,
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
