<template>
    <v-toolbar color="primary">
      <v-spacer></v-spacer>
      <v-toolbar-title>GraphMe</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn flat>
        <router-link to="/graph" class="header-link">Graphs</router-link>
      </v-btn> -->
    </v-toolbar>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
@import '../styles/base.scss';

.header-link {
  color: $secondary
}

</style>