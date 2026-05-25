<template>
  <section class="hero">
    <div class="container">
      <p class="eyebrow">Diego Alejandro Ochoa Hernández</p>
      <h1 class="name">Portafolio <br>de evidencias </h1>
      <p class="course">Gestión de la innovación</p>
      <p class="description">Este sitio reúne las evidencias del trabajo académico desarrollado durante el semestre: prácticas, cuestionarios, ensayos y la documentación correspondiente al registro de propiedad intelectual del proyecto final.</p>
      <div class="meta">
        <div class="meta-row">
          <span class="meta-label">Matrícula</span>
          <span class="meta-value">1298530</span>
        </div>
        <div class="divider"></div>
        <div class="meta-row">
          <span class="meta-label">Carrera</span>
          <span class="meta-value">Ingeniería en Software y tecnologías emergentes</span>
        </div>
        <div class="divider"></div>
        <div class="meta-row">
          <span class="meta-label">Universidad</span>
          <span class="meta-value">Universidad Autónoma de Baja California</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hero {
  min-height: 70vh;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-border-subtle);
}

.eyebrow {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-faint);
  margin-bottom: var(--space-5);
}

.name {
  font-size: clamp(2.25rem, 5.5vw, var(--text-5xl));
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.025em;
  color: var(--color-text);
  margin-bottom: var(--space-4);
}

.course {
  font-size: var(--text-lg);
  font-weight: 500;
  color: var(--color-survey);
  margin-bottom: var(--space-4);
}

.description {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.7;
  max-width: 560px;
  margin-bottom: var(--space-8);
}

.meta {
  display: flex;
  align-items: flex-start;
  gap: var(--space-5);
  flex-wrap: wrap;
}

.meta-row {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.meta-label {
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--color-text-faint);
}

.meta-value {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  font-weight: 400;
}

.divider {
  width: 1px;
  height: 32px;
  background: var(--color-border);
  flex-shrink: 0;
  margin-top: 2px;
}

@media (max-width: 600px) {
  .divider {
    display: none;
  }

  .meta {
    flex-direction: column;
    gap: var(--space-4);
  }
}
</style>
