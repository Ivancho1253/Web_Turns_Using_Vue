<script setup>
import { ref } from 'vue'

const nombre = ref('')
const telefono = ref('')
const motivo = ref('')
const fecha = ref('')

function redirigirWhatsApp() {
  const mensaje = `Hola, soy ${nombre.value}. Quisiera pedir un turno para el día ${fecha.value}. Teléfono: ${telefono.value}. Motivo: ${motivo.value}`
  const url = `https://wa.me/+5493718506983?text=${encodeURIComponent(mensaje)}`
  window.open(url, '_blank')
}
</script>

<template>
  <header>
    <div class="container">
      <h1>Reserva tu Turno Dra. Alejandra Baigorri</h1>
      <p>Elegí una fecha y completá tus datos</p>
    </div>
  </header>

  <section class="section">
    <div class="container">
      <h2>Calendario</h2>
      <input
        type="date"
        id="fecha-turno"
        v-model="fecha"
        min="2025-01-01"
        max="2025-12-31"
      />
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2>Datos del Paciente</h2>
      <form @submit.prevent="redirigirWhatsApp">
        <label for="nombre">Nombre completo:</label><br />
        <input type="text" id="nombre" v-model="nombre" required /><br /><br />

        <label for="telefono">Teléfono:</label><br />
        <input type="tel" id="telefono" v-model="telefono" required /><br /><br />

        <label for="motivo">Motivo de la consulta:</label><br />
        <textarea id="motivo" v-model="motivo" rows="4" required></textarea><br /><br />

        <input type="submit" class="boton" value="Confirmar turno por WhatsApp" />
      </form>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>&copy; 2025 Consultorio Odontológico A&D. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>
