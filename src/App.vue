<template>
  <AppNavbar />
  <main>
    <HeroSection />
    <UnitsSection />
    <DocumentsSection />
    <ProjectSection />
    <SourcesSection />
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import UnitsSection from './components/UnitsSection.vue'
import DocumentsSection from './components/DocumentsSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import SourcesSection from './components/SourcesSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>
