<template>
  <div
    :class="[
      'form-field', 
      length > 0 ? 'form-field--visible' : 'form-field--hidden',
      { 'form-field--error': error }
    ]"
  >
    <p>{{ name }}</p>
    <input 
      type="text" 
      spellcheck="false"
      :value="value" 
      @input="$emit('input', $event.target.value)"
      @focus="setFocus(true)" @blur="setFocus(false)"
    >
    <div :class="['form-field-line', { 'form-field-line--active': focused }]" />
    <label>{{ name }}</label>
  </div>
</template>

<script>
export default {
  name: "FormField",
  props: {
    name: {
      type: String,
      required: true
    },
    length: {
      type: Number,
      required: true
    },
    error: {
      type: Boolean
    },
    value: {
      type: String,
      required: true
    }
  }, 
  data() {
    return {
      focused: false
    }
  },
  methods: {
    setFocus(bool) {
      this.focused = bool
    }
  }
};
</script>

<style lang="scss">
.form-field {
  width: 15%;
  margin-bottom: 20px;
}

.form-field p {
  font-size: 12px;
  transition: all 0.3s ease;
}

.form-field label {
  opacity: 0.6;
  position: relative;
  top: -28px;
}

.form-field--hidden p {
  transform: translateY(12px);
  opacity: 0;
}

.form-field--visible p {
  transform: translateY(0);
  opacity: 1;
}

.form-field--visible label {
  opacity: 0;
}

.form-field--hidden label {
  transition: opacity 0.5s ease;
}

.form-field-line {
  width: 0;
  border-bottom: 1px solid #555;
  position: relative;
  top: -1px;
  z-index: 3;
  transition: width .3s ease;
}

.form-field-line--active {
  width: 100%;
}

.form-field--error .form-field-line {
  width: 100%;
  border-color: #ee6666;
}

.form-field--error input {
  color: #ee6666;
}
</style>

