<template>
  <div class="p-16">
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div class="max-w-md mx-auto bg-transparent rounded-xl overflow-hidden md:max-w-2xl">
        <div class="md:shrink-0">
          <div class="relative">
            <img class="h-48 w-full object-cover md:h-full md:w-48" src="../assets/profile.png" alt="">
          </div>
        </div>
      </div>
      <div class="p-20">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"></div>
        <h1 class="block mt-1 text-3xl font-medium text-gray-700">Divina Lacu</h1>
        <p class="mt-2 text-secondary-6 ">divinalacu@gmail.com</p>
      </div>
    </div>
    <div class="-mx-3 md:flex mb-6">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="uppercase tracking-wide text-lg text-bold block text-secondary-6 mb-2" for="company">
          Full Name:
        </label>
        <p class="text-lg text-brandDark-9 justify-center mt-5">Divina Lacu</p>
        <div>
        </div>
      </div>
      <div class="md:w-1/2 px-3">
        <label class="uppercase tracking-wide text-lg text-bold block text-secondary-6 mb-2" for="title">
          Job/Position
        </label>
        <p class="text-lg text-brandDark-9 justify-center mt-5">Employee</p>
      </div>
      <div class="md:w-1/2 px-3">
        <label class="uppercase tracking-wide text-lg text-bold block text-secondary-6 mb-2" for="title">
          Clinic Branch
        </label>
        <p class="text-lg text-brandDark-9 justify-center mt-5">Cainta</p>
      </div>
    </div>
    <div class="-mx-3 md:flex mb-6">
    </div>
    <div class="-mx-3 md:flex mb-2">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="uppercase tracking-wide text-lg text-bold block text-secondary-6 mb-2" for="location">
          Email Address
        </label>
        <p class="text-lg text-brandDark-9 justify-center mt-5">divinalacu@yahoo.com</p>
      </div>
      <div class="md:w-1/2 px-3">
        <label class="uppercase tracking-wide text-lg text-bold block text-secondary-6 mb-2" for="job-type">
          Phone Number
        </label>
        <p class="text-lg text-brandDark-9 justify-center mt-5">09251874563</p>
      </div>
      <div class="md:w-1/2 px-3">
        <label class="uppercase tracking-wide text-lg text-bold block text-secondary-6 mb-2" for="department">
          Roles
        </label>
        <p class="text-lg text-brandDark-9 justify-center mt-5">Inventory Staff</p>
        <div>
        </div>
      </div>
    </div>
    <div class="-mx-3 md:flex mt-12">
      <div class="md:w-full px-3 text-center">
        <a href="/accountedit" type="editinfo" class="assumpta-btn-secondary">
          <span class="w-64 assumpta-btn-span">
            EDIT ACCOUNT INFO
          </span></a>
      </div>
    </div>
  </div>

</template>
