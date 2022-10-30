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
            <input type="checkbox" :key="t.name" :id="`cb${index}`" :value="t.name.toLowerCase().split(' ').join('')" v-model="checkedTypes" @click="update" />
            <span class="checkmark"></span>
            {{ t.name }}
          </label>
        </div>
      </Transition>
      <div class="price-range filter">
        <span class="price-title lighter">Price Range</span>
        <div class="price-slider">
          <input data-role="doubleslider" id="slider" class="ultra-thin cycle-marker" data-min="1" data-max="10"
            data-hint-position-min="bottom" data-hint-position-max="bottom" data-hint-always="true"
            data-cls-complete="bg-dark" data-cls-hint="bg-light fg-dark text-bold" 
            data-on-move="$('.hint').each(function() {var str = $(this).html();if(!str.includes('$')){$(this).html('$ ' + str);}});" @click="update" />
        </div>
      </div>
    </div>
    <div class="content">
      <div class="flowers-title">
        <h2 class="flowers-header">New Arrivals</h2>
        <div class="flowers-sort">
          <select data-role="select" data-filter="false" 
          data-prepend="Sort By:" class="flower-select dropdown-title lighter">
            <option value="flower-price" selected>Price</option>
            <option value="flower-name">Name</option>
            <option value="flower-type">Type</option>
          </select>
        </div>
      </div>
      <div id="cards" class="flowers-grid">
        <ul id="flowers" data-role="list" data-sort-class="flower-price" data-sort-dir="asc"
          data-cls-list="unstyled-list row flex-justify-center">
          <li v-for="blume in blumen" 
          v-show="(checkedTypes[0] == null || checkedTypes.includes(blume.type.toLowerCase().split(' ').join(''))) && blume.price >= min && blume.price <= max">
            <div :key="blume.id" :id="blume.id" class="flower">
              <div :key="blume.name" class="card-content">
                <div class="card-info-wrapper">
                  <span class="flower-accent"></span>
                  <figcaption class="flower-type">{{ blume.type }}</figcaption>
                  <figcaption class="flower-name">{{ blume.name }}</figcaption>
                </div>
                <div class="card-image">
                  <img :src="'/src/images/' + blume.picture" class="flower-img" :alt="blume.name" />
                </div>
                <div class="card-footer">
                  <span class="price-title">Price</span>
                  <figcaption class="flower-price" data-format="money">$ {{ blume.price }}</figcaption>
                </div>
              </div>
            </div>
          </li>
        </ul>
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
    update() {
      this.min = $('.hint-min').html().replace("$", "").trim();
      this.max = $('.hint-max').html().replace("$", "").trim();
    }
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
    width: 30%;
    height: 100vh;
    position: sticky;
    top: 0;

    .empty {
      height: 3.5em;
    }

    .filter {
      border-right: $hr;
      border-bottom: $hr;
    }
  }

  .content {
    width: 70%;
    padding: 1em;
  }
}

.categories-title {
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
  padding-bottom: 0.3em;
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
      margin-right: 0.5em;
      border: 1px solid rgba(128, 128, 128, 0.3);
      border-radius: 4px;
      display: inline-block;
      place-content: center;
      transition: ease-in-out 120ms;
      position: relative;
      top: 1px;
      left: -1px;
    }

    .checkmark:before {
      content: "";
      position: absolute;
      top: 0.25em;
      left: 0.25em;
      width: 0.4em;
      height: 0.4em;
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

  .price-title {
    padding: 1.2em 2em;
  }

  .price-slider {
    padding: 1.8em;
  }
}

.flowers-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2em 0.2em;

  .flowers-header {
    margin: 0 0.9em;
    font-size: 1.5rem;
    font-weight: 600;
    text-shadow: 1px 1px rgba(92, 92, 92, 0.2);
  }
}

.flowers-sort {
  cursor: pointer;

  .dropdown-title,
  .drop-container {
    padding: 0;
    border-radius: 0px;
    border: 1px solid $bg-color;
    box-shadow: 1px 2px 10px $bg-color;
  }

  .select .option-list li.active {
    background-color: rgba(141, 88, 199, 0.69);
  }
}

.flowers-grid {

  &:hover .flower::after {
    opacity: 1;
  }

  .itslit {
    border: 2px outset rgba(124, 179, 66, 0.4);
  }

  ul#flowers {
    margin: 0;

    li {
      margin: 12px;
    }
  }

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
    background: radial-gradient(700px circle at var(--mouse-x) var(--mouse-y), rgba(128, 128, 128, 0.08),
        transparent 40%);
    z-index: 3;
  }

  &::after {
    background: radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(128, 128, 128, 0.4),
        transparent 40%);
    z-index: 1;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.6);
    flex-grow: 1;
    inset: 1px;
    padding: 10px;
    position: absolute;
    z-index: 2;
  }
}

.flower-accent {
  position: absolute;
  top: 2px;
  left: -21px;
  width: 3px;
  height: 36px;
  background-color: var(--accent-color);
}

.card-content {

  .card-info-wrapper {
    margin: 1.2em .4em;

    .flower-name {
      margin: 0.1em 0;
      font-size: 0.95em;
      font-weight: bold;
    }
  }

  .flower-type,
  .price-title {
    color: rgb(100, 100, 100);
    font-weight: bold;
    font-size: 0.75rem;
  }

  .card-image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 176px;

    img {
      max-height: 100%;
      max-width: 100%;
      object-fit: scale-down;
      position: relative;
      top: 0;
      left: -8px;
    }
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
    top: 262px;

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