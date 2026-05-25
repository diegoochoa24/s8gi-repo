<template>
  <section id="project" class="section">
    <div class="container">
      <p class="section-label">Registro de propiedad intelectual</p>
      <h2 class="section-title">Proyecto</h2>

      <div class="main-card">
        <h3 class="project-name">{{ project.name }}</h3>
        <p class="project-description">{{ project.description }}</p>
      </div>

      <div class="info-grid">
        <div
          v-for="detail in project.registration"
          :key="detail.label"
          class="info-card"
        >
          <span class="info-label">{{ detail.label }}</span>
          <span class="info-value">{{ detail.value }}</span>
        </div>
      </div>

      <div v-if="project.documents.length > 0" class="doc-list">
        <a
          v-for="doc in project.documents"
          :key="doc.title"
          :href="doc.path"
          target="_blank"
          rel="noopener noreferrer"
          class="doc-row"
        >
          <span class="doc-row-title">{{ doc.title }}</span>
          <span class="doc-row-hint">Abrir PDF ↗</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { project } from '../data/project'
</script>

<style scoped>
.main-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-top: 2px solid var(--color-accent);
  border-radius: var(--radius-xl);
  padding: var(--space-7);
  margin-bottom: var(--space-4);
}

.project-name {
  font-size: var(--text-3xl);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-text);
  margin-bottom: var(--space-4);
}

.project-description {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.75;
  max-width: 640px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.info-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-top: 2px solid var(--card-accent);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.info-card:nth-child(1) { --card-accent: var(--color-survey); }
.info-card:nth-child(2) { --card-accent: var(--color-essay); }
.info-card:nth-child(3) { --card-accent: var(--color-practical); }

.info-label {
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--card-accent);
}

.info-value {
  font-size: var(--text-sm);
  color: var(--color-text);
  font-weight: 500;
  line-height: 1.5;
}

.doc-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.doc-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-5);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: background 0.15s ease, border-color 0.15s ease;
}

.doc-row:hover {
  background: var(--color-surface-2);
  border-color: var(--color-accent);
}

.doc-row-title {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text);
}

.doc-row-hint {
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--color-text-faint);
  transition: color 0.15s ease;
}

.doc-row:hover .doc-row-hint {
  color: #ffffff;
}

@media (max-width: 640px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
