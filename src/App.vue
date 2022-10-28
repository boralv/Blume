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
              <input type="checkbox" :key="t.name" :id="`cb${index}`" :value="t.name.toLowerCase().split(' ').join('')" />
              <span class="checkmark"></span>
              {{ t.name }}
            </label>
          </div>
        </Transition>
        <div class="price-range filter">
          <span class="price-title lighter">Price Range</span>
          <div class="price-slider">
            <input data-role="doubleslider" class="ultra-thin cycle-marker" data-min="1" data-max="10"
            data-hint-position-min="bottom" data-hint-position-max="bottom"
            data-hint-always="true" data-cls-complete="bg-dark" data-cls-hint="bg-light fg-dark text-bold"
            data-on-move="$('.hint').each(function() {var str = $(this).html();if(!str.includes('$')){$(this).html('$' + str);}});" />
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
          <div class="flower">
            <div class="card-content"></div>
          </div>
          <div class="flower">
            <div class="card-content"></div>
          </div>
          <div class="flower"></div>
          <div class="flower"></div>
          <div class="flower"></div>
          <div class="flower"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: false,
      isDropped: false,
      types: [{name: 'Blume'}, {name: 'Basis'}, {name: 'Ovales Gras'}, {name: 'Winziges Extra'}, {name: 'Langes Gras'}, {name: 'Glatt'}],
    }
  },
  methods: {
    rotate() {
      this.isHidden = !this.isHidden;
    },
    drop() {
      this.isDropped = !this.isDropped;
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
    padding: 0.25em 2.25em;
    cursor: pointer;
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
      top: 0.22em;
      left: 0.22em;
      width: 0.34em;
      height: 0.34em;
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
  gap: 28px;
  margin: 0.4em 1.5em;
  .flower {
    width: 295px;
    height: 345px;
    border: $hr;
    border-radius: 13px;
    position: relative;
    cursor: pointer;
    :hover::before {
      opacity: 1;
    }
    ::before,
    ::after {
      border-radius: inherit;
      content: "";
      height: 100%;
      left: 0px;
      opacity: 0;
      position: absolute;
      top: 0px;
      transition: opacity 500ms;
      width: 100%;
    }

    ::before {
      background: radial-gradient(
        800px circle at var(--mouse-x) var(--mouse-y), 
        rgba(255, 255, 255, 0.06),
        transparent 40%
      );
      z-index: 3;
    }

    ::after {  
      background: radial-gradient(
        600px circle at var(--mouse-x) var(--mouse-y), 
        rgba(255, 255, 255, 0.4),
        transparent 40%
      );
      z-index: 1;
    }

    > .card-content {
      background-color: white;
      border-radius: inherit;
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
</style>