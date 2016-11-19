<template>
  <div class="container margin-top">
    <div class="row">
      <div class="col-md-6 col-md-offset-5">
        <div class="panel panel-default">
          <div class="panel-heading">Update Profile</div>
          <div class="panel-body">
            <form method="post" @submit.prevent>
              <div class="form-group">
                <label for="profile-image">Profile Image</label>
                <img class="profile-picture" :src="user.image">
              </div>
              <div class="form-group">
                <label for="parent-name">Parent's Names</label>
                <input 
                  type="text" 
                  id="parent-name" 
                  class="form-control"
                >
              </div>

              <div class="form-group">
                <label for="parent-address">Parent's Contact Address Line 1</label>
                <input 
                  type="text" 
                  id="parent-address" 
                  class="form-control"
                >
              </div>

              <div class="form-group">
                <label for="parent-address">Parent's Contact Address Line 2</label>
                <input 
                  type="text" 
                  id="parent-address" 
                  class="form-control"
                >
              </div>

              <div class="form-group">
                <label for="parent-phone">Parent's Contact Phone</label>
                <input 
                  type="text" 
                  id="parent-phone" 
                  class="form-control"
                >
              </div>

              <div class="form-group">
                
                <input 
                  type="submit" 
                  id="submit" 
                  class="btn btn-primary pull-right"
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          image: 'http://placehold.it/100x100',
        }
      }
    }
  }
</script>