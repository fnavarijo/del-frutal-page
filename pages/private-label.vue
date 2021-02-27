<template>
  <div>
    <AppSection bg-color="white">
      <header class="mb-8">
        <h1 class="text-3xl md:text-5xl font-bold text-dark-blue-700">
          Servicios de Maquila y Desarrollo de Productos
        </h1>
      </header>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="flex items-center justify-center">
          <img class="w-2/3" src="~assets/img/private-label.png" alt="" />
        </div>
        <p class="flex items-center">
          Tenemos la capacidad para desarrollar marcas y productos para cubrir
          cualquier tipo de necesidad de nuestros clientes en el ramo de:
          Cerveza, Cereales, Malta, Bebidas Carbonatadas y Néctares.
          <br /><br />
          Contamos con una amplia experiencia, empezando desde la creación de la
          marca, diseño de los empaques y material de apoyo, hasta finalizar con
          la exportación del producto al país que nos soliciten.
          <br /><br />
          Lo más importante es que tenemos el respaldo y la infraestructura
          necesarios para producir en serie lotes de todos los tamaños y
          cantidades.
        </p>
      </div>
      <div>
        <h2 class="text-3xl font-bold text-dark-blue-700">
          Servicios Integrales
        </h2>
        <p>
          Nos encargamos del diseño de etiquetas, registros sanitarios, temas
          legales en Guatemala, formulación, fabricación, envasado, etiquetado,
          sellado y acondicionamiento del producto.
        </p>
      </div>
    </AppSection>
    <AppSection class="min-h-screen-1/2 text-white" justify="start">
      <header class="mb-8">
        <h2 class="text-4xl font-bold">Beneficios</h2>
      </header>
      <ol class="benefits-list">
        <li class="mb-3 benefits-list__item">
          Altos estándares de Calidad de los Productos.
        </li>
        <li class="my-3 benefits-list__item">
          Plantas con diversas certificaciones
        </li>
        <li class="my-3 benefits-list__item">
          Experiencia de X años realizando Maquilas (revisar desde cuando
          producimos Monterrey, Malta Rica)
        </li>
        <li class="my-3 benefits-list__item">
          Disponibilidad a exportar a cualquiera de las dos costas según
          conveniencia del cliente.
        </li>
        <li class="my-3 benefits-list__item">
          Acompañamiento en la gestión de Exportación ante Aduana y SAT
        </li>
        <li class="my-3 benefits-list__item">
          Experiencia en coordinación de cargas con la mayoría de Navieras en el
          país.
        </li>
        <li class="my-3 benefits-list__item">
          Servicio Full Service (llave en mano)
        </li>
      </ol>
    </AppSection>
    <AppSection>
      <header class="mb-4">
        <h2 class="text-4xl font-bold text-white">Más Información</h2>
      </header>
      <form class="w-full md:w-1/2">
        <FormInput class="mb-4" name="nombre" placeholder="Nombre:" />
        <FormInput class="mb-4" name="apellidos" placeholder="Apellidos:" />
        <FormInput class="mb-4" name="empresa" placeholder="Empresa o marca:" />
        <FormInput
          class="mb-4"
          name="correo"
          placeholder="Correo:"
          type="email"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          <FormSelect name="country" class="mb-4">
            <option value="">País</option>
            <option value="GT">Guatemala</option>
            <option value="SV">El Salvador</option>
            <option value="US">Estados Unidos</option>
          </FormSelect>
          <FormInput class="mb-4" name="telefono" placeholder="Telefono:" />
        </div>
        <FormTextArea
          name="products"
          class="mb-4"
          placeholder="¿Qué productos desea maquilar?"
        />
        <FormTextArea
          name="volumen"
          class="mb-4"
          placeholder="¿Cuál es el volumen de cajas?"
        />
        <FormTextArea
          name="meta"
          class="mb-4"
          placeholder="¿Costo meta por caja?"
        />
        <FormTextArea
          name="products"
          class="mb-4"
          placeholder="¿En cuánto tiempo espera recibir su primer pedido?"
        />
        <FormTextArea name="mensaje" class="mb-4" placeholder="Mensaje" />
        <FormButton class="mx-auto block" />
      </form>
    </AppSection>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import AppSection from '@/components/AppSection.vue';
import FormInput from '@/components/Form/FormInput.vue';
import FormTextArea from '@/components/Form/FormTextArea.vue';
import FormButton from '@/components/Form/FormButton.vue';
import FormSelect from '@/components/Form/FormSelect.vue';

export default Vue.extend({
  name: 'PrivateLabel',
  components: {
    AppSection,
    FormInput,
    FormTextArea,
    FormButton,
    FormSelect,
  },
});
</script>

<style scoped>
.benefits-list {
  counter-reset: benefits-item;
}

.benefits-list__item::before {
  counter-increment: benefits-item;
  content: counter(benefits-item);

  @apply mr-2;
}

/* stylelint-disable */
@screen md {
  .benefits-list {
    column-count: 2;
  }
}
/* stylelint-enable */
</style>
