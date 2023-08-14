<template>
    <form @submit.prevent="handleSubmit" class="form-new">
        <h1 class="title">Cadastro de talentos</h1>

        <div class="container">

            <div class="box-1">
                <label for="">Nome completo</label>
                <input id="name" v-model="name" />
                <label for="">Email</label>
                <input id="email" v-model="email" />
            </div>

            <div class="box-1">

                <label for="">Data de nascimiento</label>
                <input type="date" id="data-nascimiento" v-model="data_nascimiento" />
                <label for="">Whatsapp</label>
                <input id="whatsapp" v-model="whatsapp" />
            </div>

            <label for="">Area de interese</label>
            <select name="" id="area" v-model="area">
                <!-- Otra opcion en lugar del for de arriba-->
                <option value="frontend">Front-End</option>
                <option value="backend">Back-End</option>
                <option value="fullstack">Full-Stack</option>


            </select>

            <label for="">Nível profissional</label>
            <select name="" id="">
                <!-- Otra opcion en lugar del for de arriba-->
                <option v-for="item in items">{{ item }}</option>


            </select>

            <p>Selecione suas habilidades</p>
            <div v-if="area === 'frontend' || area === 'fullstack'">
                <label for=""><input type="checkbox" v-model="skills" value="HTML">HTML</label>
                <label for=""><input type="checkbox" v-model="skills" value="CSS">CSS</label>
                <label for=""><input type="checkbox" v-model="skills" value="JAVASCRIPT">JAVASCRIPT</label>
                <label for=""><input type="checkbox" v-model="skills">VUE</label>
            </div>

            <div v-if="area === 'backend' || area === 'fullstack'">
                <label for=""><input type="checkbox" v-model="skills" value="Node">Node</label>
                <label for=""><input type="checkbox" v-model="skills" value="PHP">PHP</label>
                <label for=""><input type="checkbox" v-model="skills" value="Laravel">Laravel</label>
                <label for=""><input type="checkbox" v-model="skills" value="Java">Java</label>
            </div>

            <textarea v-model="apresentation" placeholder="Digite sua carta de apresentacao"></textarea>

            <button type="submit">Cadastrar</button>

        </div>
        
    </form>
</template>

<script>
import * as yup from "yup"

export default {
    data() {
        return {
            name: "",
            email: "",
            data_nascimiento: "",
            whatsapp: "",
            area: "",
            apresentation: "",

            skills: [],
            items: ["Junior", "Pleno", "Senior", "Otro"]

        }
    },

    methods: {
        handleSubmit() {
            try {
                const schema = yup.object().shape({
                    name: yup.string().requiered("O nome é obrigatorio"),
                    email: yup.string().email("O email nao e valido").requiered("Email é obrigatorio"),
                    area: yup.string().requiered("A área é obrigatoria")

                })
                schema.validateSync({
                    name: this.name,
                    email: this.email,
                    area: thiis.area
                })
            } catch (error) {
                alert("Erro no formulario")

            }

        }
    },

    watch: {
        area(newValue, oldValue) {
            if (newValue !== oldValue)
                this.skills = []
        }

    }
}
</script>

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