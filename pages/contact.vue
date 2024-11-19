<template>
  <div class="default-layout is-bg-purple">
    <Header />
    <Loader v-if="requestInProgress" />
    <div class="wrapper">
      <main class="p-contact">
        <div class="u-container">
          <div class="p-contact__flex">
            <div class="p-contact__left">
              <h1 class="u-h1">Let’s <br /> Collaborate</h1>
              <p>We launch MVPs redefine existing products and continuously dive into custumer development.</p>
            </div>

            <div class="p-contact__right">
              <form class="c-form" @submit.prevent="handleSubmit">
                <h2>Let’s Build Something <br /> Remarkable Together.</h2>
                
                <div class="js-first-step" v-show="currentStep === 0">
                  <CInput
                    id="name"
                    name="name"
                    label="YOUR NAME *"
                    v-model="formData.name"
                    :errorMessage="v$.name.$errors[0]?.$message"
                    :hasError="!!v$.name.$invalid && !!v$.name.$errors.length"
                    @blur="v$.name.$touch()"
                  />

                  <CInput
                    id="email"
                    name="email"
                    label="EMAIL *"
                    v-model="formData.email"
                    :errorMessage="v$.email.$errors[0]?.$message"
                    :hasError="!!v$.email.$invalid && !!v$.email.$errors.length"
                    @blur="v$.email.$touch()"
                  />

                  <PhoneInput ref="phoneInputRef" />

                  <div class="c-form__buttons">
                    <button
                      class="u-btn is-black is-big"
                      type="button"
                      @click.prevent="nextStep"
                      :disabled="!isFirstStepValid"
                    >
                      Submit Project Idea
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1827 12.749L12.9711 16.9388L14.029 18.0022L19.5289 12.5307C19.6704 12.39 19.75 12.1986 19.75 11.999C19.75 11.7994 19.6704 11.6081 19.5289 11.4673L14.0289 5.99585L12.9711 7.05926L17.1826 11.249L4 11.249L4 12.749L17.1827 12.749Z" fill="white" />
                      </svg>
                    </button>
                    <div class="is-step">1/2 step</div>
                  </div>
                </div>

                <div class="js-second-step" v-show="currentStep === 1">
                  <h3 class="u-h3 is-green"  v-if="requestSuccess">Form submitted successfully</h3>

                  <div v-else>
                    <CSelect
                      id="project-type"
                      name="projectType"
                      label="Project Type"
                      v-model="formData.projectType"
                      :options="projectTypeOptions"
                      :hasError="!!v$.projectType.$invalid && !!v$.projectType.$errors.length"
                      :errorMessage="v$.projectType.$errors[0]?.$message"
                      @blur="v$.projectType.$touch()"
                      @deselected="v$.projectType.$touch()"
                    />

                    <CInput
                      id="text"
                      name="text"
                      label="EXPLAIN YOUR IDEA"
                      v-model="formData.text"
                      :errorMessage="v$.text.$errors[0]?.$message"
                      :hasError="!!v$.text.$invalid && !!v$.text.$errors.length"
                      @blur="v$.text.$touch()"
                    />

                    <div class="c-radio-buttons">
                      <div class="c-radio-buttons__title">Your Budget:</div>
                      <label class="c-radio-buttons__item" for="v1" :class="{ 'is-checked': formData.selectedBudget === '< $5K' }">
                        <input type="radio" id="v1" name="budget" value="< $5K" v-model="formData.selectedBudget">
                        < $5K
                      </label>
                      <label class="c-radio-buttons__item" for="v2" :class="{ 'is-checked': formData.selectedBudget === '$5K - $25K' }">
                        <input type="radio" id="v2" name="budget" value="$5K - $25K" v-model="formData.selectedBudget">
                        $5K - $25K
                      </label>
                      <label class="c-radio-buttons__item" for="v3" :class="{ 'is-checked': formData.selectedBudget === '$25K - $100K' }">
                        <input type="radio" id="v3" name="budget" value="$25K - $100K" v-model="formData.selectedBudget">
                        $25K - $100K
                      </label>
                      <label class="c-radio-buttons__item" for="v4" :class="{ 'is-checked': formData.selectedBudget === '$100K+' }">
                        <input type="radio" id="v4" name="budget" value="$100K+" v-model="formData.selectedBudget">
                        $100K+
                      </label>                  
                    </div>

                    <div class="c-form__buttons">
                      <div class="d-flex">
                        <button
                          type="button"
                          @click="prevStep"
                          :disabled="currentStep === 0"
                          class="c-arrow is-back"
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.81731 12.749L11.0289 16.9388L9.97105 18.0022L4.47105 12.5307C4.32955 12.39 4.25 12.1986 4.25 11.999C4.25 11.7994 4.32955 11.6081 4.47105 11.4673L9.97105 5.99585L11.0289 7.05926L6.81737 11.249L20 11.249L20 12.749L6.81731 12.749Z" fill="#B3B3B3" />
                          </svg>
                        </button>

                        <button
                          class="u-btn is-black is-big"
                          type="submit"
                          @click="submitForm"
                          :disabled="!isSecondStepValid"
                        >
                          Send Message
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1827 12.749L12.9711 16.9388L14.029 18.0022L19.5289 12.5307C19.6704 12.39 19.75 12.1986 19.75 11.999C19.75 11.7994 19.6704 11.6081 19.5289 11.4673L14.0289 5.99585L12.9711 7.05926L17.1826 11.249L4 11.249L4 12.749L17.1827 12.749Z" fill="white" />
                          </svg>
                        </button>
                      </div>
                      <div class="is-step">2/2 step</div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>  
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core';
import { required, email, sameAs, minLength, maxLength, helpers, numeric} from '@vuelidate/validators';
// import vSelect from "vue-select";

