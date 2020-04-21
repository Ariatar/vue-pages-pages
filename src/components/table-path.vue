<template>
   <!-- Mai nContainer -->
   <v-container
      style="
    display: flex;
    justify-content: center;
    
}"
   >
      <!-- Table Container -->
      <v-container class="table-container">
         <!-- Main Card-->
         <v-card width="920px">
            <v-card-title class="">
               Submitted sitemaps
               <img class="ml-2" src="vectors/infoCircleSolid.png" alt="" />
               <v-spacer></v-spacer>
               <v-card-title class="subtitle-black-header"
                  >Selected sitemaps:
                  <span class="ml-2 black--text">{{ this.items.length }}</span>
               </v-card-title>
               <v-card-subtitle class="subtitle-blue-header"
                  >Recrawl sitemap</v-card-subtitle
               >
               <v-card-subtitle class="subtitle-red-header"
                  >Recrawl sitemap</v-card-subtitle
               >
            </v-card-title>
            <!-- Header card -->
            <v-card class="top-card-color ">
               <v-menu
                  class="drop-menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-width="200"
                  offset-y
               >
                  <template v-slot:activator="{ on }">
                     <v-btn class="but" color="indigo" dark v-on="on">
                        URL or its prt list
                     </v-btn>
                  </template>

                  <v-card>
                     <v-list>
                        <v-list-item>
                           <v-list-item-action>
                              <v-radio-group>
                                 <v-radio label="Sitemap contains "></v-radio>
                                 <v-radio
                                    label="Sitemap doesn't contain"
                                 ></v-radio>
                                 <v-radio label="Exact match"></v-radio>
                              </v-radio-group>
                           </v-list-item-action>
                        </v-list-item>
                     </v-list>

                     <v-card-actions>
                        <v-btn small="" color="red" text @click="menu = false"
                           >Reset</v-btn
                        >
                        <v-btn
                           small=""
                           color="primary"
                           text
                           @click="menu = false"
                           >Apply</v-btn
                        >
                     </v-card-actions>
                  </v-card>
               </v-menu>
               <v-select
                  :items="items0"
                  label="All types"
                  solo
                  class="ml-4 first-menu-btn "
               ></v-select>
               <v-select
                  :items="items0"
                  label="Submitted"
                  solo
                  class="ml-4 first-menu-btn "
               ></v-select>
               <v-select
                  :items="items1"
                  :label="date | moment('MMM DD YYYY')"
                  solo
                  class="ml-4 first-menu-btn "
               ></v-select>
               <v-select
                  :items="items5"
                  v-model="search"
                  label="All sitemaps"
                  solo
                  clearable
                  class="ml-4 first-menu-btn "
               ></v-select>
            </v-card>
            <!-- Api table -->

            <v-data-table
               v-model="selected"
               :headers="headers"
               :items="items"
               :search="search"
               :single-select="singleSelect"
               item-key="name"
               show-select
               class="mt-1"
            >
               <template v-slot:item.path="data">
                  <p class="table-path d-flex">
                     {{ data.item.path.slice(24)
                     }}<img
                        style="margin-left: 5px"
                        src="vectors/tebple-path.png"
                        alt=""
                     />
                  </p>
               </template>
               <template v-slot:item.isPending>
                  <p class="text-center d-flex">Sitemap <br />index</p>
               </template>

               <template v-slot:item.errors="data">
                  <span style="color: #2AC9A1;" v-if="data.item.errors === 0"
                     >Success</span
                  >
                  <span class="errors" v-else-if="data.item.errors > 0"
                     >{{ data.item.errors }} errors</span
                  >
                  <span class="errors" v-else>{{ noErrors }}</span>
               </template>
               <template v-slot:item.status>
                  <button class="table-button">
                     Recrewl
                  </button>
               </template>
               <template v-slot:item.remove>
                  <td class="text-end">
                     <v-icon medium class="delete">mdi-delete</v-icon>
                  </td>
               </template>
               <template v-slot:item.lastSubmitted="data">
                  {{ data.item.lastSubmitted | moment("MMM DD,") }}
                  <p>{{ data.item.lastSubmitted | moment("YYYY") }}</p>
               </template>
               <template v-slot:item.lastCheck="data">
                  {{ data.item.lastCheck | moment("MMM DD,") }}
                  <p>{{ data.item.lastCheck | moment("YYYY") }}</p>
               </template>
            </v-data-table>
         </v-card>
      </v-container>
   </v-container>
</template>

<script>
import moment from "moment";
import axios from "axios";
export default {
   data: () => ({
      date: Date.now(),
      items1: new Date(),
      noErrors: "Couldn't fetch",
      menu: false,
      search: null,
      singleSelect: false,
      items0: ["Hello", "friend"],
      label: ["fdsf", "fdsf"],
      result: null,
      items: [],
      errors: [],
      items5: ["All sitemaps", "Success", "Couldn't fetch", "Errors"],
      selected: [],
      headers: [
         {
            text: "Sitemap",
            align: "start",
            value: "path",
         },
         { text: "Type", value: "isPending" },
         { text: "Submitted", value: "lastSubmitted" },
         { text: "Last check", value: "lastCheck" },
         { text: "Status", value: "errors" },
         { text: "URLs ", value: "urls" },
         { text: "Recrawl sitemap ", value: "status" },
         { text: "Remove sitemap ", value: "remove" },
      ],
   }),
   async mounted() {
      try {
         await axios
            .get("https://semalt.net/dev/api/v1/example/test/")
            .then((res) => {
               this.result = res.data.result;
               this.items = res.data.result.sitemap;
            });
         return items;
      } catch (error) {
         // console.log(error);
      }
   },
   computed: {
      filteredtable() {
         if (this.search) {
            this.items.filter(
               (e) =>
                  items.filter((val) => e.items.indexOf(val) !== 1).length > 0
            );
            console.log(items);

            return items;
         }
      },
   },
};
</script>

<style lang="scss"></style>
