<template>

<div class="content">
     <div class="icons">
            <div class="icona1 ">
        <i class="	fas fa-shopping-bag"></i>
                <p>Buy online</p>
            </div>

            <div class="icona2">
                           <i class="fa fa-solid fa-truck"></i>

                <p>Free shipping</p>
            </div>

            <div class="icona3">
                <i class="	fas fa-lock"></i>
                <p>High Security</p>
            </div>
        </div>
        </div>


</template>
<style scoped>
.icons {
  display: flex;
  justify-content:space-around;

  padding: 50px 0;
  flex-wrap: wrap;
  /* background: linear-gradient(
    rgba(240, 235, 231, 0.884),
    rgba(253, 249, 247, 0.884)
  ); */
}

.content{
  width: 100%;
   background-color: rgba(135, 170, 186, 0.721);

}
.fa,
.fas {
  font-size: 50px;
  color: rgb(255, 255, 255);
  padding: 15px 15px;

  border-radius: 50%;
  background-color: rgba(69, 117, 201, 0.884);
  
  margin-bottom: 15px;
}
.fa-cutlery{
  padding: 17px 30px;

}
.icona1 ,
.icona2 ,
.icona3 {
  text-align: center;
}
.icona1 p,
.icona2 p,
.icona3 p {
  text-align: center;
  font-size: 20px;
  margin: 0;
  color: rgb(255, 255, 255);
}

</style>