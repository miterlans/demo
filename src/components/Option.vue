<template>
  <div class="option" @click="handleClick">
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: 'Option',
  inject: ['select'],
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      label: ''
    }
  },
  mounted() {
    this.label = this.$el.innerText
  },
  methods: {
    handleClick() {
      this.select.handleChange(this.value, this.label)
    }
  }
}
</script>

<style scoped lang="scss">
.option {
  height: 36px;
  line-height: 36px;
  cursor: pointer;
  &.hide {
    display: none;
  }

  &:hover {
    background-color: rgba(#cccccc, 0.3);
  }
}
</style>
