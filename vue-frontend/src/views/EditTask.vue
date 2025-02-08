<script>
import axios from 'axios';

export default {
    data() {
        return {
            updatedTask: {
                task: '',
                completed: false
            },
            id: this.$route.params.id // Get the task ID from the route
        }
    },
    methods: {
        updateTask() {
            axios.put(`http://localhost:8080/updatetask/${this.id}`, this.updatedTask)
                .then((response) => {
                    console.log('Task updated successfully:', response.data);
                    alert("Task updated successfully");
                })
                .catch(error => {
                    console.error('There was an error updating the task:', error);
                });
        }
    }
}
</script>
<template>
    <div>
        <div class="mt-5">
            <h1 class="text-primary text-center">Edit Task</h1>
        </div>
        <div class="container mt-5">
            <div class="row align-items-center">
                <div class="col">
                    <img src="../assets/tasks1.jpeg" alt="">
                </div>
                <div class="col">
                    <form @submit.prevent="updateTask">
                        <p>
                            <label class="fw-bold fs-4">Task:</label>
                            <input type="text" placeholder="Enter Task" class="form-control w-100 mt-2"
                                v-model="updatedTask.task" />
                        </p>
                        <p class="fw-bold fs-4">Completed:
                            <input type="checkbox" class="form-check-input mt-2" v-model="updatedTask.completed" />
                        </p>
                        <button type="submit" class="btn btn-primary mt-3 ">Update Task</button>
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