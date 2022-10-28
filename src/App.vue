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
            <label class="container">
              <input type="checkbox" id="ct1" value="blume" />
              <span class="checkmark"></span>
              Blume
            </label>
            <label class="container">
              <input type="checkbox" id="ct2" value="basis" />
              <span class="checkmark"></span>
              Basis
            </label>
            <label class="container">
              <input type="checkbox" id="ct3" value="ovalesGras" />
              <span class="checkmark"></span>
              Ovales Gras
            </label>
            <label class="container">
              <input type="checkbox" id="ct4" value="winzigesExtra" />
              <span class="checkmark"></span>
              Winziges Extra
            </label>
            <label class="container">
              <input type="checkbox" id="ct5" value="langesGras" />
              <span class="checkmark"></span>
              Langes Gras
            </label>
            <label class="container">
              <input type="checkbox" id="ct6" value="glatt" />
              <span class="checkmark"></span>
              Glatt
            </label>
          </div>
        </Transition>
        <div class="price-range filter">
          <span class="price-title lighter">Price Range</span>
          <div class="price-slider">
            <input data-role="doubleslider" class="ultra-thin cycle-marker" data-min="1" data-max="10"
              data-value-min="2" data-value-max="7" data-hint-position-min="bottom" data-hint-position-max="bottom"
              data-hint-always="true" data-cls-complete="bg-dark" data-cls-hint="bg-light fg-dark text-bold"
              data-on-move="$('.hint').each(function() {var str = $(this).html();if(!str.includes('$')){$(this).html('$' + str);}});" />
          </div>
        </div>
      </div>
      <div class="content">
        <div class="flowers-title"></div>
        <div class="flowers-grid"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: false,
      types: null
    }
  },
  methods: {
    rotate() {
      this.isHidden = !this.isHidden;
    }
  },
  mounted() {

  }
} 
</script>

<style lang="scss">
@import "./style.scss";

.wrapper {
  display: flex;

  .filters {
    width: 26%;
    border-right: $hr;

    .empty {
      height: 3.8em;
    }

    .filter {
      border-bottom: $hr;
    }
  }
}

.categories-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5em;
  cursor: pointer;

  .dropdown-arrow {
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    margin-top: 3px;
    margin-right: 1.5em;
  }

  .up {
    transition: ease-in 200ms;
    transform: rotate(-135deg);
  }

  .down {
    transition: ease-in 200ms;
    transform: rotate(45deg);
  }
}

.categories-list {
  display: flex;
  flex-direction: column;
  font-weight: 600;
  transition: ease-in-out 200ms;

  .container {
    padding: 0.25em 2.25em;

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
      transition: ease-in-out 200ms;
      position: relative;
    }

    .checkmark:before {
      content: "";
      position: absolute;
      top: 0.22em;
      left: 0.22em;
      width: 0.34em;
      height: 0.34em;
      transform: scale(0);
      transition: 200ms transform ease-in-out;
      box-shadow: inset 1em 1em white;
      border-radius: 1px;
    }

    input[type=checkbox]:checked+.checkmark {
      background: rgba(0, 0, 0, 0.8);
      transition: ease-in-out 200ms;
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
</style>