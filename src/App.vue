<template>
  <v-app>
    <Header/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Graph from './components/Graph';
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Graph,
    Header,
    Footer
  },
  data () {
    return {
    }
  }
}
</script>
