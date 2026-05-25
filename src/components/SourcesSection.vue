<template>
  <section id="sources" class="section">
    <div class="container">
      <p class="section-label">Bibliografía</p>
      <h2 class="section-title">Fuentes</h2>

      <div v-if="sourceGroups.length > 0" class="accordion">
        <div
          v-for="group in sourceGroups"
          :key="group.id"
          class="group"
        >
          <button
            class="group-trigger"
            :class="{ open: openIds.has(group.id) }"
            @click="toggle(group.id)"
          >
            <div class="group-meta">
              <span class="group-title">{{ group.title }}</span>
              <span class="group-count">{{ group.references.length }} referencias</span>
            </div>
            <span class="chevron">{{ openIds.has(group.id) ? '−' : '+' }}</span>
          </button>

          <div v-if="openIds.has(group.id)" class="group-body">
            <p v-if="group.references.length === 0" class="empty-note">Sin referencias aún.</p>
            <ul v-else class="ref-list">
              <li v-for="ref in group.references" :key="ref.title" class="ref-item">
                <span class="ref-author">{{ ref.author }}.</span>
                <a v-if="ref.url" :href="ref.url" target="_blank" rel="noopener noreferrer" class="ref-title linked">
                  {{ ref.title }}
                </a>
                <span v-else class="ref-title">{{ ref.title }}</span>
                <span v-if="ref.year" class="ref-year">({{ ref.year }})</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p v-else class="empty-note">Las fuentes bibliográficas se agregarán próximamente.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { sourceGroups } from '../data/sources'

const openIds = ref(new Set<string>())

function toggle(id: string) {
  if (openIds.value.has(id)) {
    openIds.value.delete(id)
  } else {
    openIds.value.add(id)
  }
}
</script>

<style scoped>
.accordion {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.group {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.group-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-5);
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: var(--font-sans);
  text-align: left;
  transition: background 0.15s ease;
}

.group-trigger:hover,
.group-trigger.open {
  background: var(--color-surface-2);
}

.group-meta {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.group-title {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text);
}

.group-count {
  font-size: var(--text-xs);
  color: var(--color-text-faint);
  background: var(--color-surface-2);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
}

.chevron {
  font-size: var(--text-base);
  color: var(--color-text-faint);
  line-height: 1;
  flex-shrink: 0;
}

.group-body {
  padding: var(--space-4) var(--space-5) var(--space-5);
  border-top: 1px solid var(--color-border-subtle);
}

.ref-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.ref-item {
  display: flex;
  flex-wrap: wrap;
  gap: 4px var(--space-2);
  align-items: baseline;
  font-size: var(--text-sm);
  line-height: 1.5;
}

.ref-author {
  color: var(--color-text-muted);
  font-weight: 500;
}

.ref-title {
  color: var(--color-text);
}

.ref-title.linked {
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.ref-year {
  color: var(--color-text-faint);
}

.empty-note {
  font-size: var(--text-sm);
  color: var(--color-text-faint);
  font-style: italic;
}
</style>
