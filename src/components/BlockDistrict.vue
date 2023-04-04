<template>
  <div class="home-fraction">
    <div class="home-fraction__teams-wrapper wrapper__districts">
      <div class="home-fraction__teams-wrapper-bg">
        <img
          rel="preload"
          :src="districtSlides[districtSwiper?.activeIndex ?? 0].bg"
          alt=""
        />
      </div>
      <div class="faction-btn-wrapper">
        <div class="faction-btn-wrapper__divider"></div>
        <WowsBtn
          class="faction-btn"
          buttonType="link"
          url="javascript:void(0);"
          target="_self"
          >THE FIRST'S DISTRICT FOR SALE</WowsBtn
        >
        <div class="faction-btn-wrapper__divider"></div>
      </div>
      <div class="home-fraction__teams mint-district__teams">
        <div
          class="home-fraction__teams-item"
          v-for="(slide, slideIndex) of districtSlides"
          :key="slideIndex"
          @click="onClickSlider(slideIndex)"
        >
          <img class="img-glow" :src="slide.glow" alt="" />
          <img class="img-logo" :src="slide.logo" alt="" />
        </div>
      </div>
      <div class="home-fraction__slider">
        <swiper
          class="home-fraction__swiper"
          :initialSlide="0"
          @swiper="ondistrictSwiper"
        >
          <swiper-slide
            v-for="(slide, slideIndex) of districtSlides"
            :key="slideIndex"
            class="home-fraction__slider-slide"
          >
            <div
              v-show="isDistrict"
              class="home-fraction__slider-item-district"
            >
              <div class="district__slider-text" v-html="slide.text" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div v-if="isDistrict" class="home-fraction__btn-district">
        <WowsBtn class="whitelist-btn" buttonType="link" :url="links.whitelist">
          JOIN WHITELIST
        </WowsBtn>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import WowsBtn from '@/components/WowsBtn.vue';
import { mapGetters } from 'vuex';

import startBg from '@/assets/home/district/district-start-bg.png';

import financialLogo from '@/assets/home/district/financial-wolves.png';
import financialGlow from '@/assets/home/district/wolves-glow.png';
import financialBg from '@/assets/home/district/financial-wolves-bg.png';

import flatironLogo from '@/assets/home/district/flatiron-bois.png';
import flatironGlow from '@/assets/home/district/bois-glow.png';
import flatironBg from '@/assets/home/district/flatiron-bois-bg.png';

import littleitalyLogo from '@/assets/home/district/littleitaly-cats.png';
import littleitalyGlow from '@/assets/home/district/littleitaly-cats-glow.png';
import littleitaliBg from '@/assets/home/district/littleitaly-cats-bg.png';

import lowereastLogo from '@/assets/home/district/lowereast-rats.png';
import lowereastGlow from '@/assets/home/district/rats-glow.png';
import lowereastBg from '@/assets/home/district/lowereast-rats-bg.png';

