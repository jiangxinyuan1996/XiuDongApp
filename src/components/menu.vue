<template>
   <ul ref="myul">
        <div @click='divclick()' class="box">{{daohang}}</div>
            <router-link to='/center' tag='li'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAMAAACdUboEAAAAXVBMVEUAAAC7u7u8vLzMzMzAwMC8vLy8vLy9vb29vb27u7u7u7u8vLy8vLy8vLy8vLy9vb2/v7+/v7+8vLy/v7+8vLy8vLy8vLy8vLy8vLy+vr68vLy8vLy8vLy+vr67u7vx7WqrAAAAHnRSTlMAf/QLGpipZkvUueo33MlsKxO/IrOGX41yQsKfVC/f9KISAAABzElEQVRYw+1Xa5ODIAxUAfFRX9Wqffn/f+aNQXveteIiM8zcnPtRwhqSLCTegQN/DCfZhU3ShJ08efZg0T0dvpHeI2bFx0Uw/EYg+H7/LsT3znnZ6WebLkiyPFvQp+0ewm7efutLpnwu+9v8sTPmq5LJm6L6+b2YPE8qw5Rk6rA+e4+ur46fmSUop03nz5v4mVZzE8KQtojVdUHrIU7o04ZCY1GQhQ+rTpkDP0VVeUaOFFKgMcJotI3ZlqDi0SyCGMn0uml2pR8jhA+qX8CQNPBAK+cJGD7RCgqUi6CTAZgXCTFKLDckB46Jn4QFZTo3UH8MhVGAjAIJJDfRq49EqJwSg6emRG6JyDPQ68kBo/WpHWTGtnrcV7i9Cu1vCue3mf2Na/8quH657F9X+w7AXZdi30m57/aqywB0pNQAQ6hpiNnsmmkM4YgSwslc39nPnPdyq2yTl22snT6yF2mjEwNPFufRT0jL2DRcN3IQsp4BU1zlp7P92mzTqPW4RSdNJrNBV0e1ilpkNA0/1ORTf54sSSjGE3s/bmvXteeZg/R4MP5zRrmyhFz4ckUz+1Gv3fV7IdafYHPoH3cm9nnIdG+M9E0ha+/AgQMW+AJ8M3VRJmM0FgAAAABJRU5ErkJggg=="
                    alt="我的">
                <p>我的</p>
            </router-link>
            <router-link to='/raise' tag='li'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAMAAACdUboEAAAAY1BMVEUAAAC8vLy9vb28vLy9vb28vLy8vLy8vLy8vLy8vLy8vLy9vb29vb29vb28vLzBwcG8vLy8vLzGxsa8vLy8vLy8vLy9vb29vb29vb28vLzDw8O8vLy9vb28vLy8vLy9vb27u7vVMH8pAAAAIHRSTlMA1SmqVH+ya/LdvC9ZPOwXoIYJduWOSx9GlQ/FYcyoNHuQzbEAAAJ6SURBVFjD7dfZlpswDABQQQADxmwJW2CI/v8rWzu7LXEa4KGnzX3JnHiisSyJeODr6/9x7qRS0i9gJwPexd5BSFjiZ6KqQtF3sCTFN6eGC9qW8fO35ukMHA9tqQLXlKAlymogJeiK7LSKFAkVkHIdoe/bTDTpI614glfqhJQMSG9/TIb3LQ/wJPDKO7Z+DYVswx/UfCDpfTXw1I+3zOtHSdA4vB5vpMsDfNYDvMrya8h7y8TmHDLnUzPwlSntOrwkXnsm4fcML/o9ATR9JClYStRMeRr9U94R61zjzoiYABky/h3nbHJWVhJm28Co9OqZGiWz91C/htRnJmBkerUHW5GbvdX6JbeGQ6KpNKdguj/Q74+CWD0nVl2oYifgMn1pkreec5HZYg2sxj16o8ebA9VaCnjSfGrhGSKIERewxGOaK3QjBnqD1khw1R7B4eNNHDXHrJ2q+UQ8RvhNHqmRJ5kRX9Yi3ZMRUn58cDAzd3G7wOVxG6R6NrZ3KcyWLscouaU7VhL+kJ8jcZbB4zFZ+1LJAj6h0Bil0+MlrKRuhT1crIoNsJZ/H5EkVPVLo1Ybrj8lPiRp2VRhej3bDVoPXQI2ydyYE2x0GaxrSwDbdVkT/ZxixNi6imxXWOe4Xb2t1vwta0+n9VO4eIPZU2QuI6uogGTGkF5SsETk+LlcLOW2TgSMI6515AZjvYL//i+lTzrp9qEWZGlmnk+6XjjiZHlCmdvN8gWYndDw84iBXlR7Ruz0olgZkf+PbNg1YqTPf9eI3RiX9dqIvH8wolj3pRzwfSVRS7zPJKhJtkF2fkAWOa6TF2zPpbhG2gGvbebDZ+amha+vr7/KL6UyoZRoTUnRAAAAAElFTkSuQmCC"
                    alt="众筹">
                <p>众筹</p>
            </router-link>
            <router-link to='/goods' tag='li'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAMAAACdUboEAAAAWlBMVEUAAAC7u7u8vLy9vb2+vr68vLy8vLy9vb28vLy8vLy8vLzCwsLGxsa8vLy8vLy8vLy8vLy8vLy8vLy9vb29vb2+vr68vLy9vb2+vr6+vr68vLy8vLy+vr67u7susJk5AAAAHXRSTlMAgL9zHfLiRsiwoRMJXJuUhtXPeU8s2ow8JOtoNd2CfNQAAAHiSURBVFjD7ZfdjoIwEIUFFIEWll9/wHn/19wWTUYzmzJ4uNmE78o2zdH2jHPaw87Ov+NWF3FR3zbTK1N6kpab6JmYmNhsINjSOy0umb02nL22nqGCNXnywX0ccvLUmOCRPMlrlMyjI6T44yV+xBDg5BROhm2ax1Blk6M7MJ2fQCo94nN7O9cIUKx83XzM+BqqAMXc1/THTOtrCVCM/R8vNKPnXnaRI/W7jhie6abHqmbTkIKxs0o9m5OS5q61Q83FKHuDnlix8eG58mzCXttHRZ5pWbGYm4Gmesp538uKKS8LKPKX31UNMdIpnskRCjNeddYpWnJclxSTj26TcAP/a6Zh+bAxpzeBnAXFzLx4VEQfx51uQ4oYKHioOPReYXWiVTRcGDqrdcWbgycjm0q6HCynlclmcKuZng8JtloaiVvNvwC0WoZlA1gtuZLDbmQ1d90HaLXMkAk4aAlnCG4134My2Gp58rjVzESOAbRa3oLLzazm9MKtZi6cXrDV3CJHwGpJx27CVsv0wq3m9EKtlumlsxpPLyOs1r+XA8XD5Q/mIZf/dw/m0pxWrhS0YyBqKtk+lff2WvFM0GH7mIKX8YrWEz58m9E3xNiTUFKEzewbWkfbK57WSaQlKY+HnZ0djF91jmepeI/fuwAAAABJRU5ErkJggg=="
                    alt="周边">
                <p>周边</p>
            </router-link>
            <router-link to='/' tag='li'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRBAMAAABYoVcFAAAALVBMVEUAAAC7u7u+vr7Nzc29vb28vLzIyMi8vLy8vLy8vLy8vLy7u7u8vLy8vLy7u7vgDn5GAAAADnRSTlMAgDMFP4oO7uSFZveyUNN5qdgAAADISURBVEjH7dYxCsJAEIXhISEBQcFcQCJiZZNCsPUEnsHWI9hYWFjmDArWHsPGS4gSRKLvDLY7yw7Ddgbm7xY+UqSZR1Z3mp+KUOfKh5sdwm3XHCY1pPZcziDWli7Ma8gdXNkDmgkFSqfAm5wWwJLCrfCq2LMhoYx/5IKHJBPg6DxHeEoyBYZM3knKpEmTJk2qclzwSkkO4PWVZN+XH0lmvmwkmd84bK9/+j8lGX/j9LsZf4v1+x69GfQdEr1t9L0Uv8H0XWd1ph//Z9lOWCPuWQAAAABJRU5ErkJggg=="
                    alt="首页">
                <p>演出</p>
            </router-link>
    </ul>
</template>
<script>
export default {
  data () {
    return {
      daohang: '···'
    }
  },
  methods: {
    divclick () {
      if (this.daohang == '···') {
        this.$refs.myul.style.width = '2.35rem'
        this.daohang = 'X'
        return
      }
      if (this.daohang == 'X') {
        this.$refs.myul.style.width = '0.45rem'
        this.daohang = '···'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  width: 0.45rem;
  border-radius: 0.225rem;
  position: fixed;
  z-index: 100;
  bottom: 1.00rem;
  right: 0.30rem;
  height: 0.45rem;
  background: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  transition: width 0.3s;
}

div {
  width: 0.45rem;
  height: 0.45rem;
  line-height: 0.45rem;
  float: right;
  font-size: 0.26rem;
  color: #fff;
  text-align: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
}

p {
  font-size: 0.11rem;
  // color: rgba(255, 255, 255, 0.7);
  color:white
}

li {
  float: right;
  font-size: 0.16rem;
  width: 0.45rem;
  height: 0.42rem;
  text-align: center;
  padding-top: 0.03rem;
}

img {
  width: 0.20rem;
  height: 0.20rem;
  display: block;
  padding-left: 0.125rem;
}
</style>
