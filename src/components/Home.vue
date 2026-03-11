<template>
  <div>
    <div class="info">
      <h1 class="name">{{ name }}</h1>
      <p>
        电话: <strong class="tel">{{ tel }}</strong>
        邮件: <strong class="email">{{ email }}</strong>
      </p>
    </div>

    <div class="contact">
      <h4>个人基本信息</h4>
      <hr>
      <div class="info-grid">
        <div class="info-item">
          主页: <strong><a :href="'https://' + website" target="_blank">{{ website }}</a></strong>
        </div>
        <div class="info-item">
          政治面貌: <strong>{{ politicalStatus }}</strong>
        </div>
        <div class="info-item">
          民族: <strong>{{ nation }}</strong>
        </div>
        <div class="info-item">
          生日: <strong>{{ birthday }}</strong>
        </div>
        <div class="info-item">
          籍贯: <strong>{{ nativePlace }}</strong>
        </div>
        <div class="info-item">
          毕业时间: <strong>{{ graduationDate }}</strong>
        </div>
      </div>
    </div>

    <div class="edu">
      <h4>教育背景</h4>
      <hr>
      <List :source="edus"></List>
    </div>

    <div class="skills">
      <h4>技能清单</h4>
      <hr>
      <Skills :skills="skills"></Skills>
    </div>

    <div v-if="works" class="interns">
      <h4>工作经历</h4>
      <hr>
      <List :source="works"></List>
    </div>

    <div class="projects">
      <h4>个人项目</h4>
      <hr>
      <List :source="projects"></List>
    </div>
  </div>
</template>

<script>
import List from './List';
import Skills from './Skills';
import info from '../assets/info';

export default {
  name: 'Home',
  data() {
    return info
  },
  components: {
    List,
    Skills
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.info {
  .name {
    text-align: center;
  }

  p {
    text-align: center;
  }
}

.contact {
  .info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 8px 0;
  }

  .info-item {
    display: flex;
    align-items: center;
  }
}

a {
  color: #42b983;
  text-decoration: none;
}
</style>
