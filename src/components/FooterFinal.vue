<script setup lang="ts"></script>
<template>
  <footer class="flex footer-custom text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <span>&copy; 2024 My Website</span>
      <div class="contacts">
        <span>Contacts</span>
        <div class="social-icons">
          <a href="https://www.instagram.com/fra.sortino/" target="_blank">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/FFFFFF/instagram-new--v1.png"
              alt="instagram-new--v1"
            />
          </a>
          <a href="https://www.youtube.com/@frasortino/videos" target="_blank">
            <img width="64" height="64" src="https://img.icons8.com/sf-black-filled/64/FFFFFF/youtube-play.png" alt="youtube-play"/>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-custom {
  background-color: rgb(32, 32, 34);
  height: 20vh;
}

.contacts {
  text-align: right;
}

.social-icons {
  display: flex;
  gap: 8px; /* Adjust the space between icons as needed */
  align-items: center;
  margin-top: 4px; /* Adjust the space between the text and icons as needed */
}

.social-icons a img {
  width: 24px; /* Adjust icon size as needed */
  height: 24px; /* Adjust icon size as needed */
}
</style>
