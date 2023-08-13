<template>
    <div class="box">

        <div class="rectangle-elipse">
            <div class="elipse" />
            <div class="elipse" />
            <div class="elipse" />
        </div>

    </div>

    <div class="container-botones">
           <router-link to="/">
            <div class="btn">Home <img width="40" src="./casa.png" alt="home"></div>
        </router-link>

        <router-link to="/talentos/novo">
            <div class="btn">Talentos <img width="40" src="./carpeta.png" alt="talent"></div>
        </router-link>

        <router-link to="/sobre">
            <div class="btn">Sobre <img width="40" src="./pin-mapa.png" alt="ubicacion"></div>
        </router-link>
    </div>
</template>

<style scoped>
.box {
    background-color: #d9d9d9;
    height: 76px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
}

.rectangle-elipse {
    display: flex;
    flex-direction: row;
    padding: 23px;
    gap: 20px;
}

.elipse {
    background-color: #c3baba;
    border-radius: 11px/10px;
    box-shadow: 0px 4px 4px #00000040;
    height: 20px;
    width: 22px;
}

.container-botones {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 16px;
    font-weight: bold;
    color: grey;
    padding: 80px 20%;
    justify-content: space-between;
}

.btn {
    display: flex;
    padding: 15px 70px;
    border: solid gray;
}
</style>