<!-- TODO: responsive refinement, dropdown sort, filter logic, clean up code -->
<template>
  <div class="main">
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
              <input type="checkbox" :key="t.name" :id="`cb${index}`"
                :value="t.name.toLowerCase().split(' ').join('')" />
              <span class="checkmark"></span>
              {{ t.name }}
            </label>
          </div>
        </Transition>
        <div class="price-range filter">
          <span class="price-title lighter">Price Range</span>
          <div class="price-slider">
            <input data-role="doubleslider" class="ultra-thin cycle-marker" data-min="1" data-max="10"
              data-hint-position-min="bottom" data-hint-position-max="bottom" data-hint-always="true"
              data-cls-complete="bg-dark" data-cls-hint="bg-light fg-dark text-bold"
              data-on-move="$('.hint').each(function() {var str = $(this).html();if(!str.includes('$')){$(this).html('$ ' + str);}});" />
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
        <div class="flowers-grid" id="cards">
          <div v-for="blume in blumen" class="flower">
            <div :key="blume.name" :id="`bl${blume.id}`" class="card-content">
              <div class="card-info-wrapper">
                <span class="flower-accent"></span>
                <span class="flower-type">{{ blume.type }}</span>
                <h3 class="flower-name">{{ blume.name }}</h3>
              </div>
              <div class="card-image">
                <img :src="'/src/images/' + blume.picture" />
              </div>
              <div class="card-footer">
                <span class="price-title">Price</span>
                <span class="flower-price">$ {{ blume.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>Created by Boriss Dvornikovs</footer>
  </div>
</template>

<script>
import data from './data.js';
export default {
  data() {
    return {
      isHidden: false,
      isDropped: false,
      types: [{ name: 'Blume' }, { name: 'Basis' }, { name: 'Ovales Gras' }, { name: 'Winziges Extra' }, { name: 'Langes Gras' }, { name: 'Glatt' }],
      blumen: data,
    }
  },
  methods: {
    rotate() {
      this.isHidden = !this.isHidden;
    },
    drop() {
      this.isDropped = !this.isDropped;
    }
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
      height: 0.9em;
      width: 0.9em;
      margin-right: 0.8em;
      border: 1px solid rgba(128, 128, 128, 0.3);
      border-radius: 4px;
      display: inline-block;
      place-content: center;
      transition: ease-in-out 120ms;
      position: relative;
    }

    .checkmark:before {
      content: "";
      position: absolute;
      top: 0.25em;
      left: 0.25em;
      width: 0.3em;
      height: 0.3em;
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
    padding-top: 0.8em;
  }

  :nth-child(6) {
    padding-bottom: 0.8em;
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
    border: 3px outset rgba(124, 179, 66, 0.24);
  }

  .flower {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(128, 128, 128, 0.24);
    transition: border 100ms ease-in-out 0s;
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
      background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(148, 148, 148, 0.08),
          transparent 40%);
      z-index: 3;
    }

    &::after {
      background: radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(148, 148, 148, 0.4),
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
  left: -26px;
  width: 4px;
  height: 36px;
  background-color: var(--accent-color);
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