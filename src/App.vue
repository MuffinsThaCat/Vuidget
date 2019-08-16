<template>
  <div id="app">
    <!-- access root props via $root -->

<div id="langoneContainer">


    <image-swap></image-swap>
    <div>
      <a href="https://certapro.com/" target="_blank" rel="noopener">
      <img id="logo-certapro" src="https://ptopads.com/wp-content/themes/oi-mastertheme-lean/assets/images/svg/certapro_logo.svg" alt="CertaPro logo" align="center" class="float-center" />
      </a>
    </div>
    <div>
        <a href="https://floorcoveringsinternational.com/" target="_blank" rel="noopener">
            <img id="logo-fci" src="https://ptopads.com/wp-content/uploads/2019/05/fci-logo.png" alt="Floor Coverings International logo" align="center" class="float-center" />
        </a>
    </div>
    <div>
        <a href="https://www.adt.com/" target="_blank" rel="noopener">
            <img id="logo-adt" src="https://ptopads.com/wp-content/themes/oi-mastertheme-lean/assets/images/svg/adt-new-logo.svg" alt="ADT logo" align="center" class="float-center" />
        </a>
    </div>
</div>
    <router-view />
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
