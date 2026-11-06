<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../i18n'

const { t } = useLocale()
const assetsBase = import.meta.env.BASE_URL
const projects = computed(() => [
  { name: 'NaturSQL', subtitle: t('projects.natur.subtitle'), description: t('projects.natur.description'), alt: t('projects.natur.alt'), tags: ['Python', 'Gradio', 'Ollama', 'MariaDB'], className: 'project-green', href: 'https://github.com/ChtiAxel/appli_intelligente', image: `${assetsBase}images/projects/natursql.jpg`, photoPage: 'https://unsplash.com/photos/person-coding-on-laptop-workspace-UcYBL5V0xWQ', photographer: 'Nubelson Fernandes' },
  { name: 'Pokémon TCG SPA', subtitle: t('projects.pokemon.subtitle'), description: t('projects.pokemon.description'), alt: t('projects.pokemon.alt'), tags: ['Vue 3', 'TypeScript', 'API REST', 'Socket.IO'], className: 'project-orange', href: 'https://github.com/ChtiAxel/pokemon_vue', image: `${assetsBase}images/projects/pokemon-tcg.jpg`, photoPage: 'https://unsplash.com/photos/board-game-with-pieces-and-cards-on-blue-table-sBc6WsEQJ6M', photographer: 'Katie Mont' },
  { name: 'SAE Socket', subtitle: t('projects.socket.subtitle'), description: t('projects.socket.description'), alt: t('projects.socket.alt'), tags: ['C', 'Réseau', 'Sockets'], className: 'project-lilac', href: 'https://github.com/ChtiAxel/sae_socket', image: `${assetsBase}images/projects/sae-socket.jpg`, photoPage: 'https://unsplash.com/photos/server-room-with-network-cabinets-aWslrFhs1w4', photographer: 'Taylor Vick' },
  { name: 'SAE Graphe IHM', subtitle: t('projects.graph.subtitle'), description: t('projects.graph.description'), alt: t('projects.graph.alt'), tags: ['Python', 'Graphes', 'IHM'], className: 'project-blue', href: 'https://github.com/ChtiAxel/SAE_GRAPHE_IHM', image: `${assetsBase}images/projects/sae-graphe.jpg`, photoPage: 'https://unsplash.com/photos/an-abstract-image-of-a-network-of-dots-s5C_4tMY8fA', photographer: 'BoliviaInteligente' },
])
</script>

<template>
  <section class="page-wrap content-page projects-page">
    <header class="page-heading"><p class="eyebrow">{{ t('projects.kicker') }}</p><h1>{{ t('projects.title') }}<span class="orange">.</span></h1><p>{{ t('projects.intro') }}</p></header>
    <div class="project-list">
      <article v-for="project in projects" :key="project.name" class="project-row">
        <a class="project-cover" :class="project.className" :href="project.href" target="_blank" rel="noopener noreferrer" :aria-label="t('projects.open', { name: project.name })"><img class="project-image" :src="project.image" :alt="project.alt" loading="lazy" /><span class="cover-mark">{{ project.name }}</span><span class="cover-arrow" aria-hidden="true">↗</span></a>
        <div class="project-details"><div class="project-title"><div><p class="project-subtitle">{{ project.subtitle }}</p><h2>{{ project.name }}</h2></div></div><p class="project-description">{{ project.description }}</p><p class="image-credit">{{ t('projects.photoCredit') }} <a :href="project.photoPage" target="_blank" rel="noopener noreferrer">{{ project.photographer }} · Unsplash ↗</a></p><ul class="tag-list"><li v-for="tag in project.tags" :key="tag">{{ tag }}</li></ul><a class="project-link" :href="project.href" target="_blank" rel="noopener noreferrer">{{ t('projects.github') }} <span>↗</span></a></div>
      </article>
    </div>
    <div class="more-projects"><span>{{ t('projects.more') }}</span><a href="https://github.com/ChtiAxel?tab=repositories" target="_blank" rel="noopener noreferrer">{{ t('projects.all') }} ↗</a></div>
  </section>
</template>
