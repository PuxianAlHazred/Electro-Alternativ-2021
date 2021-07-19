<template>
  <section>
    <div class="lieux">

      <!-- Image -->

      <div class="container">
        <h3 class="title-page">LES LIEUX</h3>
        <ul>
          <li>
              <div class="lieu-img">
                  <img loading="lazy" src="images/lieux/Abattoirs.webp">
              </div>
              <Panthere  :typee="'lieu'" />
              <div class="lieu-content">
                  <div class="center">
                      <h2>Les abattoirs</h2>
                      <a href="#"  target="_blank">s'y rendre</a>
                  </div>
              </div>
          </li>
          <li>
              <div class="lieu-content">
                  <div class="center">
                      <h2>le Bikini</h2>
                      <a href="#"  target="_blank">s'y rendre</a>
                  </div>
              </div>
              <Panthere  :typee="'lieu'" />
              <div class="lieu-img">
                  <img loading="lazy" src="images/lieux/Bikini.webp">
              </div>
          </li>
          <li>
              <div class="lieu-img">
                  <img loading="lazy" src="images/lieux/Cinema-ABC.webp">
              </div>
              <Panthere  :typee="'lieu'" />
              <div class="lieu-content">
                  <div class="center">
                      <h2>Cinema ABC</h2>
                      <a href="#"  target="_blank">s'y rendre</a>
                  </div>
              </div>
          </li>
          <li>
              <div class="lieu-content">
                  <div class="center">
                      <h2>Halle de la machine</h2>
                      <a href="#"  target="_blank">s'y rendre</a>
                  </div>
              </div>
              <Panthere  :typee="'lieu'" />
              <div class="lieu-img">
                  <img loading="lazy" src="images/lieux/Halle-de-la-machine.webp">
              </div>
          </li>
          <li>
              <div class="lieu-img">
                  <img loading="lazy" src="images/lieux/Metronum.webp">
              </div>
              <Panthere  :typee="'lieu'" />
              <div class="lieu-content">
                  <div class="center">
                      <h2>Metronum</h2>
                      <a href="#"  target="_blank">s'y rendre</a>
                  </div>
              </div>
          </li>
          <li>
              <div class="lieu-content">
                  <div class="center">
                      <h2>Saint Pierre des cuisines</h2>
                      <a href="#"  target="_blank">s'y rendre</a>
                  </div>
              </div>
              <Panthere  :typee="'lieu'" />
              <div class="lieu-img">
                  <img loading="lazy" src="images/lieux/Saint-Pierre-des-cuisines.webp">
              </div>
          </li>

        </ul>
        <p class="more">& d'autres à venir ;)</p>
      </div>



    </div>
  </section>
</template>
<script>
  export default {
    data: () => ({
    }),
    computed: {

    },
    methods: {

    },
    mounted() {

    }
  }
</script>
