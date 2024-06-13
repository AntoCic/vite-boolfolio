<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="bg-light text-center">Contact</h1>
      </div>
      <div class="col-12">
        <form action="" method="POST">

          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" name="name" id="name" placeholder="ex.Mario Rossi">
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" name="email" id="email" placeholder="ex.mario.rossi@gmail.com">
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" name="message" id="message" rows="3"></textarea>
          </div>

          <button type="submit" class="btn btn-outline-success">Invia</button>
        </form>
      </div>
    </div>
  </div>
  <div class="text-white">
    <hr>
  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
label{
  color: white;
}
</style>