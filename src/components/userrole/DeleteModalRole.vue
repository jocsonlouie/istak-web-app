<template>
    <transition name="modal-animation">
        <div v-show="modalActiveDeleteRole"
            class="modal bg-black shadow-md p-7 z-20 flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-opacity-20">
            <transition name="modal-animation-inner">
                <div v-show="modalActiveDeleteRole"
                    class="modal-inner relative md:w-2/5 shadow-md bg-neutrals-1 p-9 h-fit rounded-lg">
                    <div @click="close" class="close-icon">
                        <i class="fa-solid fa-xmark cursor-pointer text-neutrals-5 absolute right-5 hover:text-neutrals-7" ></i>
                    </div>

                    <!-- Modal Content -->
                    <!-- <slot /> -->
                    <div class="modal-content flex flex-col justify-center align-middle gap-6">
                        <AdminModalRole @close="toggleModalAdminConf" :modalActiveAdminConf="modalActiveAdminConf" />
                        <div class="headerz text-center text-brand-6">
                            <h1>Delete Supplier</h1>
                        </div>
                        <div class="bodyz flex justify-center text-center">
                            <h1>Are you sure you want to Remove 'Divina Lacu' account?</h1>
                        </div>
                        <div class="bg-white-50 px-4 py-3 justify-center sm:flex sm:px-6 mb-10 gap-5">
                                    <div class="bar-right flex flex-row gap-2">
                                        <div @click="toggleModalAdminConf" class="add-roles">
                                            <a href="javascript:void(0)" class="assumpta-gradient px-8">
                                                DELETE
                                            </a>
                                        </div>
                                        <button class="assumpta-btn-secondary">
                                            <a href="/userroles">
                                                <span class="w-32 assumpta-btn-span">
                                                    CANCEL
                                                </span>
                                            </a>
                                        </button>
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
  props: ["modalActiveDeleteRole"],
  name: "DeleteModalRole",
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
        opacity: 0;
        transform: scale(0.8);
    }
    .modal-animation-inner-leave-to {
        transform: scale(0.8);
    }
</style>