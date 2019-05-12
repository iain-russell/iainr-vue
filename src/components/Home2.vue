<template>
  <section
    :style="{ backgroundColor: background, color: fontColor }"
    id="main-section"
  >
    <!-- Home -->
    <section class="hero is-fullheight" id="index" v-if="homeShowing">
      <div class="hero-body" id="home">
        <div class="container hero-body-container">
          <h1 class="main-text fade-in">
            > iainru
          </h1>
          <h1 class="main-text fade-in">
            My name is Iain Russell,
          </h1>
          <h1 class="main-text fade-in">
            I am a creator and full stack web developer,
          </h1>
          <h1 class="main-text fade-in">
            specializing in Javascript and Python.
          </h1>
        </div>
      </div>
      <a
        class="fas fa-long-arrow-alt-down fade-in"
        href="http://www.iainru.com/projects"
      ></a>
      <a @click="fadeToProjects()"
        ><icon name="long-arrow-alt-down" class="fa-long-arrow-alt-down"
      /></a>
    </section>
    <!-- /home -->

    <!-- /projects -->
    <section class="hero is-fullheight" v-if="projectsShowing" id="projects">
      <div class="hero-body">
        <div class="container hero-body-container fade-in">
          <h1 class="projects-header slide-in-r">SELECTED WORKS</h1>

          <h3 class="main-text each-move slide-in-r">
            <a class="underline" href="http://www.coinsushi.com">CoinSushi</a>
          </h3>

          <h3 class="main-text each-move slide-in-r" @click="openGuitarModal()">
            <a class="underline">Guitars</a>
          </h3>

          <h3
            class="main-text each-move slide-in-r"
            @click="openEurorackModal()"
          >
            <a class="underline">Eurorack</a>
          </h3>

          <h3
            class="main-text each-move slide-in-r"
            @click="openFurnitureModal()"
          >
            <a class="underline">Furniture</a>
          </h3>

          <!-- guitars -->

          <div
            class="modal modal-fx-normal"
            id="guitar-modal"
            :class="[{ 'is-active': guitarModal }]"
          >
            <div class="modal-background"></div>
            <div class="modal-content">
              <flickity
                ref="flickity"
                :options="flickityOptions"
                class="carousel"
              >
                <div class="carousel-cell">
                  <figure class="image is-square">
                    <img
                      data-flickity-lazyload="https://s3.eu-west-2.amazonaws.com/www.iainr.dev/static/images/41.jpg"
                    />
                  </figure>
                </div>

                <div class="carousel-cell">
                  <figure class="image is-square">
                    <img
                      data-flickity-lazyload="https://s3.eu-west-2.amazonaws.com/www.iainr.dev/static/images/43.jpg"
                    />
                  </figure>
                </div>
                <div class="carousel-cell">
                  <figure class="image is-square">
                    <img
                      data-flickity-lazyload="https://s3.eu-west-2.amazonaws.com/www.iainr.dev/static/images/42.jpg"
                    />
                  </figure>
                </div>
                <div class="carousel-cell">
                  <figure class="image is-square">
                    <img
                      data-flickity-lazyload="https://s3.eu-west-2.amazonaws.com/www.iainr.dev/static/images/44.jpg"
                    />
                  </figure>
                </div>
                <div class="carousel-cell ">
                  <figure class="image is-square">
                    <img
                      data-flickity-lazyload="https://s3.eu-west-2.amazonaws.com/www.iainr.dev/static/images/33.jpg"
                    />
                  </figure>
                </div>
              </flickity>
            </div>
            <button
              class="modal-close is-large"
              aria-label="close"
              @click="closeModal()"
            ></button>
          </div>

          <!-- end guitars -->

          <!-- eurorack  -->
          <div
            class="modal modal-fx-normal"
            id="eurorack-modal"
            :class="[{ 'is-active': eurorackModal }]"
          >
            <div class="modal-background"></div>
            <div class="modal-content">
              <flickity
                ref="flickity"
                :options="flickityOptions"
                class="carousel"
              >
                <div class="carousel-cell ">
                  <figure class="image is-square">
                    <img
                      data-flickity-lazyload="https://s3.eu-west-2.amazonaws.com/www.iainr.dev/static/images/12u1.jpg"
                    />
                  </figure>
                </div>
                <div class="carousel-cell">
                  <figure class="image is-square">
                    <img
                      data-flickity-lazyload="https://s3.eu-west-2.amazonaws.com/www.iainr.dev/static/images/6u1.jpg"
                    />
                  </figure>
                </div>
                <div class="carousel-cell">
                  <figure class="image  is-square">
                    <img
                      data-flickity-lazyload="https://s3.eu-west-2.amazonaws.com/www.iainr.dev/static/images/6u2.jpg"
                    />
                  </figure>
                </div>
                <div class="carousel-cell">
                  <figure class="image  is-square">
                    <img
                      data-flickity-lazyload="https://s3.eu-west-2.amazonaws.com/www.iainr.dev/static/images/12u2.jpg"
                    />
                  </figure>
                </div>
              </flickity>
            </div>
            <button
              class="modal-close is-large"
              aria-label="close"
              @click="closeModal()"
            ></button>
          </div>

          <!-- end eurorack -->

          <!-- furniture -->

          <div
            class="modal modal-fx-normal"
            id="furniture-modal"
            :class="[{ 'is-active': furnitureModal }]"
          >
            <div class="modal-background"></div>
            <div class="modal-content">
              <flickity
                ref="flickity"
                v-images-loaded="imgsLoaded"
                :options="flickityOptions"
                class="carousel"
              >
                <div class="carousel-cell">
                  <figure class="image is-square">
                    <img
                      data-flickity-lazyload="https://s3.eu-west-2.amazonaws.com/www.iainr.dev/static/images/Walnut1.jpg"
                    />
                  </figure>
                </div>
                <div class="carousel-cell">
                  <figure class="image  is-square">
                    <img
                      data-flickity-lazyload="https://s3.eu-west-2.amazonaws.com/www.iainr.dev/static/images/Walnut2.jpg"
                    />
                  </figure>
                </div>
              </flickity>
            </div>
            <button
              class="modal-close is-large"
              aria-label="close"
              @click="closeModal()"
            ></button>
          </div>

          <!-- end furniture -->
        </div>
      </div>
      <a @click="fadeToContact">
        <icon name="long-arrow-alt-down" class="fa-long-arrow-alt-down fade-in"
      /></a>
    </section>
    <!-- /projects -->

    <!-- contact -->
    <section
      class="hero is-fullheight
     "
      v-if="contactShowing"
      id="links"
    >
      <div class="hero-body">
        <div class="container hero-body-container fade-in">
          <h1 class="main-text slide-in-r">
            I am currently located in ...
          </h1>
          <h1 class="main-text slide-in-r">
            Send me a message and say hi!
          </h1>
          <br />
          <h3 class="links-mini fade-in">
            <a href="https://github.com/iain-russell">
              <i class="fab fa-github"></i>
              Github</a
            >
          </h3>
          <h3
            class="links-mini fade-in"
            href="https://www.linkedin.com/in/iainrussell1989/"
          >
            <a href="https://www.linkedin.com/in/iainrussell1989/">
              <i class="fab fa-linkedin-in"></i>
              LinkedIn</a
            >
          </h3>
          <h3 class="links-mini fade-in">
            <a href="mailto:info@iainru.com"
              ><i class="fas fa-envelope"></i> info@iainru.com</a
            >
          </h3>
          <h3 class="links-mini fade-in">
            <a href=""><i class="fas fa-file-alt"></i> cv.pdf</a>
          </h3>
        </div>
      </div>
      <a @click="fadeToHome">
        <icon
          name="long-arrow-alt-down"
          class="fa-long-arrow-alt-down contact-arrow fade-in"
        />
      </a>
    </section>
    <!-- /contact -->
  </section>
