<template>
  <div class="search">
    <div class="search-input">
      <Input v-model="query"
             class="input-text"
             search
             @on-keyup.enter="$_onSearch"
             style="margin-right: 25px"
             placeholder="Search"/>

      <div class="input-button">
        <Button type="primary"
                style="margin-right: 25px"
                @click="$_onSearch">
          <font-awesome-icon fas icon="search"/>
        </Button>

        <Button type="primary" @click="$_onSearchClear">
          <span>Clear</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",

  mounted() {
    this.$root.$on('type-search', this.$_onQueryClear);
  },

  data: function () {
    return {
      query: '',
    }
  },

  methods: {
    $_onSearch() {
      return this.$root.$emit('on-search', this.query);
    },

    $_onSearchClear() {
      this.query = '';
      return this.$root.$emit('on-search-clear', this.query);
    },

    $_onQueryClear() {
      return this.query = '';
    }
  }
}
</script>

<style lang="less">
.search {
  .search-input {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .input-text {
      max-width: 450px;
      min-width: 250px;
      margin-bottom: 30px;
    }

    .input-button {
      display: flex;
    }
  }
}
</style>