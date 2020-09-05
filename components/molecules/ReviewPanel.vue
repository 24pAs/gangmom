<template>
  <div
    class="review-panel"
  >
    <review-panel-label :label="title" />
    <review-panel-value
      v-if="title === '별점 평균'"
      :value="list.star_avg"
      unit="/5"
    >
      <div slot="value-ico">
        1
      </div>
    </review-panel-value>
    <review-panel-value
      v-else-if="title === '별점 비율'"
      :value="list.star_ratio.ratio"
      unit="%"
    >
      <div slot="value-ico">
        2
      </div>
    </review-panel-value>
    <review-panel-value
      v-else-if="title === '추천 비율'"
      :value="list.recommendedRate"
      unit="%"
    >
      <div slot="value-ico">
        3
      </div>
    </review-panel-value>
  </div>
</template>

<script>
import ReviewPanelLabel from '~/components/atoms/ReviewPanelLabel'
import ReviewPanelValue from '~/components/atoms/ReviewPanelValue'
export default {
  components: {
    ReviewPanelLabel,
    ReviewPanelValue
  },
  props: {
    title: {
      type: String,
      required: true
    },
    list: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>