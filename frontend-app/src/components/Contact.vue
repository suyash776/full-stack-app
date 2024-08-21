<template>
  <b-container fluid class="p-4 bg-light min-vh-100">
    <b-row class="justify-content-center mb-4">
      <b-col md="10" lg="8">
        <b-card class="shadow-lg rounded">
          <b-card-body>
            <h1 class="text-center mb-4 font-weight-bold">Contact Us</h1>

            <b-row>
              <!-- Contact Form -->
              <b-col md="6">
                <b-form @submit.prevent="handleSubmit">
                  <b-form-group label="Name" label-for="name">
                    <b-form-input
                      id="name"
                      v-model="form.name"
                      type="text"
                      required
                      placeholder="Enter your name"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group label="Email" label-for="email">
                    <b-form-input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="Enter your email"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group label="Message" label-for="message">
                    <b-form-textarea
                      id="message"
                      v-model="form.message"
                      required
                      placeholder="Enter your message"
                      rows="4"
                    ></b-form-textarea>
                  </b-form-group>

                  <b-form-group>
                    <b-button type="submit" variant="primary" block class="btn-lg">
                      Send Message
                    </b-button>
                  </b-form-group>
                </b-form>
              </b-col>

              <!-- Contact Information -->
              <b-col md="6">
                <div class="contact-info">
                  <h4 class="font-weight-bold">Contact Information</h4>
                  <p><b>Address:</b> 1234 Fake Street, Minneapolis, MN</p>
                  <p><b>Phone:</b> (111) 123-4567</p>
                  <p><b>Email:</b> suyash776@gmail.com</p>
                  <b-img src="https://via.placeholder.com/300x200" alt="Map location" fluid class="mt-3" />
                </div>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      // alert(`Name: ${this.form.name}\nEmail: ${this.form.email}\nMessage: ${this.form.message}`)

      this.$bvToast.toast(`Name: ${this.form.name}\nEmail: ${this.form.email}\nMessage: ${this.form.message}`, {
        title: `Contact message recieved`,
        variant: 'primary',
        solid: true,
        autoHideDelay: 50000
      })
    }
  }
}
</script>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

.bg-light {
  background-color: #f8f9fa !important;
}

.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.font-weight-bold {
  font-weight: 700;
}

.contact-info p {
  margin-bottom: 0.5rem;
}
</style>
