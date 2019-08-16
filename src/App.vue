<template>
  <div id="app">

    <div id="vueContainer">

        <image-swap></image-swap>

    </div>
    
  </div>
</template>

<script>

import ImageSwap from "./components/ImageSwap.vue";

export default {
  components: { ImageSwap },
  name: 'PtopAds',
  props: ['title'],
  data() {
    return {
      someData: false
    };
  },
  methods: {
    onClick: function() {
      this.$gtm.trackEvent({
        event: interaction, // Event type [default = 'interaction'] (Optional)
        category: 'Calculator',
        action: 'click',
        label: 'PtoPAds click event',
        value: 5000,
        noninteraction: false // Optional
      });
    }
    
  },
  mounted() {
    this.$gtm.trackView('MyScreenName', 'currentpath');
  }
}
</script>
