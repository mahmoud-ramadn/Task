<template>
  <div class="container mx-auto">
    <!-- Header -->
    <Header />

    <div class="w-full h-80 mt-8 space-y-8 px-5">
      <!-- Search and Filters -->
      <div class="flex justify-between items-start">
        <el-input
          v-model="inp"
          style="width: 400px; height: 44px"
          placeholder="Type something"
          :prefix-icon="Search"
        />
        <div class="space-x-5">
          <el-date-picker
            v-model="date"
            type="date"
            style="width: 236px; height: 40px"
            placeholder="Pick a Date"
            format="YYYY/MM/DD"
          />
          <el-button
            style="background: none; width: 101px; height: 40px"
            class="text-[#344054] font-medium"
            :icon="Operation"
            >Filters</el-button
          >
        </div>
      </div>

      <!-- Table Section -->
      <div class="w-[1122px] border-[1px] rounded-md h-[668px] rounded-md">
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
          <el-table-column label="Avatar" width="180">
            <template #default="{ row }">
              <div class="flex items-center gap-4">
                <input type="checkbox" />
                <el-avatar
                  :src="row.avatar"
                  :size="50"
                  class="cursor-pointer"
                  :to="`/userprofile/${row.id}`"
                  @click="navigateToProfile(row.id)"
                />
              </div>
            </template>
          </el-table-column>

          <!-- Other Data Columns -->
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="email" label="Email" width="200" />
          <el-table-column prop="username" label="Username" width="180">
            mr13155Adfagd
          </el-table-column>
          <el-table-column prop="phone" label="Mobile Number" width="180">
            23724987498 </el-table-column
          >>
          <el-table-column prop="address" label="Region">
            <template #default="{ row }">
              <span>Egypt</span>
            </template>
          </el-table-column>
          <el-table-column prop="creationAt" label="Created at">
            <template #default="{ row }">
              <span>{{ row.creationAt.substring(0, 7) }}</span>
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
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { Operation, Search } from "@element-plus/icons-vue";

const inp = ref("");
const date = ref("");

const currentPage = ref(1);
const pageSize = ref(6);
const { data, errors } = await useAsyncGql({
  operation: "GetUsers",
  options: {
    transform: (data) => data.users,
  },
});

const totalItems = data.value ? data.value.length : 0;
const paginatedData = computed(() =>
  data.value
    ? data.value.slice(
        (currentPage.value - 1) * pageSize.value,
        currentPage.value * pageSize.value
      )
    : []
);

const handlePageChange = (page) => {
  currentPage.value = page;
};

const router = useRouter();
const navigateToProfile = (id) => {
  router.push(`/userprofile/${id}`);
};
</script>
