<template>
  <div class="register">
      <register-form></register-form>
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterForm from '../components/RegisterForm.vue';

export default {
  name: "Register",
  components: {
    RegisterForm
  }
};
</script>
