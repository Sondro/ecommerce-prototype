<template>
  <div class="md-wish-list">
    <svg class="md-wish-list__icon" viewBox="0 6 20 20">
        <polygon stroke="none" fill="#444A59" fill-rule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
    </svg>
    <strong class="md-mini-bag__quantity">{{ wishList }}</strong>
  </div>
</template>

<script>
  export default {
    name: 'WishList',
    props: ['wishList']
  }
</script>

<style lang="scss" scoped>
  // Imports
  @import './../../assets/partials/_config';

  .md-wish-list {
    @extend %v-align-center;
    .md-wish-list__icon {
      width: 20px;
      height: 20px;
      transition: .3s ease;

      polygon {
        fill: #fff;
        transition: .3s ease;

        @media (min-width: 600px) {
          fill: $primary-color;
        }
      }

      @media (min-width: 1360px) {
        width: 28px;
        height: 28px;
      }
    }

    .md-mini-bag__quantity {
      transform: translateY(-10px) translateX(-5px);
      transition: .3s ease;

      @media (min-width: 1360px) {
        transform: translateY(-10px) translateX(-1px);
      }
    }
  }
</style>
