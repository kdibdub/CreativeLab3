<template>
<div class="admin">
  <div class="add">
    <div class="comments-list">
      <div class="comment" v-for="comment in commentsArray" :key="comment.id">
        <div class="info">
          <h2>{{comment.name}}</h2>
        </div>
        <div class="description">
          <p>{{comment.text}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Comments',
  computed: {
    commentsArray() {
      return this.$root.$data.commentsList
    }
  },
}
</script>
