<script setup>
import { axiosPython } from "../services/axios";
import { onMounted, reactive, ref } from "vue";

const fileWord =  ref(null);
const arrQuestion = ref([]);
const prueba = ref("");
const loading = ref(false)
const preloader = ref(null);
    
const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', fileWord.value); 

    try {
        preloader.value.style.display = 'block'
        const {data} = await axiosPython.post("/convert", formData);
        arrQuestion.value = data.data;
        arrQuestion.value.forEach(question => {
            question.selectedOption = ''; // Inicializa selectedOption en cada pregunta
            question.choices[0].choice = 'A) '+ question.choices[0].choice
            question.choices[1].choice = 'B) '+ question.choices[1].choice
            question.choices[2].choice = 'C) '+ question.choices[2].choice
            question.choices[3].choice = 'D) '+ question.choices[3].choice
            question.choices[4].choice = 'E) '+ question.choices[4].choice
        });
        console.log(arrQuestion.value);
        preloader.value.style.display = 'none'

    } catch (error) {
        console.log("Salio un error");
    } 
}
</script>

<template >

        <div ref="preloader" style="display: none;">
            <img src="./preloader.gif">
        </div>

    <v-container>
        <form >
            <h2 class="text-primary text-center mb-7">Formulario</h2>
            <h3 class="ms-10 mb-5">Inserte un Archivo</h3>
            <!-- Enlaza v-model a fileWord para obtener el archivo seleccionado -->
            <v-file-input v-model="fileWord" clearable label="File input" variant="solo"></v-file-input>
            
            <div class="conatiner-button my-1 ms-10">
                <v-btn variant="outlined btn-primary" @click="uploadFile">
                    Subir
                </v-btn>
            </div>
            <div class="ms-10 mt-4">
                <div v-for="(question,index) in  arrQuestion" :key="index">
                    <h3 class="text-left">{{ question.id_question }}</h3>
                    <p>{{ question.question }}</p>
                    <div>
                        <v-radio-group v-model="question.selectedOption">
                            <v-radio v-for="(option, optionIndex) in question.choices" :key="optionIndex" :label="option.choice" :value="option.choice">
                            </v-radio>
                        </v-radio-group>
                    </div>
                    <div>
                     
                    </div>
                </div>
            </div>
            
        </form>

   

    </v-container>


</template>

<style >
    .preloader {
    position: fixed !important; /* Fija el preloader en la ventana */
    top: 50% !important; /* Lo posiciona en la mitad superior de la ventana */
    left: 50% !important; /* Lo posiciona en la mitad izquierda de la ventana */
    transform: translate(-50%, -50%) !important; /* Centra el preloader */
    background: red !important;
}
</style>
