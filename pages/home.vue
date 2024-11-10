<template>
  <div class="md:container mx-auto">
    <!-- Header -->
    <Header />

    <div class="w-full h-80 mt-8 space-y-8 px-5">
      <!-- Search and Filters -->
      <div class="flex md:justify-between flex-wrap gap-y-4 items-start">
        <el-input
          v-model="searchQuery"
          class="h-11"
          placeholder="Type something"
          :prefix-icon="Search"
          style="width: 400px"
        />
        <div
          class="md:space-x-5 w-full flex justify-between items-center sm:w-auto"
        >
          <el-date-picker
            v-model="date"
            type="date"
            style="height: 40px"
            class="w-full sm:w-[236px]"
            placeholder="Pick a Date"
            format="YYYY/MM/DD"
          />
          <el-button
            style="background: none; width: 101px; height: 40px"
            class="text-[#344054] font-medium ml-5"
            :icon="Operation"
            >Filters</el-button
          >
        </div>
      </div>

      <!-- Table Section -->
      <div class="overflow-x-auto border-[1px] h-auto rounded-md">
        <!-- Header -->
        <div class="flex justify-between h-[56px] items-center p-3">
          <h1 class="font-medium text-xl leading-7">All users</h1>
          <Icon
            name="cil:options"
            class="w-5 h-5 text-[#98A2B3] cursor-pointer"
          />
        </div>

        <!-- Table Body -->
        <el-table :data="paginatedData" style="width: 100%">
          <!-- Avatar and Checkbox -->
          <el-table-column label="Avatar" :width="isMobile ? 100 : 180">
            <template #default="{ row }">
              <div class="flex items-center gap-4">
                <input type="checkbox" />
                <el-avatar
                  :src="row.avatar"
                  :size="isMobile ? 30 : 50"
                  class="cursor-pointer"
                  :to="`/userprofile/${row.id}`"
                  @click="navigateToProfile(row.id)"
                />
              </div>
            </template>
          </el-table-column>

          <!-- Other Data Columns -->
          <el-table-column
            prop="name"
            label="Name"
            :width="isMobile ? 120 : 180"
          />
          <el-table-column
            prop="email"
            label="Email"
            :width="isMobile ? 150 : 200"
          />
          <el-table-column
            prop="username"
            label="Username"
            :width="isMobile ? 100 : 180"
            >@mr57325</el-table-column
          >
          <el-table-column
            v-if="!isMobile"
            prop="phone"
            label="Mobile Number"
            :width="isMobile ? 120 : 180"
          >
            <span>46269429</span>
          </el-table-column>
          <el-table-column
            v-if="!isMobile"
            prop="address"
            label="Region"
            :width="isMobile ? 120 : 180"
          >
            <template #default="{ row }">
              <span>Egypt</span>
            </template>
          </el-table-column>

          <el-table-column
            prop="creationAt"
            label="Created at"
            :width="isMobile ? 100 : 180"
          >
            <template #default="{ row }">
              <span>{{ row.creationAt.substring(0, 7) }}</span>
            </template>
          </el-table-column>

          <el-table-column>
            <template #default="{ row }">
              <span @click="confirmDelete(row.id)" class="cursor-pointer">
                <Icon name="gridicons:block" class="w-5 h-5 text-[#B71A2A]" />
              </span>
            </template>
          </el-table-column>
        </el-table>

        <!-- Table Footer (Pagination) -->
        <div class="flex justify-center py-5">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="totalItems"
            :page-size="pageSize"
            @current-change="handlePageChange"
            :prev-text="'Previous'"
            :next-text="'Next'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessageBox, ElMessage } from "element-plus";
import { Operation, Search } from "@element-plus/icons-vue";

const searchQuery = ref("");
const date = ref("");
const currentPage = ref(1);
const pageSize = ref(6);

// Fetch user data
const { data, refresh } = await useAsyncGql({
  operation: "GetUsers",
  options: {
    transform: (data) => data.users,
  },
});

// Filtered data based on search query
const filteredUsers = computed(() => {
  return data.value.filter((user) =>
    user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Pagination and paginated data with filtered results
const totalItems = computed(() => filteredUsers.value.length);
const paginatedData = computed(() =>
  filteredUsers.value.slice(
    (currentPage.value - 1) * pageSize.value,
    currentPage.value * pageSize.value
  )
);

const handlePageChange = (page: number) => {
  currentPage.value = page;
};

// Refresh function
const refrchFuc = () => refresh();

// Confirm delete user
const confirmDelete = (id: number) => {
  ElMessageBox.confirm(
    "Are you sure you want to delete this user?",
    "Warning",
    {
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      type: "warning",
    }
  )
    .then(() => DeletUser(id))
    .catch(() => {
      ElMessage({
        type: "info",
        message: "Deletion canceled",
      });
    });
};

// Delete user function
const DeletUser = async (id: number) => {
  try {
    const { data, refresh } = await useAsyncGql({
      operation: "DeleteUser",
      variables: { id },
    });
    ElMessage({
      type: "success",
      message: "User deleted successfully",
    });
    refrchFuc();
  } catch (error) {
    console.error("Error deleting user:", error);
    ElMessage({
      type: "error",
      message: "Failed to delete user",
    });
  }
};

// Navigate to user profile
const router = useRouter();
const navigateToProfile = (id: string) => {
  router.push(`/userprofile/${id}`);
};

// Check if the screen size is mobile
const isMobile = ref(false);
const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

// Setup resize listener
onMounted(() => {
  definePageMeta({
    middleware: "auth",
  });
  handleResize();
  window.addEventListener("resize", handleResize);
});
</script>

<style scoped>
.container {
  max-width: 1200px;
}

@media (max-width: 768px) {
  .el-table {
    font-size: 12px;
  }
}
</style>
