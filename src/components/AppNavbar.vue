<template>
  <nav class="navbar">
    <div class="container navbar-inner">
      <a href="#" class="logo">S8GI-REPO</a>
      <div class="links">
        <a href="#units">Unidades</a>
        <a href="#documents">Trabajos</a>
        <a href="#project">Proyecto</a>
        <a href="#sources">Fuentes</a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(20, 20, 24, 0.85);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-bottom: 1px solid var(--color-border-subtle);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
}

.logo {
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--color-accent);
}

.links {
  display: flex;
  gap: var(--space-6);
}

.links a {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-muted);
  transition: color 0.15s ease;
}

.links a:hover {
  color: var(--color-text);
}
</style>
