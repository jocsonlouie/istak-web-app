<template>
    <transition name="modal-animation">
        <div v-show="modalActiveAddRole"
            class="modal bg-black shadow-md p-7 z-20 flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-opacity-20">
            <transition name="modal-animation-inner">
                <div v-show="modalActiveAddRole"
                    class="modal-inner relative md:w-2/5 shadow-md bg-neutrals-1 p-9 rounded-lg">
                    <div @click="close" class="close-icon">
                        <i
                            class="fa-solid fa-xmark cursor-pointer text-neutrals-5 absolute right-5 hover:text-neutrals-7"></i>
                    </div>

                    <!-- Modal Content -->
                    <div class="modal-content flex flex-col justify-center align-middle gap-6">
                        <div class="headerz text-center text-brand-6">
                            <h1>Add New User</h1>
                        </div>
                        <div class="supplier-content flex justify-center">
                            <div class="grid grid-cols-2 gap-8">
                                <div class="supplier-name flex flex-col justify-center">
                                    <span class="text-xs uppercase text-left mb-2">Name</span>
                                    <input type="text" name="input" class="h-8 w-48" placeholder="Divina Lacu" value="">
                                </div>
                                <div class="supplier-email flex flex-col justify-center">
                                    <span class="text-xs uppercase text-left mb-2">Branch</span>
                                    <input type="text" name="input" class="h-8 w-48" placeholder="CAINTA/ANTIPOLO"
                                        value="">
                                </div>
                                <div class="flex justify-center ml-56">
                                    <div class="m-4">
                                        <label class="inline-block mb-2 justify-center text-y-black">Profile</label>
                                        <div class="flex items-center justify-center w-full">
                                            <label
                                                class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                                <div class="flex flex-col items-center justify-center pt-7">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                    </svg>
                                                    <p
                                                        class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                        Choose Photo</p>
                                                </div>
                                                <input type="file" class="opacity-0" />
                                            </label>
                                        </div>
                                        <div class="flex justify-center p-2">
                                            <button class="w-32 assumpta-gradient">Upload</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="add-btns flex flex-row justify-center gap-2">
                            <a href="" class="assumpta-gradient">Add User</a>
                            <a href="" @click="close" class="assumpta-btn-secondary"><span
                                    class="assumpta-btn-span">Cancel</span></a>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
export default {
    props: ['modalActiveAddRole'],
    setup(props, {
        emit
    }) {
        const close = () => {
            emit("close");
        };
        return {
            close
        }
    },
};
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