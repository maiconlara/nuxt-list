<template>
  <div class="flex flex-col items-center justify-center w-[70vw]">
    <fieldset class="flex flex-row items-center justify-center w-[600px] gap-4">
      <UInput
        class="w-full transition-colors"
        inputClass="h-10 rounded-full w-full py-0 bg-blue-100 dark:bg-blue-800"
        color="primary"
        size="xl"
        v-model="name"
        icon="i-heroicons-chat-bubble-bottom-center-text-16-solid"
        placeholder="Descreva a tarefa..."
      />
      <UButton
        v-bind:disabled="taskNameLength < 3"
        icon="i-heroicons-plus-16-solid"
        class="rounded-full h-10 w-10 items-center justify-center transition-colors"
        color="primary"
        square
        variant="solid"
        @click="addTask"
      />
    </fieldset>
  </div>
</template>

<script lang="ts">
import { db } from "@/db/index";
import { TaskStatusEnum } from "@/enums/TaskStatusEnum";
import type { Task } from "@/db/task";

export default {
  name: "TaskForm",

  data: () => {
    return {
      name: "",
      created_at: new Date().toISOString(),
      status: TaskStatusEnum.PENDING,
    };
  },

  computed: {
    taskNameLength() {
      return this.name.length;
    },
  },

  methods: {
    async addTask() {
      try {
        const newTask: Task = {
          name: this.name,
          status: this.status,
          created_at: this.created_at,
        };
        const id = await db.tasks.add(newTask);
        this.name = "";
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
