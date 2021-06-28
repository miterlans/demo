<!--<template>
  <div class="select">
    <input class="input" ref="input" type="text" v-model="search" @focus="handleFocus" />
    <div :class="['dropdown', { show: isShowDropdown }]">
      <slot></slot>
    </div>
  </div>
</template>
-->

<script>
export default {
  name: 'Select',
  provide: function() {
    return {
      select: this
    }
  },
  props: {
    defaultValue: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      displayLabel: '',
      isShowDropdown: false,
      search: ''
    }
  },
  // watch: {
  //   search: {
  //     handler(n, o) {
  //       console.log(n, o)
  //       if (n !== o) {
  //       }
  //     }
  //   }
  // },
  mounted() {
    if (this.defaultValue) {
      let selectItem = this.$children.find(item => item.value === this.defaultValue)
      if (selectItem) {
        this.handleChange(selectItem.value, selectItem.label)
      }
    }
  },
  methods: {
    handleFocus() {
      if (!this.isShowDropdown) {
        this.search = ''
      }
      this.isShowDropdown = true
    },
    handleBlur() {
      this.isShowDropdown = false
    },
    handleInput() {},
    handleChange(value, label) {
      this.search = label
      this.$emit('change', value)
      this.$refs.input.blur()
      this.handleBlur()
    },
    handleRenderOptions() {
      console.log('handleRenderOptions')
      let search = this.search
      if (search === '') {
        return [...this.$slots.default]
      } else {
        return this.$slots.default.filter(child => {
          const { componentOptions } = child
          const [textVnode] = componentOptions.children
          console.log(textVnode)
          debugger
          return textVnode.text.includes(search)
        })
      }
    }
  },
  render(h) {
    console.log('children', h)
    let options = this.handleRenderOptions()
    console.log('options', options)
    return (
      <div class="select">
        <input
          class="input"
          ref="input"
          type="text"
          {...{
            on: {
              focus: this.handleFocus,
              input: v => (this.search = v)
            },
            props: {
              value: this.search
            }
          }}
        />
        <div
          {...{
            class: ['dropdown', { show: this.isShowDropdown }]
          }}
        >
          {options}
        </div>
      </div>
    )
  }
}
</script>

<style scoped lang="scss">
.select {
  height: 36px;
  position: relative;

  .input {
    width: 100%;
    height: 100%;
  }

  .dropdown {
    margin-top: 2px;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    border-radius: 8px;
    height: 0;
    overflow: hidden;
    transition: all 0.3s;

    &.show {
      height: auto;
    }
  }
}
</style>
