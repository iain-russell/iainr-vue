<template>
  <section
    :style="{ backgroundColor: background, color: fontColor }"
    id="main-section"
  >
    <!-- Home -->
    <section class="hero is-fullheight" id="index" v-if="homeShowing">
      <div class="hero-body" id="home">
        <div class="container hero-body-container">
          <h1 class="main-text fade-in slide-in-r-main">
            > iainr.dev
          </h1>
          <h1 class="main-text fade-in slide-in-r-main">
            My name is Iain Russell,
          </h1>
          <h1 class="main-text fade-in slide-in-r-main">
            I am a creator and full stack web developer,
          </h1>
          <h1 class="main-text fade-in slide-in-r-main">
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

          <h3
            class="main-text each-move"
            :class="[{ 'slide-in-r': !projectsIsLoaded }]"
          >
            <a class="underline" href="http://www.coinsushi.com">CoinSushi</a>
          </h3>

          <h3
            class="main-text each-move"
            :class="[{ 'slide-in-r': !projectsIsLoaded }]"
            @click="openGuitarModal()"
          >
            <a class="underline">Guitars</a>
          </h3>

          <h3
            class="main-text each-move"
            :class="[{ 'slide-in-r': !projectsIsLoaded }]"
            @click="openEurorackModal()"
          >
            <a class="underline">Eurorack</a>
          </h3>

          <h3
            class="main-text each-move"
            :class="[{ 'slide-in-r': !projectsIsLoaded }]"
            @click="openFurnitureModal()"
          >
            <a class="underline">Furniture</a>
          </h3>

          <!-- guitars -->
          <transition name="fade">
            <div
              class="modal modal-fx-normal"
              id="guitar-modal"
              :class="[{ 'is-active': guitarModal }]"
              v-if="guitarModal"
            >
              <div class="modal-background"></div>
              <div class="modal-content">
                <carousel :perPage="1" :paginationEnabled="true">
                  <slide v-for="image in images.guitars" :key="image.src">
                    <div class="slide-cell">
                      <figure class="image is-square">
                        <img :src="image.src" />
                      </figure>
                    </div>
                  </slide>
                </carousel>
              </div>
              <button
                class="modal-close is-large"
                aria-label="close"
                @click="closeModal()"
              ></button>
            </div>
          </transition>

          <!-- end guitars -->

          <!-- eurorack  -->
          <transition name="fade">
            <div
              class="modal modal-fx-normal"
              id="eurorack-modal"
              :class="[{ 'is-active': eurorackModal }]"
              v-if="eurorackModal"
            >
              <div class="modal-background"></div>
              <div class="modal-content">
                <carousel :perPage="1" :paginationEnabled="true">
                  <slide v-for="image in images.eurorack" :key="image.src">
                    <div class="slide-cell">
                      <figure class="image is-square">
                        <img :src="image.src" />
                      </figure>
                    </div>
                  </slide>
                </carousel>
              </div>
              <button
                class="modal-close is-large"
                aria-label="close"
                @click="closeModal()"
              ></button>
            </div>
          </transition>

          <!-- end eurorack -->

          <!-- furniture -->
          <transition name="fade">
            <div
              class="modal modal-fx-normal"
              id="furniture-modal"
              :class="[{ 'is-active': furnitureModal }]"
              v-if="furnitureModal"
            >
              <div class="modal-background"></div>
              <div class="modal-content">
                <carousel :perPage="1" :paginationEnabled="true">
                  <slide v-for="image in images.furniture" :key="image.src">
                    <div class="slide-cell">
                      <figure class="image is-square">
                        <img :src="image.src" />
                      </figure>
                    </div>
                  </slide>
                </carousel>
              </div>
              <button
                class="modal-close is-large"
                aria-label="close"
                @click="closeModal()"
              ></button>
            </div>
          </transition>

          <!-- end furniture -->
        </div>
      </div>
      <a @click="fadeToContact">
        <icon name="long-arrow-alt-down" class="fa-long-arrow-alt-down fade-in"
      /></a>
    </section>
    <!-- /projects -->

    <!-- contact -->
    <section class="hero is-fullheight" v-if="contactShowing" id="links">
      <div class="hero-body">
        <div class="container hero-body-container fade-in">
          <h1 class="main-text slide-in-r">
            I am currently located in ...
          </h1>
          <h1 class="main-text slide-in-r">
            Send me a message and say hi!
          </h1>
          <br />
          <h3 class="links-mini fade-in slide-in-r-main">
            <a href="https://github.com/iain-russell">
              <icon name="brands/github" class="fa-icon-contact"></icon>
              Github</a
            >
          </h3>
          <h3
            class="links-mini fade-in slide-in-r-main"
            href="https://www.linkedin.com/in/iainrussell1989/"
          >
            <a href="https://www.linkedin.com/in/iainrussell1989/">
              <icon name="brands/linkedin-in" class="fa-icon-contact"></icon>
              LinkedIn
            </a>
          </h3>
          <h3 class="links-mini fade-in slide-in-r-main">
            <a href="mailto:info@iainru.com">
              <icon
                name="envelope"
                class="fa-icon-contact"
                id="fa-icon-envelope"
              ></icon>
              info@iainr.dev
            </a>
          </h3>
          <h3 class="links-mini fade-in slide-in-r-main">
            <a
              ><icon
                name="file-alt"
                class="fa-icon-contact"
                id="fa-icon-file-alt"
              ></icon>
              cv.pdf</a
            >
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
import Icon from "vue-awesome/components/Icon";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Home",
  components: {
    Icon,
    Carousel,
    Slide
  },
  data() {
    return {
      background: "#fff",
      fontColor: "#000",
      homeShowing: true,
      projectsShowing: false,
      contactShowing: false,
      guitarModal: false,
      eurorackModal: false,
      furnitureModal: false,
      didScroll: false,
      projectsIsLoaded: true,
      images: {
        guitars: [
          {
            src:
              "https://s3.eu-west-2.amazonaws.com/www.iainr.dev/static/images/41.jpg"
          },
          {
            src:
              "https://s3.eu-west-2.amazonaws.com/www.iainr.dev/static/images/43.jpg"
          },
          {
            src:
              "https://s3.eu-west-2.amazonaws.com/www.iainr.dev/static/images/42.jpg"
          },
          {
            src:
              "https://s3.eu-west-2.amazonaws.com/www.iainr.dev/static/images/44.jpg"
          },
          {
            src:
              "https://s3.eu-west-2.amazonaws.com/www.iainr.dev/static/images/33.jpg"
          }
        ],
        eurorack: [
          {
            src:
              "https://s3.eu-west-2.amazonaws.com/www.iainr.dev/static/images/12u1.jpg"
          },
          {
            src:
              "https://s3.eu-west-2.amazonaws.com/www.iainr.dev/static/images/6u1.jpg"
          },
          {
            src:
              "https://s3.eu-west-2.amazonaws.com/www.iainr.dev/static/images/6u2.jpg"
          }
        ],
        furniture: [
          {
            src:
              "https://s3.eu-west-2.amazonaws.com/www.iainr.dev/static/images/Walnut1.jpg"
          },
          {
            src:
              "https://s3.eu-west-2.amazonaws.com/www.iainr.dev/static/images/Walnut2.jpg"
          }
        ]
      }
    };
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.fadeToHome();
    }, 10);
    window.addEventListener("keyup", e => {
      if (e.keyCode === 27) {
        this.closeModal();
      } else if (this.homeShowing && (e.keyCode === 37 || e.keyCode === 38)) {
        this.fadeToContact();
      } else if (this.homeShowing && (e.keyCode === 39 || e.keyCode === 40)) {
        this.fadeToProjects();
      } else if (
        this.projectsShowing &&
        (e.keyCode === 37 || e.keyCode === 38)
      ) {
        this.fadeToHome();
      } else if (
        this.projectsShowing &&
        (e.keyCode === 39 || e.keyCode === 40)
      ) {
        this.fadeToContact();
      } else if (
        this.contactShowing &&
        (e.keyCode === 37 || e.keyCode === 38)
      ) {
        this.fadeToProjects();
      } else if (
        this.contactShowing &&
        (e.keyCode === 39 || e.keyCode === 40)
      ) {
        this.fadeToHome();
      }
    });
    window.addEventListener("wheel", e => {
      if (!this.didScroll) {
        if (this.homeShowing && (e.deltaY < -50 || e.deltaX > 50)) {
          this.didScroll = true;
          this.fadeToContact();
        } else if (this.homeShowing && (e.deltaY > 50 || e.deltaX < -50)) {
          this.didScroll = true;
          this.fadeToProjects();
        } else if (this.projectsShowing && (e.deltaY < -50 || e.deltaX > 50)) {
          this.didScroll = true;
          this.fadeToHome();
        } else if (this.projectsShowing && (e.deltaY > 50 || e.deltaX < -50)) {
          this.didScroll = true;
          this.fadeToContact();
        } else if (this.contactShowing && (e.deltaY < -50 || e.deltaX > 50)) {
          this.didScroll = true;
          this.fadeToProjects();
        } else if (this.contactShowing && (e.deltaY > 50 || e.deltaX < -50)) {
          this.didScroll = true;
          this.fadeToHome();
        }
      }
    });
    window.addEventListener("click", e => {
      if (e.target.className === "modal-background") {
        this.closeModal();
      }
    });
  },
  watch: {
    didScroll() {
      setTimeout(() => {
        this.didScroll = false;
      }, 1500);
    },
    projectsIsLoaded() {
      if (this.projectsIsLoaded === false) {
        setTimeout(() => {
          this.projectsIsLoaded = true;
        }, 1000);
      }
    }
  },
  methods: {
    fadeToHome() {
      this.homeShowing = true;
      this.projectsShowing = false;
      this.contactShowing = false;
      this.background = "#0c0c0c";
      this.fontColor = "#fff";
      this.projectsIsLoaded = true;
    },
    fadeToProjects() {
      this.homeShowing = false;
      this.projectsShowing = true;
      this.contactShowing = false;
      this.background = "#00a0a0";
      this.fontColor = "#fff";
      this.projectsIsLoaded = false;
    },
    fadeToContact() {
      this.homeShowing = false;
      this.projectsShowing = false;
      this.contactShowing = true;
      this.background = "#fff";
      this.fontColor = "#000";
      this.projectsIsLoaded = true;
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
    }
  }
};
</script>

<style lang="css" scoped>
#main-section {
  transition: background-color 0.8s linear;
  -moz-transition: background-color 0.8s linear;
  -o-transition: background-color 0.8s linear;
  -webkit-transition: background-color 0.8s linear;
}
</style>
