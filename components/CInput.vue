<template>
  <div class="c-input" :class="{ 'is-invalid': hasError, 'is-active': isActiveComputed }" @click.stop="setActive">
    <label :for="id">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :name="name"
      :value="modelValue"
      @input="updateValue($event.target.value)"
      @blur="onBlur"
      @focus="setActive"
    />
    <span class="is-error" v-if="hasError">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';


const props = defineProps({
  id: String,
  name: String,
  label: String,
  type: {
    type: String,
    default: 'text',
  },
  modelValue: String,
  errorMessage: String,
  hasError: Boolean,
});

const emit = defineEmits(['update:modelValue', 'blur', 'focus']);

const isActive = ref(false);

const setActive = () => {
  isActive.value = true;
  emit('focus');
};

const onBlur = () => {
  isActive.value = false;
  emit('blur');
};

const updateValue = (value) => {
  emit('update:modelValue', value);
};

const isActiveComputed = computed(() => {
  return isActive.value || !!props.modelValue; // Активно, если поле в фокусе или заполнено
});


</script>
