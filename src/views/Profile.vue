<template>
  <div class="products">
      <div class="container">
          
        <div class="intro h-100">
            <div class="row h-100 align-items-center">
              <div class="col-md-6 ml-3">
                    <h3>Profile settings</h3>
                    
                 <p>
                   Change your profile settings here
                 </p>
              </div>
              <div class="col-md-5">
                  <img src="/img/svg/profile.svg" width="300" alt="" class="img-fluid">
              </div>
            </div>
          </div>


          <div class="profile-content">

          <ul class="nav nav-pills ml-3" id="myTab" role="tablist">

            <!-- <li class="nav-item">
              <button class="nav-link active" type="button" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"  role="tab" aria-controls="profile">Profile</button>
            </li> -->

            <!-- <li class="nav-item">
              <button class="nav-link" type="button" id="account-tab" data-bs-toggle="tab" data-bs-target="#account" role="tab" aria-controls="account" >Account settings</button>
            </li> -->

          </ul>

            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active pt-3" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                  <div class="container">
                      <div class="row">

                        
                        
                        <div class="col-md-6">
                          <div class="form-group">


                            <input type="text"  v-model="profile.name" placeholder="Full Name" class="form-control" >
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="number" v-model="profile.phone" placeholder="Phone" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-12">
                          <div class="form-group">
                            <input type="text" v-model="profile.address" placeholder="Address" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-8">
                          <div class="form-group">
                            <input type="number" v-model="profile.postcode" placeholder="Postcode" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                              <button type="button" @click="updateProfile()" value="Save Changes" class="btn btn-primary w-100">Save</button>
                              <!-- <button @click="updateProduct()" type="button" class="btn btn-primary" v-if="modal == 'edit'">Apply Changes</button> -->
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                              <input type="button" @click="resetPassword" value="Reset password email" class="btn btn-success w-100">
                          </div>
                        </div>
                          <!-- <a href="#" @click="logout()">
                                <i class="fa fa-power-off"></i>
                                <span>Logout</span>
                            </a> -->
                      </div>
                  </div>
                
                </div>

                <!-- <div class="tab-pane fade pt-3" id="account" role="tabpanel" aria-labelledby="account-tab">
                  <div class="container">
                      <div class="row">
                        <div class="col-md-">
                            <div class="alert alert-info">
                              Please use the Reset password email button for reseting the password.
                            </div>
                        </div>
                        <div class="col-md-6">
                          
                          <div class="form-group">
                            <input type="text" v-model="account.name" placeholder="User name" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text" v-model="account.email" placeholder="Email address" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text"  v-model="account.password" placeholder="New password" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text" v-model="account.confirmPassword"  placeholder="Confirm password" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                              <input type="file" @change="uploadImage" class="form-control">
                           </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                              <input type="submit" value="Save Changes" class="btn btn-primary w-100">
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                              <input type="button" @click="resetPassword" value="Reset password email" class="btn btn-success w-100">
                          </div>
                        </div>
                      </div>
                  </div>
                </div> -->
            </div>
          </div>
      </div>
  </div>
</template>

<script>

import { fb,db} from '../firebase';
import firebase from 'firebase/compat/app'
// import Swal from 'sweetalert2'
import Toast from 'sweetalert2'


export default {
  name: "profile",
  components: {
     
  },
  props: {
    msg: String
  },
  data(){
    return {
     profiles:[],
        profile: {
          name:null,
          phone:null,
          address:null,
          postcode:"",
        },
        account:{
            name:null,
            email:null,
            photoUrl:null,
            emailVerified:null,
            password:null,
            confirmPassword:null,
            uid:null
        }       
    }
  },
  firestore(){
      // const user = firebase.auth().currentUser;
      // db.collection("profiles").doc(user.uid).update({
      //   name:this.profile.name,
      //   postcode: this.profile.postcode,
      //   phone: this.profile.phone 
      // })
      // return {
      //   profiles: db.collection('profiles'),
      //   profile: db.collection('profiles'),
      // }
       const user = fb.auth().currentUser.uid;
      return {
        profile: db.collection('profiles').doc(user),
      }
  },
  
  methods:{
     resetPassword(){
                   

          const auth = firebase.auth();          
          auth.sendPasswordResetEmail(auth.currentUser.email).then(() =>  {
            
               Toast.fire({
                type: 'success',
                title: 'Email sent'
              })
          }).catch((error) =>  {
              console.log(error);
          });
      },
      updateProfile(){
    
          this.$firestore.profile.update(this.profile)
          .then(() => {
             console.log("document updated successfully check firestore")
             Toast.fire({
               icon:'success',
               title: 'Updated successfully'
       })
           }).catch((err) => {
             console.log("An error occurred while updateing", + err.message)
           })


      },
       logout(){
          fb.auth().signOut()
          .then(() => {
              this.$router.replace('/');
          })
          .catch((err) =>{
              console.log(err);
          });
      },
      uploadImage(){

      }
  },
  created(){
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>