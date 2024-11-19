<template>
  <div class="c-phone" :class="{ 'is-active': isActive }" ref="cPhoneRef" @click="handleClick">
    <label for="phone">PHONE *</label>
    <div :class="{ 'is-hide': !isActive }">
      <vue-tel-input
        ref="telInput"
        v-model="phoneNumber"
        id="phone"
        :inputOptions="{
          placeholder: '(555) 867-5309',
          onFocus: handleFocus,
          onBlur: handleBlur
        }"
        @country-changed="onCountryChanged"
        @validate="onValidate"
        :enabledCountryCode="true"
        :enabledFlags="true"
        :preferredCountries="['US', 'GB', 'CA', 'UA', 'PL']"
        :customValidate="false"
        :validCharactersOnly="true"
        :dropdownOptions="{ 
          showDialCodeInSelection: true,
          showDialCodeInList: true,
          showFlags: true, 
        }"
        mode="auto"
        :required="true"
      >
      </vue-tel-input>
      
      <div v-if="isValid" class="is-error">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onBeforeUnmount } from 'vue';
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';

const phoneNumber = ref('');
const country = ref(null);
const initialCountry = ref(null);
const countryChangedByUser = ref(false);
const invalid = ref(false);
const errorMessage = ref('');

const telInput = ref(null);
const cPhoneRef = ref(null); 

const isFocused = ref(false);

const maxPhoneLength = 15;

const isValid = computed(() => invalid.value === false);

const isActive = computed(() => {
  // console.log(countryChangedByUser.value);
  return isFocused.value || phoneNumber.value !== '' || countryChangedByUser.value;
});


const handleClick = () => {
  isFocused.value = true;
  nextTick(() => {
    if (telInput.value && telInput.value.focus) {
      telInput.value.focus();
    }
  });
};

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};

const clickOutsideHandler = (event) => {
  if (cPhoneRef.value && !cPhoneRef.value.contains(event.target)) {
    isFocused.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', clickOutsideHandler);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', clickOutsideHandler);
});

const onValidate = (validationResult) => {  
  // invalid.value = validationResult.valid;
  // errorMessage.value = validationResult.valid ? '' : 'Invalid phone number'
  // console.log(phoneNumber.value);
  if (phoneNumber.value.length > maxPhoneLength) {
    invalid.value = false;
    errorMessage.value = `Phone number should not exceed ${maxPhoneLength} digits`;
  } else {
    invalid.value = validationResult.valid;
    errorMessage.value = validationResult.valid ? '' : 'Invalid phone number';
  }
}

let isInitialCountrySet = false;

const onCountryChanged = (selectedCountry) => {
  country.value = selectedCountry;
  if (!isInitialCountrySet) {
    initialCountry.value = selectedCountry;
    isInitialCountrySet = true;
  } else if (selectedCountry.iso2 !== initialCountry.value.iso2) {
    countryChangedByUser.value = true;
  }
}


defineExpose({
  phoneNumber,
  country,
  invalid,
  errorMessage,
})
</script>
