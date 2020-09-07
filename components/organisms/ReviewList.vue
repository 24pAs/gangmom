<template>
  <div class="review-list">
    <client-only>
      <vue-slick-carousel v-bind="settings" @swipe="changeDot">
        <div
          v-for="(review, index) in academyReviewList"
          :key="review.id"
          class="review-list__item"
        >
          <div class="review-list__box" :class="{'review-list__box--blocked': !isLogin && index > 0}">
            <review-list-rec-date
              :recommended="review.recommended"
              :createdAt="review.created_at.split('T')[0]"
            />
            <review-list-content :content="review" />
            <writer-info
              :tags="[review.start_grade, review.course_term]"
              :writer="review.writer"
              :recommended="review.recommended"
              :createdAt="review.created_at.split('T')[0]"
            />
          </div>
          <div v-if="!isLogin && index > 0" class="review-list__blocked-box">
            <p class="blocked-box__text">리뷰를 한개만써도! <br />강남엄마의 다른 모든 리뷰들을 확인하실 수 있습니다</p>
            <button-review-write :btnType="'inBox'" />
          </div>
        </div>
      </vue-slick-carousel>
      <vue-slick-carousel ref="reviewDotsSlick" v-bind="settingsDots" class="review-list__slider-dots">
        <span v-for="(review, index) in academyReviewList" :key="index" class="slider-dot">
          <span class="slider-dot__inner">
            <span class="blind">{{ index }}</span>
          </span>
        </span>
      </vue-slick-carousel>
    </client-only>  
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ButtonReviewWrite from '~/components/atoms/ButtonReviewWrite'
import ReviewListRecDate from '~/components/atoms/ReviewListRecDate'
import ReviewListContent from '~/components/molecules/ReviewListContent'
import WriterInfo from '~/components/molecules/WriterInfo'
export default {
  components: {
    ButtonReviewWrite,
    ReviewListRecDate,
    ReviewListContent,
    WriterInfo
  },
  data() {
    return {
      // to do : settings 넣을 시 warn 발생 
      settings: {
        "dots": false,
        "responsive": [
          {
            "breakpoint": 10000,
            "settings": "unslick"
          },
          {
            "breakpoint": 832,
            "settings": {
              // "adaptiveHeight": true,
              "arrows": false,
              "centerMode": true,
              "centerPadding": "11px",
              "infinite": false
            }
          }
        ]
      },
      settingsDots: {
        "dots": false,
        "responsive": [
          {
            "breakpoint": 10000,
            "settings": "unslick"
          },
          {
            "breakpoint": 832,
            "settings": {
              "arrows": false,
              "variableWidth": true,
              "infinite": false
            }
          }
        ]
      }
    }
  },
  computed: {
    ...mapState({
      academyReviewList: state => state.reviews.academyReviewList,
      isLogin: state =>  state.isLogin
    })
  },
  methods: {
    changeDot(dir) {
      if(dir === 'right') {
        this.$refs.reviewDotsSlick.prev()
      } else if(dir === 'left') {
        this.$refs.reviewDotsSlick.next()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.review-list {
  margin: 10px -16px 0;
  @include breakpoint('pc') {
    margin: 0;
  }
  &__item {
    position: relative;
    box-sizing: border-box;
    padding: 0 5px;
    @include breakpoint('pc') {
      margin-top: 10px;
      padding: 0;
    }
  }
  &__box {
    padding: 20px;
    border-radius: 20px;
    background: #fff;
    @include breakpoint('pc') {
      padding: 30px 30px 26px;
    }
    &--blocked {
      filter: blur(7px)
    }
    .review-list__rec-date:first-child {
      @include breakpoint('pc') {
        display: none;
      }
    }
  }
  &__blocked-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 0 37px;
    @include breakpoint('pc') { 
      display: none;
      .review-list__item:nth-child(2) &{
        display: flex;
        z-index: 1;
      }
    }
    .blocked-box {
      &__text {
        margin-bottom: 43px;
        font-size: 20px;
        color: #444951;
        word-break: keep-all;
        text-align: center;
        @include breakpoint('pc') {
          margin-bottom: 8px;
          font-size: 24px;
        }
      }
    }
  }
  &__slider-dots {
    width: 80px;
    margin: 0 auto;
    padding: 10px 0;
    @include breakpoint('pc') {
      display: none;
    }
    .slider-dot {
      display: block !important;
      box-sizing: border-box;
      padding: 0 4px;
      &__inner {
        display: block !important;
        width: 8px !important;
        height: 8px !important;
        border-radius: 50%;
        background: #c4c4c4;
        opacity: .3;
        transform: scale(.5);
        transition: transform .3s, opacity .3s;
      }
    }
  }
}
</style>
<style lang="scss">
.review-list__slider-dots{
  .slick-list {
    padding: 0 16px;
  }
  .slick-slide {
    width: 16px !important;
    height: 8px; 
  }
  .slick-current  .slider-dot__inner,
  .slick-current + .slick-slide .slider-dot__inner,
  .slick-current + .slick-slide + .slick-slide .slider-dot__inner {
    transform: scale(1);
  }
  .slick-current  .slider-dot__inner {
    opacity: 1;
  }
}
</style>