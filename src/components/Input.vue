<template>
  <div>
    <input
      :type="type"
      class="form-control"
      :class="classname"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      :id="id"
      :onchange="onchange"
      :disabled="disabled"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
    modelValue: {
    type: [String, Number],
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  classname: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  onchange: {
    type: Function,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['update:modelValue']);
</script>
<style scoped>
#name,
input::placeholder{
    color: #505253!important;
}
input:focus {
  outline: none;
  box-shadow: none;
}
</style>