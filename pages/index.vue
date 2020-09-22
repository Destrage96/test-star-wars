<template>
  <div class="page__container">
    <div class="content-search">
      <Search/>
      <TypeCheckbox/>
    </div>

    <div style="position: relative">
      <div v-if="list.length === 0" class="content-not-found">
        Not found
      </div>

      <div v-else class="page-content">
        <Card v-for="card in list"
              :key="card.index"
              :card="card"/>

        <Page :total="total"
              class="pagination"
              @on-change="$_onChangePage"/>
      </div>

      <Spin fix v-if="loading === true">
        <Icon type="ios-loading"
              size=18
              class="demo-spin-icon-load"/>
        <div>Loading</div>
      </Spin>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card';
import TypeCheckbox from '../components/TypeRadio';
import Search from '../components/Search';

export default {
  layout: 'default',

  components: {
    Search,
    TypeCheckbox,
    Card
  },

  mounted() {
    this.fetchStarWarsList();
    this.$root.$on('on-search', this.$_onSearch);
    this.$root.$on('type-search', this.$_onChangeType);
    this.$root.$on('on-search-clear', this.$_onSearch);
  },

  data() {
    return {
      loading: false,
      typeChange: 'people',
      list: [],
      total: 0,
      page: 1
    }
  },

  methods: {
    $_onChangePage(page) {
      this.page = page;
      return this.fetchStarWarsList();
    },

    $_onChangeType(value) {
      this.typeChange = value;
      this.page = 1;
      return this.fetchStarWarsList();
    },

    async $_onSearch(query) {
      this.loading = true;
      try {
        if (query.length === 0) {
          return this.fetchStarWarsList();
        }

        let list = await this.$api.starWars.searchStarWars(this.typeChange, query);
        list = list.list
        this.total = list[0];
        this.list = Object.values(list[3]);
      } catch (e) {
        throw(e);
      } finally {
        this.loading = false;
      }
    },

    async fetchStarWarsList() {
      this.loading = true;
      try {
        let list = await this.$api.starWars.fetchList(this.typeChange, this.page);
        list = list.list
        this.list = Object.values(list[3]);
        this.total = list[0]
      } catch (e) {
        throw(e);
      } finally {
        this.loading = false;
      }
    },
  }
}
</script>
<style lang="less">
.page__container {
  .content-not-found {
    width: 100%;
    height: 100%;
    padding-top: 100px;
    text-align: center;
    font-size: 30px;
  }

  .page-content {
    display: flex;
    flex-wrap: wrap;

    .pagination {
      width: 100%;
    }
  }


  .demo-spin-icon-load {
    animation: ani-demo-spin 1s linear infinite;
  }

  @keyframes ani-demo-spin {
    from {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .demo-spin {
    height: 100px;
    position: relative;
  }
}
</style>

