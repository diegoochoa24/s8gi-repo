<template>
  <section id="sources" class="section">
    <div class="container">
      <p class="section-label">Bibliografía</p>
      <h2 class="section-title">Fuentes</h2>

      <div class="accordion">
        <div
          v-for="group in sourceGroups"
          :key="group.id"
          class="group"
          :class="{ open: openIds.has(group.id) }"
        >
          <button class="group-trigger" @click="toggle(group.id)">
            <div class="group-left">
              <span class="group-title">{{ group.title }}</span>
              <span class="group-count">{{ group.references.length }}</span>
            </div>
            <span class="chevron">{{ openIds.has(group.id) ? '−' : '+' }}</span>
          </button>

          <ol v-if="openIds.has(group.id)" class="ref-list">
            <li v-for="ref in group.references" :key="ref.title" class="ref-item">
              <div class="ref-content">
                <span class="ref-author">{{ ref.author }}.</span>
                <component
                  :is="ref.url ? 'a' : 'span'"
                  class="ref-title"
                  :class="{ linked: ref.url }"
                  v-bind="ref.url ? { href: ref.url, target: '_blank', rel: 'noopener noreferrer' } : {}"
                >{{ ref.title }}</component>
                <span v-if="ref.year" class="ref-year">({{ ref.year }})</span>
                <span v-if="ref.url" class="ref-link-icon">↗</span>
              </div>
            </li>
          </ol>
        </div>
      </div>
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
  transition: border-color 0.15s ease;
}

.group.open {
  border-color: var(--color-border);
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

.group-trigger:hover {
  background: var(--color-surface-2);
}

.group-left {
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
  font-weight: 600;
  color: var(--color-text-faint);
  background: var(--color-surface-2);
  border: 1px solid var(--color-border);
  padding: 1px 7px;
  border-radius: 999px;
  min-width: 24px;
  text-align: center;
}

.group.open .group-count {
  background: var(--color-accent-subtle);
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.chevron {
  font-size: var(--text-base);
  color: var(--color-text-faint);
  line-height: 1;
  flex-shrink: 0;
}

.ref-list {
  list-style: none;
  counter-reset: ref-counter;
  padding: 0 var(--space-5) var(--space-5);
  border-top: 1px solid var(--color-border-subtle);
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: 0;
}

.ref-item {
  counter-increment: ref-counter;
  display: flex;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--color-border-subtle);
}

.ref-item:last-child {
  border-bottom: none;
}

.ref-item::before {
  content: counter(ref-counter);
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--color-text-faint);
  min-width: 20px;
  padding-top: 1px;
  flex-shrink: 0;
}

.ref-content {
  display: flex;
  flex-wrap: wrap;
  gap: 3px var(--space-2);
  align-items: baseline;
  font-size: var(--text-sm);
  line-height: 1.55;
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
  text-underline-offset: 3px;
  text-decoration: underline;
  text-decoration-color: rgba(238, 66, 102, 0.35);
  transition: text-decoration-color 0.15s ease;
}

.ref-title.linked:hover {
  text-decoration-color: var(--color-accent);
}

.ref-year {
  color: var(--color-text-faint);
  font-size: var(--text-xs);
}

.ref-link-icon {
  font-size: var(--text-xs);
  color: var(--color-text-faint);
}
</style>
