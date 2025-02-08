<template>
    <nav class="navbar navbar-expand-lg bg-secondary fs-5">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/"><i class="fa-solid fa-list-check"></i> To Do List</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav gap-lg-5 mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link active" aria-current="page" to="/"><i class="fa-solid fa-home"></i> Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/addtask"><i class="fa-solid fa-plus"></i> Add Task</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/viewtask"><i class="fa-regular fa-pen-to-square"></i> View Task</RouterLink>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped></style>