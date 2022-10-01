<template>

    <div class="userroles flex flex-col justify-center m-3">
        <!-- User Roles modals -->
        <AddModalRole @close="toggleModalAddRole" :modalActiveAddRole="modalActiveAddRole" />
        <DeleteModalRole @close="toggleModalDeleteRole" :modalActiveDeleteRole="modalActiveDeleteRole" />
        <ChangeModalRole @close="toggleModalChangeRole" :modalActiveChangeRole="modalActiveChangeRole" />

<!-- remove top nav if available -->
<div class="top-nav flex justify-between flex-row bg-neutrals-1 rounded-2xl py-2 px-3 overflow-x-auto">
            <div class="left-nav flex justify-center gap-4 ">
                <div class="site-loc mt-2">
                    Inventories > <span class="text-brand-6 font-bold">User Roles</span>
                </div>
                <div class="site-search relative">
                    <i class="fa-solid fa-magnifying-glass absolute z-2 top-3 left-3 "></i>
                    <input type="text" name="input" class="pr-3 pl-10" placeholder="Search">
                </div>
            </div>
            <div class="right-nav flex justify-center gap-4 align-middle mt-1.5 ">
                <div class="site-icon">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="site-u">
                    Juan
                </div>
            </div>
        </div>
    <!-- Roles -->
    <div class="supplier bg-neutrals-1 mt-4 rounded-lg shadow-sm pt-4 px-5 h-screen overflow-x-auto">
        <div class="topbar flex justify-between p-2">
            <div class="bar-left flex justify-center align-middle gap-4">
                <div class="ivt-filter">
                    <a href="" class="assumpta-btn-secondary"><span class=" assumpta-btn-span"><i
                                class="fa-solid fa-filter mr-3"></i>Filter</span></a>
                </div>
                <div class="relative ml-5">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <i class="fa-solid fa-search text-secondary-6"></i>
                    </div>
                    <input type="text" id="table-search-users"
                        class="block p-2 pl-10 w-80 text-sm bg-gray-50 rounded-lg border border-gray-50 dark:bg-gray-50 dark:border-gray-50 placeholder-brandDark-10 dark:secondary-6 dark:secondary-6"
                        placeholder="Search Users by Name, Email or Branch">
                </div>
            </div>
            <div class="bar-right flex flex-row gap-2">
                <div @click="toggleModalAddRole" class="add-roles">
                    <a href="javascript:void(0)" class="assumpta-gradient px-8">
                        ADD New User
                    </a>
                </div>
                <div class="supplier-pdf">
                    <a href="javascript:void(0)" class="assumpta-round-btn-gradient"><span
                            class="assumpta-round-btn-span">
                            <i class="fa-solid fa-file-pdf text-brand-6 h-4"></i>
                        </span></a>
                </div>
                <div @click="toggleModalDeleteRole" class="ivt-delete-item">
                    <a href="javascript:void(0)" class="assumpta-round-btn-delete"><span
                            class="assumpta-round-btn-span"><i
                                class="fa-solid fa-trash text-error-6 h-4"></i></span></a>
                </div>
            </div>
        </div>

        <!-- Table Start Here -->
        <table class="w-full text-sm text-left text-brandDark-10 dark:text-secondary-6">
            <thead class="text-xs text-brandDark-10 uppercase bg-gray-50 dark:brandDark-10 dark:brandDark-100">
                <tr>
                    <th scope="col" class="p-4">
                        <p type="text" class="">Select</p>
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Name
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Profile
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Branch
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Login
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Logout
                    </th>
                    <th scope="col" class="py-3 px-10">
                        Role
                    </th>
                    <th scope="col" class="py- px-20">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    class="bg-white border-y dark:bg-white dark:border-secondary-6 hover:bg-gray-50 dark:hover:bg-brandDark-5">
                    <th scope="col" class="p-4">
                        <div class="flex items-center">
                            <input id="checkbox-all-search" type="checkbox"
                                class="w-4 h-4 ml-5 border-2 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-white dark:text-secondary-6">
                            <label for="checkbox-all-search" class="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="row"
                        class="flex items-center py-4 px-2 text-gray-900 whitespace-nowrap dark:text-secondary-6">
                        <div class="pl-3">
                            <div class="text-base font-semibold">Divina Lacu</div>
                            <div class="font-bold text-gray-500">divinalacu@yahoo.com</div>
                        </div>
                    </th>
                    <td class="py-4 px-6">
                        <img class="w-10 h-10 rounded-full" src="../assets/profile.png" alt="">
                    </td>
                    <td class="py-4 px-6">
                        CAINTA
                    </td>
                    <td class="py-4 px-6">
                        <div class="flex items-center">
                            <div class="text-sm">9/1/22
                                <div class="text-sm text-brandDark-10 font-bold">7:30am
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="py-4 px-6">
                        <div class="flex items-center">
                            <div class="text-sm">9/1/22
                                <div class="text-sm text-brandDark-10 font-bold">7:30am
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="py-4 px-6">
                        <div class="flex items-center">
                            <div class="text-sm">Inventory Admin
                            </div>
                        </div>
                    </td>
                    <td class="py-4 px-6" @click=toggleModalChangeRole>
                        <button class="assumpta-btn-secondary" type="editinfo">
                            <span class="w-48 font-sm assumpta-btn-span">
                                CHANGE ROLES
                            </span></button>

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
</template>

<style>
</style>

<script>
    import AddModalRole from "@/components/userrole/AddModalRole.vue";
    import { ref } from 'vue'
    import DeleteModalRole from "@/components/userrole/DeleteModalRole.vue";
    import ChangeModalRole from "../components/userrole/ChangeModalRole.vue";

    export default {
    name: "UserRoles",
    components: { AddModalRole, DeleteModalRole, ChangeModalRole },
    setup() {
        const modalActiveAddRole = ref(false);
        const modalActiveDeleteRole = ref(false);
        const modalActiveChangeRole = ref(false);
        const toggleModalAddRole = () => {
            modalActiveAddRole.value = !modalActiveAddRole.value;
        }
        const toggleModalDeleteRole = () => {
            modalActiveDeleteRole.value = !modalActiveDeleteRole.value;
        }
        const toggleModalChangeRole = () => {
            modalActiveChangeRole.value = !modalActiveChangeRole.value;
        }
        return {
            modalActiveAddRole,
            toggleModalAddRole,
            modalActiveDeleteRole,
            toggleModalDeleteRole,
            modalActiveChangeRole,
            toggleModalChangeRole,
        };
    }
}

</script>