<template>
  <div class="home-fraction">
    <div class="home-fraction__teams-wrapper">
      <div class="home-fraction__teams-wrapper-bg">
        <img
          rel="preload"
          :src="fractionSlides[fractionSwiper?.activeIndex ?? 0].bg"
          alt=""
        />
      </div>
      <div class="faction-btn-wrapper">
        <div class="faction-btn-wrapper__divider"></div>
        <WowsBtn class="faction-btn" buttonType="link" :url="links.whitelist"
          >THE FACTIONS OF NYC</WowsBtn
        >
        <div class="faction-btn-wrapper__divider"></div>
      </div>
      <div class="home-fraction__teams">
        <div class="home-fraction__teams-item"
          v-for="(slide, slideIndex) of fractionSlides"
          :key="slideIndex"
          @click="fractionSwiper.slideTo(slideIndex)"
          >
          <div class="teams-avatar">
            <img class="glow" :src="slide.glow"/>
            <img class="logo" :src="slide.logo"/>
          </div>
        </div>
      </div>
      <div class="home-fraction__slider">
        <swiper
          class="home-fraction__swiper"
          :initialSlide="3"
          @swiper="onFractionSwiper"
        >
          <swiper-slide
            v-for="(slide, slideIndex) of fractionSlides"
            :key="slideIndex"
            class="home-fraction__slider-slide"
          >
            <div class="home-fraction__slider-item">
              <div class="home-fraction__slider-item-character">
                <img :src="slide.character" alt="" />
              </div>

              <div class="home-fraction__slider-item-text">
                <img :src="slide.text" alt="" />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="home-fraction__btn">
        <WowsBtn class="whitelist-btn" buttonType="link" :url="links.whitelist">
          JOIN WHITELIST
        </WowsBtn>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import WowsBtn from "@/components/WowsBtn.vue";
import { mapGetters } from "vuex";

import catLogo from "@/assets/home/fraction/cats.png";
import catGlow from "@/assets/home/fraction/cats-glow.png";
import catChar from "@/assets/home/fraction/cat-char.png";
import catText from "@/assets/home/fraction/cat-text.png";
import catBg from "@/assets/home/fraction/cat-bg.png";

import ratLogo from "@/assets/home/fraction/rats.png";
import ratGlow from "@/assets/home/fraction/rats-glow.png";
import ratChar from "@/assets/home/fraction/rat-char.png";
import ratText from "@/assets/home/fraction/rat-text.png";
import ratBg from "@/assets/home/fraction/rat-bg.png";

import boiLogo from "@/assets/home/fraction/bois.png";
import boiGlow from "@/assets/home/fraction/bois-glow.png";
import boiChar from "@/assets/home/fraction/boi-char.png";
import boiText from "@/assets/home/fraction/boi-text.png";
import boiBg from "@/assets/home/fraction/boi-bg.png";

import wolveLogo from "@/assets/home/fraction/wolves.png";
import wolveGlow from "@/assets/home/fraction/wolves-glow.png";
import wolveChar from "@/assets/home/fraction/wolve-char.png";
import wolveText from "@/assets/home/fraction/wolve-text.png";
import wolveBg from "@/assets/home/fraction/wolve-bg.png";

export default {
  components: {
    Swiper,
    SwiperSlide,
    WowsBtn,
  },
  data: () => ({
    fractionSwiper: null,
    fractionSlides: [
      {
        character: catChar,
        text: catText,
        bg: catBg,
        logo: catLogo,
        glow: catGlow
      },
      {
        character: wolveChar,
        text: wolveText,
        bg: wolveBg,
        logo: wolveLogo,
        glow: wolveGlow
      },
      {
        character: boiChar,
        text: boiText,
        bg: boiBg,
        logo: boiLogo,
        glow: boiGlow
      },
      {
        character: ratChar,
        text: ratText,
        bg: ratBg,
        logo: ratLogo,
        glow: ratGlow
      },
    ],
    
  }),
  computed: {
    ...mapGetters(["links"]),
  },
  methods: {
    onFractionSwiper(swiper) {
      this.fractionSwiper = swiper;
    },
  },
  mounted() {
    console.log(this.fractionSlides[this.fractionSwiper?.activeIndex].bg);
  },
};
</script>

