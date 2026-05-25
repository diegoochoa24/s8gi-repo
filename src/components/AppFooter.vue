<template>
  <footer class="footer">
    <div class="container footer-inner">
      <span class="footer-name">Diego Alejandro Ochoa Hernández</span>
      <span class="footer-divider">·</span>
      <span class="footer-course">Gestión de la innovación</span>
      <span class="footer-divider">·</span>
      <span class="footer-uni">UABC 2026</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border-subtle);
  padding-block: var(--space-6);
}

.footer-inner {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.footer-name {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-muted);
}

.footer-divider {
  color: var(--color-text-faint);
}

.footer-course,
.footer-uni {
  font-size: var(--text-sm);
  color: var(--color-text-faint);
}
</style>
