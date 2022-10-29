<template>
  <h1 class="main-header">Blume</h1>
  <div class="wrapper">
    <div class="filters">
      <div class="empty filter"></div>
      <div class="categories-title filter" @click="rotate()">
        <span class="dropdown-title lighter">Categories</span>
        <span class="dropdown-arrow" :class="[isHidden ? 'down' : 'up']"></span>
      </div>
      <Transition>
        <div class="categories-list filter" v-if="!isHidden">
          <label v-for="(t, index) in types" class="container">
            <input type="checkbox" :key="t.name" :id="`cb${index}`" :value="t.name.toLowerCase().split(' ').join('')"
              v-model="checkedTypes" @click="update" />
            <span class="checkmark"></span>
            {{ t.name }}
          </label>
        </div>
      </Transition>
      <div class="price-range filter">
        <span class="price-title lighter">Price Range</span>
        <div class="price-slider">
          <input data-role="doubleslider" class="ultra-thin cycle-marker" id="slider" data-min="1" data-max="10"
            data-hint-position-min="bottom" data-hint-position-max="bottom" data-hint-always="true"
            data-cls-complete="bg-dark" data-cls-hint="bg-light fg-dark text-bold" data-on-move="$('.hint').each(function() {var str = $(this).html();
                          if(!str.includes('$')){$(this).html('$ ' + str);}});" @click="update" />
        </div>
      </div>
    </div>
    <div class="content">
      <div class="flowers-title">
        <h2 class="flowers-header">New Arrivals</h2>
        <div class="flowers-sort" @click="drop()">
          <span class="dropdown-title lighter">Sort by Price</span>
          <span class="dropdown-arrow" :class="[isDropped ? 'up' : 'down']"></span>
        </div>
      </div>
      <div class="flowers-grid" id="cards" data-role="list" data-sort-class="flower-price">
        <div v-for="blume in blumen"
          v-show="(checkedTypes[0] == null || checkedTypes.includes(blume.type.toLowerCase().split(' ').join(''))) && blume.price >= min && blume.price <= max"
          :key="blume.id" class="flower">
          <div :key="blume.name" :id="blume.id" class="card-content">
            <div class="card-info-wrapper">
              <span class="flower-accent"></span>
              <span class="flower-type">{{ blume.type }}</span>
              <h3 class="flower-name">{{ blume.name }}</h3>
            </div>
            <div class="card-image">
              <img :src="'/src/images/' + blume.picture" class="flower-img" :alt="blume.name" />
            </div>
            <div class="card-footer">
              <span class="price-title">Price</span>
              <span class="flower-price" >$ {{ blume.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer">Created by Boriss Dvornikovs</footer>
</template>

<script>
import { blumen } from './blumen.js';
export default {
  data() {
    return {
      isHidden: false,
      isDropped: false,
      types: [{ name: 'Blume' }, { name: 'Basis' }, { name: 'Ovales Gras' }, { name: 'Winziges Extra' }, { name: 'Langes Gras' }, { name: 'Glatt' }],
      blumen,
      checkedTypes: [],
      min: 1,
      max: 10
    }
  },
  methods: {
    rotate() {
      this.isHidden = !this.isHidden;
    },
    drop() {
      this.isDropped = !this.isDropped;
    },
    update() {
      this.min = $('.hint-min').html().replace("$", "").trim();
      this.max = $('.hint-max').html().replace("$", "").trim();
    },
  },
  mounted() {
    setInterval(() => {
      this.update();
    }, 500);
  }
} 
</script>

<style lang="scss">
@import "./style.scss";

.wrapper {
  display: flex;

  .filters {
    width: 26%;
    height: 100vh;
    position: sticky;
    top: 0;

    .empty {
      height: 2.8em;
    }

    .filter {
      border-right: $hr;
      border-bottom: $hr;
    }
  }

  .content {
    width: 74%;
    padding: 1em;
  }
}

.categories-title {
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
  padding-bottom: 0.5em;
  cursor: pointer;
}

.categories-list {
  display: flex;
  flex-direction: column;
  font-weight: 600;
  transition: ease-in-out 120ms;

  .container {
    input {
      visibility: hidden;
      display: grid;
      height: 0;
      width: 0;
      overflow: hidden;
    }

    .checkmark {
      height: 1em;
      width: 1em;
      margin-right: 0.7em;
      border: 1px solid rgba(128, 128, 128, 0.3);
      border-radius: 4px;
      display: inline-block;
      place-content: center;
      transition: ease-in-out 120ms;
      position: relative;
      top: 2px;
    }

    .checkmark:before {
      content: "";
      position: absolute;
      top: 0.3em;
      left: 0.3em;
      width: 0.35em;
      height: 0.35em;
      transform: scale(0);
      border-radius: 1px;
      box-shadow: inset 1em 1em white;
      transition: 120ms transform ease-in-out;
    }

    input[type=checkbox]:checked+.checkmark {
      background: rgba(0, 0, 0, 0.8);
      transition: ease-in-out 120ms;
    }

    input[type=checkbox]:checked+.checkmark:before {
      transform: scale(1);
    }
  }

  :nth-child(1) {
    padding-top: 1em;
  }

  :nth-child(6) {
    padding-bottom: 1em;
  }
}

.price-range {
  .price-slider {
    padding: 2.4em;
  }
}

.flowers-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.7em 0.5em;

  .flowers-header {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0.75em;
    text-shadow: 1px 1px rgba(92, 92, 92, 0.2);
  }

  .flowers-sort {
    cursor: pointer;

    .dropdown-title {
      padding: 0 1em;
    }
  }
}

.flowers-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin: 0.4em 1.5em;

  &:hover>.flower::after {
    opacity: 1;
  }

  div.itslit {
    border: 2px outset rgba(124, 179, 66, 0.4);
  }

  .flower {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(128, 128, 128, 0.16);
    width: 284px;
    height: 335px;
    border-radius: 14px;
    position: relative;
    cursor: pointer;

    &:hover::before {
      opacity: 1;
    }

    &::before,
    &::after {
      border-radius: 12px;
      content: "";
      height: 100%;
      top: 0px;
      left: 0px;
      opacity: 0;
      position: absolute;
      transition: opacity 500ms;
      width: 100%;
    }

    &::before {
      background: radial-gradient(700px circle at var(--mouse-x) var(--mouse-y), rgba(92, 107, 92, 0.08),
          transparent 40%);
      z-index: 3;
    }

    &::after {
      background: radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(97, 109, 95, 0.4),
          transparent 40%);
      z-index: 1;
    }

    >.card-content {
      background-color: rgba(255, 255, 255, 0.6);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      inset: 1px;
      padding: 10px;
      position: absolute;
      z-index: 2;
    }
  }
}

.flower-accent {
  position: absolute;
  top: 10px;
  left: -27px;
  width: 5px;
  height: 36px;
  background-color: var(--accent-color);
  opacity: .9;
}

.card-content {
  .card-image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 180px;

    img {
      max-height: 100%;
      max-width: 100%;
      position: relative;
    }
  }

  .card-info-wrapper {
    margin: .6em .2em 1.2em .6em;
  }

  .flower-type,
  .price-title {
    color: rgb(100, 100, 100);
    font-weight: bold;
    font-size: 0.75rem;
  }

  .flower-name {
    margin: 0;
    font-size: 0.95em;
    font-weight: bold;
  }

  .card-footer {
    display: flex;
    flex-direction: column;
    gap: 0;
    border: 0;
    padding: 0 0.3em;
    margin-left: .9em;
    align-items: flex-start;
    position: absolute;
    top: 263px;

    .price-title {
      opacity: .5;
    }

    .flower-price {
      font-size: 1.2em;
      font-weight: bold;
    }
  }
}
</style>