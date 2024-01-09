<template>
  <div class="background-container">
    <video autoplay loop muted :src="videoSrc" class="background-video"></video>
    <div class="page-content">
      <div class="text-container">
        <h2>DKR personal web</h2>
        <hr />
        <p v-text="poem"></p>
        <router-link to="/">
          <button class="cta">
            <span>进入首页</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
  
  <script>
import videoSrc from "@/images/sumian.mp4";
import request from "@/utils/request";

export default {
  name: "NewHome",
  data() {
    return {
      poem: "111",
      videoSrc: videoSrc,
    };
  },
  methods: {
    getPoem() {
      request({
        url: "https://api.xygeng.cn/one",
        method: "get",
      }).then((rs) => {
        this.poem = rs.data.data.content;
      });
    },
  },
  created() {
    this.getPoem();
  },
};
</script>
  
  <style>
.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.page-content {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.page-content h2 {
  font-size: 50px; /* 这里是给标题设置的字体大小，您可以根据自己的需要进行修改 */
  color: #fff; /* 这里是给标题设置的字体颜色，您也可以根据自己的需要进行修改 */
  text-shadow: 3px 1px rgba(0, 0, 0, 0.5); /* 这里是给标题设置的阴影效果，您也可以根据自己的需要进行修改 */
}

.page-content p {
  color: #fff;
  margin: 1rem 0 1rem 0;
}

.text-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 500px; /* 将宽度设置为固定值 */
  margin: auto; /* 实现水平居中对齐 */
}

.cta {
  position: relative;
  margin: auto;
  padding: 12px 18px;
  transition: all 0.2s ease;
  border: none;
  background: none;
  cursor: pointer;
}

.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 50px;
  background: #b1dae7;
  width: 45px;
  height: 45px;
  transition: all 0.3s ease;
}

.cta span {
  position: relative;
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #234567;
}

.cta svg {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #234567;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}

.cta:hover:before {
  width: 100%;
  background: #b1dae7;
}

.cta:hover svg {
  transform: translateX(0);
}

.cta:active {
  transform: scale(0.95);
}

a:hover {
    background-color: rgba(255, 255, 255, 0);
}
</style>