export default {
  components: {
    Swiper,
    SwiperSlide,
    WowsBtn,
  },
  data: () => ({
    isDistrict: false,
    districtSwiper: null,
    startBg,
    districtSlides: [
      {
        text: `
          <div class="slider-district-text-area">
            <div>
            <div>
            LITTLE ITALY & CO. SMALL IN SIZE,
            </div>
            <div>
            BIG IN FLAVOUR.
            </div>
            </div>
            <div>
            <div>
            MAFIA DISTRICTS & HOT BEDS OF
            </div>
            <div>
            SLEAZE AND CORRUPT DEALS. IF THAT'S
            </div>
            <div>
            YOUR THING, THEN WELCOME HOME.
            </div>
            </div>
          </div>
          `,
        bg: startBg,
        logo: littleitalyLogo,
        glow: littleitalyGlow,
      },
      {
        text: `
          <div class="slider-district-text-area">
            <div>
            <div>
            FINANCIAL DISTRICT HAS FALLEN ON
            </div>
            <div>
            HARD TIMES. ONCE PAVED IN GOLD, NOW
            </div>
            <div>
            PAVED IN RUBBISH.
            </div>
            </div>
            <div>
            <div>
            BUT YOU CANT KEEP A BAD WOLF DOWN,
            </div>
            <div>
            TIME TO NEGOTIATE A DEAL
            </div>
            </div>
          </div>
          `,
        bg: financialBg,
        logo: financialLogo,
        glow: financialGlow
      },
      {
        text: `
          <div class="slider-district-text-area">
            <div>
            <div>
            FLAT IRON & GRAMERCY, ONCE
            </div>
            <div>
            RESPECTABLE DISTRICTS, NOW HAVE
            </div>
            <div>
            FALLEN PREY TO A BLIGHT OF CRIME &
            </div>
            <div>
            CORRUPTION.
            </div>
            </div>
            <div>
            <div>
            FEAR NOT, THERES A FEW GOOD BOIS
            </div>
            <div>
            LEFT READY FOR A FIGHT.
            </div>
            </div>
          </div>
          `,
        bg: flatironBg,
        logo: flatironLogo,
        glow: flatironGlow
      },
      {
        text: `
          <div class="slider-district-text-area">
            <div>
            <div>
            LOWER EAST SIDE. HOW LOW CAN YOU GO?
            </div>
            </div>
            <div>
            <div>
            WELL THE PLOTS MAY BE BE CHEAP...
            </div>
            <div>
            BUT THERES A LOT OF BAD THINGS YOU
            </div>
            <div>
            CAN DO IN THE LOWER EAST SIDE AND ALL
            </div>
            <div>
            OF IT MAKES MONEY...
            </div>
            </div>
          </div>
          `,
        bg: lowereastBg,
        logo: lowereastLogo,
        glow: lowereastGlow
      },
    ],
  }),
  computed: {
    ...mapGetters(['links']),
  },
  methods: {
    ondistrictSwiper(swiper) {
      this.districtSwiper = swiper;
    },
    onClickSlider(slideIndex) {
      this.districtSwiper.slideTo(slideIndex);
      this.isDistrict = true;
      this.districtSlides[0].bg = littleitaliBg;
    },
  },
};
</script>

<style lang="scss">
.mint-district__teams {
  max-width: 1280px !important;
}

.wrapper__districts {
  min-height: 900px !important;

  @media screen and (min-width: 1700px) {
    min-height: 1000px !important;
  }

  @media screen and (min-width: 1800px) {
    min-height: 1100px !important;
  }

  @media screen and (min-width: 1800px) {
    min-height: 1200px !important;
  }
}

.district__slider-text {
  background: rgba(0, 0, 0, 0.5);
  padding: 30px;
}

.slider-district-text-area {
  & > * {
    font-family: 'acumin-pro-condensed', sans-serif;
    font-weight: bold;
    font-style: italic;
    text-align: left;
    margin-bottom: 15px;
    line-height: calc(30px + 20 * (100vw - 769px) / 2048);
    font-size: calc(30px + 10 * (100vw - 769px) / 2048);
    color: #fff;
    text-transform: uppercase;
  }
}

.home-fraction {
  position: relative;

  &::after {
    content: '';
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
    content: '';
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
      padding: 7px 40px 7px 40px;
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

        box-shadow: 0px 0px 28px 5px rgba(237, 187, 107, 0.46);

        @media screen and (max-width: 500px) {
          display: none;
        }
      }
    }
  }

  &__teams-wrapper {
    background-size: cover;
    padding: 40px 25px 0 25px;

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
  }

  &__teams {
    width: 100%;
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
      width: 100%;
      width: 300px;
      height: 300px;

      position: relative;
      z-index: 5;

      cursor: pointer;

      img {
        width: 100%;
        height: 100%;

        object-fit: contain;
      }
      .img-logo {
        position: absolute;
        top: 0;;
        left: 0;
        right: 0;
      }
      .img-glow {
        position: absolute;
        top: 0;;
        left: 0;
        right: 0;
        bottom: 0;
        display: none;
      }
      &:hover {
        .img-glow {
          display: block;
        }
      }
    }
  }

  &__slider {
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

    &-item-district {
      width: 50%;
      padding-top: 70px;

      display: flex;
      justify-content: flex-start;

      @media screen and (max-width: 700px) {
        flex-direction: column;
        gap: 0px;
      }

      &-character {
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
        @media screen and (max-width: 700px) {
          width: 100%;
          height: 250px;
          margin-top: 50px;

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


}
</style>
