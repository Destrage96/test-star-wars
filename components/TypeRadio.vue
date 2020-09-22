<template>
  <div class="type_search__container">
    <RadioGroup v-model="typeSearch"
                @on-change="$_onChangeTypeSearch">
      <Radio label="people"/>
      <Radio label="films"/>
    </RadioGroup>
  </div>
</template>

<script>
export default {
  name: "type-search",

  data: function () {
    return {
      typeSearch: 'people',
    }
  },
  methods: {
    $_onChangeTypeSearch() {
      return this.$root.$emit('type-search', this.typeSearch);
    }
  }
}
</script>

<style lang="less">
.type_search__container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 150px;

  .ivu-checkbox-wrapper + span, .ivu-checkbox + span {
    margin-left: 5px;
  }
}
</style>