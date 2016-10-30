<template>
  <div class="container">
    <div class="col-md-3 col-md-offset-11">
      <router-link to="/student" class="btn btn-primary">New Student</router-link>
      <router-link :to="{ name: 'student-profile', params: {id: 1 }}" class="btn btn-primary">Update Profile</router-link>
    </div>
    <hr>
    <div class="col-md-6"></div>
  </div>
</template>