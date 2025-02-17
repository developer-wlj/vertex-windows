<template>
  <div style="font-size: 24px; font-weight: bold;">清除历史记录</div>
  <a-divider></a-divider>
  <div class="clearHistory">
    <div style="text-align: left; ">
      <a-form
        labelAlign="right"
        :labelWrap="true"
        :model="obj"
        size="small"
        @finish="clearHistory"
        :labelCol="{ span: 3 }"
        :wrapperCol="{ span: 21 }"
        autocomplete="off"
        :class="`container-form-${ isMobile() ? 'mobile' : 'pc' }`">
        <a-form-item
          label="注意事项"
          :rules="[{ required: true, message: '${label}不可为空! ' }]">
          清除历史记录包含 RSS 记录，流量统计记录等，不包含任务配置、组件配置等内容，清除后最好重启重启。
        </a-form-item>
        <a-form-item
          :wrapperCol="isMobile() ? { span:24 } : { span: 21, offset: 3 }">
          <a-button type="primary" html-type="submit" style="margin-top: 24px; margin-bottom: 48px;">执行</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      obj: {}
    };
  },
  methods: {
    isMobile () {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
    },
    async clearHistory () {
      try {
        const res = await this.$api().setting.clearHistory();
        await this.$message().success(res.message);
      } catch (e) {
        await this.$message().error(e.message);
      }
    }
  },
  async mounted () {
  }
};
</script>
<style scoped>
</style>
