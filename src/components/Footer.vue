<template>
    <v-footer height="auto" :absolute="true" color="primary" app>
        <v-card
            flat
            tile
            color="primary"
            class="text-xs-center flex"
        >
            <v-card-text>
                <v-btn
                    v-for="icon in icons"
                    :key="icon.image"
                    class="mx-3 black--text"
                    icon
                    :href="icon.link"
                >
                <v-icon size="24px">{{ icon.image }}</v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text class="copyright">
                &copy; 2018 — Taran Gill
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
      return {
        icons: [
            {image: 'fab fa-github', link: 'https://github.com/taran-gill/GraphMe'}
        ]
      }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/base.scss';

.copyright {
    background-color: $primary;
}
</style>
