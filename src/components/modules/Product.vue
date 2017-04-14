<template>
  <article class="l-product">
    <img class="md-product__photo" src="./../../assets/img/men/1.jpg" alt="asad">
    <button class="md-product__wish-list-button">
      <svg class="md-wish-list__icon" viewBox="0 6 20 20">
          <polygon id="Wishlist-Icon" stroke="none" fill="#444A59" fill-rule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
      </svg>
    </button>
    <h3 class="md-product__name">x off-white</h3>
    <p class="md-product__description">Moletom com recorte nas mangas</p>
    <div class="md-product__pricing">
      <strong class="md-product__price">£72</strong>
      <strong class="md-product__offer">£50</strong>
    </div>
    <button class="md-product__cart-button">add to cart</button>
  </article>
</template>

<script>
  export default {
    name: 'Product'
  }
</script>

<style lang="scss" scoped>
  // Imports
  @import './../../assets/partials/_config';

  .l-product {
    margin: 10px;
    background-color: #fff;
    padding: 20px 20px 25px;
    width: 100%;
    position: relative;

    .md-product__photo {
      width: 250px;
      display: block;
      margin: 0 auto 20px;

      @media (min-width: 600px) {
        width: 339px;
      }
    }

    .md-product__wish-list-button {
      border-radius: 50%;
      border: 2px solid $border-color;
      width: 40px;
      height: 40px;
      transition: .3s ease;
      @extend %v-align-center;
      @extend %h-align-center;
      position: absolute;
      top: 10px;
      right: 10px;

      .md-wish-list__icon {
        width: 20px;
        height: 20px;
        polygon {
          transition: .3s ease;
          fill: $border-color;
        }
      }

      &:hover {
        border-color: $primary-color;
        .md-wish-list__icon {
          polygon {
            fill: $primary-color;
          }
        }
      }
    }

    .md-product__name {
      padding: 10px 0 0;
      margin: 0;
      text-align: center;
      text-transform: uppercase;
      color: $primary-color;
      font-size: 14px;
      font-weight: 700;
    }

    .md-product__description {
      text-align: center;
      color: $border-color;
      font-size: 12px;
      margin: 0;
      padding: 10px 0;
    }

    .md-product__pricing {
      text-align: center;
      padding: 0 0 20px;
      .md-product__price {
        color: $primary-color;
        font-size: 14px;
        font-weight: 700;
        text-decoration: line-through;
        margin: 0 5px;
      }

      .md-product__offer {
        @extend .md-product__price;
        text-decoration: none;
        color: $offer-color;
      }
    }

    .md-product__cart-button {
      text-transform: uppercase;
      padding: 13px 0;
      color: $primary-color;
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      border: 2px solid $border-color;
      border-radius: 30px;
      width: 100%;
      box-sizing: border-box;
      transition: .3s ease;

      &:hover {
        background-color: $primary-color;
        color: #fff;
      }
    }

    @media (min-width: 600px) {
      width: auto;
    }
  }
</style>