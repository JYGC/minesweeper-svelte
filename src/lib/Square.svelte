<script lang="ts">
  import type { ISquareState } from "./types";

  export let squareState: ISquareState;
  export let onClick: () => void;
  export let onContextMenu: () => void;

  let symbol;

  $: {
    symbol = (squareState.noOfMinesAround > 0) ? squareState.noOfMinesAround.toString() : "0";

    if (squareState.hasMine) symbol = "(*)";
    if (!squareState.digged) {
      switch(squareState.flag) {
        case 1:
          symbol = "X";
          break;
        case 2:
          symbol = "?";
          break;
        default:
          symbol = "_";
      }
    }
  }

  const buttonContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    onContextMenu();
  };
</script>

<button class="square {squareState.mineExploded ? 'exploded' : ''}"
    disabled={squareState.digged}
    on:click={onClick}
    on:contextmenu={(e) => buttonContextMenu(e)}>
  { symbol }
</button>

<style>
  .exploded {
    background-color: darkred
  }

  .square {
    width: 50px;
    height: 50px;
    display: inline-block;
    margin: 0;
    padding: 0;
    border-radius: 0;
    font-size: calc(10px + 2vmin);
  }
</style>