<script lang="ts">
  import { fade, fly, slide, draw, scale } from 'svelte/transition'

  import Lists, { TheLists } from '../lists'

  export let index = 0
  export let done = 0
  let showEncourge = true

  $: if (index) done = 0
  $: percent = Math.floor((done / TheLists[index].length) * 100)
  $: encourageList = Lists.encourage[percent >= 50 ? 1 : 0]
  $: message = encourageList[randomNumber(encourageList)]

  function clickCheckbox() {
    // Hide Status Again For Transtion
    showEncourge = false
    let checked = 0
    setTimeout(() => {
      // Count How Many Tasks Are Checked
      document
        .querySelectorAll('input[type="checkbox"]')
        .forEach((e) => ((e as HTMLInputElement).checked ? checked++ : null))

      done = checked
      // Process Bar
      ;(document.querySelector('#progress') as HTMLDivElement).style.width =
        ((done / TheLists[index].length) * 100).toString() + '%'
    }, 100)

    // Show Status Again For Transtion
    setTimeout(() => {
      showEncourge = true
    }, 100)
  }

  function randomNumber(list) {
    return Math.floor(Math.random() * list.length)
  }
</script>

<div>
  <svg viewBox="0 0 0 0" style="position: absolute; z-index: -1; opacity: 0;">
    <defs>
      <path id="todo__line" class="stroke-$base-color" d="M21 12.3h168v0.1z" />
      <path
        id="todo__box"
        class="stroke-$base-color"
        d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"
      />
      <path id="todo__check" class="stroke-$base-color" d="M10 13l2 2 5-5" />
      <circle
        id="todo__circle"
        class="stroke-$base-color"
        cx="13.5"
        cy="12.5"
        r="10"
      />
    </defs>
  </svg>

  {#each TheLists as list, theindex}
    {#if index == theindex}
      <div class="todo-list" transition:slide|local>
        {#each list as item}
          <label class="todo">
            <input
              class="todo__state"
              type="checkbox"
              on:click={clickCheckbox}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 200 25"
              class="todo__icon"
            >
              <use xlink:href="#todo__line" class="todo__line" />
              <use xlink:href="#todo__box" class="todo__box" />
              <use xlink:href="#todo__check" class="todo__check" />
              <use xlink:href="#todo__circle" class="todo__circle" />
            </svg>

            <div class="todo__text">{item}</div>
          </label>
        {/each}
        <!-- Encourage User  -->
        <div
          class:opacity-100={showEncourge}
          class:scale-100={showEncourge}
          class="flex justify-center transition transform items-center flex flex-col mt-2 font-bold text-$second-color scale-0 opacity-0"
        >
          <div>{percent == 0 ? 'خط البداية' : message}</div>
          <div class="mt-2 font-bold text-$second-color ">{percent}%</div>
        </div>
      </div>
      <div
        id="progress"
        class="transition-all transform bg-$base-color h-1 w-0"
      />
    {/if}
  {/each}
</div>

<style lang="scss">
  @use "sass:math";

  $duration: 0.5s;

  .todo-list {
    display: block;
    background: #fff;
    font-size: 20px;
    width: 15em;
    max-width: 20em;
    margin: auto;
    padding: 0.5em 1em;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  }

  .todo {
    display: block;
    position: relative;
    padding: 1em 1em 1em 16%;
    margin: 0 auto;
    cursor: pointer;
    border-bottom: solid 1px #ddd;

    &:last-child {
      border-bottom: none;
    }
  }

  .todo__state {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  .todo__text {
    color: var(--second-color);
    transition: all math.div($duration, 2) linear math.div($duration, 2);
  }

  .todo__icon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    margin: auto;

    fill: none;
    stroke: var(--base-color);
    stroke-width: 2;
    stroke-linejoin: round;
    stroke-linecap: round;
  }

  .todo__line,
  .todo__box,
  .todo__check {
    transition: stroke-dashoffset $duration cubic-bezier(0.9, 0, 0.5, 1);
  }

  .todo__circle {
    stroke: var(--base-color);
    stroke-dasharray: 1 6;
    stroke-width: 0;

    transform-origin: 13.5px 12.5px;
    transform: scale(0.4) rotate(0deg);
    animation: none $duration linear; //cubic-bezier(.08,.56,.04,.98);

    @keyframes explode {
      //0% { stroke-width: 0; transform: scale(0.5) rotate(0deg); }
      30% {
        stroke-width: 3;
        stroke-opacity: 1;
        transform: scale(0.8) rotate(40deg);
        //animation-timing-function: cubic-bezier(.89,.01,.95,.51);
      }
      100% {
        stroke-width: 0;
        stroke-opacity: 0;
        transform: scale(1.1) rotate(60deg);
        //animation-timing-function: cubic-bezier(.08,.56,.04,.98);
      }
    }
  }

  .todo__box {
    stroke-dasharray: 56.1053, 56.1053;
    stroke-dashoffset: 0;
    transition-delay: $duration * 0.2;
  }
  .todo__check {
    stroke: var(--base-color);
    stroke-dasharray: 9.8995, 9.8995;
    stroke-dashoffset: 9.8995;
    transition-duration: $duration * 0.4;
  }
  .todo__line {
    stroke-dasharray: 168, 1684;
    stroke-dashoffset: 168;
  }
  .todo__circle {
    animation-delay: $duration * 0.7;
    animation-duration: $duration * 0.7;
  }

  .todo__state:checked {
    ~ .todo__text {
      transition-delay: 0s;
      color: var(--second-color);
      opacity: 0.6;
    }

    ~ .todo__icon .todo__box {
      stroke-dashoffset: 56.1053;
      transition-delay: 0s;
    }
    ~ .todo__icon .todo__line {
      stroke-dashoffset: -8;
    }
    ~ .todo__icon .todo__check {
      stroke-dashoffset: 0;
      transition-delay: $duration * 0.6;
    }
    ~ .todo__icon .todo__circle {
      animation-name: explode;
    }
  }
</style>
