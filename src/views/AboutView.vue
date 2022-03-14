<template>
<div>
  <NavBar></NavBar>
   <div style="margin-top:5em" class="view-container">
   <section class="nav">
    <div class="nav-logo">
      <img height="200px" src="../assets/2.jpg" alt="logo">
    </div>
    <div class="nav-menu">
      <ul class="nav-menu-list">
        <li class="nav-list-item">About Us</li>
        <li class="nav-list-item">GitHub</li>
      </ul>
    </div>
  </section>
     <div class="about-card">
    <div class="card-title">
      <img src="../assets/1.png" alt="avatar" class="avatar">
      <div class="title-text-content">
        <p>About Us</p>
        <h2>ELI SHOP</h2>
      </div>
    </div>
    <div class="card-content" >
     
      <table style="width:100%">
        <thead>
        <tr>
          <th>Requirement</th>
          <th>Solution</th> 
        </tr>
        </thead>
     
        <tr v-for="(about,id) in about" :key="id">
          <td>{{about.title}}</td>
          <td>{{about.content}}</td> 
        </tr>
      </table>
      </div>
      <p v-for="(about,id) in about" :key="id">{{about.p}}</p>
    </div>
  </div>
  </div>
</template>





<script>
import {db} from '../firebase';
import NavBar from '@/components/NavBar.vue';


export default {
    name: "About-Page",
    props: {
        msg: String
    },
    data() {
        return {
            about: [],
        };
    },
  
    firestore() {
        return {
            about: db.collection("about"),
        };
    },
    components: { NavBar}
};
</script>

<style lang="sass" scoped>

.view-container
  width: 79vw;
  padding: 1.5em;
  margin-left: 20vw;
  box-sizing: border-box;
  min-height: 100vh;
  

.nav
  position: fixed
  display: flex
  flex-direction: column
  align-items: center
  background: #333
  top: 0
  left: 0
  bottom: 0
  width: 20vw
  .nav-logo
    margin: 100px auto
  .nav-menu
    color: white
.nav-menu-list
  list-style: none
  padding: 0
  .nav-list-item
    background: #222
    padding: 10px 20px
    text-align: center
    margin: 10px auto
    cursor: pointer
    &:hover
      width: 130%
      color: blue
      


.about-card
  min-height: calc(100vh - 150px)
  background: #333
  padding: 3em
  border-radius: 10px
  color: white
  .card-title
    display: flex
    align-items: center
    background: #222
    border-radius: 10px
    .avatar
      height: 50px
      border: 1px solid rgba(255, 255, 255, 0.4)
      border-radius: 10%
      margin: 0 50px
  .title-text-content p
    margin-bottom: 0
    color: violet
  .title-text-content h2
    margin-top: 0
.card-content p
  line-height: 1.5
  margin: 30px auto
table 
  border-spacing: 0px
  margin: 50px auto
  tr th, tr td
    border: 1px solid white
    border-top: none
    padding: 10px
    text-align: center
    &:first-of-type
      border-left: none
    &:nth-of-type(2)
      border-right: none
@media screen and (max-width: 530px)
  .about-card 
    padding: 1em
  .card-title h2
    font-size: 1.3em

    table
    table-layout: fixed;

td
    word-wrap:break-word

</style>
