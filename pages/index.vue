<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-card>
      <v-container>
        <v-row align="center" justify="center">
          <v-col
            class="mx-10"
            cols="12"
            md="5"
          >
            <v-text-field
              v-model="namein"
              :counter="10"
              label="Name"
              required
            />
          </v-col>
          <v-col
            class="mx-10"
            cols="12"
            md="5"
          >
            <v-text-field
              v-model="lastnamein"
              :counter="10"
              label="Lastname"
              required
            />
          </v-col>
          <v-col
            class="mx-10"
            cols="12"
            md="5"
          >
            <v-text-field
              v-model="usernamein"
              label="Username"
              required
            />
          </v-col>
          <v-col
            class="mx-10"
            cols="12"
            md="5"
          >
            <v-text-field
              v-model="passwordin"
              label="Password"
              required
            />
          </v-col>
          <v-col
            class="mx-10"
            cols="12"
            md="8"
          >
            <v-text-field
              v-model="emailin"
              label="Email"
              required
            />
          </v-col>
          <v-col
            class="mx-10"
            cols="12"
            md="8"
          >
            <v-text-field
              v-model="addressin"
              label="Address"
              required
            />
          </v-col>
          <v-col
            class="mx-10"
            cols="12"
            md="8"
          >
            <v-text-field
              v-model="phonenumberin"
              :counter="12"
              label="Phone Number"
              required
            />
          </v-col>
        </v-row>
      </v-container>

      <v-btn
        color="success"
        class="mr-4 ma-4 mx-10"
        @click="validate"
      >
        submit
      </v-btn>
      <v-btn
        color="error"
        class="mr-4 ma-4 mx-3"
        @click="reset"
      >
        Reset
      </v-btn>
    </v-card>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      namein: '',
      lastnamein: '',
      usernamein: '',
      passwordin: '',
      emailin: '',
      addressin: '',
      phonenumberin: ''
    }
  },
  computed: {
    ...mapGetters([
      'data'
    ])
  },
  methods: {
    validate () {
      const name = this.namein
      const lastnamein = this.lastnamein
      const usernamein = this.usernamein
      const passwordin = this.passwordin
      const emailin = this.emailin
      const addressin = this.addressin
      const phonenumberin = this.phonenumberin
      this.$store.commit('input', { name, lastnamein, usernamein, passwordin, emailin, addressin, phonenumberin })

      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>
