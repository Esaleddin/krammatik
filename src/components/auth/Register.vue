<template>
  <div>
    <div class="my-5 text-center offset-2 col-8">
      <img src="@/assets/welcome.svg" class="img-fluid" />
    </div>
    <div class="text-center">
      <h2>Jetzt registrieren</h2>
      <p>
        oder
        <a class="text-vue2" role="button" @click="changeComponent('login')"
          >melden Sie sich mit Ihrem Konto an</a
        >
      </p>
    </div>
    <Form @submit="submitData" :validation-schema="schema" v-slot="{ errors }">
      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="email"><strong>E-Mail-Adresse</strong></label>
          <Field
            as="input"
            name="email"
            type="email"
            class="form-control"
            id="email"
          />
          <small class="text-danger" v-if="errors.email">{{
            errors.email
          }}</small>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="password"><strong>Passwort</strong></label>
          <Field
            as="input"
            name="password"
            type="password"
            class="form-control"
            id="password"
          />
          <small class="text-danger" v-if="errors.password">{{
            errors.password
          }}</small>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="confirmPassword"
            ><strong>Passwort wiederholen</strong></label
          >
          <Field
            as="input"
            name="confirmPassword"
            type="password"
            class="form-control"
            id="confirmPassword"
          />
          <small class="text-danger" v-if="errors.confirmPassword">{{
            errors.confirmPassword
          }}</small>
        </div>
      </div>
      <div class="form-row mt-3">
        <div class="form-group col-md-8 offset-2">
          <div class="d-grid">
            <button class="btn bg-vue">Registrieren</button>
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as yup from "yup";

export default {
  name: "RegisterC",
  components: {
    Form,
    Field,
  },
  emits: {
    "change-component": (payload) => {
      if (payload.componentName !== "login") {
        return false;
      }
      return true;
    },
  },
  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("E-Mail Adresse wird benötigt")
        .trim()
        .email(
          "Das ist keine gültige E-Mail Adresse, wir haben Deutschunterricht."
        ),
      password: yup
        .string()
        .required("Ein Password wird benötigt")
        .min(6, "Das Passwort muss mindestens sechs Zeichen lang sein."),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwörter stimmen nicht überein"),
    });
    return {
      schema,
    };
  },
  methods: {
    async submitData(values) {
      this.$store
        .dispatch("signup", {
          email: values.email,
          password: values.password,
        })
        .then(() => {
          console.log(this.$store.state);
          this.changeComponent("login");
        })
        .catch(() => {
          this.error = "Ein Fehler ist aufgetreten";
        });
    },
    changeComponent(componentName) {
      this.$emit("change-component", { componentName });
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: hsl(153, 77%, 34%);
}
</style>
