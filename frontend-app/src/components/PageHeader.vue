<template>

<b-navbar fixed="top" type="dark" variant="dark">
  <b-container>
      <b-navbar-brand to="/">Music App</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" exact>Home</b-nav-item>
          <b-nav-item to="/songs">Songs</b-nav-item>
          <b-nav-item to="/contact">Contact</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav right class="ml-auto">
          <b-nav-item v-if="!$store.state.isUserLoggedIn" to="/login">Login</b-nav-item>
          <b-nav-item v-if="!$store.state.isUserLoggedIn" to="/register">Register</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item v-if="$store.state.isUserLoggedIn" @click="logout">Logout</b-nav-item>

        </b-navbar-nav>

      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>

export default {
  name: 'PageHeader',
  methods: {
    nacigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', '')
      this.$store.dispatch('setUser', {})
    }
  }
}
</script>

<style>
.nav-display{
  margin-top:10%
}
.b-navbar {
  padding: 0.5rem 1rem;
}
</style>
