<script>
  import MainHeader from './components/MainHeader.vue'
  import AboutSection from './components/AboutSection.vue'
  import SkillsSection from './components/SkillsSection.vue'
  import ProjectsSection from './components/ProjectsSection.vue'
  import ContactsSection from './components/ContactsSection.vue'
  import MainFooter from './components/MainFooter.vue'
  import ExperienceSection from './components/ExperienceSection.vue'

  export default {
    components: {
      MainHeader,
      AboutSection,
      SkillsSection,
      ProjectsSection,
      ContactsSection,
      MainFooter,
      ExperienceSection
    }
  }
</script>

<template>
  <div class="page">
    <MainHeader />

    <main>
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactsSection />
    </main>

    <MainFooter />
  </div>
</template>

<style scoped>
</style>
