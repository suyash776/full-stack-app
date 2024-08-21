<template>
  <b-container fluid class="p-4 bg-light min-vh-100">
    <b-row class="justify-content-center mb-4">
      <b-col md="8" lg="8" xl="8">
        <b-card class="p-4 shadow-lg rounded">
          <h3 class="text-center mb-4 font-weight-bold">Register</h3>
          <b-form @submit.prevent="handleSubmit">
            <b-form-group label="Email" label-for="email">
              <b-form-input
                id="email"
                v-model="email"
                type="email"
                required
                placeholder="Enter your email"
                class="register-form form-control-lg"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Password" label-for="password">
              <b-form-input
                id="password"
                v-model="password"
                type="password"
                required
                placeholder="Enter your password"
                class="register-form form-control-lg"
              ></b-form-input>
            </b-form-group>

            <b-form-group>
              <b-button pill @click="register" type="submit" variant="primary" block class="register-button btn-lg">
                Register
              </b-button>
            </b-form-group>
            <b-form-group class="text-center">
              <!-- <b-link href="#"  class="text-muted ">Forgot password?</b-link> -->
            </b-form-group>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      resgistration_data: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      },
      error: null
    }
  },
  watch: {
    email (value) {
      console.log('email chaged', value)
    }
  },
  methods: {
    async register () {
      try {
        console.log('clicked register', this.email, this.password)
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data.token, response.data.user)
        this.$bvToast.toast(`Successfully registered ${this.email}`, {
          title: `Registration Success`,
          variant: 'success',
          solid: true,
          autoHideDelay: 5000
        })
        // console.log(this.$store)
        // this.$store.dispatch('setToken', response.data.token)
        // this.$store.dispatch('setUser', response.data.user)
      } catch (err) {
        // console.log(err)
        // this.error = err.response.data.error
        this.$bvToast.toast(err.response.data.error, {
          title: `Registration Error`,
          variant: 'danger',
          solid: true,
          autoHideDelay: 5000
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.error{
  color: red

}
.error-message {
  background-color: #f8d7da; /* Light red background */
  color: #721c24; /* Dark red text */
  border: 1px solid #f5c6cb; /* Light red border */
  border-radius: 4px; /* Rounded corners */
  padding: 15px; /* Space inside the div */
  margin: 10px 0; /* Space around the div */
  font-size: 16px; /* Readable text size */
  line-height: 1.5; /* Line height for readability */
}

a {
  color: #42b983;
}
.register-form {
  width: 80%;
  text-align: center;
  margin-left:10%;
}
.register-button{
  width: 80%;
  margin-left:10%

}
</style>
