<template>
  <div class="container mx-auto">
    <!-- Header -->
    <Header />

    <div class="w-full h-80 mt-8 space-y-8 px-5">
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
            ;
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

      <div class="w-[1,122px] border-[1px] rounded-md h-[668px]rounded-md">
        <!--  header Tabel -->
        <div class="flex justify-between h-[56px] items-center p-3">
          <h1 class="font-medium text-xl leading-7">All users</h1>
          <Icon
            name="cil:options"
            class="w-5 h-5 text-[#98A2B3] cursor-pointer"
          />
        </div>
        <!-- Tabel body -->
        <el-table :data="tableData">
          <el-table-column type="selection" width="55" />
          <el-table-column
            label="Date"
            width="120"
            style="background-color: #eaecf0"
          >
            <template #default="scope">{{ scope.row.date }}</template>
          </el-table-column>

          <el-table-column
            property="name"
            label="Name"
            width="120"
            style="background-color: red"
          />
          <el-table-column
            property="address"
            label="use show-overflow-tooltip"
            width="240"
            show-overflow-tooltip
          />
          <el-table-column property="address" label="address" />
        </el-table>
        <!-- Tablel Footer -->
        <div class="flex justify-center py-5">
          <el-pagination background layout="prev, pager, next" :total="100" />
        </div>
      </div>
    </div>

    <!--  All Users -->
  </div>
</template>

<script setup lang="ts">
import { Operation, Search } from "@element-plus/icons-vue";
const inp = ref("");
const date = ref("");
const { data } = await useAsyncGql({
  operation: "GetUsers",
});

import { ElTable } from "element-plus";

interface User {
  date: string;
  name: string;
  address: string;
}
const tableData: User[] = [
  {
    date: "2016-05-04",
    name: "Aleyna Kutzner",
    address: "Lohrbergstr. 86c, Süd Lilli, Saarland",
  },
  {
    date: "2016-05-03",
    name: "Helen Jacobi",
    address: "760 A Street, South Frankfield, Illinois",
  },
  {
    date: "2016-05-02",
    name: "Brandon Deckert",
    address: "Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen",
  },
  {
    date: "2016-05-01",
    name: "Margie Smith",
    address: "23618 Windsor Drive, West Ricardoview, Idaho",
  },
  {
    date: "2016-05-01",
    name: "Margie Smith",
    address: "23618 Windsor Drive, West Ricardoview, Idaho",
  },
];
</script>
