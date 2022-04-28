const SideBar = {
  template: `
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <span>学生信息管理</span>
              </template>
              <el-menu-item index="1-1">
                <el-button type="text" @click="gotoSudentGradesPage">学生成绩</el-button>
              </el-menu-item>
              <el-menu-item index="1-2">item one</el-menu-item>
              <el-menu-item index="1-3">item three</el-menu-item>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <span>教室信息管理</span>
              </template>
              <el-menu-item index="2-1">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Two</span>
              </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <span>课表信息管理</span>
              </template>
              <el-menu-item index="3-1" disabled>
                <el-icon><document /></el-icon>
                <span>Navigator Three</span>
              </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>
                <span>社团信息管理</span>
              </template>
              <el-menu-item index="4-1">
                <el-icon><setting /></el-icon>
                <span>Navigator Four</span>
              </el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-col>
    </el-row>
  `,
  methods: {
    gotoSudentGradesPage() {
      console.log('gotoSudentGradesPage method executed')
      this.$router.push('/student/grades');
    }
  },
}


export default SideBar; 
