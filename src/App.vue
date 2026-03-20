<template>
  <h1 class="main-header">Blume</h1>
  <div class="wrapper">
    <div class="flowers-filters">
      <div class="empty filter"></div>
      <div class="categories-title filter" @click="rotate()">
        <span class="dropdown-title lighter">Categories</span>
        <span class="dropdown-arrow" :class="[isHidden ? 'down' : 'up']"></span>
      </div>
      <Transition>
        <div class="categories-list filter" v-if="!isHidden">
          <label v-for="(t, index) in types" class="categories-items">
            <input type="checkbox" :key="t.name" :id="`cb${index}`" :value="t.name.toLowerCase().split(' ').join('')"
              v-model="checkedTypes" @click="update" />
            <span class="checkmark"></span>
            <span class="cb-name">{{ t.name }}</span>
          </label>
        </div>
      </Transition>
      <div class="price-range filter">
        <span class="price-title lighter">Price Range</span>
        <div class="price-slider">
          <el-slider v-model="price" :format-tooltip="formatTooltip" placement="bottom" range :max="10" />
        </div>
      </div>
    </div>
    <div class="flowers-content">
      <div class="flowers-title">
        <h2 class="flowers-header">New Arrivals</h2>
        <div class="flowers-sort">
          <select data-role="select" data-filter="false" data-prepend="Sort By:"
            class="flower-select dropdown-title lighter" id="flowers-sorter">
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
            v-show="(checkedTypes[0] == null || checkedTypes.includes(blume.type.toLowerCase().split(' ').join(''))) && blume.price >= price[0] && blume.price <= price[1]">
            <div :key="blume.id" :id="blume.id" class="flower">
              <div :key="blume.name" class="card-content">
                <div class="card-info-wrapper">
                  <span class="flower-accent"></span>
                  <span class="flower-type">{{ blume.type }}</span>
                  <br>
                  <span class="flower-name">{{ blume.name }}</span>
                </div>
                <div class="card-image">
                  <img :src="'/src/images/' + blume.picture" class="flower-img" :alt="blume.name" />
                </div>
                <div class="card-footer">
                  <span class="price-title">Price</span>
                  <span class="flower-price" data-format="money">$ {{ blume.price }}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <footer class="app-footer">Created by Boriss Dvornikovs</footer>
</template>

<script setup>
import { ref } from 'vue'

const price = ref([0,10])

const formatTooltip = (val) => {
  return '$'+ val
}
</script>

<script>
import { blumen } from './blumen.js';
export default {
  data() {
    return {
      isHidden: false,
      isDropped: false,
      types: [{ name: 'Blume' }, { name: 'Basis' }, { name: 'Ovales Gras' }, { name: 'Winziges Extra' }, { name: 'Langes Gras' }, { name: 'Glatt' }],
      blumen: Array,
      checkedTypes: [],
    }
  },
  methods: {
    rotate() {
      this.isHidden = !this.isHidden;
    },
  }
} 
</script>

<style lang="scss">
@import "./style.scss";

</style>