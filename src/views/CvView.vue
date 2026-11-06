<script setup lang="ts">
import { useLocale } from '../i18n'

const { t } = useLocale()
const cvUrl = `${import.meta.env.BASE_URL}cv/cv_AN.pdf`
</script>

<template>
  <section class="page-wrap content-page cv-page">
    <header class="cv-page-heading">
      <div class="cv-heading-copy">
        <p class="eyebrow">{{ t('cv.title') }}</p>
        <h1>{{ t('cv.title') }}<span class="orange">.</span></h1>
        <p>{{ t('cv.pageIntro') }}</p>
      </div>
      <a class="button button-dark" :href="cvUrl" download="cv_AN.pdf">{{ t('cv.downloadHere') }} <span aria-hidden="true">↓</span></a>
    </header>
    <object class="cv-viewer" :data="cvUrl" type="application/pdf" :aria-label="t('cv.title')">
      <div class="cv-fallback"><p>{{ t('cv.missing') }}</p><a class="text-action" :href="cvUrl" download="cv_AN.pdf">{{ t('cv.downloadHere') }} <span aria-hidden="true">↓</span></a></div>
    </object>
    <RouterLink class="cv-backlink" to="/contact">← {{ t('cv.back') }}</RouterLink>
  </section>
</template>
