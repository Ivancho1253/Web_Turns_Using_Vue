<script setup>

import draAlejandra from './components/icons/pictureDra.Alejandra.jpeg'
import draDaniela from './components/icons/pictureDra.Daniela.jpeg'

const servicios = [
  { icono: "fas fa-tooth", titulo: "Consultas generales", descripcion: "Diagnóstico completo para tu salud bucal." },
  { icono: "fas fa-teeth-open", titulo: "Ortodoncia", descripcion: "Brackets, alineadores y corrección dental." },
  { icono: "fas fa-smile-beam", titulo: "Blanqueamiento", descripcion: "Sonríe con más confianza y luminosidad." },
  { icono: "fas fa-syringe", titulo: "Implantes", descripcion: "Reemplazo de piezas dentales con tecnología avanzada." },
  { icono: "fas fa-brush", titulo: "Limpieza profesional", descripcion: "Eliminación de placa y sarro." },
  { icono: "fas fa-x-ray", titulo: "Endodoncia", descripcion: "Tratamiento de conducto dental." },
  { icono: "fas fa-teeth", titulo: "Prótesis dentales", descripcion: "Reemplazo funcional y estético." },
  { icono: "fas fa-child", titulo: "Odontopediatría", descripcion: "Atención dental infantil." }
]

function abrirTurno(nombre) {
  const url = nombre === 'Alejandra' ? 'turnosA.html' : 'turnosD.html'
  window.open(url, '_blank')
}
</script>

<template>
  <header>
    <div class="container">
      <h1>Consultorio Odontológico A&D</h1>
      <p>Atención profesional para tu salud bucal</p>
      <p><i class="fas fa-map-marker-alt"></i> Clorinda, Formosa, Argentina</p>
    </div>
  </header>

  <nav>
    <ul>
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#servicios">Servicios</a></li>
      <li><a href="#profesionales">Profesionales</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>

  <section id="inicio" class="section">
    <div class="container">
      <h2>Bienvenidos al Sistema de Turnos del Consultorio Odontológico A&D</h2>
      <p>Nos dedicamos al cuidado integral de tu sonrisa. ¡Pedí tu turno y te esperamos!</p>
    </div>
  </section>

  <section id="servicios" class="section">
    <div class="container">
      <h2>Servicios ofrecidos</h2>
      <div class="servicios-grid">
        <div class="servicio-card" v-for="(servicio, i) in servicios" :key="i">
          <i :class="servicio.icono"></i>
          <h3>{{ servicio.titulo }}</h3>
          <p>{{ servicio.descripcion }}</p>
        </div>
      </div>
    </div>
  </section>

  <section id="profesionales" class="section">
    <div class="container profesionales">
      <h2>Profesionales</h2>
      <p>Nuestro equipo de profesionales altamente capacitados y especializados en todas las áreas de la odontología.</p>
      <div class="servicio-card">
        <h3>Dra. Maria Alejandra Baigorri</h3>
        <img class="imagen" :src="draAlejandra" alt="Foto Dra. Alejandra">
      </div>
      <div class="servicio-card">
        <h3>Dra. Daniela Andrea Cabrera</h3>
        <img class="imagen" :src="draDaniela" alt="Foto Dra. Daniela">
      </div>
    </div>
  </section>

  <section id="contacto" class="section">
    <div class="container">
      <h2>Contacto</h2>
      <p><i class="fas fa-map-marker-alt"></i> Dirección: Sarmiento 1253, Clorinda, Formosa</p>
      <p><i class="fas fa-clock"></i> Horario: Lunes a Viernes de 9hs a 12hs y de 16hs a 20hs</p>
      <button class="boton boton-grande" @click="abrirTurno('Alejandra')">Turno Dra. Alejandra</button>
      <button class="boton boton-grande" @click="abrirTurno('Daniela')">Turno Dra. Daniela</button>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>&copy; 2025 Consultorio Odontológico A&D. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>
