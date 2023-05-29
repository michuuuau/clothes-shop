<script setup>
import Button from "../components/Button.vue";
import { useCartStore } from "../stores/cart";
import { ref } from "vue";

const cartStore = useCartStore();

const popupVisible = ref(false);
const imgVisible = ref(false);

const togglePopup = () => {
    popupVisible.value = !popupVisible.value;
};
const toggleImage = () => {
    imgVisible.value = !imgVisible.value;
};

const showImg = () => {
    toggleImage();
}


const reset = () => {
    popupVisible.value = false;
    imgVisible.value = false;


}
function deleteHandle(product) {
    cartStore.removeProductFromCart(product);
}
function incrementHandle(product) {
    cartStore.incrementProductQuantity(product);
}
function decrementHandle(product) {
    cartStore.decrementProductQuantity(product);
}
</script>
<template>
    <div>
        <div class="products">
            <div v-for="product in cartStore.cartItems">
                <p>{{ product.name }}</p>
                <div style="display: flex">
                    <p style="margin-right: 20px;">{{ product.quantity }}</p>
                    <Button @click="incrementHandle(product.id)">
                        <template #body>
                            <p>+</p>
                        </template></Button>
                    <Button @click="decrementHandle(product.id)">
                        <template #body>
                            <p>-</p>
                        </template></Button>
                    <p>{{ product.price }}</p>
                    <Button @click="deleteHandle(product.id)">
                        <template #body>
                            <p>USUŃ</p>
                        </template></Button>
                </div>
            </div>
            
            <hr />
        </div>
        <div class="summary">
            <p>Suma:
                {{ cartStore.cartTotal }}</p>
        </div>
    </div>
    <hr>
    <div class="buy">
        <Button>
            <template #body>
                <p @click="togglePopup">KUP TERAZ</p>
            </template>
        </Button>
    </div>
    <div v-if="popupVisible" class="popup">
        <div class="popup-content">
            <div v-if="!imgVisible">
                <label for="fname">Wybierz metodę płatności: </label>
                <p></p>
                <!-- <input type="text" id="fname" name="fname"><br><br>
                <p>
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="fname"><br><br>
                </p> -->

                <input type="checkbox" id="karta" value="Karta" v-model="checkedNames"> <label for="karta">Karta</label>
                <p>
                    <input type="checkbox" id="gotówka" value="Gotówka" v-model="checkedNames"> <label
                        for="gotówka">Gotówka</label>
                </p>
                <input type="checkbox" id="PayU" value="PayU" v-model="checkedNames"> <label for="PayU">PayU</label>
                <p>
                    <br>
                    <input type="radio" id="one" value="One" v-model="picked" /><label for="one"> Przeczytałem/am oraz
                        akceptuję regulamin.</label>
                </p>
                <br>

                <h2>Do zapłaty: {{ cartStore.cartTotal }}</h2>

                <Button>
                    <template #body>
                        <p @click="showImg">Zapłać</p>
                    </template>
                </Button>
            </div>
            <div v-if="imgVisible" class="final">
                <img @click="reset" alt="correct" class="correct" src="@/assets/correct.png" width="90" height="90" />
                <p>
                    <label for="fname">Zamówienie zostało przyjęte do realizacji. </label>
                <p><br>
                    <label for="fname">Status płatności: ZAKOŃCZONA </label>
                </p><br>
                <br>
                <label for="fname">W ciągu paru minut na wskazany adres email otrzymają Państwo potwierdzenie złożenia
                    zamówienia oraz jego aktualny status. </label>
                <br>
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.products>* {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1
}

.summary {
    display: flex;
    justify-content: flex-end;
    flex: 1
}

.buy {
    display: flex;
    justify-content: flex-end;
    flex: 1
}

.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-content {
    background-color: white;
    padding: 100px;
    border-radius: 5px;
}

.final {
    font-size: 20px;
    text-align: center;
    font-style: oblique;
}
</style>