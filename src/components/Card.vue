<template>
  <div class="min-h-screen flex flex-col justify-center mx-auto sm:py-12">
    <div class="">
      <div
        class="
          h-auto
          py-4
          px-4
          lg:py-10 lg:px-10 lg:w2/3
          w-11/12
          mx-auto
          bg-opacity-75 bg-white
          flex flex-col
          rounded-2xl
          shadow-xl
          hover:rotate-1
          transition-transform
        "
      >
        <h2
          class="
            font-lato
            tracking-wide
            text-base
            sm:text-base
            md:text-2xl
            text-black
          "
        >
          The
          <strong class="text-blood font-pirata">Rising Skulls</strong> NFT,
          simply unable to rest easy, they're back from the dead, roaming the
          blockchain to seek riches and revenge! Come join our ranks in the
          hallowed grounds of our boneyard! <br /><br />
          <ul>
            <li>
              <strong
                ><fa-icon :icon="['fas', 'skull']" class="text-blood" /> Only
                <span class="underline">4000</span>
                <span>&nbsp;</span>
                <span class="text-blood font-pirata">Rising Skulls</span>
              </strong>
            </li>
            <li>
              <strong
                ><fa-icon :icon="['fas', 'magic']" class="text-blood" /> Earn
                <span class="text-blood font-pirata">$SKULLS</span></strong
              >
            </li>
            <li>
              <strong>
                <fa-icon :icon="['fas', 'flask']" class="text-blood" />
                Resurrection Mechanics</strong
              >
            </li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;…and much more to come!</li>
          </ul>
          <br />
          <p>
            Join our Discord community
            <a
              href="https://discord.gg/cFkxhb3qhx"
              target="_blank"
              class="text-blood hover:text-black"
              ><fa-icon :icon="['fab', 'discord']"
            /></a>
            and follow us on Twitter
            <a
              href="https://twitter.com/RisingSkullsNFT"
              target="_blank"
              class="text-blood hover:text-black"
              ><fa-icon :icon="['fab', 'twitter']"
            /></a>
          </p>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      content: "Rising Skulls",
    };
  },
};
</script>
