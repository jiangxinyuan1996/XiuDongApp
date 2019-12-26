<template>
  <div id="wrap" v-if="datalist">
    <div class="top">
      <div class="title">{{datalist.title}}</div>
      <div class="top_bottom">
        <div class="raise">预售</div>
        <div>{{datalist.raiseTypeView}}</div>
      </div>
    </div>
    <!--     -->
    <img :src="datalist.poster" alt />
    <div class="middle">
      <div class="middle_top">
        <div class="raiseMoney">
          ￥{{datalist.raiseMoney}}
          <span>目标金额</span>
        </div>
        <div class="percent">{{datalist.percent}}%</div>
      </div>
      <div class="lang">
        <span :style="{'width':datalist.percent+'%'}"></span>
      </div>
      <!--  -->
      <div class="middle_bottom">
        <span>
          <i>{{'￥'+datalist.hadRaisedMoneny}}</i> 已筹
        </span>
        <span>
          <i>{{datalist.supportNum}}</i> 支持
        </span>
        <span>
          <i>{{datalist.leftDay}}</i> 天剩余
        </span>
      </div>
      <div class="raiseModel">{{datalist.raiseModel}}</div>
      <!-- 乐队头像 -->
      <div class="bottom">
        <img :src="datalist.promoterInfo.avatar" alt />
        <div class="bottom_right">
          <div class="bottom_right_top">{{datalist.promoterInfo.name}}</div>
          <div class="bottom_right_bottom">项目发起人</div>
        </div>
      </div>
    </div>
    <!-- 项目介绍 -->
    <div class="footer">
      <div class="project">项目介绍</div>
      <div class="introduce" v-html="datalist.introduce"></div>
    </div>
    <!-- 最下面 -->
    <div class="down">
      <div class="down_left" @click="handleclick">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAMAAACdUboEAAAAflBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCtoPsAAAAKXRSTlMA1aoqVYDz+jEJ7Fq5oLJo4I0WS3DahkY/Jua+lVI5HgV7dcSoymAQGuF45+AAAALASURBVFjD7ZfZsqJADIaDCDS7LOICoqIe7fd/wTlp96TbKsGLqRm/G6gEYqfzh7Tw5cv/w3Ftt61Y5PAhGk9ecK1RKeAVi7B0qm06W8MravnEMjMFLWL3/tQ+PYIJS1LqOXB+puQpLwp90DKRnIimlUdSgwNagl9XMpsV4zKLbmm5P/DIfPmwtvttCFrwiQou2M41uQbulJcoVlcsfMhF4RwksgAtuK4M7swOUpH4t5JIxehxexMsD5izbp4s4+Ac8ioZV+1DyN7ag7kyMalD/ZC4b6mEnzMUaEsNETHJmtg2sURUeTK8C07whPLbhoj7X9+EWWOV6RrgiDl7RKEnD5cNBip8g2l1EyldAmzxuiXe7JyBgRC9M2bOVXnmPl4C8oO2i3ltwMBJKkEyxmjfpZreOCrNloAYiz0Fzk71OO4J+c4l6ltB1s02peX2mSoOSlvT4h55gWtrBJxrQ5a8xbkW+fdMcPtWnklvNdiscIGkJUzV3nG7LS+4SdaFRVrtl/JMQ+qsX2Sna3kGaXEThdprrslEUkiLE1jPCa4CjkUWaMCfqJB0lSVaD6JLJpd0dxUvoAE7UImTPljdPpP+QrT2Cd6hdSWys5nGY+jJ/FLYkSAVa6Av9nXMTp25/yDUCnrjx/cJOo3irHKicw8OoLAkJ4VBhDzmDwxENOTYsoLhrMNsZC1dT7rkKDKcnOzjcHw6B4fjDdKj+QTzSQ7qFPBJRuow0odNuxrrwDZ0tZ5V+3LUpIF8nyAFI5HshXmHO9mXztAYnuyLl5vnfyxsLSjIWucQMel5ehbx4Q6d2JN3O9RBFyAm5xF00IOlOSKfr/NPRlyoSTMwIv9H1gyMyEvTfTTieufG/tCInH8wYtpvKK/Mc1JIZGq9x1QiwiSQviSmOR/IfgS5UXO17EO9BjNFth+9xz4r4MuXL38VfwCHHcvpgFb1QgAAAABJRU5ErkJggg=="
          alt
        />
        众筹
      </div>
      <div class="down_right" @click="suppertclick" >{{datalist.supportButtonView}}</div>
    </div>
    <mmenu></mmenu>
  </div>