import Api from '@/api/Axios'


const activeInputs = ref([]);
const currentStep = ref(0);
const requestInProgress = ref(false);
const requestSuccess = ref(false);
const phoneInputRef = ref(null);

const projectTypeOptions = ref([
  {
    'label': 'UX/UI and Product Design',
    'value': 'design',
  },
  {
    'label': 'SEO and Marketing',
    'value': 'seo'
  },
  {
    'label': 'Web Development',
    'value': 'web_dev'
  },
  {
    'label': 'Mobile App Development',
    'value': 'mobile_app'
  },
  {
    'label': 'Other',
    'value': 'other',
  },
]);

const formData = reactive({
  name: '',
  email: '',
  text: '',
  projectType: '',
  selectedBudget: ''
});

const phoneRegex = (value) => {
  const regex = /^\+?[0-9]{6,15}$/;
  return regex.test(value);
};

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage('The email field is required', required),
      email: helpers.withMessage('Invalid email format', email),
    },
    name: {
      required: helpers.withMessage('The name field is required', required),
      minLength: minLength(3),
    },
    text: {
      required: helpers.withMessage('This field is required', required),
      minLength: minLength(6),
      maxLength: helpers.withMessage('The test must be at most 50 signs', maxLength(50)),
    },
    projectType: {
      required: helpers.withMessage('This field is required', required),
    },
  };
});

const v$ = useVuelidate(rules, formData);

// Проверка валидности первого шага
const isFirstStepValid = computed(() => {
  // console.log('isFirstStepValid: ', phoneInputRef?.value?.invalid);
  return v$.value.name.$pending === false &&
         !v$.value.name.$invalid &&
         !v$.value.email.$invalid &&
         phoneInputRef?.value?.invalid;
});

// Проверка валидности второго шага
const isSecondStepValid = computed(() => {
  return !v$.value.projectType.$invalid &&
         !v$.value.text.$invalid;
});

const setSelected = (value) => {
  // console.log('11: ', value);
};


// Метод для установки активного состояния
const setActive = (input) => {
  if (!activeInputs.value.includes(input)) {
    activeInputs.value.push(input);
  }
};

// Метод для проверки активного состояния
const isActive = (input) => {
  return activeInputs.value.includes(input) || formData[input] != null && formData[input].length > 0;
};

// Метод для удаления активного состояния, если поле пустое
const handleBlur = (input) => {
  v$.value[input].$touch(); 

  if (input === 'projectType') {
    if (formData.projectType == null || formData.projectType == undefined || formData.projectType.length == 0 || formData.projectType === '') {
      activeInputs.value = activeInputs.value.filter((i) => i !== input);
    }
  } else {
    // Стандартная проверка для других полей
    if (formData[input].length === 0) {
      activeInputs.value = activeInputs.value.filter((i) => i !== input);
    }
  }
};


const nextStep = () => {
  v$.value.name.$touch() 
  v$.value.email.$touch()
  // v$.value.phone.$touch()
  if (isFirstStepValid.value) {
    currentStep.value++
  }
}

const prevStep = () => {
  currentStep.value--
}


const submitForm = async () => {
  v$.value.$validate();
  console.log(v$.value.$error);
  if (v$.value.$error) return;

  // console.log(phoneInputRef?.value);
  const phoneNumber = phoneInputRef?.value?.phoneNumber;
  const isValidPhone = phoneInputRef?.value?.invalid;
  console.log(isValidPhone);
  if (!isValidPhone) return;

  requestInProgress.value = true;

  const formDataToSend = new FormData();
  formDataToSend.append('name', formData.name);
  formDataToSend.append('email', formData.email);
  formDataToSend.append('phone', phoneNumber);
  formDataToSend.append('text', formData.text);
  formDataToSend.append('projectType', formData.projectType.label);
  formDataToSend.append('selectedBudget', formData.selectedBudget);

  Api.post("helper/contact_form", formDataToSend, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  .then((result) => {
    console.log(result)
    requestInProgress.value = false;
    requestSuccess.value = true;
  })
  .catch((error) => {
    console.log(error);
    requestInProgress.value = false;
  });
};
</script>