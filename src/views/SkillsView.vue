<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useLocale } from '../i18n'

const { t } = useLocale()

const stacks = computed(() => [
  { title: t('skills.webTitle'), text: t('skills.webText'), technologies: ['Vue 3', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Vite'] },
  { title: t('skills.appTitle'), text: t('skills.appText'), technologies: ['Python', 'PHP', 'C / C++', 'Dart', 'API REST', 'Socket.IO'] },
  { title: t('skills.dataTitle'), text: t('skills.dataText'), technologies: ['SQL', 'MariaDB', 'PostgreSQL', 'Ollama'] },
  { title: t('skills.toolsTitle'), text: t('skills.toolsText'), technologies: ['Git', 'GitHub', 'Docker Compose', 'Pytest', 'MkDocs'] },
])
</script>

<template>
  <section class="page-wrap content-page skills-page">
    <header class="skills-hero">
      <div class="skills-hero-copy">
        <p class="eyebrow">{{ t('skills.kicker') }}</p>
        <h1>{{ t('skills.title') }}<span class="orange">.</span></h1>
        <p class="skills-hero-intro">{{ t('skills.intro') }}</p>
      </div>
      <aside class="skills-signature-card">
        <span class="skills-signature-orbit" aria-hidden="true"></span>
        <p class="eyebrow">{{ t('skills.mottoLabel') }}</p>
        <p class="skills-signature-quote">{{ t('skills.motto') }}</p>
        <RouterLink to="/projets" class="skills-project-link">{{ t('skills.projectLink') }} <span aria-hidden="true">↗</span></RouterLink>
      </aside>
    </header>

    <section class="skills-stack-section" aria-labelledby="stack-heading">
      <div class="skills-section-heading skills-stack-heading">
        <p class="eyebrow">{{ t('skills.stackKicker') }}</p>
        <h2 id="stack-heading">{{ t('skills.stackHeading') }}</h2>
      </div>
      <div class="skills-stack-grid">
        <article v-for="(group, index) in stacks" :key="group.title" class="skills-stack-card" :class="`skills-stack-card-${index + 1}`">
          <span class="skills-stack-index">{{ ['WEB', 'APP', 'DATA', 'TOOLS'][index] }}</span>
          <h3>{{ group.title }}</h3>
          <p>{{ group.text }}</p>
          <ul class="skills-tags" :aria-label="group.title">
            <li v-for="technology in group.technologies" :key="technology">{{ technology }}</li>
          </ul>
        </article>
      </div>
    </section>
  </section>
</template>

