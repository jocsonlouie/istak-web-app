<template>
    <div class="p-16">
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="max-w-md mx-auto bg-transparent rounded-xl overflow-hidden md:max-w-2xl">
                        <div class="md:shrink-0">
                            <div class="relative">   
                            <img class="h-48 w-full object-cover md:h-full md:w-48" src="../assets/profile.png" alt="">
                                <button class="fa-solid fa-pen absolute bottom-0 right-0 bg-brandDark-9 text-white p-2 rounded-full hover:text-secondary-6 m-2">+</button>
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
            <div class="md:w-1/2 mb-6 md:mb-0 px-20">
                <label class="uppercase tracking-wide text-lg text-bold block text-secondary-6 mb-2" for="company">
                    Full Name:
                </label>
                <input class="w-full bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company"
                    type="text" placeholder="Divina Lacu">
                <div>
                </div>
            </div>
            <div class="md:w-1/2 px-20">
                <label class="uppercase tracking-wide text-lg text-bold block text-secondary-6 mb-2" for="title">
                    Job/Position
                </label>
                <input class="w-full bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company"
                    type="text" placeholder="Employee">
            </div>
            <div class="md:w-1/2 px-20">
                <label class="uppercase tracking-wide text-lg text-bold block text-secondary-6 mb-2" for="title">
                    Clinic Branch
                </label>
                <input class="w-full bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company"
                    type="text" placeholder="Cainta">
            </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
        </div>
        <div class="-mx-3 md:flex mb-2">
            <div class="md:w-1/2 mb-6 md:mb-0 px-20">
                <label class="uppercase tracking-wide text-lg text-bold block text-secondary-6 mb-2" for="location">
                    Email Address
                </label>
                <input class="w-full bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company"
                    type="text" placeholder="divinalacu@yahoo.com">
            </div>
            <div class="md:w-1/2 px-20">
                <label class="uppercase tracking-wide text-lg text-bold block text-secondary-6 mb-2" for="job-type">
                    Phone Number
                </label>
                <input class="w-full bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company"
                    type="text" placeholder="09251874563">
            </div>
            <div class="md:w-1/2 px-20">
                <label class="uppercase tracking-wide text-lg text-bold block text-secondary-6 mb-2" for="department">
                    Roles
                </label>
                <input class="w-full bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company"
                    type="text" placeholder="Inventory Staff">
                <div>
                </div>
            </div>
        </div>
        <div class="-mx-3 md:flex mt-12 md:gap-3">
            <div class="md:w-full px-3 text-center">
                <button class="w-48 h-12 text-white assumpta-btn-secondary"
                    @click="toggleSave = !toggleSave">SAVE</button>

                <button class="ml-5 assumpta-btn-secondary">
                    <a href="/account">
                        <span class="w-48 assumpta-btn-span">
                            CANCEL
                        </span>
                    </a>
                </button>

                <!-- Account Save Modal -->
                <div v-if="toggleSave" class="relative z-10" aria-labelledby="modal-title" role="dialog"
                    aria-modal="true">

                    <div class="fixed inset-0 bg-gray-200 bg-opacity-75 transition-opacity"></div>

                    <div class="fixed inset-0 z-10 overflow-y-auto">
                        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div
                                class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div class="bg-white px-5 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div class="sm:flex justify-center mb-10 mt-10">
                                        <div class="mt-3 sm:mt-0 sm:ml-4">
                                            <h3 class="text-2xl font-medium leading-6 text-gray-900" id="modal-title">
                                                Save Changes?</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-white-50 px-4 py-3 justify-center sm:flex sm:px-6 mb-10 gap-5">
                                    <div class="bar-right flex flex-row gap-2">
                                            <a href="/account" class="assumpta-gradient px-8">
                                                CONFIRM
                                            </a>
                                        <button class="assumpta-btn-secondary">
                                            <a href="/accountedit">
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



            </div>
        </div>
    </div>


</template>

<script>
export default {
    name: "account-modal",
    data() {
        return {
            toggleSave: false
        };
    },
    methods: {}
};

</script>