<style lang="scss">
.home-fraction {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: -400px;
    left: 0;
    right: 0;
    height: 400px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 85%
    );

    z-index: 2;

    @media screen and (max-width: 940px) {
      top: -250px;
      height: 250px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 400px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 15%,
      rgba(0, 0, 0, 0) 100%
    );

    z-index: 2;

    @media screen and (max-width: 940px) {
      height: 250px;
    }
  }

  .faction-btn {

    white-space: nowrap;

    @media screen and (max-width: 500px) {
      white-space: normal;
    }

    button {
      width: auto;
      padding: 5px 50px 10px 50px;
    }

    &-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 10px;

      width: 100%;
      padding: 0 20px;
      position: absolute;
      top: -30px;
      left: 50%;
      z-index: 3;

      transform: translateX(-50%);

      @media screen and (max-width: 500px) {
        top: -22px;
        flex-direction: column;
      }

      &__divider {
        width: 100%;
        height: 6px;

        z-index: 2;

        background: #ed8f07;

        box-shadow: 0px 0px 28px 7px rgba(237, 187, 107, 0.46);

        @media screen and (max-width: 500px) {
          display: none;
        }
      }
    }
  }

  &__teams-wrapper {
    // background: url("@/assets/home/fraction/fraction_bg.png") no-repeat;
    background-size: cover;
    padding: 80px 25px 0 25px;

    position: relative;

    &-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;

        object-fit: cover;
      }
    }

    @media screen and (max-width: 700px) {
      padding: 80px 25px 80px 25px;
    }
  }

  &__teams {
    width: 100%;
    max-width: 1280px;
    padding: 0px 90px;
    margin: 0px auto;

    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    justify-content: center;
    grid-gap: 20px;

    @media (max-width: 700px) {
      grid-template-columns: repeat(2, minmax(100px, 1fr));
      justify-content: center;

      grid-gap: 10px;
    }

    &-item {
      .teams-avatar {
        width: 100%;
        position: relative;
        .logo {
          position: absolute;
          left: 0;
        }
        .glow {
          position: absolute;
          left: 0;
          display: none;
        }
        &:hover {
          .glow {
            display: block;
          }
        }
      }
    }
  }

  &__slider {
    /* margin-bottom: -6%; */
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;

    .swiper-slide {
      &:nth-child(2) {
        .home-fraction__slider-item {
          margin-top: 6%;
        }
      }
    }
    &-item {
      width: 100%;
      margin-top: 72px;

      display: flex;
      align-items: flex-start;

      @media screen and (max-width: 700px) {
        margin-top: 0px;
        flex-direction: column;
        gap: 0px;
      }

      &-character {
        width: 50%;

        @media screen and (max-width: 700px) {
          width: 100%;
          height: 400px;
          order: 2;
        }

        img {
          width: 100%;
          height: 100%;

          object-fit: contain;
        }
      }

      &-text {
        width: 40%;

        margin-top: 8%;

        @media screen and (max-width: 700px) {
          width: 100%;
          height: 250px;
          /* margin-top: 50px; */

          order: 1;
        }

        img {
          width: 100%;
          height: 100%;

          object-fit: contain;
        }
      }
    }
  }
  &__swiper {
      transform: translateY(100px);
  }
  &__btn {
    position: absolute;
    bottom: 10%;
    right: 15%;

    @media screen and (min-width: 1450px) {
      bottom: 10%;
      right: 15%;
    }

    @media screen and (min-width: 1600px) {
      bottom: 10%;
      right: 20%;
    }

    @media screen and (min-width: 1800px) {
      bottom: 15%;
      right: 33%;
    }

    @media screen and (min-width: 2000px) {
      bottom: 10%;
      right: 20%;
    }

    @media screen and (min-width: 2200px) {
      bottom: 10%;
      right: 25%;
    }

    @media screen and (min-width: 2400px) {
      bottom: 10%;
      right: 30%;
    }

    @media screen and (max-width: 1150px) {
      bottom: 10%;
      right: 17%;
    }

    @media screen and (max-width: 990px) {
      right: 16%;
      bottom: 10%;
    }

    @media screen and (max-width: 700px) {
      position: static;
      /* margin-top: 70px; */
    }

    .wows-btn {
      padding: 12px 40px !important;
      @media (max-width: 1150px) {

        font-size: calc(22px + 2 * ((100vw - 320px) / 900));
      }
    }
  }
}
</style>