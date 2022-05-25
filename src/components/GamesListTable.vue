<template>
  <div>
    <!-- {{ gamesList }} -->
    <table class="table table-bordered w-50 mx-auto mt-5">
  <thead>
    <tr>
      <th scope="col">Código</th>
      <th scope="col">Nombre</th>
      <th scope="col">Stock</th>
      <th scope="col">Precio</th>
      <th scope="col">Portada</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(game, index) in gamesList" :key="index" class="align-middle">
      <td v-bind:style="{color: game.color}">{{game.codigo}}</td>
      <td v-bind:style="{color: game.color}">{{game.nombre}}</td>
      <td v-bind:style="{color: game.color}">{{game.stock}}</td>
      <td v-bind:style="{color: game.color}">{{game.precio}}</td>
      <td v-bind:style="{color: game.color}"> <img class="cover" :src="game.cover"></td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import App from "@/App.vue";

export default {
    computed: {
        ...mapState("gamesList", {
            gamesList: state => state.list,
        }),
    },
    components: { App }
};
</script>

<style>
table {
  width: 80%;
}
table,
th,
td {
  border: 1px solid black;
}
.cover {
width: 80px;
height: 100px;
}
</style>