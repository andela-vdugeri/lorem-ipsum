<template>
  <div class="container">
    <div class="panel panel-info">
      <div class="panel-heading">New Staff</div>
      <div class="panel-body">
        <form method="post" @submit.prevent>
          <div class="form-group">
            <label for="firstname">First Name </label>
            <input
              type="text"
              class="form-control"
              placeholder="First Name"
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>