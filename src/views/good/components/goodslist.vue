<template>
  <div>
    <h2>热门周边</h2>
    <ul>
        <slot></slot>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  font-size: 0.18rem;
  font-weight: bold;
  padding: 0.20rem
}
ul {
  padding: 0 0.20rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
li {
  margin-bottom: 0.25rem;
  width: 1.58rem;
  img{
      width:100%;
  }
  h3{
      margin:0.10rem 0 0.5rem;
      font-size: 0.14rem;
  }
  p{
      font-size: 0.14rem;
      color: #eb484a;
      margin-top: 0.10rem;
  }
}
</style>
