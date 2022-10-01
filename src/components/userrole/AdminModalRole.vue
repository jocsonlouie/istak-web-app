<template>

    <transition name="modal-animation">
        <div v-show="modalActiveAdminConf"
            class="modal bg-black shadow-md p-7 z-20 flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-opacity-20">
            <transition name="modal-animation-inner">
                <div v-show="modalActiveAdminConf"
                    class="modal-inner relative md:w-2/5 shadow-md bg-neutrals-1 p-9 h-fit rounded-lg">
                    <div @click="close" class="close-icon">
                        <i
                            class="fa-solid fa-xmark cursor-pointer text-neutrals-5 absolute right-5 hover:text-neutrals-7"></i>
                    </div>

                    <!-- Modal Content -->
                    <!-- <slot /> -->
                    <NotifModalRole @close="toggleModalAdminNotif" :modalActiveAdminNotif="modalActiveAdminNotif" />
                    <div class="fixed inset-0 z-10 overflow-y-auto">
                        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div
                                class="h-96 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div class="bg-white px-5 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div class="sm:flex justify-center mb-10 mt-10">
                                        <div class="mt-3 sm:mt-0 sm:ml-4">
                                            <h3 class="mt-10 text-center text-2xl font-medium leading-6 text-gray-900"
                                                id="modal-title">Admin Confirmation</h3>
                                        </div>
                                    </div>
                                    <div class="w-full">
                                        <label for="input"
                                            class="block w-full text-sm font-medium text-neutrals-9 mb-2"></label>
                                        <input type="text" name="inputadminpass" class="pr-3 pl-10"
                                            placeholder="Enter admin Password">
                                    </div>
                                </div>
                                <div class="bg-white-50 px-4 py-3 justify-center sm:flex sm:px-6 mb-10 gap-5">
                                    <div class="bar-right flex flex-row gap-2">
                                        <div @click="toggleModalAdminNotif" class="add-roles">
                                            <a href="javascript:void(0)" class="assumpta-gradient px-8">
                                                CONFIRM
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
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
import NotifModalRole from './NotifModalRole.vue';
import { ref } from 'vue'
export default {
    props: ["modalActiveAdminConf"],
    name: "AdminModalRole",
    components: { NotifModalRole },
    setup() {
        const modalActiveAdminNotif = ref(false)
        const toggleModalAdminNotif = () => {
            modalActiveAdminNotif.value = !modalActiveAdminNotif.value;
        }
        return {
            modalActiveAdminNotif,
            toggleModalAdminNotif,
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