<template>
  <div>
      <h1>Register</h1>
      <input type="email" v-model="email" name="email" placeholder="email" />
      <br>
      <input type="password" v-model="password" name="password" placeholder="password" />
      <br>
      <button
      @click="register">Register</button>

  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  watch: {
    email (value) {
      console.log('email chaged', value)
    }
  },
  methods: {
    async register () {
      console.log('clicked register', this.email, this.password)
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response)
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'changed email'
    }, 2000)
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

a {
  color: #42b983;
}
</style>
