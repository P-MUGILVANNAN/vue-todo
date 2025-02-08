<script>
import axios from 'axios';

export default {
  data() {
    return {
      task: {
        task: '',
        completed: false
      }
    };
  },
  methods: {
    handleSubmit() {
      this.addTask();
    },
    addTask() {
      axios.post('http://localhost:8080/createtask', this.task)
        .then(response => {
          console.log('Task added successfully:', response.data);
          alert("Task added successfully");
          // Optionally, you can reset the form or handle the response as needed
          this.task.task = '';
          this.task.completed = false;
        })
        .catch(error => {
          console.error('There was an error adding the task:', error);
        });
    }
  }
};
</script>

<template>
  <div>
    <div class="mt-5">
      <h1 class="text-primary text-center">Add Task</h1>
    </div>
    <div class="container mt-5">
      <div class="row align-items-center">
        <div class="col">
          <img src="../assets/tasks1.jpeg" alt="">
        </div>
        <div class="col">
          <form @submit.prevent="handleSubmit">
            <p>
              <label class="fw-bold fs-4">Task:</label>
              <input type="text" placeholder="Enter Task" class="form-control w-100 mt-2" v-model="task.task" />
            </p>
            <p class="fw-bold fs-4">Completed:
              <input type="checkbox" class="form-check-input mt-2" v-model="task.completed" />
            </p>
            <button type="submit" class="btn btn-primary mt-3 ">Add Task</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 500px;
  width: 100%;
}
</style>
