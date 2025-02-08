<script>
import axios from 'axios';

export default {
  name: 'viewtask',
  data() {
    return {
      tasks: []
    }
  },
  methods:{
    getTasks(){
      axios.get("http://localhost:8080/gettasks")
      .then(response => {
        const data = response.data;
        this.tasks = data;
      })
      .catch((err)=>{
        console.log(err);
      })
    },
    deleteTask(taskId){
      axios.delete(`http://localhost:8080/deletetask/${taskId}`)
      .then(() => {
        alert('Task deleted successfully');
        this.tasks = this.tasks.filter(task => task._id !== taskId);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  },
  mounted(){
    this.getTasks();
  }
}
</script>

<template>
  <div class="mt-5">
    <div>
      <h1 class="text-success text-center">View Tasks</h1>
    </div>
    <div class="container mt-5">
      <table class="table table-bordered table-secondary text-center">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Task Name</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(task, index) in tasks" :key="task.id">
            <td>{{ index + 1 }}</td>
            <td>{{ task.task }}</td>
            <td>{{ task.completed }}</td>
            <td>
                <RouterLink :to="'/edittask/' + task._id"><button class="btn btn-secondary">Edit</button></RouterLink>
              <button @click="deleteTask(task._id)" class="btn btn-danger ms-2">Delete</button>
            </td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
