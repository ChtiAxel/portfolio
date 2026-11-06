<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useLocale, type Language } from './i18n'

const route = useRoute()
const menuOpen = ref(false)
const { locale, t } = useLocale()
const cvUrl = `${import.meta.env.BASE_URL}cv/cv_AN.pdf`
const navigationEntry = typeof performance !== 'undefined' ? performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined : undefined
const isFullPageLoad = navigationEntry?.type === 'navigate' || navigationEntry?.type === 'reload'
const introEnabled = typeof window !== 'undefined' && isFullPageLoad && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
const showIntro = ref(introEnabled)
const languageMenuOpen = ref(false)
const languagePicker = ref<HTMLElement | null>(null)
let introTimer: number | undefined
const languages = [
  { code: 'fr', name: 'Français', flag: `${import.meta.env.BASE_URL}flags/fr.svg` },
  { code: 'en', name: 'English', flag: `${import.meta.env.BASE_URL}flags/gb.svg` },
  { code: 'es', name: 'Español', flag: `${import.meta.env.BASE_URL}flags/es.svg` },
] as const
const activeLanguage = computed(() => languages.find((language) => language.code === locale.value) ?? languages[0])

function selectLanguage(language: Language) {
  locale.value = language
  languageMenuOpen.value = false
}

function closeLanguagePicker(event: PointerEvent) {
  if (event.target instanceof Node && !languagePicker.value?.contains(event.target)) {
    languageMenuOpen.value = false
  }
}

watch(() => route.fullPath, () => { menuOpen.value = false })
onMounted(() => {
  document.addEventListener('pointerdown', closeLanguagePicker)
  if (introEnabled) introTimer = window.setTimeout(() => { showIntro.value = false }, 1350)
})
onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', closeLanguagePicker)
  window.clearTimeout(introTimer)
})
watchEffect(() => {
  document.documentElement.lang = locale.value
  const titleKey = String(route.meta.titleKey ?? 'nav.home')
  document.title = `${t(titleKey)} — Axel Nave`
})
</script>

<template>
  <div class="site-shell" :class="{ 'site-shell-intro': introEnabled }">
    <div v-if="showIntro" class="site-intro-overlay" aria-hidden="true"><span class="site-intro-logo">AN<span>.</span></span></div>
    <a class="skip-link" href="#contenu">{{ t('app.skip') }}</a>
    <header class="site-header">
      <div class="header-brand-group">
        <RouterLink class="brand" to="/" aria-label="Axel Nave — accueil">AN<span>.</span></RouterLink>
        <div ref="languagePicker" class="language-picker" @keydown.esc.stop.prevent="languageMenuOpen = false">
          <button class="language-trigger" type="button" :aria-label="`${t('language.label')}: ${activeLanguage.name}`" aria-haspopup="menu" :aria-expanded="languageMenuOpen" @click="languageMenuOpen = !languageMenuOpen">
            <img class="language-flag" :src="activeLanguage.flag" alt="" aria-hidden="true" />
            <span>{{ activeLanguage.name }}</span><span class="language-caret" aria-hidden="true"></span>
          </button>
          <div v-if="languageMenuOpen" class="language-menu" role="menu" :aria-label="t('language.label')">
            <button v-for="language in languages" :key="language.code" class="language-option" type="button" role="menuitemradio" :aria-checked="locale === language.code" @click="selectLanguage(language.code)">
              <img class="language-flag" :src="language.flag" alt="" aria-hidden="true" /><span>{{ language.name }}</span>
            </button>
          </div>
        </div>
        <a class="header-cv" :href="cvUrl" download="cv_AN.pdf" :aria-label="t('cv.download')" :title="t('cv.download')"><span class="header-cv-full">{{ t('cv.download') }}</span><span class="header-cv-short">{{ t('cv.short') }}</span><span aria-hidden="true">↓</span></a>
      </div>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="main-navigation" @click="menuOpen = !menuOpen">
        <span>{{ menuOpen ? t('nav.close') : t('nav.menu') }}</span><span class="menu-icon" aria-hidden="true">{{ menuOpen ? '×' : '☰' }}</span>
      </button>
      <nav id="main-navigation" class="main-navigation" :class="{ 'is-open': menuOpen }" :aria-label="t('nav.aria')">
        <RouterLink to="/" exact-active-class="is-active">{{ t('nav.home') }}</RouterLink>
        <RouterLink to="/projets" active-class="is-active">{{ t('nav.projects') }}</RouterLink>
        <RouterLink to="/competences" active-class="is-active">{{ t('nav.skills') }}</RouterLink>
        <RouterLink class="nav-cta" to="/contact" active-class="is-active">{{ t('nav.contact') }} <span aria-hidden="true">↗</span></RouterLink>
      </nav>
    </header>

    <main id="contenu" tabindex="-1">
      <RouterView />
    </main>

    <footer class="site-footer">
      <div class="footer-main">
        <RouterLink class="brand footer-brand" to="/">AN<span>.</span></RouterLink>
        <p>{{ t('footer.intro') }}<br />{{ t('footer.made') }}</p>
        <RouterLink class="footer-contact" to="/contact">{{ t('footer.pitch') }} <span>{{ t('footer.cta') }} ↗</span></RouterLink>
      </div>
      <div class="footer-bottom">
        <span>© {{ new Date().getFullYear() }} Axel Nave · {{ t('footer.rights') }}</span>
        <div class="footer-links"><a href="confidentialite.html">{{ t('footer.privacy') }}</a><a href="mentions-legales.html">{{ t('footer.legal') }}</a></div>
      </div>
    </footer>
  </div>
</template>
