<template>
  <section id="units" class="section">
    <div class="container">
      <p class="section-label">Contenido del curso</p>
      <h2 class="section-title">Unidades</h2>

      <div class="grid">
        <div
          v-for="unit in units"
          :key="unit.number"
          class="card"
          :data-unit="unit.number"
        >
          <div class="card-header">
            <span class="unit-tag">Unidad {{ unit.number }}</span>
            <h3 class="card-title">{{ unit.title }}</h3>
          </div>
          <ul class="topic-list">
            <li v-for="topic in unit.topics" :key="topic.number" class="topic">
              <span class="topic-number">{{ topic.number }}</span>
              <div class="topic-body">
                <span class="topic-title">{{ topic.title }}</span>
                <ul v-if="topic.subtopics" class="subtopic-list">
                  <li v-for="sub in topic.subtopics" :key="sub">{{ sub }}</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { units } from '../data/units'
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}

.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-top: 2px solid var(--unit-accent);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  transition: background 0.15s ease;
}

.card[data-unit="1"] { --unit-accent: var(--color-unit-1); }
.card[data-unit="2"] { --unit-accent: var(--color-unit-2); }
.card[data-unit="3"] { --unit-accent: var(--color-unit-3); }

.card:hover {
  background: var(--color-surface-2);
}

.card-header {
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-border-subtle);
}

.unit-tag {
  display: block;
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--unit-accent);
  margin-bottom: var(--space-2);
}

.card-title {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.25;
}

.topic-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.topic {
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  align-items: baseline;
}

.topic-number {
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--color-text-faint);
  padding-top: 1px;
}

.topic-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.topic-title {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.45;
}

.subtopic-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.subtopic-list li {
  font-size: var(--text-xs);
  color: var(--color-text-faint);
  padding-left: var(--space-3);
  position: relative;
}

.subtopic-list li::before {
  content: '–';
  position: absolute;
  left: 0;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
