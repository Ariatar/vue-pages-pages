<template>
   <v-app>
      <v-app-bar
         clipped-left
         app
         color="#f0f6fc"
         absolute
         elevate-on-scroll
         scroll-target="#scrolling-techniques-7"
      >
         <v-toolbar-title>TABLE responsive</v-toolbar-title>

         <v-spacer></v-spacer>

         <button class="btn-ring mr-5">
            <v-icon>mdi-bell-outline</v-icon>
         </button>
         <button class="btn-name mr-5">
            <span>Alex</span>
         </button>
      </v-app-bar>

      <v-content>
         <TablePath />
      </v-content>
   </v-app>
</template>

<script>
import TablePath from "./components/table-path";

export default {
   name: "App",

   components: {
      TablePath,
   },

   data: () => ({}),
};
</script>

<style lang="scss"></style>
