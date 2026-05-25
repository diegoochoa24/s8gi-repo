<template>
  <AppNavbar />
  <main>
    <section id="units" class="section-placeholder">
      <div class="container"><p>Units — próximamente</p></div>
    </section>
    <section id="documents" class="section-placeholder">
      <div class="container"><p>Documents — próximamente</p></div>
    </section>
    <section id="project" class="section-placeholder">
      <div class="container"><p>Project — próximamente</p></div>
    </section>
    <section id="sources" class="section-placeholder">
      <div class="container"><p>Sources — próximamente</p></div>
    </section>
  </main>
</template>

<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue'
</script>

<style scoped>
.section-placeholder {
  padding-block: var(--space-10);
  color: var(--color-text-faint);
  font-size: var(--text-sm);
}
</style>
