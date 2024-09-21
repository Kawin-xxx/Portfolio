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

    <main class="main-container">
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactsSection />
    </main>

    <MainFooter />
  </div>
</template>

<style scoped lang="scss">
.main-container {
  flex-shrink: 1;
  margin-top: 60px;
}

.page {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  grid-template-columns: 100%;
}
</style>
