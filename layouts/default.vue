<template>
  <div class="flex flex-col items-center justify-start w-full h-screen gap-2">
    <div class="flex flex-row w-full h-16 justify-end items-center bg-transparent px-6">
      <ColorModeButton
        icon="i-heroicons-plus-16-solid"
      />
    </div>
    <slot />
  </div>
</template>
<script>
export default {
  name: "default",
};
</script>
