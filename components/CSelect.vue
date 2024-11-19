<template>
  <div class="c-select" :class="{ 'is-invalid': hasError, 'is-active': isActiveComputed }" @click.stop="setActive">
    <label :for="id">{{ label }}</label>
    <v-select
      :id="id"
      :key="id"
      :name="name"
      :options="options"
      :value="internalValue"
      @update:modelValue="updateValue"
      @focus="setActive"
      @search:blur="onBlur"
    ></v-select>
    <span class="is-error" v-if="hasError">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';
import vSelect from "vue-select";

const props = defineProps({
  id: String,
  name: String,
  label: String,
  modelValue: [String, Object],
  options: {
    type: Array,
    required: true,
  },
  errorMessage: String,
  hasError: Boolean,
});

const emit = defineEmits(['update:modelValue', 'blur', 'focus']);

const isActive = ref(false);
const internalValue = ref(props.modelValue);

const setActive = () => {
  isActive.value = true;
  emit('focus');
};

const onBlur = () => {
  isActive.value = false;
  emit('blur');
};

const updateValue = (value) => {  
  internalValue.value = value;
  emit('update:modelValue', value);
};

const isActiveComputed = computed(() => {
  return isActive.value && internalValue.value != null || !!internalValue.value;
});

</script>