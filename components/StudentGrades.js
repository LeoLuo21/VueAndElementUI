const StudentGrades = {
  template: `
    <div class=".affix-container">
      <h5>学生成绩信息: </h5>
      <el-table :data="grades.slice((currentPage-1)*pageSize,currentPage*pageSize)" :height="tableHeight">
        <el-table-column prop="sNo" label="SNo"/>
        <el-table-column prop="sName" label="SName"/>
        <el-table-column prop="subject" label="Subject" />
        <el-table-column prop="score" label="Score" />
        <el-table-column prop="invigilator" label="Invigilator" />
        <el-table-column prop="papersExaminer" label="PapersExaminer" />
        <el-table-column prop="classroomNo" label="ClassroomNo" />
        <el-table-column prop="timing" label="Timing" />
        <el-table-column prop="extraInfo" label="ExtraInfo" />
        <el-table-column align="right">
          <template #header>
            <el-input v-model="searchText" size="small" placeholder="Type to search" clearable
                      @change="search" @input="afterChange"
            />
          </template>
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button>
          </template>
      </el-table-column>
      </el-table>
      <el-affix>
        <el-pagination v-model:page-size="pageSize"
                       v-model:current-page="currentPage"
                       :total="totalNum"
                       :current-page="currentPage"
                       layout="prev, pager, next ,jumper"></el-pagination>
      </el-affix>
    </div>
  `,
  data() {
    return {
      tableHeight: window.innerHeight - 300,
      grades: [],
      currentPage:1,
      pageSize: 6,
      searchText: '',
    }
  },
  methods: {
    afterChange() {
      if(!this.searchText) {
        this.getAll();
      }
    },
    getAll() {
      console.log('getAll ...')
      window.fetch('http://localhost:9999')
        .then((response) => {
          console.log(response.status);
          console.log(response.status);
        })
      /*
      let xhr = new XMLHttpRequest();
      xhr.open('get','http://localhost:9999',true)
      xhr.onreadystatechange = function() {
        console.log('获取数据完成')
        if(xhr.readyState == 4) {
            console.log('readyState == 4')
          if((xhr.status >=200 && xhr.status < 300) || xhr.status == 304) {
            console.log(xhr.responseText);
          }
          else {
            console.log('unsuccessful: ' + xhr.status);
          }
        }
      }f
      */
      //xhr.open('get','http://localhost:9999',true);
      //xhr.send(null);
    },
    getAll1() {
      this.grades = [];
      const req = indexedDB.open('School', 1);
      req.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction('grade');
        const store = transaction.objectStore('grade');
        const request = store.openCursor();
        request.onsuccess = (event) => {
          const cursor = event.target.result;
          if (cursor) {
            const data = cursor.value;
            this.grades.push(data);
            cursor.continue();
          }
        }
      }
      req.onerror = (event) => {
        indexedDB.deleteDatabase('School');
        alert('数据库打开失败');
      }
    },
    inputChanged() {
      getAll();
    },
    search() {
      if(!this.searchText) {
        //alert('请输入搜索内容');
        return;
      }
      this.grades = [];
      const req = indexedDB.open('School', 1);
      req.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction('grade');
        const store = transaction.objectStore('grade');
        const request = store.openCursor();
        request.onsuccess = (event) => {
          const cursor = event.target.result;
          if (cursor) {
            const data = cursor.value;
            for (const value of Object.values(data)) {
              if(value == this.searchText) {
                this.grades.push(data);
              }
            }
            cursor.continue();
          }
        }
      }
      req.onerror = (event) => {
        indexedDB.deleteDatabase('School');
        alert('数据库打开失败');
      }     
    }
  },
  computed: {
    totalNum() {
      return this.grades.length;
    },
  },
  created() {
    this.getAll();
  }
}

export default StudentGrades;
