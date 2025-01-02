<template>
  <div>
    <input
      :type="type"
      class="form-control text-muted"
      :class="classname"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      :id="id"
      :onchange="onchange"
      :disabled="disabled"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @change="$emit('change', $event); console.log('Change event emitted');"
      @blur="$emit('blur', $event); console.log('Blur event emitted');" 
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

defineEmits(["update:modelValue", "change", "blur"]);
</script>

<style scoped>
input:focus {
  outline: none;
  box-shadow: none;
}
</style>