</template>
<script>
import axios from 'axios'
import mmenu from '@/components/menu'
import { Indicator } from 'mint-ui'

export default {
  components: {
    mmenu
  },
  data () {
    return {
      datalist: null
    }
  },
  methods: {
    handleclick () {
      this.$router.push(`/raise`)
    },
    suppertclick () {
      this.$router.push(`/center`)
    }

  },
  mounted () {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    axios
      .post(
        '/api/wap/raise/detail.json',
        `raiseId=${this.$route.params.id}&st_flpv=1576809246743lc4Rm4MG296HhsPTPatz&sign=&trackPath=&terminal=wap`
      )
      .then(res => {
        Indicator.close()

        this.datalist = res.data.result.raiseVo
        // console.log(res.data.result.raiseVo.introduce)
      })
  },
  beforeMount () {
    //   this.$store.state.isShow=false
    this.$store.commit('hide')
  },
  beforeDestroy () {
    //   this.$store.state.isShow=true
    this.$store.commit('show')
  }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
img {
  display: block;
  width: 100%;
}
ul,
li {
  list-style: none;
}
#wrap{
    width:100%;
    margin-bottom:0.6rem;
}

span {
  font-size: 0.12rem;
  color: #999999;
}
i {
  font-style: normal;
  font-size: 0.16rem;
  color: black;
}
.title {
  font-size: 0.16rem;
}
.top {
  padding: 0.15rem;
}
.top_bottom {
  font-size: 0.12rem;

  margin-top: 0.15rem;
  display: flex;
  // justify-content: space-between;
  div {
    float: left;
    color: #999999;
  }
  .raise {
    border-radius: 0.03rem;
    border: 0.01rem solid #eb484a;
    padding: 0 0.1rem;
    color: #eb484a;
    margin-right: 0.1rem;
  }
}
.middle {
  padding: 0 0.15rem;

  .middle_top {
    padding: 0.15rem 0;
    display: flex;
    justify-content: space-between;
    .raiseMoney {
      font-size: 0.16rem;
    }
    .percent {
      color: #eb484a;
      font-size: 0.12rem;
    }
  }
  .lang {
    height: 0.04rem;
    background: #f8f8f8;
    //   margin: 0.17rem 0 0.15rem;
    overflow: hidden;
    span {
      display: block;
      height: 100%;
      // width:48%;
      background: #eb484a;
    }
  }
}
.middle_bottom {
  padding: 0.15rem 0;
  display: flex;
  justify-content: space-between;
}
.raiseModel {
  font-size: 0.12rem;
  color: #eb484a;
}
.bottom {
  border-top: 0.5px solid #ebebeb;
  //   background:pink;
  margin-top: 0.15rem;
  padding: 0.15rem 0;
  display: flex;
  align-items: center;
  img {
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 0.15rem;
  }
  .bottom_right {
    font-size: 12px;
    color: #999999;
    // float:left;
    .bottom_right_top {
      font-size: 14px;
      color: #333333;
    }
  }
}
.footer {
  margin: 0.08rem 0 0.6rem 0;
  padding: 0 0.15rem 0.1rem 0.15rem;

  .project {
    font-size: 0.15rem;
    padding: 0.15rem 0;
  }
  .introduce {
    width:100%;object-fit: fill;
    font-size: 0.14rem;
    color: #666666;
  margin-bottom:0.5rem;
    .txp_shadow {
      position: absolute;
      z-index: 2;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    .txp_video_container{
        width:100%;
    }
  }
}
.down {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 0.5rem;
  display: flex;
    background:white;
  .down_left {
    flex: 2;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    text-align: center;
    height: 0.49rem;
    border-top: 0.005rem #ebebeb solid;
    img {
      width: 0.18rem;
      height: 0.18rem;
    }
  }
  .down_right {
    flex: 3;
    font-size: 0.16rem;
    line-height: 0.5rem;
    text-align: center;
    color: #fff;
    background: #eb484a;
  }
}
</style>
