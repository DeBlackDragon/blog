<template>
  <div class="bg-gray-100 min-h-screen w-full">
    <Navbar />
    <template>
      <div class="grid grid-cols-8">
        <div class="col-span-2">
          <slot name="left"></slot>
        </div>
        <div class="col-span-4">
          <slot name="center"></slot>
        </div>

        <div class="col-span-2">
          <slot name="right"></slot>
        </div>
      </div>
    </template>
    <div class="mt-10 bg-gray-100 p-2"></div>
  </div>
</template>