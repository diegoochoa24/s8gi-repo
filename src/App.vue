<template>
  <AppNavbar />
  <main>
    <HeroSection />
    <UnitsSection />
    <DocumentsSection />
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
import HeroSection from './components/HeroSection.vue'
import UnitsSection from './components/UnitsSection.vue'
import DocumentsSection from './components/DocumentsSection.vue'
</script>

<style scoped>
.section-placeholder {
  padding-block: var(--space-10);
  color: var(--color-text-faint);
  font-size: var(--text-sm);
}
</style>
