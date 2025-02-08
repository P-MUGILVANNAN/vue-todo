<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <div>
    <div>
      <h1 class="text-secondary text-center mt-5">TO DO LIST</h1>
    </div>
    <div class="container mt-5">
      <div class="row align-items-center text-center">
        <div class="col-12 col-md-6 col-sm-12 col-lg-6">
          <img src="../assets/todo.png" alt="">
        </div>
        <div class="col-12 col-md-6 col-sm-12 col-lg-6">
          <div>
            <h2 class="fs-1">ACTION</h2>
          </div>
          <div class="mt-5">
            <RouterLink to="/addtask"><button class="btn btn-secondary btn-lg border-warning">Add Task</button>
            </RouterLink>
            <RouterLink to="/viewtask"><button class="btn btn-success btn-lg border-secondary text-white ms-4">View
                Task</button></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 500px;
}
</style>
