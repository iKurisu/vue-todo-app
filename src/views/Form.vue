<template>
  <div :class="[{ show: visible, hide: !visible }, 'fixed-container']">
    <Form
      :changeView="changeView"
      :addList="addList"
      :activeList="activeList"
      :activeId="activeId"
      :update="update"
      :type="type"
    />
  </div>
</template>

<script>
import Form from "../components/Form.vue";

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
    activeList: {
      type: Object
    },
    activeId: {
      type: Number
    },
    type: {
      type: String,
      required: true
    },
    changeView: {
      type: Function,
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
  }
};
</script>