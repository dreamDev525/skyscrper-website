<template>
  <footer class="footer-wrapper">
    <div class="footer">
      <router-link to="/" class="footer-logo">
        <img src="@/assets/logo.png" alt="" />
      </router-link>
      <!-- SOCIALS -->
      <div class="footer-socials">
        <a target="_blank" :href="links.discord" class="footer-socials-link">
          <img src="@/assets/social/discord.svg" alt="" />
        </a>
        <a target="_blank" :href="links.twitter" class="footer-socials-link">
          <img src="@/assets/social/twitter.svg" alt="" />
        </a>
      </div>
      <div class="footer-bottom-block">
        <img src="@/assets/asseen/treasure.png" class="footer-partner-logo" />
        <div class="footer-disclaimer">
          AS A USER OF THE SKYSCRAPER GAME & $TURF TOKEN YOU BY DEFAULT ARE IN
          AGREEMENT THAT YOU DO SO AT YOUR OWN RISK.<br />
          ALL LIABILITY RESIDES WITH THE USER. RISK ONLY WHAT YOU ARE WILLING TO
          LOSE.<br />
          COPYRIGHT ALL RIGHTS RESERVED - INTO THE TANNHAUSER GATE LLC 2022
        </div>
        <img src="@/assets/home/arbitrum.png" class="footer-partner-logo" />
      </div>
      <div class="footer-terms">
        <router-link to="/privacy-policy"
          >privacy & terms & conditions
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["links"]),
  },
};
</script>

<style lang="scss">
.footer-wrapper {
  background: #100907;
}

.footer-bottom-block {
  display: flex;
  @media (max-width: 800px) {
    margin-top: 30px;
    margin-bottom: 30px;
    flex-flow: column;
  }
}

.footer-partner-logo {
  display: block;
  max-width: 230px;
  max-height: 53px;
  width: auto;
  height: auto;
  margin: auto;
}

.footer {
  max-width: 1280px;
  margin: auto auto;

  padding: 50px 0;
  
  position: relative;
  z-index: 2;

  &-logo {
    width: 200px;
    height: 200px;
    display: block;
    margin: 0 auto;

    // @media (max-width: 1200px) {
    //   width: 100px;
    //   height: 100px;
    // }

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &-socials {
    display: flex;
    margin-top: 50px;
    justify-content: center;

    &-link {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid white;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 10px;

      & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  &-disclaimer {
    font-size: 1em;
    text-transform: uppercase;
    font-family: vincente, sans-serif;
    color: rgb(131, 102, 79);
    margin: 3vw;
    @media (max-width: 700px) {
      margin: 5vw;
    }
  }

  &-terms {
    text-transform: uppercase;
    font-size: 1em;

    a {
      color: #fff;
    }
  }
}
</style>
