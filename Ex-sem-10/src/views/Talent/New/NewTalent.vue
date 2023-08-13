<template>
    <h1 class="title">Cadastro de talentos</h1>

    <div class="container">

        <div class="box-1">
            <label for="">Nome completo</label>
            <input id="name" />
            <label for="">Email</label>
            <input id="email" />
        </div>

        <div class="box-1">

            <label for="">Data de nascimiento</label>
            <input id="data nascimiento" />
            <label for="">Whatsapp</label>
            <input id="whatsapp" />
        </div>

        <label for="">Area de interese</label>
        <select name="" id="">
            <option value="frontend">Front-End</option>
            <option value="backend">Back-End</option>
            <option value="full">Full-Stack</option>
        </select>



        <label for="">Nível profissional</label>
        <select name="" id=""></select>

        <textarea name="" id="" cols="30" rows="10" placeholder="Digite sua carta de apresentacao"></textarea>



    </div>
</template>

<style scoped>
.title {
    font-size: 32px;
    font-weight: bold;
    color: black;
    text-align: center;
    padding: 40px;
}

.container {
    margin: 0 auto;
    display: flex;
    width: 60%;
    flex-direction: column;
    font-size: 16px;
    font-weight: bold;
    color: black;
    gap: 15px;
}

.box-1 {

    display: flex;
    font-size: 16px;
    font-weight: bold;
    color: black;
    justify-content: space-between;
}
</style>