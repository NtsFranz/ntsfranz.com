<script>
  import { createEventDispatcher, getContext } from "svelte";
  import { TABS } from "./Tabs.svelte";

  export let isDefault = false;
  const tab = {};
  const { registerTab, selectTab, selectedTab } = getContext(TABS);

  const dispatch = createEventDispatcher();
  registerTab(tab);

  function notify() {
    dispatch("message", {
      text: "Hello!"
    });
  }

  if (isDefault) {
    selectTab(tab);
  }
</script>


<li class:is-active="{$selectedTab === tab}">
  <a href="#"  on:click="{() => selectTab(tab)}" on:click={notify}>
    <slot></slot>
  </a>
</li>