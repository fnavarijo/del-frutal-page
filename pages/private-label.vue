<template>
  <div class="pt-12">
    <AppSection bg-color="white">
      <header class="md:mb-8 xl:mb-0">
        <h1 class="text-3xl md:text-5xl font-thin text-dark-blue-700">
          Servicios de Maquila y Desarrollo de Productos
        </h1>
      </header>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="flex items-center justify-center">
          <img class="w-full" src="~assets/img/private-label.png" alt="" />
        </div>
        <p class="flex items-center text-justify">
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
        <h2 class="text-3xl font-thin text-dark-blue-700 text-justify">
          Servicios Integrales
        </h2>
        <p>
          Nos encargamos del diseño de etiquetas, registros sanitarios, temas
          legales en Guatemala, formulación, fabricación, envasado, etiquetado,
          sellado y acondicionamiento del producto.
        </p>
      </div>
    </AppSection>
    <AppSection class="min-h-screen-1/3 text-white" justify="start">
      <header class="mb-8">
        <h2 class="text-3xl font-light">Beneficios</h2>
      </header>
      <ol class="benefits-list text-lg space-y-4">
        <li class="mb-3 benefits-list__item">
          Altos estándares de calidad de los productos.
        </li>
        <li class="my-3 benefits-list__item">
          Plantas con diversas certificaciones
        </li>
        <li class="my-3 benefits-list__item">
          Experiencia de más de 10 años en elaboración de marcas privadas a
          través de maquilas
        </li>
        <li class="my-3 benefits-list__item">
          Disponibilidad a exportar a cualquiera de las dos costas según
          conveniencia del cliente.
        </li>
        <li class="my-3 benefits-list__item">
          Acompañamiento en la gestión de exportación ante aduana y SAT
        </li>
        <li class="my-3 benefits-list__item">
          Experiencia en coordinación de cargas con la mayoría de navieras en el
          país
        </li>
        <li class="my-3 benefits-list__item">
          Servicio completo y acompañamiento 100%
        </li>
      </ol>
    </AppSection>
    <AppSection>
      <header class="mb-4">
        <h2 class="text-3xl font-thin text-white">Más Información</h2>
      </header>
      <form class="w-full">
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
            <option value="GT">Estados Unidos</option>
            <option value="SV">México</option>
            <option value="US">Puerto Rico</option>
            <option value="US">Cuba</option>
            <option value="US">República Dominicana</option>
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
  content: counter(benefits-item) '.';

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
