<template>
    <div>
        <ul>
            <router-link v-for="(data,index) in dataList" @click.native="handleclick(index)" :key="index" tag="li" :to="data.path" exactActiveClass="active">
                <img :src="index===ind?data.click:data.img"  alt="">
                <span>{{data.title}}</span>
            </router-link>
        </ul>
    </div>
</template>
<script>

export default {
  methods: {
    handleclick (index) {
      this.ind = index
    }
  },
  mounted () {
    switch (this.$router.history.current.path) {
      case '/':
        this.ind = 0
        break
      case '/goods':
        this.ind = 1
        break
      case '/raise':
        this.ind = 2
        break
      case '/center':
        this.ind = 3
        break
    }
  },
  data () {
    return {
      ind: 0,
      isshow: true,
      dataList: [
        {
          path: '/',
          title: '演出',
          img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRBAMAAABYoVcFAAAALVBMVEUAAAC7u7u+vr7Nzc29vb28vLzIyMi8vLy8vLy8vLy8vLy7u7u8vLy8vLy7u7vgDn5GAAAADnRSTlMAgDMFP4oO7uSFZveyUNN5qdgAAADISURBVEjH7dYxCsJAEIXhISEBQcFcQCJiZZNCsPUEnsHWI9hYWFjmDArWHsPGS4gSRKLvDLY7yw7Ddgbm7xY+UqSZR1Z3mp+KUOfKh5sdwm3XHCY1pPZcziDWli7Ma8gdXNkDmgkFSqfAm5wWwJLCrfCq2LMhoYx/5IKHJBPg6DxHeEoyBYZM3knKpEmTJk2qclzwSkkO4PWVZN+XH0lmvmwkmd84bK9/+j8lGX/j9LsZf4v1+x69GfQdEr1t9L0Uv8H0XWd1ph//Z9lOWCPuWQAAAABJRU5ErkJggg==',
          click: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRBAMAAABYoVcFAAAAMFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABaPxwLAAAAD3RSTlMAgDMFP4p7Du7khWb1slAcm4yZAAAA0ElEQVRIx+3WMQrCQBCF4SEhBARFG1sDopVFCgtLb+AVvIHWHsFGsLHMFSzE1mPYeAhRFkTUZ7s77LhsZ2D+buEjRZp5pNWn8bHjqXsoOVxt4G+9dGFSQWrryhHEXoUN8wpyO1s2ANMnT+kAeJLVBJiSvxkepfM0JJS5HznhJskE2FvPBe6STIG59ezhSlJAW6VKlSpV/pZDduAKSbbA+kiyCdZbkhlYRpL5hd3B85/+T0nG37jw3Yy/xeH7Hr0ZwjsketuE91L8BgvvOq02fQGhvPwiODbJ5wAAAABJRU5ErkJggg=='
        },
        {

          path: '/goods',
          title: '周边',
          img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAMAAACdUboEAAAAWlBMVEUAAAC7u7u8vLy9vb2+vr68vLy8vLy9vb28vLy8vLy8vLzCwsLGxsa8vLy8vLy8vLy8vLy8vLy8vLy9vb29vb2+vr68vLy9vb2+vr6+vr68vLy8vLy+vr67u7susJk5AAAAHXRSTlMAgL9zHfLiRsiwoRMJXJuUhtXPeU8s2ow8JOtoNd2CfNQAAAHiSURBVFjD7ZfdjoIwEIUFFIEWll9/wHn/19wWTUYzmzJ4uNmE78o2zdH2jHPaw87Ov+NWF3FR3zbTK1N6kpab6JmYmNhsINjSOy0umb02nL22nqGCNXnywX0ccvLUmOCRPMlrlMyjI6T44yV+xBDg5BROhm2ax1Blk6M7MJ2fQCo94nN7O9cIUKx83XzM+BqqAMXc1/THTOtrCVCM/R8vNKPnXnaRI/W7jhie6abHqmbTkIKxs0o9m5OS5q61Q83FKHuDnlix8eG58mzCXttHRZ5pWbGYm4Gmesp538uKKS8LKPKX31UNMdIpnskRCjNeddYpWnJclxSTj26TcAP/a6Zh+bAxpzeBnAXFzLx4VEQfx51uQ4oYKHioOPReYXWiVTRcGDqrdcWbgycjm0q6HCynlclmcKuZng8JtloaiVvNvwC0WoZlA1gtuZLDbmQ1d90HaLXMkAk4aAlnCG4134My2Gp58rjVzESOAbRa3oLLzazm9MKtZi6cXrDV3CJHwGpJx27CVsv0wq3m9EKtlumlsxpPLyOs1r+XA8XD5Q/mIZf/dw/m0PXWrhS0YyBqKtk+lff2WvFM0GH7mIKX8YrWEz58m9E3xNiTUFKEzewbWkfbK57WSaQlKY+HnZ0djF91jmepeI/fuwAAAABJRU5ErkJggg==',
          click: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAMAAACdUboEAAAAclBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACa4vOeAAAAJXRSTlMAgHTAHvMFnUcJ4JW6XczIs6URi+bVFdquhXtPOy1oQibsxDVWLP9qxwAAAglJREFUWMPtmNtygjAQhiFIKueDoBwUtbrv/4pNKJ2tphMW15vO8F2RFf4h+ZfdRGdl5d9xbIu4aI9v00tC+CZM3qJXxoDEJV9wn8Jv0j1XUE6CYRZOkpKp2I4yzUldnprxuuUJbkYRMY3EONqwFCMtET0PGUhfKfh7tGkcS05mg6JzkE4HOJnujuv2vK4uQ/FDPV89RCoV+WAo5joBHyI6PXOGoqee92wROpdEuIpQfy0ugpFuuC2xPKmBQNUFRL0gByL1habYAJkDqbjtYAEeYTFPoInPpd3r4BaBZqAlNUSU7LmP855XrPRtkpSPBaG24YdLUTyDYraZbUGx/RnFekmnazMSgGI3pygeZiKwgP8VqfGF7cb4WHFFLiT+iBFcyOucYqZuyhwigmKNT6x/aE1PsFqQdweYGASrSYRYfwkrQ63xIdVqemcr+VYjvVY8M6y2Gcm3Gt+gYFptNsuaa7VZ8AO+1UiiFW+WGz4Nqyk9ZGBabW4HI67Vxj4oY1ttrjzfamQAxYVptbkLTt5mNXYvvtXIAZsj32rsXgyrrW7yrcbX6JlWm92rs1idGlHK1quhWc3vXiVavfi8bEkeTH9mP8T0f+3AbNveBgsFg6vZaljncVmMM7MeE7xtSX/B3rP/0RDBcuyLL7OXBGNpmUXzgmBhN/NeL9RLe9LRmopINs7KygqPLwiLhGvwWobHAAAAAElFTkSuQmCC'
        },
        {

          path: '/raise',
          title: '众筹',
          img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAMAAACdUboEAAAAY1BMVEUAAAC8vLy9vb28vLy9vb28vLy8vLy8vLy8vLy8vLy8vLy9vb29vb29vb28vLzBwcG8vLy8vLzGxsa8vLy8vLy8vLy9vb29vb29vb28vLzDw8O8vLy9vb28vLy8vLy9vb27u7vVMH8pAAAAIHRSTlMA1SmqVH+ya/LdvC9ZPOwXoIYJduWOSx9GlQ/FYcyoNHuQzbEAAAJ6SURBVFjD7dfZlpswDABQQQADxmwJW2CI/v8rWzu7LXEa4KGnzX3JnHiisSyJeODr6/9x7qRS0i9gJwPexd5BSFjiZ6KqQtF3sCTFN6eGC9qW8fO35ukMHA9tqQLXlKAlymogJeiK7LSKFAkVkHIdoe/bTDTpI614glfqhJQMSG9/TIb3LQ/wJPDKO7Z+DYVswx/UfCDpfTXw1I+3zOtHSdA4vB5vpMsDfNYDvMrya8h7y8TmHDLnUzPwlSntOrwkXnsm4fcML/o9ATR9JClYStRMeRr9U94R61zjzoiYABky/h3nbHJWVhJm28Co9OqZGiWz91C/htRnJmBkerUHW5GbvdX6JbeGQ6KpNKdguj/Q74+CWD0nVl2oYifgMn1pkreec5HZYg2sxj16o8ebA9VaCnjSfGrhGSKIERewxGOaK3QjBnqD1khw1R7B4eNNHDXHrJ2q+UQ8RvhNHqmRJ5kRX9Yi3ZMRUn58cDAzd3G7wOVxG6R6NrZ3KcyWLscouaU7VhL+kJ8jcZbB4zFZ+1LJAj6h0Bil0+MlrKRuhT1crIoNsJZ/H5EkVPVLo1Ybrj8lPiRp2VRhej3bDVoPXQI2ydyYE2x0GaxrSwDbdVkT/ZxixNi6imxXWOe4Xb2t1vwta0+n9VO4eIPZU2QuI6uogGTGkF5SsETk+LlcLOW2TgSMI6515AZjvYL//i+lTzrp9qEWZGlmnk+6XjjiZHlCmdvN8gWYndDw84iBXlR7Ruz0olgZkf+PbNg1YqTPf9eI3RiX9dqIvH8wolj3pRzwfSVRS7zPJKhJtkF2fkAWOa6TF2zPpbhG2gGvbebDZ+amha+vr7/KL6UyoZRoTUnRAAAAAElFTkSuQmCC',
          click: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAMAAACdUboEAAAAflBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCtoPsAAAAKXRSTlMA1aoqVYDz+jEJ7Fq5oLJo4I0WS3DahkY/Jua+lVI5HgV7dcSoymAQGuF45+AAAALASURBVFjD7ZfZsqJADIaDCDS7LOICoqIe7fd/wTlp96TbKsGLqRm/G6gEYqfzh7Tw5cv/w3Ftt61Y5PAhGk9ecK1RKeAVi7B0qm06W8MravnEMjMFLWL3/tQ+PYIJS1LqOXB+puQpLwp90DKRnIimlUdSgwNagl9XMpsV4zKLbmm5P/DIfPmwtvttCFrwiQou2M41uQbulJcoVlcsfMhF4RwksgAtuK4M7swOUpH4t5JIxehxexMsD5izbp4s4+Ac8ioZV+1DyN7ag7kyMalD/ZC4b6mEnzMUaEsNETHJmtg2sURUeTK8C07whPLbhoj7X9+EWWOV6RrgiDl7RKEnD5cNBip8g2l1EyldAmzxuiXe7JyBgRC9M2bOVXnmPl4C8oO2i3ltwMBJKkEyxmjfpZreOCrNloAYiz0Fzk71OO4J+c4l6ltB1s02peX2mSoOSlvT4h55gWtrBJxrQ5a8xbkW+fdMcPtWnklvNdiscIGkJUzV3nG7LS+4SdaFRVrtl/JMQ+qsX2Sna3kGaXEThdprrslEUkiLE1jPCa4CjkUWaMCfqJB0lSVaD6JLJpd0dxUvoAE7UImTPljdPpP+QrT2Cd6hdSWys5nGY+jJ/FLYkSAVa6Av9nXMTp25/yDUCnrjx/cJOo3irHKicw8OoLAkJ4VBhDzmDwxENOTYsoLhrMNsZC1dT7rkKDKcnOzjcHw6B4fjDdKj+QTzSQ7qFPBJRuow0odNuxrrwDZ0tZ5V+3LUpIF8nyAFI5HshXmHO9mXztAYnuyLl5vnfyxsLSjIWucQMel5ehbx4Q6d2JN3O9RBFyAm5xF00IOlOSKfr/NPRlyoSTMwIv9H1gyMyEvTfTTieufG/tCInH8wYtpvKK/Mc1JIZGq9x1QiwiSQviSmOR/IfgS5UXO17EO9BjNFth+9xz4r4MuXL38VfwCHHcvpgFb1QgAAAABJRU5ErkJggg=='
        },
        {

          path: '/center',
          title: '我的',
          img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAMAAACdUboEAAAAXVBMVEUAAAC7u7u8vLzMzMzAwMC8vLy8vLy9vb29vb27u7u7u7u8vLy8vLy8vLy8vLy9vb2/v7+/v7+8vLy/v7+8vLy8vLy8vLy8vLy8vLy+vr68vLy8vLy8vLy+vr67u7vx7WqrAAAAHnRSTlMAf/QLGpipZkvUueo33MlsKxO/IrOGX41yQsKfVC/f9KISAAABzElEQVRYw+1Xa5ODIAxUAfFRX9Wqffn/f+aNQXveteIiM8zcnPtRwhqSLCTegQN/DCfZhU3ShJ08efZg0T0dvpHeI2bFx0Uw/EYg+H7/LsT3znnZ6WebLkiyPFvQp+0ewm7efutLpnwu+9v8sTPmq5LJm6L6+b2YPE8qw5Rk6rA+e4+ur46fmSUop03nz5v4mVZzE8KQtojVdUHrIU7o04ZCY1GQhQ+rTpkDP0VVeUaOFFKgMcJotI3ZlqDi0SyCGMn0uml2pR8jhA+qX8CQNPBAK+cJGD7RCgqUi6CTAZgXCTFKLDckB46Jn4QFZTo3UH8MhVGAjAIJJDfRq49EqJwSg6emRG6JyDPQ68kBo/WpHWTGtnrcV7i9Cu1vCue3mf2Na/8quH657F9X+w7AXZdi30m57/aqywB0pNQAQ6hpiNnsmmkM4YgSwslc39nPnPdyq2yTl22snT6yF2mjEwNPFufRT0jL2DRcN3IQsp4BU1zlp7P92mzTqPW4RSdNJrNBV0e1ilpkNA0/1ORTf54sSSjGE3s/bmvXteeZg/R4MP5zRrmyhFz4ckUz+1Gv3fV7IdafYHPoH3cm9nnIdG+M9E0ha+/AgQMW+AJ8M3VRJmM0FgAAAABJRU5ErkJggg==',
          click: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAMAAACdUboEAAAAclBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACa4vOeAAAAJXRSTlMAgHTAHvMFnUcJ4JW6XczIs6URi+bVFdquhXtPOy1oQibsxDVWLP9qxwAAAglJREFUWMPtmNtygjAQhiFIKueDoBwUtbrv/4pNKJ2tphMW15vO8F2RFf4h+ZfdRGdl5d9xbIu4aI9v00tC+CZM3qJXxoDEJV9wn8Jv0j1XUE6CYRZOkpKp2I4yzUldnprxuuUJbkYRMY3EONqwFCMtET0PGUhfKfh7tGkcS05mg6JzkE4HOJnujuv2vK4uQ/FDPV89RCoV+WAo5joBHyI6PXOGoqee92wROpdEuIpQfy0ugpFuuC2xPKmBQNUFRL0gByL1habYAJkDqbjtYAEeYTFPoInPpd3r4BaBZqAlNUSU7LmP855XrPRtkpSPBaG24YdLUTyDYraZbUGx/RnFekmnazMSgGI3pygeZiKwgP8VqfGF7cb4WHFFLiT+iBFcyOucYqZuyhwigmKNT6x/aE1PsFqQdweYGASrSYRYfwkrQ63xIdVqemcr+VYjvVY8M6y2Gcm3Gt+gYFptNsuaa7VZ8AO+1UiiFW+WGz4Nqyk9ZGBabW4HI67Vxj4oY1ttrjzfamQAxYVptbkLTt5mNXYvvtXIAZsj32rsXgyrrW7yrcbX6JlWm92rs1idGlHK1quhWc3vXiVavfi8bEkeTH9mP8T0f+3AbNveBgsFg6vZaljncVmMM7MeE7xtSX/B3rP/0RDBcuyLL7OXBGNpmUXzgmBhN/NeL9RLe9LRmopINs7KygqPLwiLhGvwWobHAAAAAElFTkSuQmCC'
        }
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
*{padding:0;margin:0;}
ul,li{list-style: none;}

div{
    height:0.5rem;width:100%;position:fixed;bottom:0;
      background:white;
    ul{
        display:flex;
        li{
            height:0.5rem;
            display:flex;
            flex:1;
            color:rgb(187, 187, 187);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 0.1rem;
        img{
           width:0.27rem ;height:0.27rem
        }
    }
}
}

.active{
    color: rgb(0, 0, 0);
}
</style>
