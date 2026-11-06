<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../i18n'

const { t } = useLocale()
const groups = computed(() => [
  { title: t('skills.development'), skills: ['Python', 'TypeScript', 'Vue.js', 'C', 'Dart', 'PHP'] },
  { title: t('skills.web'), skills: [t('skills.webInterfaces'), 'API REST', 'Socket.IO', t('skills.webApps')] },
  { title: t('skills.data'), skills: [t('skills.localModels'), t('skills.sqlGeneration'), 'MariaDB', 'PostgreSQL'] },
  { title: t('skills.tools'), skills: ['Docker & Docker Compose', t('skills.testing'), t('skills.docs')] },
])
</script>

<template>
  <section class="page-wrap content-page skills-page">
    <header class="page-heading"><p class="eyebrow">{{ t('skills.kicker') }}</p><h1>{{ t('skills.title') }}<span class="orange">.</span></h1><p>{{ t('skills.intro') }}</p></header>
    <div class="skills-grid"><article v-for="group in groups" :key="group.title" class="skill-card"><div class="skill-card-top"><span class="skill-spark" aria-hidden="true">✳</span></div><h2>{{ group.title }}</h2><ul><li v-for="skill in group.skills" :key="skill">{{ skill }}<span>↗</span></li></ul></article></div>
    <section class="education-card"><p class="eyebrow">{{ t('skills.education') }}</p><div><h2>BUT 3 Informatique</h2><p>IUT de Calais</p></div><span class="education-mark">2026</span></section>
    <aside class="skills-note"><span class="note-icon">✳</span><p>{{ t('skills.note') }}</p></aside>
  </section>
</template>
