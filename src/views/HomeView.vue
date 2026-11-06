<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useLocale } from '../i18n'

const { t } = useLocale()
</script>

<template>
  <section class="home-page page-wrap">
    <div class="home-copy">
      <h1>{{ t('home.title') }}<br />{{ t('home.title2') }} <span class="serif">Axel Nave</span><span class="orange">.</span></h1>
      <p class="home-role">{{ t('home.role') }}</p>
      <div class="home-intro-grid">
        <section class="home-intro-block">
          <p class="home-section-label">{{ t('home.profile') }}</p>
          <p class="home-description">{{ t('home.profileText') }}</p>
        </section>
        <section class="home-intro-block internship-block">
          <p class="home-section-label">{{ t('home.stage') }}</p>
          <p class="home-description">{{ t('home.stageText') }}</p>
        </section>
      </div>
      <div class="home-actions"><RouterLink class="button button-dark" to="/projets">{{ t('home.projects') }} <span>↗</span></RouterLink><RouterLink class="text-action" to="/contact">{{ t('home.contact') }} <span>→</span></RouterLink></div>
    </div>
    <div class="home-bottom"><span>{{ t('home.location') }}</span><span>PORTFOLIO · 2026</span><a href="https://github.com/ChtiAxel" target="_blank" rel="noopener noreferrer">GITHUB ↗</a></div>
  </section>
</template>
