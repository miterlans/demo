<template>
  <div class="home">
    {{ select }}
    <Select :default-value="select" @change="handleChange">
      <Option v-for="op in options" :key="op.value" :value="op.value">{{ op.label }}</Option>
    </Select>
  </div>
</template>

<script>
import { Select, Option } from '@/components'

export default {
  name: 'Home',
  components: {
    Select,
    Option
  },
  data() {
    return {
      select: '4',
      options: [
        {
          label: '北京市',
          value: '1'
        },
        {
          label: '上海市',
          value: '2'
        },
        {
          label: '西安市',
          value: '3'
        },
        {
          label: '杭州市',
          value: '4'
        }
      ]
    }
  },
  methods: {
    handleChange(value) {
      console.log('handleChange', value)
      this.select = value
    }
  }
}
</script>