</template>

<script>
import { router } from "../main.js";
import Icon from "vue-awesome/components/Icon";
import Flickity from "vue-flickity";
import imagesLoaded from "vue-images-loaded";

export default {
  name: "Home",
  components: {
    Icon,
    Flickity
  },
  data() {
    return {
      background: "#0c0c0c",
      fontColor: "#fff",
      homeShowing: true,
      projectsShowing: false,
      contactShowing: false,
      guitarModal: false,
      eurorackModal: false,
      furnitureModal: false,
      flickityOptions: {
        lazyLoad: 1,
        prevNextButtons: true,
        cellAlign: "center",
        pageDots: false,
        contain: true,
        // resize: true,
        setGallerySize: false
      }
    };
  },
  directives: { imagesLoaded },
  created() {},
  mounted() {},

  methods: {
    fadeToHome() {
      this.homeShowing = true;
      this.projectsShowing = false;
      this.contactShowing = false;
      this.background = "#0c0c0c";
      this.fontColor = "#fff";
    },
    fadeToProjects() {
      this.homeShowing = false;
      this.projectsShowing = true;
      this.contactShowing = false;
      this.background = "#00a0a0";
      this.fontColor = "#fff";
    },
    fadeToContact() {
      this.homeShowing = false;
      this.projectsShowing = false;
      this.contactShowing = true;
      this.background = "#fff";
      this.fontColor = "#000";
    },
    openGuitarModal() {
      this.guitarModal = true;
    },
    openEurorackModal() {
      this.eurorackModal = true;
    },
    openFurnitureModal() {
      this.furnitureModal = true;
    },
    closeModal() {
      this.guitarModal = false;
      this.eurorackModal = false;
      this.furnitureModal = false;
    },
    next() {
      this.$refs.flickity.next();
    },
    previous() {
      this.$refs.flickity.previous();
    },
    imgsLoaded() {
      let flickityInstance = this.$refs.flickity;
      flickityInstance.reloadCells();
    },
    show() {
      // const viewer = this.$el.querySelector
    }
  }
};
</script>

<style lang="css" scoped>
#main-section {
  transition: background-color 1s linear;
  -moz-transition: background-color 1s linear;
  -o-transition: background-color 1s linear;
  -webkit-transition: background-color 1s linear;
}
</style>
