<template>
    

<div class ="w-screen h-screen flex">
    <!-- Side bar -->
   
<div class="w-[400px] h-full bg-gray-200 text-gray-900" v-show="showSide">
   <div class="h-[50px] bg-white flex justify-start items-center ">
        <div class="px-[20px]">
          <img src="../../assets/goteam_logo.png" class="h-8 mr-3" alt="goteam Logo" />
        </div>
    </div>
    <div class="h-[calc(100vh-50px)] bg-blue-50 py-[20px] ">
      <div class="flex flex-col justify-between h-full px-[20px] space-y[10px]">
       <div class="flex flex-col justify-between space-y-[10px]">
       

       
        <router-link to="/profile" class="inline flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:gb-gray-300 text-gray-400">
            <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/administrator-male.png" alt="administrator-male"/>
            Profile
        </router-link>
        <router-link to="/resume" class="inline flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:gb-gray-300 text-gray-400">
            <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/document--v1.png" alt="document--v1"/>
            Resume
        </router-link>
        <router-link to="/assessment" class="inline flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:gb-gray-300 text-gray-400">
            <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/graph.png" alt="graph"/>
            Assessment
        </router-link>
        <router-link to="/video" class="inline flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:gb-gray-300 text-gray-400">
            <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/laptop-play-video.png" alt="laptop-play-video"/>
            Video Script
        </router-link>
 

       </div>
    </div>
    </div>

</div>
<div class="w-full h-full bg-gray-400">
    <div class="h-[50px] bg-white flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b">
      <!--  Hamburger Menu -->
      <div class="cursor pointer w-[30px]" @click="toggleSidebar">
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
        <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
        <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <!-- Search bar -->
      <div class="w-[calc(100%-30px)] flex">
        <div class="w-[calc(100%-200px)] flex justify-center">
      <form class="flex items-center w-[500px]">   
    <label for="default-search" class="mb-2 text-sm font-sm text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative w-full">
        <!-- <div class="flex absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div> -->
        <input type="search" id="default-search" class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type for job title or roles" required>
        <button type="submit" class="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Search</button>
    </div>
</form>
</div>
      <!-- User login -->
      <div class="w-[200px]">
        <div class="flex items-center justify-start space-x-4" @click="toggleDrop">
          
          <div class="font-semibold dark:text-white text-right">
            <div>Reyven Biloy</div>
            <div class="text-xs text-blue-400 dark:text-gray-400">reyvenb@gmail.com</div>
          </div>
          <img src="../../assets/avatar.png" class="h-8 mr-3" alt="#" />
        </div>
      </div>
      <!-- <div v-show="showDropdown" class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ">
        <div class="py-1 text left" role="none">
          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuItem" tabindex="-1" id="menu-item-0">Account settings</a>
        </div>
      </div> -->
</div>
    </div>
    
    <div class="h-[calc(100vh-50px)] bg-white p-[20px]">
        <div class="border border gray-300 rounded-md p-[20px] h-full">
          <router-view></router-view>
        </div>
    </div>

</div>
    <!-- Main -->
</div>
</template>

<script>
export default {
  data() {
    return{
      showDropdown: false,
      showSide: true
    }
  },
  methods:{
    toggleSidebar(){
      this.showSide = !this.showSide
    },
    toggleDrop(){
      this.showDropdown = !this.showDropdown
    }
  }

}
</script>

<style>

</style>