<template>
  <div class="card_star_wars">
    <Card class="card">
      <p slot="title">{{ card.title || card.name }}</p>

      <ul>
        <li>
          <span v-if="card.birth_year">
            Birth year: {{ card.birth_year }}
          </span>
          <span v-else>
            Release date: {{ card.release_date }}
          </span>
        </li>
        <li>
          <span v-if="card.gender">
            Gender: {{ card.gender }}
          </span>
          <span v-else>
            Episode: {{ card.episode_id }}
          </span>
        </li>
        <li>
          <span v-if="card.height">
            Height: {{ card.height }}
          </span>
          <span v-else>
            Director: {{ card.director }}
          </span>
        </li>
        <li>
          <span v-if="card.mass">
            Mass: {{ card.mass }}
          </span>
          <span v-else>
            Producer: {{ card.producer }}
          </span>
        </li>
      </ul>
    </Card>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    card: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="less">
.card_star_wars {
  width: 400px;
  padding: 20px 20px 20px 0;

  .card {
    padding: 10px;
  }
}
</style>