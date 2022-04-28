const Home = {
  data() {
    return {
      visiable: false,
    };
  },
  template: `
      <div class="common-layout">
        <el-container>
          <el-header height="60px">
            <my-header></my-header>
          </el-header>
          <el-container>
            <el-aside width="200px">
              <side-bar></side-bar>
            </el-aside>
            <el-main>
              <router-view></router-view>
            </el-main>
          </el-container>
          <el-footer height="20px">
              <my-footer></my-footer>
            </el-footer>
          </el-container>
        </el-container>
      </div> 
  `
};

export default Home;

