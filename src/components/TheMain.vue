<template>
  <div class="activityField max-w-xl text-center mx-auto my-16 rounded-xl py-4">
    {{ !isLoading ? (activity ? activity : "Select a category") : 'Fetching data...' }}
  </div>
  <div class="max-w-2xl w-full mx-auto flex flex-row justify-between my-16">
    <TheButton @click="getActivity('EDUCATION')" position="first"
      >EDUCATION</TheButton
    >
    <TheButton @click="getActivity('RECREATIONAL')" position="second"
      >RECREATIONAL</TheButton
    >
    <TheButton @click="getActivity('SOCIAL')" position="third"
      >SOCIAL</TheButton
    >
  </div>
  <div class="max-w-2xl mx-auto flex flex-row justify-between mb-16">
    <TheButton @click="getActivity('CHARITY')" position="first"
      >CHARITY</TheButton
    >
    <TheButton @click="getActivity('COOKING')" position="second"
      >COOKING</TheButton
    >
    <TheButton @click="getActivity('RELAXATION')" position="third"
      >RELAXATION</TheButton
    >
  </div>
  <div class="max-w-2xl mx-auto flex flex-row justify-between">
    <TheButton @click="getActivity('MUSIC')" position="first">MUSIC</TheButton>
    <TheButton @click="getActivity('BUSYWORK')" position="second"
      >BUSYWORK</TheButton
    >
    <TheButton class="random" @click="getActivity('')" position="third"
      >RANDOM</TheButton
    >
  </div>
</template>

<script lang="ts">
import ActivityService from "../scripts/ActivityService";
import activityObserver from "../scripts/ActivityObserver";
import DefaultActivityProcessingStrategy from "../scripts/DefaultActivityProcessingStrategy";
import RandomActivityFetcher from "../scripts/RandomActivityFetcher";
import SpecificActivityFetcher from "../scripts/SpecificActivityFetcher";
import ActivityFetcherDecorator from "../scripts/ActivityFetcherDecorator";
import TheButton from "./UI/TheButton.vue";

export default {
  data() {
    return {
      activityService: new ActivityService(
        new DefaultActivityProcessingStrategy()
      ),
      isLoading : false,
    };
  },
  components: {
    TheButton,
  },
  computed: {
    activity() {
      return this.activityService.getActivity();
    },
  },
  created() {
    activityObserver.subscribe(this.updateActivity);
  },
  watch: {
    activity(newValue) {
      activityObserver.notify(newValue);
    },
  },
  methods: {
    updateActivity(newValue) {
      console.log(`${newValue}`);
    },
    getActivity(newActivity) {
      this.isLoading = true;
      let fetcher;
      if (newActivity !== "") {
        fetcher = new ActivityFetcherDecorator(
          new SpecificActivityFetcher(newActivity)
        );
      } else {
        fetcher = new ActivityFetcherDecorator(new RandomActivityFetcher());
      }
      let fetchString = fetcher.fetchActivity().trim();

      fetch(fetchString)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          this.activityService.setActivity(data.activity);
          this.isLoading = false;
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    },
  },
};
</script>

<style scoped>
.activityField {
  border: 2px black solid;
  background: #000;
  color: #fff;
}
</style>
