<template>
  <transition name="modal-animation">
    <div v-show="modalActiveChangeRole"
      class="modal bg-black shadow-md p-7 z-20 flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-opacity-20">
      <transition name="modal-animation-inner">
        <div v-show="modalActiveChangeRole"
          class="modal-inner relative md:w-2/5 shadow-md bg-neutrals-1 p-9 h-fit rounded-lg">
          <div @click="close" class="close-icon">
            <i class="fa-solid fa-xmark cursor-pointer text-neutrals-5 absolute right-5 hover:text-neutrals-7"></i>
          </div>

          <!-- Modal Content -->
          <!-- <slot /> -->
          <div class="fixed inset-0 z-10 overflow-y-auto">
            <AdminModalRole @close="toggleModalAdminConf" :modalActiveAdminConf="modalActiveAdminConf" />
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div
                class="h-96 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-white px-5 pt-5 sm:px-10 sm:pb-4">
                  <div class="sm:flex justify-center">
                      <h3 class="text-2xl font-medium leading-6 text-gray-900" id="modal-title">Change Roles</h3>
                    </div>
                  </div>
              
                <div class="flex justify-center w-fulL mb-2 sm:flex sm:px-10">
                  <button @click="toggleModalAdminConf">
                    <a type="editinfo" class="assumpta-btn-secondary">
                      <span class="w-64 font-bold text-base assumpta-btn-span">
                        INVENTORY ADMIN
                      </span></a>
                  </button>
                </div>
                <div class="flex justify-center w-fulL mb-2 sm:flex sm:px-6">
                  <button @click="toggleModalAdminConf">
                    <a type="editinfo" class="assumpta-btn-secondary">
                      <span class="w-64 font-bold text-base assumpta-btn-span">
                        INVENTORY STAFF
                      </span></a>
                  </button>
                </div>
                <div class="flex justify-center w-fulL mb-2 sm:flex sm:px-6">
                  <button @click="toggleModalAdminConf">
                    <a type="editinfo" class="assumpta-btn-secondary">
                      <span class="w-64 font-bold text-base assumpta-btn-span">
                        NON-INVENTORY STUFF
                      </span></a>
                  </button>
                </div>
                <div class="flex justify-center mb-5 sm:flex sm:px-6">
                  <button @click="toggleModalAdminConf">
                    <a type="cantaccess" class="assumpta-gradient">
                      <span class="w-48 font-bold text-base text-white flex justify-center">
                        CAN'T ACCESS
                      </span></a>
                  </button>
                </div>
                <div class="flex justify-center w-full mb-5 sm:flex sm:px-6">
                  <a href="/userroles" type="cancel" class="assumpta-btn-secondary">
                    <span class="w-32 font-bold text-base assumpta-btn-span">
                      CANCEL
                    </span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </transition>
    </div>
  </transition>
</template>

<script>
import AdminModalRole from './AdminModalRole.vue';
import { ref } from 'vue'

export default {
  props: ["modalActiveChangeRole"],
  name: "ChangeModalRole",
  components: { AdminModalRole },

  setup() {
    const modalActiveAdminConf = ref(false)

    const toggleModalAdminConf = () => {
      modalActiveAdminConf.value = !modalActiveAdminConf.value;
    }
    return {
      modalActiveAdminConf,
      toggleModalAdminConf,
    };


  }

}
</script>

<style>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-inner-enter-from {
  opacity: 0.6;
  transform: scale(0.8);
}

.modal-animation-inner-leave-to {
  transform: scale(0.8);
}
</style>