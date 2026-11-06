<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useLocale } from '../i18n'

const { t } = useLocale()
const contacts = computed(() => [
  { label: 'E-mail', value: 'axelnave.pro@gmail.com', href: 'mailto:axelnave.pro@gmail.com', note: t('contact.emailNote') },
  { label: 'GitHub', value: 'github.com/ChtiAxel', href: 'https://github.com/ChtiAxel', note: t('contact.githubNote') },
  { label: 'LinkedIn', value: 'Axel Nave', href: 'https://www.linkedin.com/in/axel-nave-13baa03a4/', note: t('contact.linkedinNote') },
  { label: 'Discord', value: 'aelx59_', href: 'https://discord.com/app', note: t('contact.discordNote') },
])
</script>

<template>
  <section class="page-wrap content-page contact-page">
    <header class="page-heading"><p class="eyebrow">{{ t('contact.kicker') }}</p><h1>{{ t('contact.title') }}<br /><span class="serif">{{ t('contact.title2') }}</span></h1><p>{{ t('contact.intro') }}</p></header>
    <div class="contact-layout"><div class="contact-intro"><span class="availability-dot"></span><p>{{ t('contact.available') }}</p><a class="button button-dark" href="mailto:axelnave.pro@gmail.com">{{ t('contact.emailCta') }} <span>↗</span></a></div><div class="contact-list"><a v-for="contact in contacts" :key="contact.label" class="contact-row" :href="contact.href" target="_blank" rel="noopener noreferrer"><span class="contact-text"><span class="contact-label">{{ contact.label }}</span><strong>{{ contact.value }}</strong><small>{{ contact.note }}</small></span><span class="contact-arrow">↗</span></a><RouterLink class="contact-row cv-contact-row" to="/cv"><span class="contact-text"><span class="contact-label">{{ t('cv.cardLabel') }}</span><strong>{{ t('cv.contactTitle') }}</strong><small>{{ t('cv.contactNote') }}</small></span><span class="contact-arrow" aria-hidden="true">↗</span></RouterLink></div></div>
  </section>
</template>
