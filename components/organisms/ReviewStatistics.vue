<template>
  <div class="review-statistics">
    <div
      v-for="(title, index) in titles"
      :key="index"
      class="review-statistics__item"
    >
      <review-statistics-label :label="title" />
      <review-statistics-value
        v-if="index === 0"
        :value="statistics.star_avg"
        unit="/5"
      >
        <span
          slot="value-ico"
          class="ico ico-star__avg"
        />
      </review-statistics-value>
      <review-statistics-value
        v-else-if="index === 1"
        :value="statistics.star_ratio.ratio"
        unit="%"
      >
        <span
          slot="value-ico"
          class="review-ico__round review-ico__round--star"
        >
          {{ statistics.star_ratio.star }}점
        </span>
      </review-statistics-value>
      <review-statistics-value
        v-else-if="index === 2"
        :value="statistics.recommendedRate"
        unit="%"
      >
        <span
          slot="value-ico"
          class="review-ico__round review-ico__round--recommend"
        >
          추천
        </span>
      </review-statistics-value>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ReviewStatisticsLabel from '~/components/atoms/ReviewStatisticsLabel'
import ReviewStatisticsValue from '~/components/atoms/ReviewStatisticsValue'
export default {
  components: {
    ReviewStatisticsLabel,
    ReviewStatisticsValue
  },
  data() {
    return {
      titles:['별점 평균', '별점 비율', '추천 비율']
    }
  },
  computed: {
    ...mapState({
      statistics: state => state.reviews.academyStatistics
    })
  }
}
</script>

<style lang="scss" scoped>
.review-statistics{
  display: flex;
  margin-top: 10px;
  border-radius: 20px;
  background: #e5e6ec;
  @include breakpoint('pc') {
     border-radius: 0;
     background: none;
  }
  &__item {
    flex: 1 1 33.3%;
    padding: 16px 0 18px;
    &:last-child [class$="value"]{
      border-right: none;
    }
    @include breakpoint('pc') {
      margin-left: 16px;
      padding: 20px 0 41px;
      border-radius: 20px;
      background: #e5e6ec;
      &:first-child {
        margin-left: 0;
      }
    }
  }
  &__value {
    margin-top: 10px;
    padding: 15px 0 12px;
    border-right: 1px solid #d5d6dc;
    @include breakpoint('pc') {
      margin-top: 38px;
      padding: 0;
      border-right: none;
    }
  }
  .review-ico__round {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    font-size: 12px;
    color: #fff;
    &--star {
      background: #ffbb01;
    }
    &--recommend {
      background: #5ede6b;
    }
    @include breakpoint('pc') {
      width: 42px;
      height: 42px;
      font-size: 16px;
    }
  }
}
</style>