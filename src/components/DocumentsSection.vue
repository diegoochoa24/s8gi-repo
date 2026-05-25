<template>
  <section id="documents" class="section">
    <div class="container">
      <p class="section-label">Actividades realizadas</p>
      <h2 class="section-title">Trabajos</h2>

      <div class="filters">
        <button
          v-for="f in filters"
          :key="f.value"
          class="filter-btn"
          :class="{ active: activeFilter === f.value }"
          :data-filter="f.value"
          @click="activeFilter = f.value"
        >
          {{ f.label }}
        </button>
      </div>

      <div class="grid">
        <a
          v-for="doc in filtered"
          :key="doc.id"
          :href="doc.path"
          target="_blank"
          rel="noopener noreferrer"
          class="card"
        >
          <div class="card-top">
            <span class="badge" :data-category="doc.category">{{ categoryLabel[doc.category] }}</span>
            <span class="unit-tag">Unidad {{ doc.unit }}</span>
          </div>
          <h3 class="card-title">{{ doc.title }}</h3>
          <p class="card-subtitle">{{ doc.subtitle }}</p>
          <div class="card-footer">
            <span class="open-hint">Abrir PDF ↗</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { documents, type DocumentCategory } from '../data/documents'

type FilterValue = DocumentCategory | 'all'

const filters: { label: string; value: FilterValue }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Cuestionarios', value: 'survey' },
  { label: 'Prácticas', value: 'practical' },
  { label: 'Ensayos', value: 'essay' },
]

const categoryLabel: Record<DocumentCategory, string> = {
  survey: 'Cuestionario',
  practical: 'Práctica',
  essay: 'Ensayo',
}

const activeFilter = ref<FilterValue>('all')

const filtered = computed(() =>
  activeFilter.value === 'all'
    ? documents
    : documents.filter(d => d.category === activeFilter.value),
)
</script>

<style scoped>
.filters {
  display: flex;
  gap: var(--space-2);
  margin-bottom: var(--space-6);
  flex-wrap: wrap;
}

.filter-btn {
  padding: 6px var(--space-4);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-text-muted);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.filter-btn:hover {
  background: var(--color-surface-2);
  color: var(--color-text);
}

.filter-btn[data-filter='all'].active {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

.filter-btn[data-filter='survey'].active {
  background: var(--color-survey-bg);
  border-color: var(--color-survey);
  color: var(--color-survey);
}

.filter-btn[data-filter='practical'].active {
  background: var(--color-practical-bg);
  border-color: var(--color-practical);
  color: var(--color-practical);
}

.filter-btn[data-filter='essay'].active {
  background: var(--color-essay-bg);
  border-color: var(--color-essay);
  color: var(--color-essay);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(248px, 1fr));
  gap: var(--space-3);
}

.card {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  transition: background 0.15s ease, transform 0.15s ease;
}

.card:hover {
  background: var(--color-surface-2);
  transform: translateY(-1px);
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-1);
}

.badge {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 2px 8px;
  border-radius: var(--radius-sm);
}

.badge[data-category='survey'] {
  color: var(--color-survey);
  background: var(--color-survey-bg);
}

.badge[data-category='practical'] {
  color: var(--color-practical);
  background: var(--color-practical-bg);
}

.badge[data-category='essay'] {
  color: var(--color-essay);
  background: var(--color-essay-bg);
}

.unit-tag {
  font-size: var(--text-xs);
  color: var(--color-text-faint);
}

.card-title {
  font-size: var(--text-base);
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.3;
}

.card-subtitle {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.45;
  flex: 1;
}

.card-footer {
  margin-top: var(--space-3);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border-subtle);
}

.open-hint {
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--color-text-faint);
  transition: color 0.15s ease;
}

.card:hover .open-hint {
  color: #ffffff;
}
</style>
